var array=[4,9,16,25];
array.forEach(myFunction);

function myFunction(item, index){
    console.log('index['+ index +']:'+ item);
}
    
var newArray = array.map(function(item){
    return item *2;
});

console.log(newArray);
console.log(array);

