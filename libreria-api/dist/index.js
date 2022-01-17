"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var express_1 = __importDefault(require("express"));
var prisma = new client_1.PrismaClient();
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.get('/usuario', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.usuario.findMany()];
            case 1:
                usuarios = _a.sent();
                res.json(usuarios);
                return [2 /*return*/];
        }
    });
}); });
app.get('/autor', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var autores;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.autor.findMany()];
            case 1:
                autores = _a.sent();
                res.json(autores);
                return [2 /*return*/];
        }
    });
}); });
app.get('/libro', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.usuario.findMany()];
            case 1:
                usuarios = _a.sent();
                res.json(usuarios);
                return [2 /*return*/];
        }
    });
}); });
app.get('/librosdisponibles', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var libros;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.libro.findMany({
                    where: { cantidadDisponible: { not: 0 } },
                    include: { autor: true }
                })];
            case 1:
                libros = _a.sent();
                res.json(libros);
                return [2 /*return*/];
        }
    });
}); });
app.get("/libro/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, libro;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, prisma.libro.findFirst({
                        where: { id: Number(id) }
                    })];
            case 1:
                libro = _a.sent();
                res.json(libro);
                return [2 /*return*/];
        }
    });
}); });
app.post("/usuario", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, prisma.usuario.findFirst({
                        where: { email: req.body.email }
                    })];
            case 1:
                usuario = _a.sent();
                if (!usuario) return [3 /*break*/, 2];
                res.status(400).send({ error: 'Ya existe otro usuario con el mismo email.' });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, prisma.usuario.create({
                    data: __assign({}, req.body)
                })];
            case 3:
                result = _a.sent();
                res.json(result);
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                res.status(400).send({ error: 'El usuario no ha sido creado.' });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.post("/autor", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.autor.create({
                    data: __assign({}, req.body)
                })];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
app.post("/libro", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, titulo, autorNombre, isbn, cantidadTotal, libro, result, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, titulo = _a.titulo, autorNombre = _a.autorNombre, isbn = _a.isbn, cantidadTotal = _a.cantidadTotal;
                return [4 /*yield*/, prisma.libro.findFirst({
                        where: { isbn: isbn }
                    })];
            case 1:
                libro = _b.sent();
                if (!libro) return [3 /*break*/, 2];
                res.status(400).send({ error: 'Ya existe otro libro con el mismo ISBN.' });
                return [3 /*break*/, 5];
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, prisma.libro.create({
                        data: {
                            titulo: titulo,
                            autor: { connect: { nombre: autorNombre } },
                            isbn: isbn,
                            cantidadTotal: cantidadTotal
                        }
                    })];
            case 3:
                result = _b.sent();
                res.json(result);
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                res.status(400).send({ error: 'El libro no ha sido creado.' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.post("/prestarLibro", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, libroId, usuarioId, libro, libroUpdateRes, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, libroId = _a.libroId, usuarioId = _a.usuarioId;
                return [4 /*yield*/, prisma.libro.findFirst({
                        where: { id: Number(libroId) }
                    })];
            case 1:
                libro = _b.sent();
                if (!(libro && libro.cantidadDisponible == 0)) return [3 /*break*/, 2];
                res.status(400).send({ error: 'No hay unidades disponibles de este libro.' });
                return [3 /*break*/, 5];
            case 2: return [4 /*yield*/, prisma.libro.update({
                    where: { id: Number(libroId) },
                    data: { cantidadDisponible: Number(libro === null || libro === void 0 ? void 0 : libro.cantidadDisponible) - 1 }
                })];
            case 3:
                libroUpdateRes = _b.sent();
                return [4 /*yield*/, prisma.usuariosLibros.create({
                        data: {
                            libro: { connect: { id: libroId } },
                            usuario: { connect: { id: usuarioId } }
                        }
                    })];
            case 4:
                result = _b.sent();
                res.json(result);
                _b.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
/*
app.post(`/retornarLibro`, async (req, res) => {
  const { libroId, usuarioId } = req.body

  const libro = await prisma.libro.findFirst({
    where: { id: Number(libroId) },
  })

  try{
    const libroUpdateRes = await prisma.libro.update({
      where: { id: Number(libroId) },
      data: { cantidadDisponible: Number(libro?.cantidadDisponible)+1},
    })

    const result = await prisma.usuariosLibros.create({
    data: {
        libro: { connect: { id: libroId }},
        usuario: { connect: { id: usuarioId }}
        }
    })

    let uniqueKey = usuarioId + '_' + libroId;

    const result = await prisma.usuariosLibros.delete({
      where: { usuarioId_libroId: uniqueKey},
    })

    res.json(result)
  
  } catch (error) {
    res.status(400).send({ error: 'La operacion no se pudo completar.' });
  }
})
*/
/*
    app.put('/libro/:id', async (req, res) => {
        const { id } = req.params
        const libro = await prisma.libro.update({
          where: { id: Number(id) },
          data: { published: true },
        })
        res.json(libro)
      })
*/
app["delete"]("/libro/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, libro;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, prisma.libro["delete"]({
                        where: { id: Number(id) }
                    })];
            case 1:
                libro = _a.sent();
                res.json(libro);
                return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () {
    return console.log('REST API server ready at: http://localhost:3000');
});
//# sourceMappingURL=index.js.map