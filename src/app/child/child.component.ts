import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  question: any;

  @Output() 
  sendScore = new EventEmitter<number>()

  answer: any; 
  score = 0;
  currentIndex = 0;
  message: any;
  isDisabled = true;
  disabledDiv = '';

  checkAnswer(e: number) {
    if (this.currentIndex <= 7) {
      this.answer = this.question[this.currentIndex].a[e];
      this.isDisabled = false;
      this.disabledDiv = 'none'

      if(this.answer.correct) {
        this.score = this.score +1
        this.message = this.question[this.currentIndex].correct;
      } else {
        this.message = this.question[this.currentIndex].incorrect;
      }
    }
  }

  nextQuestion() : void {
    this.answer = null;
    this.isDisabled = true;
    this.disabledDiv = ''
    this.message = ''
    if (this.currentIndex < 7) {
      this.currentIndex = this.currentIndex +1
      console.log(this.currentIndex);
    } else if (this.currentIndex > 6) {
      //this.isDisabled = false;
      this.sendScore.emit(this.score) 
    }
    
  } 


  
}
