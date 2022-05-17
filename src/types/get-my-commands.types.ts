import { BotCommandScope } from './bot-command-scope.types';
import { BotCommand } from './general.types';

export interface GetMyCommandsData {
  scope?: BotCommandScope;
  language_code?: string;
}

export interface GetMyCommandsResponse {
  ok: boolean;
  result: BotCommand[];
}
