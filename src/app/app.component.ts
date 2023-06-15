import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  password = '';
  length = 0;
  isIncludeLetters = false;
  isIncludeNumbers = false;
  isIncludeSymbols = false;

  modifyLength(value: number) {
    this.length = value;
  }

  modifyLetters() {
    this.isIncludeLetters = !this.isIncludeLetters;
  }

  modifyNumbers() {
    this.isIncludeNumbers = !this.isIncludeNumbers;
  }

  modifySymbols() {
    this.isIncludeSymbols = !this.isIncludeSymbols;
  }

  buttonClick() {

    if (!this.isIncludeLetters && !this.isIncludeNumbers && !this.isIncludeSymbols) 
    return;

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

    let validChars = '';

    if (this.isIncludeLetters) validChars += letters;

    if (this.isIncludeNumbers) validChars += numbers;

    if (this.isIncludeSymbols) validChars += symbols;

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;

  }
}
