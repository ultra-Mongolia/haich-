var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var computer = document.querySelector('.computer');
var player = document.querySelector('.player');
var winner = document.querySelector('.winner');
var cCount=0, cCount=0;
var pCount=0, pCount=0;

function play(choice){
	if(choice=="rock"){
		//alert("rock");
		player.innerText = "player:rock";
	}else if(choice=="paper"){
		player.innerText = "player:paper";
	}else if(choice=="siccer"){
		player.innerText = "player:siccer";
	}
	//0,1,2,3 0->rock, 1->paper, 2->siccer
	var random = Math.floor(Math.random()*3);
	console.log(random);
	var computerChoice;
	if(random==0){
		computerChoice="rock";
		computer.innerText = "computer: rock";
	}else if(random==1){
		computerChoice="paper";
		computer.innerText = "computer: paper";
	}if(random==2){
		computerChoice="siccer";
	computer.innerText = "computer: siccer";
	}
	
	if(choice=="rock" && computerChoice=="paper"){
		winner.innerText = "winner:computer win"
		cCount++;
		cPoint.innerText="computer:" + cCount;
	}else if(choice=="rock" && computerChoice=="siccer"){
		winner.innerText = "winner:player win"
		pCount++;
		pPoint.innerText="player:" + pCount;
	}else if(choice=="rock" && computerChoice=="rock"){
		winner.innerText = "winner:draw"
	}else if(choice=="paper" && computerChoice=="paper"){
		winner.innerText = "winner:draw"
	}else if(choice=="paper" && computerChoice=="siccer"){
		winner.innerText = "winner:computer win"
		cCount++;
		cPoint.innerText="computer:" + cCount;
	}else if(choice=="paper" && computerChoice=="rock"){
		winner.innerText = "winner:player win"
		pCount++;
		pPoint.innerText="player:" + pCount;
	}else if(choice=="siccer" && computerChoice=="paper"){
		winner.innerText = "winner:player win"
		pCount++;
		pPoint.innerText="player:" + pCount;
	}else if(choice=="siccer" && computerChoice=="rock"){
		winner.innerText = "winner:computer win"
		cCount++;
		cPoint.innerText="computer:" + cCount;
	}else if(choice=="siccer" && computerChoice=="siccer"){
		winner.innerText = "winner:draw"
	}
	
}
	function reset(){
	cCount=0;
	pCount=0;
	cPoint.innerText="computer:0";
	pPoint.innerText="player:0";
}