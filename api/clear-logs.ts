import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
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

    if (allKeys.length > 0) {
      await kv.del(...allKeys);
    }
    
    return res.status(200).json({ message: 'Logs cleared successfully.' });
    
  } catch (error) {
    console.error('Failed to clear logs from Vercel KV:', error);
    return res.status(500).json({ error: 'Failed to clear logs on the server.' });
  }
}