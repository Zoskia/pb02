import { Injectable } from '@angular/core';
import PocketBase from "../../../../pb/node_modules/pocketbase";

@Injectable({
  providedIn: 'root'
})
export class PbTodoService {
  pb: PocketBase = new PocketBase("http://127.0.0.1:8090");

  constructor() {}

}
