//loop
/*
var i = 1;

for (i; i<=10; i++){
    console.log("hello", i);
}

while( i<=10 ){
    console.log("helloo", i);
    i++
}
*/

for(var a=0; a<10; a=a+2){
    console.log("hello", a)
}
var b=0;
while(b<=10){
    console.log("form while", b);
    if(b %5 ==0){
        console.log("divisible by five", b)
    }
    b=b+1
}

// aray
var arrr =[1,2,3,"amir","lama"];
console.log(arrr[0]);
console.log(arrr[3]);
console.log(arrr[4]);
console.log(arrr.length);
console.log(arrr[arrr.length -1]);

var newArrr= [];
newArrr.push("10");
newArrr.push("ram");
newArrr.push("hari");
newArrr.unshift("100");
newArrr.unshift("90");
newArrr.unshift("80");

//array with loop
 var test = [];
 for( var a = 0; a< 10; a++){
    test.unshift(a);
    
 }