import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  // constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    Swal.fire("Hii", "You Entr",'success');
   }

  submitted = false;

  onFormSubmit(submitted: boolean) {
    this.submitted = submitted;
  }

}
