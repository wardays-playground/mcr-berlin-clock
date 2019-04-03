import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public hoursArray = []; // Horas del input
  public minutesArray = []; // Minutos del input

  private row0 = ''; // Fila segundos
  private row1 = ''; // Fila horas x 5
  private row2 = ''; // Fila horas x 1
  private row3 = ''; // Fila Minutos x 5
  private row4 = ''; // Fila minutos x 1

  calculateTime(time) {

    if (time) {

      this.resetTime(); // Vaciamos las rows

      let timeAux = time.split(':'); 


      this.getHoursRow1(timeAux[0]);
      this.getHoursRow2(timeAux[0]);
      this.getMinutesRow3(timeAux[1]);
      this.getMinutesRow4(timeAux[1]);

      this.translateFiveHour(this.hoursArray[0]);
      this.translateOneHour(this.hoursArray[1]);
      this.translateFiveMinutes(this.minutesArray[0]);
      this.translateOneMinutes(this.minutesArray[1]);
      this.translateSeconds(Math.floor(Math.random() * 2)); // Pasamos un numero aleatorio porque no tenemos los segundos
    } else {
      alert('Input time');
    }
  }

  getHoursRow1(hour) {

    this.hoursArray.push(Math.floor(hour / 5));

    return this.hoursArray[0];

  }

  getHoursRow2(hour) {

    this.hoursArray.push(hour % 5);

    return this.hoursArray[1];

  }



  getMinutesRow3(minutes) {

    this.minutesArray.push(Math.floor(minutes / 5));

    return this.minutesArray[0];

  }

  getMinutesRow4(minutes) {

    this.minutesArray.push(minutes % 5);

    return this.minutesArray[1];

  }

  translateFiveHour(hour) {

    for (let i = 0; i < 4; i++) {
      if(i < hour){
        this.row1 += '<div class="col border border-dark bg-danger p-3"></div>';
      }else{
        this.row1 += '<div class="col border border-dark bg-light p-3"></div>';
      }
    }

    return this.row1;
  }

  translateOneHour(hour) {

    for (let i = 0; i < 4; i++) {
      if(i < hour){
        this.row2 += '<div class="col border border-dark bg-danger p-3"></div>';
      }else{
        this.row2 += '<div class="col border border-dark bg-light p-3"></div>';
      }
    }

    return this.row2;
  }

  translateFiveMinutes(min) {

    for (let i = 0; i < 11; i++) {
      if(i < min){
        if (i == 2 || i == 5 || i == 8) {
          this.row3 += '<div class="col border border-dark bg-danger p-3"></div>';
        } else {
          this.row3 += '<div class="col border border-dark bg-warning p-3"></div>';
        }
      }else{
        this.row3 += '<div class="col border border-dark bg-light p-3"></div>';
      }
    }
    return this.row3;
  }

  translateOneMinutes(min) {

    for (let i = 0; i < 4; i++) {
      if(i < min){
        this.row4 += '<div class="col border border-dark bg-warning p-3"></div>';
      }else{
        this.row4 += '<div class="col border border-dark bg-light p-3"></div>';
      }
    }

    return this.row4;
  }

  translateSeconds(secAux) { 

    if (secAux === 1) {
      this.row0 = '<div class="col-1 border border-dark m-auto bg-warning p-4 rounded-circle"></div>';
    }else{
      this.row0 = '<div class="col-1 border border-dark m-auto bg-light p-4 rounded-circle"></div>';
    }

    return this.row0;

  }

  resetTime() {
    this.hoursArray = [];
    this.minutesArray = [];

    this.row0 = '';
    this.row1 = '';
    this.row2 = '';
    this.row3 = '';
    this.row4 = '';
  }

  onKeydown(event, time){
    if(event.key === 'Enter'){
      this.calculateTime(time);
    }
  }
}
