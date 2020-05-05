import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  dateArr: any[] = [];

  dayArr: any[] = [];

  constructor() {
    this.DayValuePicker();
    this.DayPicker();
   }

  DayValuePicker() {
    const currentDate = new Date();

    const currentDay = currentDate.getDay();

    for (let i = 0; i <= 4; i++) {
      let currentDayValue = currentDay + i;
      if (currentDayValue >= 7) {
        currentDayValue = currentDayValue - 7;
        this.dateArr.push(Math.abs(currentDayValue));
      } else {
        this.dateArr.push(currentDayValue);
      }
    }
  }

  DayPicker() {
    for (let i = 0; i <= this.dateArr.length; i++) {
      const dayValue = this.dateArr[i];

      switch (dayValue) {
        case 1:
          this.dayArr.push('Monday');
          break;
        case 2:
          this.dayArr.push('Tuesday');
          break;
        case 3:
          this.dayArr.push('Wednesday');
          break;
        case 4:
          this.dayArr.push('Thursday');
          break;
        case 5:
          this.dayArr.push('Friday');
          break;
        case 6:
          this.dayArr.push('Saturday');
          break;
        case 0:
          this.dayArr.push('Sunday');
      }
    }

    this.dayArr.splice(0, 1, 'Today');
    this.dayArr.splice(1, 1, 'Tomorrow');
  }

  getFormattedDate(ind) {
    const indexVal = ind;
    const currentDate = new Date();
    const numberOfDaysToAdd = Number(indexVal);
    const month = currentDate.toLocaleString('default', { month: 'short' });
    currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);
    return `${currentDate.getDate()}-${month}-${currentDate.getFullYear()}`;
  }
}
