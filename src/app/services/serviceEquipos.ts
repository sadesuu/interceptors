import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Equipo } from "../models/equipo";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ServiceEquipos{
    constructor(
        private _http:HttpClient
    ){}

    async getEquiposAsync():Promise<Equipo[]>{
        let req = "api/equipos"
        let urlApiEquipos = environment.urlApiEquipos
        return firstValueFrom(this._http.get<Equipo[]>(urlApiEquipos + req))
    }
}