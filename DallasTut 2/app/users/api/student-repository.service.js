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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let StudentRepository = class StudentRepository {
    constructor(http) {
        this.http = http;
        this._apiUrl = 'api/students';
    }
    getData(response) {
        let body = response.json();
        console.log('response', body);
        return body.data || body;
    }
    listAll() {
        return this.http
            .get(this._apiUrl)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    getById(id) {
        return this.http
            .get(`${this._apiUrl}/${id}`)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    add(student) {
        return this.http
            .post(this._apiUrl, student)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    update(student) {
        return this.http
            .put(`${this._apiUrl}/${student.id}`, student)
            .toPromise()
            .then(() => student)
            .catch(x => x.message);
    }
    delete(student) {
        return this.http
            .delete(`${this._apiUrl}/${student.id}`)
            .toPromise()
            .catch(x => x.message);
    }
    create(student) {
        return this.http.post('/api/users', student, this.jwt()).map((response) => response.json());
    }
    jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    }
};
StudentRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StudentRepository);
exports.StudentRepository = StudentRepository;
//# sourceMappingURL=student-repository.service.js.map