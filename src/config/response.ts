import { CustomEntity } from '../database/entities/custom.entity';

export function httpResponse<T extends CustomEntity>(
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
