"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env.config");
const app_1 = __importDefault(require("./app"));
let PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`APP IS LISTENING ON http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map