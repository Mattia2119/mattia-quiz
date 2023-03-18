import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mattia-quiz';

  quiz = {
    info: {
      name: 'World Cup: Penatly Shoot Out',
      main: "10 questions in a quiz about football's biggest competition",
      results:
        'Thanks for playing! Thank you for taking the World Cup quiz using Quizzer stack for RapidWeaver. Hope you enjoyed it!',
      level1: 'An outstanding performance. Well played!',
      level2: 'A very good showing. Well played.',
      level3: 'A decent performance. Well done.',
      level4: 'Definitely room for improvement in your game!',
    },
    questions: [
      {
        q: 'When was the first World Cup played?',
        a: [
          {
            option: '1890',
            correct: false,
          },
          {
            option: '1910',
            correct: false,
          },
          {
            option: '1930',
            correct: true,
          },
          {
            option: '1950',
            correct: false,
          },
        ],
        correct:
          '<p><span>Back of the net!</span> The first World Cup was held in Uruguay in 1930.</p>',
        incorrect:
          '<p><span>Hits the post!</span> The first World Cup was held in Uruguay in 1930.</p>',
        select_any: false,
        force_checkbox: false,
      },
      {
        q: 'Who won the first World Cup?',
        a: [
          {
            option: 'Brazil',
            correct: false,
          },
          {
            option: 'Argentina',
            correct: false,
          },
          {
            option: 'Uruguay',
            correct: true,
          },
          {
            option: 'Italy',
            correct: false,
          },
        ],
        correct:
          '<p><span>Great penalty!</span> Yes - not only did Uruguay host the first World Cup they also won it!</p>',
        incorrect:
          '<p><span>A miss!</span> Actually - not only did Uruguay host the first World Cup they also won it!</p>',
        select_any: false,
        force_checkbox: false,
      },
      {
        q: 'Which country has won the most World Cups?',
        a: [
          {
            option: 'Germany',
            correct: false,
          },
          {
            option: 'Brazil',
            correct: true,
          },
          {
            option: 'Italy',
            correct: false,
          },
          {
            option: 'Argentina',
            correct: false,
          },
        ],
        correct:
          "<p><span>Goal!</span> That's right. Brazil have won it 5 times in total. Germany and Italy have both won it 4 times.</p>",
        incorrect:
          '<p><span>Missed shot!</span> <strong>Brazil</strong> have won it 5 times in total. Germany and Italy have both won it 4 times.</p>',
        select_any: false,
        force_checkbox: false,
      },
      {
        q: 'Which teams have only won when they were the host nation? SELECT ALL THAT APPLY',
        a: [
          {
            option: 'England',
            correct: true,
          },
          {
            option: 'Uruguay',
            correct: false,
          },
          {
            option: 'France',
            correct: true,
          },
          {
            option: 'Spain',
            correct: false,
          },
        ],
        correct:
          '<p><span>Great penalty!</span> <strong>England</strong> and <strong>France</strong> are the teams that have only won when they were the host nation.</p>',
        incorrect:
          '<p><span>Just missed!</span> <strong>England</strong> and <strong>France</strong> are the teams that have only won when they were the host nation.</p>',
        select_any: false,
        force_checkbox: false,
      },
      {
        q: 'Which nation has never won but has been runner up most times?',
        a: [
          {
            option: 'Netherlands',
            correct: true,
          },
          {
            option: 'Portugal',
            correct: false,
          },
          {
            option: 'Hungary',
            correct: false,
          },
          {
            option: 'Croatia',
            correct: false,
          },
        ],
        correct:
          '<p><span>Top corner!</span> Yes - The Netherlands have been runners up 3 times! Most recently in 2010. They were also 3rd in 2014!</p>',
        incorrect:
          '<p><span>Off the bar!</span> <strong>The Netherlands</strong> have been runners up 3 times! Most recently in 2010. They were also 3rd in 2014!</p>',
        select_any: false,
        force_checkbox: false,
      },
      {
        q: 'How many different countries have won the World Cup since it began (in 1930)?',
        a: [
          {
            option: '4',
            correct: false,
          },
          {
            option: '8',
            correct: true,
          },
          {
            option: '12',
            correct: false,
          },
          {
            option: '16',
            correct: false,
          },
        ],
        correct:
          "<p><span>Goal!</span> That's right - only 8 different teams have won the World Cup. Brazil have won it most often with 5!</p>",
        incorrect:
          '<p><span>A miss!</span> Amazingly only 8 different teams have won the World Cup. Brazil have won it most often with 5!</p>',
        select_any: false,
        force_checkbox: false,
      },
      {
        q: 'Which is the smallest nation ever to qualify for the World Cup?',
        a: [
          {
            option: 'Scotland',
            correct: false,
          },
          {
            option: 'Denmark',
            correct: false,
          },
          {
            option: 'Iceland',
            correct: true,
          },
          {
            option: 'Croatia',
            correct: false,
          },
        ],
        correct:
          '<p><span>Great penalty!</span> Iceland qualified for the 2018 World Cup in Russia and became the smallest nation ever to qualify.</p>',
        incorrect:
          '<p><span>Over the bar!</span> <strong>Iceland</strong> qualified for the 2018 World Cup in Russia and became the smallest nation ever to qualify.</p>',
        select_any: false,
        force_checkbox: false,
      },
      {
        q: 'The 2018 World Cup in Russia is the most expensive one ever held. How much is it estimated to have cost?',
        a: [
          {
            option: '$14.2 million',
            correct: false,
          },
          {
            option: '$142 million',
            correct: false,
          },
          {
            option: '$1.42 billon',
            correct: false,
          },
          {
            option: '$14.2 billon',
            correct: true,
          },
        ],
        correct:
          '<p><span>Great penalty!</span> Unbelievably, the 2018 World Cup in Russia is thought to have cost $14.2 billion!!</p>',
        incorrect:
          '<p><span>A big miss!</span> Unbelievably, the 2018 World Cup in Russia is thought to have cost $14.2 billion!!</p>',
        select_any: false,
        force_checkbox: false,
      },
    ],
  };
  currentIndex = 0;
  score = 0;
  message = '';

  onGetScore(value : number) {
    this.score = value
    console.log(this.score);
  }

   endMessage(value : number) {
    if (this.score) {
      if (this.score <= 2) {
        return `<p>${this.quiz.info.results}<br>2/8 answers!<br> ${this.quiz.info.level1}</p>`;
       } else if (this.score <= 4) {
        return `<p>${this.quiz.info.results}<br>4/8 answers!<br> ${this.quiz.info.level2}</p>`;
       } else if (this.score <= 6) {
        return `<p>${this.quiz.info.results}<br>6/8 answers!<br> ${this.quiz.info.level3}</p>`;
       } else if (this.score <= 8){
        return `<p>${this.quiz.info.results}<br>8/8 answers!<br> ${this.quiz.info.level4}</p>`;
       } else {
        return '';
       }
    } else {
      return ''
    }
     
   }

}
