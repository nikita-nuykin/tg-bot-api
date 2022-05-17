export enum ChatType {
  Private = 'private',
}

export enum UpdateType {
  Message = 'message',
  EditedChannelPost = 'edited_channel_post',
  CallbackQuery = 'callback_query',
}

export enum TelegramApiRoute {
  GetMe = '/getMe',

  GetUpdates = '/getUpdates',

  SetWebhook = '/setWebhook',
  DeleteWebhook = '/deleteWebhook',
  GetWebhookInfo = '/getWebhookInfo',

  SendMessage = '/sendMessage',
  SendDocument = '/sendDocument',

  SetMyCommands = '/setMyCommands',
  DeleteMyCommands = '/deleteMyCommands',
  GetMyCommands = '/getMyCommands',
}

export enum EntityType {
  BotCommand = 'bot_command',
}

export enum BotCommandScopeType {
  Default = 'default',
  AllPrivateChats = 'all_private_chats',
  AllGroupChats = 'all_group_chats',
  AllChatAdministrators = 'all_chat_administrators',
  Chat = 'chat',
  ChatAdministrators = 'chat_administrators',
  ChatMember = 'chat_member',
}
