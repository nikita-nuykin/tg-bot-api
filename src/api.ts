import { Axios, AxiosResponse } from 'axios';
import FormData from 'form-data';
import { TelegramApiRoute } from './constants';
import {
  DeleteWebhookData,
  DeleteWebhookResponse,
  GetMeResponse,
  GetUpdatesParams,
  GetUpdatesResponse,
  GetWebhookInfoResponse,
  SendDocumentData,
  SendDocumentResponse,
  SendMessageData,
  SendMessageResponse,
  SetWebhookBody,
  SetWebhookResponse,
} from './types';

export type HandleError = (error: unknown) => never;

export interface TelegramBotApiProps {
  request: Axios;
  token: string;
  handleError: HandleError;
}

export class TelegramBotApi {
  private readonly request: Axios;
  private readonly handleError: HandleError;

  constructor({ token, request, handleError }: TelegramBotApiProps) {
    this.request = request;
    this.request.defaults.baseURL = `https://api.telegram.org/bot${token}`;
    this.request.defaults.headers.common['Content-Type'] = 'application/json';

    this.handleError = handleError;
  }

  public getMe(): Promise<GetMeResponse> {
    return this.request.get(TelegramApiRoute.GetMe).catch(this.handleError).then(this.extractData);
  }

  public getUpdates(params?: GetUpdatesParams): Promise<GetUpdatesResponse> {
    return this.request
      .get(TelegramApiRoute.GetUpdates, {
        params: params || {},
      })
      .catch(this.handleError)
      .then(this.extractData);
  }

  public setWebhook(data?: SetWebhookBody): Promise<SetWebhookResponse> {
    return this.request
      .post(TelegramApiRoute.SetWebhook, data)
      .catch(this.handleError)
      .then(this.extractData);
  }

  public deleteWebhook(data?: DeleteWebhookData): Promise<DeleteWebhookResponse> {
    return this.request
      .post(TelegramApiRoute.DeleteWebhook, data)
      .catch(this.handleError)
      .then(this.extractData);
  }

  public getWebhookInfo(): Promise<GetWebhookInfoResponse> {
    return this.request
      .get(TelegramApiRoute.GetWebhookInfo)
      .catch(this.handleError)
      .then(this.extractData);
  }

  public sendMessage(data: SendMessageData): Promise<SendMessageResponse> {
    return this.request
      .post(TelegramApiRoute.SendMessage, data)
      .catch(this.handleError)
      .then(this.extractData);
  }

  public sendDocument(data: SendDocumentData): Promise<SendDocumentResponse> {
    const body = new FormData();
    body.append('chat_id', data.chat_id.toString());
    body.append('document', data.document);

    return this.request
      .post(TelegramApiRoute.SendMessage, body, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .catch(this.handleError)
      .then(this.extractData);
  }

  private extractData = (response: AxiosResponse) => response.data;
}
