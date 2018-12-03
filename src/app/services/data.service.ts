import {Injectable} from '@angular/core';
import {Client} from '../interfaces/client';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  clients: Client[] = [
    {name: 'John', birthDate: '12/12/1990', height: 160, weight: 90},
    {name: 'Ben', birthDate: '12/06/1970', height: 200, weight: 120},
    {name: 'Mike', birthDate: '06/10/1995', height: 170, weight: 55},
  ];

  constructor() {
  }

  getClients() {
    return this.clients;
  }

  addClient(client) {
    this.clients.push(client);
    console.log(client)
  }
}
