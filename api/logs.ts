import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Message } from '../types';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    let cursor = 0;
    const allKeys: string[] = [];
    
    // Scan for all keys matching the 'log_' prefix
    do {
      const [nextCursor, keys] = await kv.scan(cursor, { match: 'log_*' });
      // The cursor returned by kv.scan is a string, so it must be converted to a number.
      cursor = Number(nextCursor);
      allKeys.push(...keys);
    } while (cursor !== 0);

    if (allKeys.length === 0) {
      return res.status(200).json({});
    }

    const logsBySession: Record<string, Message[]> = {};
    
    // Fetch all logs in parallel, deserializing JSON strings into Message objects.
    const promises = allKeys.map(key => kv.lrange<Message>(key, 0, -1));
    const allLogs = await Promise.all(promises);

    allKeys.forEach((key, index) => {
        const sessionId = key.replace('log_', '');
        logsBySession[sessionId] = allLogs[index];
    });
    
    return res.status(200).json(logsBySession);
    
  } catch (error) {
    console.error('Failed to fetch logs from Vercel KV:', error);
    return res.status(500).json({ error: 'Failed to fetch logs from the server.' });
  }
}