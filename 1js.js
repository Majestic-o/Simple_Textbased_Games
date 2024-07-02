

let x; let y; let z;
x= Number("3.14");
console.log(x, typeof x);
y= String(123);
console.log(y, typeof y);




let a; let b; let c; 
a = Number(a); b = Number(b); c = Number(c);

 
let count = 0;
document.getElementById("decreasebtn").onclick = function(){
    count-=1
    document.getElementById("countno").innerHTML = count;
}
document.getElementById("resetbtn").onclick = function(){
    count=0
    document.getElementById("countno").innerHTML = count;
}
document.getElementById("increasebtn").onclick = function(){
    count+=1
    document.getElementById("countno").innerHTML = count;
}

let d = Math.floor(Math.random() * 6 + 1);
console.log(d);

document.getElementById("rollbutton").onclick = function(){
    let p = Math.floor(Math.random() * 20 + 1);
    let q = Math.floor(Math.random() * 6 + 1);
    let r = Math.floor(Math.random() * 9 + 1);
    document.getElementById("dice1").innerHTML = p;
    document.getElementById("dice2").innerHTML = q;
    document.getElementById("dice3").innerHTML = r;
}




myNum = 12345.894;

myNum = myNum.toLocaleString(undefined, {style:"unit", unit: "celsius"});
console.log(myNum);


const answer = Math.floor(Math.random() * 10 + 1);
gusses = 0;
document.getElementById("submitbtn").onclick = function(){
    let guess = document.getElementById("gusses").value;
    gusses +=1;
    if(guess == answer){
        alert(`${answer} is the #. It took you ${gusses} guesses`);
    }
    else if(guess < answer){
        alert("Too Small");
    }
    else{
        alert("Too Large");
    }
}
