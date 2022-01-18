export class HandlerError {
  async captureHandlerError(error: any) {
    const { statusCode } = error.statusCode;
    if (statusCode >= 500) {
      throw new Error(error);
    } else if (statusCode >= 400) {
      throw new Error(error);
    }
  }
}
