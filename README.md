# tg-bot-api

## Init

```typescript
import { TelegramBotApi } from '@wagwan/tg-bot-api';

const api = new TelegramBotApi({
  token: 'secret',
  request: axios.create(),
  handleError: (error: unknown) => { throw new TelegramBotApiError({ error }) },
});
```

## Supported methods (WIP)

- getMe [(tg api docs)](https://core.telegram.org/bots/api#getme)
- getUpdates [(tg api docs)](https://core.telegram.org/bots/api#getupdates)
- setWebhook [(tg api docs)](https://core.telegram.org/bots/api#setwebhook)
- deleteWebhook [(tg api docs)](https://core.telegram.org/bots/api#deletewebhook)
- getWebhookInfo [(tg api docs)](https://core.telegram.org/bots/api#getwebhookinfo)
- sendMessage [(tg api docs)](https://core.telegram.org/bots/api#sendmessage)
