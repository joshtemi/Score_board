let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let homeValue=0
let awayValue=0

function plus1(){
     homeValue += 1
    homeScore.textContent = homeValue
    win()
}
function plus2(){
     homeValue += 2
    homeScore.textContent = homeValue
    win()
}
function plus3(){
     homeValue += 3
    homeScore.textContent = homeValue
    win()
}
function plus1away(){
     awayValue += 1
    awayScore.textContent = awayValue
    win()
}
function plus2away(){
     awayValue += 2
    awayScore.textContent = awayValue
    win()
}
function plus3away(){
     awayValue += 3
    awayScore.textContent = awayValue
    win()
}

function refresh(){
    awayValue = 0
    awayScore.textContent = awayValue
    homeValue = 0
    homeScore.textContent = homeValue
    win()
}
let displayHomewin = document.getElementById("home-win")
let displayAwaywin = document.getElementById("away-win")
let displaydraw = document.getElementById("draw-mark")
function win(){
    if (homeValue == 0 && awayValue == 0){
    displayAwaywin.textContent= " "
    displayHomewin.textContent=" "
     displaydraw.textContent= " "
    }else if(homeValue > awayValue){
         displayAwaywin.textContent= " "
     displayHomewin.textContent= "Winning"
     displaydraw.textContent= " " 
    }else if(homeValue == awayValue){
         displayAwaywin.textContent= " "
     displayHomewin.textContent= " "
     displaydraw.textContent= "Draw" 
    }else{
          displayAwaywin.textContent= "Winning"
          displayHomewin.textContent=" "
          displaydraw.textContent= " " 
    }
}
