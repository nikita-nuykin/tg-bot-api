import { UpdateMessage } from './get-updates.types';

export interface SendDocumentData {
  chat_id: number;
  document: string;
}

export interface SendDocumentResponse {
  ok: boolean;
  result: UpdateMessage;
}
