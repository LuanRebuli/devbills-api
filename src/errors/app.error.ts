import { StatusCodes } from 'http-status-codes';

export class AppError {
  public statusCode: StatusCodes;
  public message: string;

  constructor(message: string, statusCode: StatusCodes) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
