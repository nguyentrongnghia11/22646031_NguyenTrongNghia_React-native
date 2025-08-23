"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(message);
    }
}
const logger = Logger.getInstance();
logger.log("Hello World");
//# sourceMappingURL=Bai17.js.map