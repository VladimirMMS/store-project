export class HandlerError {
  async captureHandlerError(error: any) {
    let { statusCode } = error.statusCode;
    if (statusCode >= 500) {
      statusCode = 500;
      throw new Error(error);
    } else if (statusCode >= 400) {
      statusCode = 400;
      throw new Error(error);
    }
  }
}
