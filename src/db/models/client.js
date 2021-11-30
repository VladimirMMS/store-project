"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const sequelize_1 = __importDefault(require("sequelize"));
const Client = config_1.default.define('Client', {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: sequelize_1.default.STRING,
    },
    lastName: {
        type: sequelize_1.default.STRING
    },
    age: {
        type: sequelize_1.default.INTEGER
    }
});
exports.default = Client;
