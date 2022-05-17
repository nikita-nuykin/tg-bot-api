import { ReadStream } from 'fs';
import { ChatId } from './general.types';
import { UpdateMessage } from './get-updates.types';

export interface SendDocumentData {
  chat_id: ChatId;
  document: string | ReadStream;
}

export interface SendDocumentResponse {
  ok: boolean;
  result: UpdateMessage;
}
