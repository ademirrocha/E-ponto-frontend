import { AxiosResponse } from "axios";
import { api } from "../apis/api_service";
import { HttpResponse } from "@/types";

export default class InformarAgendaService {

    static async getAll() {
        return await api.get(`/all`);
    }

    static async getById(id:  string | number) {
        return await api.get(`find?id=${id}`);
    }

    static async create(obj: any): Promise<AxiosResponse<HttpResponse<any>>> {
        return await api.post<HttpResponse<any>>(`/create`, obj);
    }
}