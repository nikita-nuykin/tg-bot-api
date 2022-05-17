import { BotCommandScope } from './bot-command-scope.types';
import { BotCommand } from './general.types';

export interface SetMyCommandsData {
  commands: BotCommand[];
  scope?: BotCommandScope;
  language_code?: string;
}

export interface SetMyCommandsResponse {
  ok: boolean;
  result: boolean;
}
