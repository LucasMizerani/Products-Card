"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const priceCurrency = (value) => {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
};
exports.default = priceCurrency;
