console.log("simple console log");
setTimeout(() => {
    console.log("inside set time out function");
}, 1000);
console.log("middle console");
setInterval(()=>{
    console.log("printing interval");
    print();
},1500)

console.log("last console");

function print(){
    console.log("func");
}