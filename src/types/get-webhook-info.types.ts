export interface GetWebhookInfoResponseResult {
  url: string;
  has_custom_certificate: boolean;
  pending_update_count: number;
  last_error_date?: number;
  last_error_message?: string;
  max_connections?: number;
  ip_address?: string;
}

export interface GetWebhookInfoResponse {
  ok: boolean;
  result: GetWebhookInfoResponseResult;
}
