class Contestant {
    constructor(){
      this.index = null;      
      this.name = null;
      this.answer = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('ContestantCount');
      contestantCountRef.on("value",(data)=>{
        ContestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        ContestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }

  
  
  }
  