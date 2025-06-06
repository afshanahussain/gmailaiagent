"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.GmailClient = void 0;
require("dotenv/config");
var googleapis_1 = require("googleapis");
/**
 * Initializes the Gmail client with OAuth2 credentials.
 * @param {Credentials} credentials - The OAuth2 credentials.
 */
//     const credentials: Credentials = {
//     clientId: process.env.GOOGLE_CLIENT_ID!,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     redirectUri: process.env.GOOGLE_REDIRECT_URI!,
//     refreshToken: process.env.GOOGLE_REFRESH_TOKEN!,
//    };
var GmailClient = /** @class */ (function () {
    function GmailClient() {
        this.oauth2Client = null;
    }
    GmailClient.prototype.initialize = function (credentials) {
        this.oauth2Client = new googleapis_1.google.auth.OAuth2(credentials.clientId, credentials.clientSecret, credentials.redirectUri);
        this.oauth2Client.setCredentials({
            refresh_token: credentials.refreshToken
        });
    };
    GmailClient.prototype.listMessages = function (userId) {
        if (userId === void 0) { userId = 'me'; }
        return __awaiter(this, void 0, void 0, function () {
            var gmail, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gmail = googleapis_1.google.gmail({ version: 'v1', auth: this.oauth2Client });
                        return [4 /*yield*/, gmail.users.messages.list({
                                userId: userId
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data.messages || []];
                }
            });
        });
    };
    GmailClient.prototype.getMessage = function (id, userId) {
        if (userId === void 0) { userId = 'me'; }
        return __awaiter(this, void 0, void 0, function () {
            var gmail, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gmail = googleapis_1.google.gmail({ version: 'v1', auth: this.oauth2Client });
                        return [4 /*yield*/, gmail.users.messages.get({
                                userId: userId,
                                id: id
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    return GmailClient;
}());
exports.GmailClient = GmailClient;
