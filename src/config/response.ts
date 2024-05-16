import { BaseEntity } from '../database/entities/base.entity';

export function httpResponse<T extends BaseEntity>(
  message: string,
  statusCode: number,
  data: T | T[],
) {
  return {
    message,
    statusCode,
    data,
  };
}
