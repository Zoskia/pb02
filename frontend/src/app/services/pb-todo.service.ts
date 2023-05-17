import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root',
})
export class PbTodoService {
  private pb: PocketBase;
  todos: any[] = [];

  constructor() {

    this.pb = new PocketBase('http://127.0.0.1:8090');
  }

  async getTodos() {
    const records = await this.pb.collection('todos').getFullList({
      sort: '-created',
    });
    return records;
  }
}
