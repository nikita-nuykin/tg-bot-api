import { BotCommandScope } from './bot-command-scope.types';

export interface DeleteMyCommandsData {
  scope?: BotCommandScope;
  language_code?: string;
}

export interface DeleteMyCommandsResponse {
  ok: boolean;
  result: boolean;
}
