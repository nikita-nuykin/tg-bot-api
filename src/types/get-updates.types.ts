import { ChatType, EntityType, UpdateType } from '../constants';

export interface UpdateMessageFrom {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
}

export interface UpdateMessageChat {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  type: ChatType;
}

export interface UpdateEntity {
  offset: number;
  length: number;
  type: EntityType;
}

export interface UpdateMessage {
  message_id: number;
  from: UpdateMessageFrom;
  chat: UpdateMessageChat;
  date: number;
  text: string;
  entities?: UpdateEntity[];
}

export interface Update {
  update_id: number;
  message: UpdateMessage;
}

export interface GetUpdatesResponse {
  ok: boolean;
  result: Update[];
}

export interface GetUpdatesParams {
  offset?: number; // last update_id + 1
  limit?: number;
  allowed_updates?: UpdateType[];
}
