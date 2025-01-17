export interface MessageProps {
  id: string;
  message: string;
  offset?: number;
  duration?: number;
}

export type MessageParams = Omit<MessageProps, 'id'>;
