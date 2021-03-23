class Question {

    constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput("Write Answer");
      this.button = createButton('Submit');
     
      this.title = createElement('h1');
      this.quest = createElement('h1');
      this.option1 = createElement('h1');
      this.option2 = createElement('h1');
      this.option3 = createElement('h1');
      this.option4 = createElement('h1');
      this.reset = createButton('Reset');
    }


    hide(){
     
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
      this.title.hide();
      
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(300, 0);
  
      this.quest.html("Question : - What does JSON stands for?");
      this.quest.position(200, 50);
    
      this.option1.html("1. JavaScript Object Notation");
      this.option1.position(200, 90);
    
      this.option2.html("2. JavaScience Object Notation");
      this.option2.position(200, 130);

      this.option3.html("3. JavaScript Object Note");
      this.option3.position(200, 170);

      this.option4.html("4. JavaScript On Notation");
      this.option4.position(200, 200);
    
      this.input1.position(200 ,280 );
      this.input2.position(400 ,280 );
      this.button.position(200,320);
      this.reset.position(350,320);
  
      this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        ContestantCount+=1;
        contestant.index = ContestantCount;
        contestant.update();
        contestant.updateCount(ContestantCount);
         });
  
      this.reset.mousePressed(()=>{
        contestant.updateCount(0);
        quiz.update(0);
      });
  
    }
  }
  