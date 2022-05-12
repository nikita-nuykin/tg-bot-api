export interface GetMeResponseResult {
  id: number;
  is_bot: boolean;
  first_name: string;
  username: string;
  can_join_groups: boolean;
  can_read_all_group_messages: boolean;
  supports_inline_queries: boolean;
}

export interface GetMeResponse {
  ok: boolean;
  result: GetMeResponseResult;
}
