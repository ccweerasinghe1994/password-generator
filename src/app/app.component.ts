import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  password = "";
  inputLenth = 0;
  includeLetters = false;
  includeNumber = false;
  includeSymbols = false;

  onChangeLength(value: string) {
    const pasrsedValue = parseInt(value);
    if (!isNaN(pasrsedValue)) {
      this.inputLenth = pasrsedValue;
    }
  }

  onButtonClick() {
    const Characters = "asdfghjklzxcvbnmqwertyuiop";
    const Numbers = "1234567890";
    const Symbols = "!@#$%^&*()";
    let validChars = "";

    if (this.includeLetters) {
      validChars += Characters;
    }
    if (this.includeNumber) {
      validChars += Numbers;
    }
    if (this.includeSymbols) {
      validChars += Symbols;
    }

    let generatedPassword = "";
    for (let i = 0; i < this.inputLenth; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumber() {
    this.includeNumber = !this.includeNumber;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
