"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productoRoutes = express_1.Router();
var producto_route_controller_1 = require("../controllers/producto.route.controller");
productoRoutes.get('/', producto_route_controller_1.getProductsRoute);
productoRoutes.get('/:id', producto_route_controller_1.getProductRoute);
productoRoutes.post('/', producto_route_controller_1.addProductRoute);
productoRoutes.put('/', producto_route_controller_1.updateProductRoute);
productoRoutes.delete('/:id', producto_route_controller_1.deleteProductRoute);
exports.default = productoRoutes;
//# sourceMappingURL=productos.route.js.map