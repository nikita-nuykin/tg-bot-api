import { UpdateMessage } from './get-updates.types';

export interface SendMessageData {
  chat_id: number;
  text: string;
}

export interface SendMessageResponse {
  ok: boolean;
  result: UpdateMessage;
}
