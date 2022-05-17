import { ChatId } from './general.types';
import { UpdateMessage } from './get-updates.types';

export interface SendMessageData {
  chat_id: ChatId;
  text: string;
}

export interface SendMessageResponse {
  ok: boolean;
  result: UpdateMessage;
}
