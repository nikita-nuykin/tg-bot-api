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
}

export enum EntityType {
  BotCommand = 'bot_command',
}
