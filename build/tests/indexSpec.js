"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
describe('GET /', function () {
    it('responds with 200', function (done) {
        (0, supertest_1.default)(index_1.default).get('/').expect(200, done);
    });
});
