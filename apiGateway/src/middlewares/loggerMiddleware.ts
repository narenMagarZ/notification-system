class LoggerMiddleware {
    private static instance: LoggerMiddleware;
    static get() {
        if(!LoggerMiddleware.instance) {
            LoggerMiddleware.instance = new LoggerMiddleware();
        }
        return LoggerMiddleware.instance;
    }

    public log() {

    }
}

const loggerMiddleware = LoggerMiddleware.get();
export { loggerMiddleware as LoggerMiddleware };