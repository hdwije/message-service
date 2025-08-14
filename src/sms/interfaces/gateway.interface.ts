export interface Gateway {
  sendSms(to: string, message: string): Promise<object>;
}
