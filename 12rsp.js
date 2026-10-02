 
 
 let score = JSON.parse(localStorage.getItem('score')) || {
    win:0,
    loss:0,
    tie:0
 };
 document.querySelector('p').innerHTML=`Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
   
 function playerMove(playerMove)
        {
            let string='';
            if (playerMove=='rock'){ 
                string= pickComputerMove();
                if(string=='rock')
                {
                result='Tie'
           
                }
                else if(string=='paper')
                {
                result='You lose';
                
                }
                else{
                result='You win';
                
                }
             
        
            }
           else if(playerMove=='paper')
            {
                  string= pickComputerMove();
                    if(string=='paper')
                    {
                    result='Tie';
                
                    }
                    else if(string=='scissor')
                    {
                    result='You lose';
                    
                    }
                    
                    else{
                        result='You win';
    
                    }
                
            }
            else{
                 string= pickComputerMove();
                if(string=='scissor'){
                
                result='Tie';
                }
                else if(string=='rock')
                {
                result=' You lose';
                
                }
                else{
                    result='You win';
                }
            
            }
            if(result=='You win'){
                score.win+=1;
            }
            else if(result=='You lose'){
                score.loss+=1;
            }
            else{
                score.tie+=1;
            }

              
            localStorage.setItem('score',JSON.stringify(score));
      
           document.querySelector('p').innerHTML=`Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
           document.querySelector('.result').innerHTML=`  You <img src="./${playerMove}-emoji.png" alt="${playerMove}"> <img src="./${string}-emoji.png" alt="${string}"> Computer `;
           
           document.querySelector('.score').innerHTML=`${result}`;
        //    document.body.innerHTML=` <h1>Rock Paper Scissor</h1>
        //    <button onclick="playerMove('rock')">Rock</button>
        // <button onclick="playerMove('paper')">Paper</button>
        // <button onclick="playerMove('scissor')">Scissor</button>
        // <button onclick="reset()">Reset Score</button>
        // <p>Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}</p>`;  
                // alert(`Computer chose ${string}. You chose ${playerMove}. ${result}\n  Wins: ${score.win},Losses: ${score.loss} , Ties: ${score.tie}`);
        }
        function reset(){
            score.win=0;
            score.loss=0;
            score.tie=0;
            localStorage.removeItem('score');
               document.querySelector('p').innerHTML=`Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
               document.querySelector('.result').innerHTML='';
               document.querySelector('.score').innerHTML='';
        //       document.body.innerHTML=`<h1>Rock Paper Scissor</h1><button onclick="playerMove('rock')">Rock</button>
        // <button onclick="playerMove('paper')">Paper</button>
        // <button onclick="playerMove('scissor')">Scissor</button>
        // <button onclick="reset()">Reset Score</button>
        // <p>Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}</p>`;  
            // alert('Score has been reset!\n Wins: 0, Losses: 0, Ties: 0');
        }
        
           let result='';
         function pickComputerMove()
         {
            let a=Math.random();
          
            if(a<=1/3){
                 return'rock';
            }
            else if(a>1/3&&a<2/3)
            {
                return'paper';
            }
            else{
                return'scissor';
            }
          
        }
        
        // // document.querySelector('button').addEventListener('click',playerMove);
        // document.body.innerHTML=`<h1>Rock Paper Scissor</h1>
        // <button onclick="playerMove('rock')">Rock</button>
        // <button onclick="playerMove('paper')">Paper</button>
        // <button onclick="playerMove('scissor')">Scissor</button>
        // <button onclick="reset()">Reset Score</button>
        // <p>Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}</p>`;  
    let isAutoplaying=false;
    let intervalId;

// const autoplay= () => {
        function autoplay(){
            if(!isAutoplaying){
                intervalId=setInterval(() => {
                    playerMove(pickComputerMove());     
                }, 1000);                               
                isAutoplaying=true;             
            }
                else{                               
                    clearInterval(intervalId);
                    isAutoplaying=false;                    
                }
        }
                

        ['make dinner','wash dishes','do laundry'].forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
});
