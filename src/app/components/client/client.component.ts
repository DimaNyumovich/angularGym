import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Client} from '../../interfaces/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() color: string;
  @Input() client: Client;
  @Input() weight: number;
  @Output() trainee = new EventEmitter<string>();

  gitTest: number = 777;
  gitTest1: number = 888;
  gitTest2: number = 999;

  constructor() {
  }

  ngOnInit() {
    console.log(this.color)
  }

  startTraining() {
    // alert('training started');
  }

  trainClient(name: string) {
    // alert(name)
    this.trainee.emit(name);
  }
}
