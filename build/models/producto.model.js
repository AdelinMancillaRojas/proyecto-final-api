"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.Producto = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var Producto = /** @class */ (function () {
    function Producto() {
    }
    __decorate([
        typegoose_1.prop({ trim: true, required: true }),
        __metadata("design:type", String)
    ], Producto.prototype, "nombre", void 0);
    __decorate([
        typegoose_1.prop({ trim: true, required: true }),
        __metadata("design:type", String)
    ], Producto.prototype, "marca", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", Number)
    ], Producto.prototype, "precio", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", Number)
    ], Producto.prototype, "stock", void 0);
    return Producto;
}());
exports.Producto = Producto;
exports.ProductModel = typegoose_1.getModelForClass(Producto);
//# sourceMappingURL=producto.model.js.map