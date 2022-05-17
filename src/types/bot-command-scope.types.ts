import { BotCommandScopeType } from '../constants';
import { ChatId } from './general.types';

export interface BotCommandScopeDefault {
  type: BotCommandScopeType.Default;
}

export interface BotCommandScopeAllPrivateChats {
  type: BotCommandScopeType.AllPrivateChats;
}

export interface BotCommandScopeAllGroupChats {
  type: BotCommandScopeType.AllGroupChats;
}

export interface BotCommandScopeAllChatAdministrators {
  type: BotCommandScopeType.AllChatAdministrators;
}

export interface BotCommandScopeChat {
  type: BotCommandScopeType.Chat;
  chat_id: ChatId;
}

export interface BotCommandScopeChatAdministrators {
  type: BotCommandScopeType.ChatAdministrators;
  chat_id: ChatId;
}

export interface BotCommandScopeChatMember {
  type: BotCommandScopeType.ChatMember;
  chat_id: ChatId;
  user_id: number;
}

export type BotCommandScope =
  | BotCommandScopeDefault
  | BotCommandScopeAllPrivateChats
  | BotCommandScopeAllGroupChats
  | BotCommandScopeAllChatAdministrators
  | BotCommandScopeChat
  | BotCommandScopeChatAdministrators
  | BotCommandScopeChatMember;
