
export interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
}
