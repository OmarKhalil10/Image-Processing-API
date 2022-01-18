"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
var listAllImages_1 = __importDefault(require("./api/listAllImages"));
var routes = express_1.default.Router();
routes.use('/listAllImages', listAllImages_1.default);
routes.use('/images', images_1.default);
exports.default = routes;
