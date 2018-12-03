import { Component, OnInit } from '@angular/core';
import { ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedualeTable = [];
  constructor(private scheduale: ScheduleService) { }

  getColor(weekday:string){
    switch (weekday) {
      case 'monday':
        return 'green';
      case 'tuesday':
        return 'blue';
      case 'wednesday':
        return '#0080ff';
    }
  }

  ngOnInit() {
    this.schedualeTable = this.scheduale.getSchedule();
    // console.log(this.schedualeTable);
  }

}
