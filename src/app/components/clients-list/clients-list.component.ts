import {Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit} from '@angular/core';
import {Client} from '../../interfaces/client';
// import { ClientComponent} from '../client/client.component';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
// export class ClientsListComponent implements OnInit, AfterViewInit{
export class ClientsListComponent implements OnInit {

  // @ViewChild(ClientComponent) client;

  // title: string;
  trainee1: string;
  clients: Client[];
  showClientForm: boolean = false;
  // color: string = "forestgreen";
  color: string;


  constructor(private date: DataService) {
  }

  ngOnInit() {
    this.clients = this.date.getClients();
  }

  // ngAfterViewInit(){
  //   this.title = this.client.title;
  // }

  loosWeight() {
    this.clients[0].weight--;
    console.log('loose');
  }

  removeClient() {
    this.clients.splice(0, 1);
  }

  recieveName(event) {
    this.trainee1 = event;
  }

  toggleForm() {
    this.showClientForm = !this.showClientForm;
  }

  // hideForm(event){
  //   this.showClientForm = event;
  // }
}
