var tabuada = 5;

console.log("Tabuada usando a forma simples");
console.log(tabuada+"x0="+parseInt(tabuada)*0);
console.log(tabuada+"x1="+parseInt(tabuada)*1);
console.log(tabuada+"x2="+parseInt(tabuada)*2);
console.log(tabuada+"x3="+parseInt(tabuada)*3);
console.log(tabuada+"x4="+parseInt(tabuada)*4);
console.log(tabuada+"x5="+parseInt(tabuada)*5);
console.log(tabuada+"x6="+parseInt(tabuada)*6);
console.log(tabuada+"x7="+parseInt(tabuada)*7);
console.log(tabuada+"x8="+parseInt(tabuada)*8);
console.log(tabuada+"x9="+parseInt(tabuada)*9);
console.log(tabuada+"x10="+parseInt(tabuada)*10);

console.log("Tabuada usando um laço for");
var i;
for (i = 0; i <= 10; i++) {
    console.log(tabuada+"x"+i+"="+parseInt(tabuada)*i);
}