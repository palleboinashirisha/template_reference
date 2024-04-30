import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild('dateInput')
  dateOfBirth!: ElementRef;
  @ViewChild('ageInput')
  age!: ElementRef;

  caluculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear()
    let currentYear = new Date().getFullYear()
    let age = currentYear - birthYear

    this.age.nativeElement.value = age

  }
}
