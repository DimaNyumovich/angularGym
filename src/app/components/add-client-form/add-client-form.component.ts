import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../../interfaces/client';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-client-form',
  templateUrl: './add-client-form.component.html',
  styleUrls: ['./add-client-form.component.css']
})
export class AddClientFormComponent implements OnInit {

@Output() hideForm = new EventEmitter<boolean>();

  name: string;
  birthDate: string;
  weight: number;
  height: number;
  client = {};

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  saveClient(client: Client) {
    // console.log(client);
    this.data.addClient(client);
    this.hideForm.emit(false);
  }
}
