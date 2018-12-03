import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  schedule = [
    {weekDay: 'sunday', slots: ['15:00', '16:00', '17:00']},
    {weekDay: 'monday', slots: ['16:00', '17:00', '18:00']},
    {weekDay: 'tuesday', slots: ['13:00', '14:00', '19:00']},
    {weekDay: 'wednesday', slots: ['13:00', '14:00', '19:00']},
    {weekDay: 'thursday', slots: ['13:00', '14:00', '19:00']},
    {weekDay: 'friday', slots: ['13:00', '14:00', '19:00']},
    {weekDay: 'saturday', slots: ['13:00', '14:00', '19:00']}
  ];

  constructor() {
  }

  getSchedule() {
    return this.schedule;
  }
}
