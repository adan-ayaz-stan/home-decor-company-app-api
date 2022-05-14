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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsDataController = void 0;
const common_1 = require("@nestjs/common");
const projects_data_service_1 = require("./projects-data.service");
let ProjectsDataController = class ProjectsDataController {
    constructor(projectsDataService) {
        this.projectsDataService = projectsDataService;
    }
    getAll() {
        return this.projectsDataService.getAll();
    }
    getById(id) {
        return this.projectsDataService.getById(+id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectsDataController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectsDataController.prototype, "getById", null);
ProjectsDataController = __decorate([
    (0, common_1.Controller)('projectsApi'),
    __metadata("design:paramtypes", [projects_data_service_1.ProjectsDataService])
], ProjectsDataController);
exports.ProjectsDataController = ProjectsDataController;
//# sourceMappingURL=projects-data.controller.js.map