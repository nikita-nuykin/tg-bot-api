export interface DeleteWebhookData {
  drop_pending_updates: boolean;
}

export interface DeleteWebhookResponse {
  ok: boolean;
  result: boolean;
  description: string;
}
