import { UpdateType } from '../constants';

export interface SetWebhookBody {
  url: string;
  certificate?: string;
  ip_address?: string;
  max_connections?: string;
  allowed_updates?: UpdateType[];
  drop_pending_updates?: boolean;
}

export interface SetWebhookResponse {
  ok: boolean;
  result: boolean;
  description: string;
}
