
// https://github.com/mostafijur8741/assingment

function kilometerToMeter (kilometer){
    var meter=kilometer*1000;
    return meter;
}
var meters=kilometerToMeter(5);
console.log(meters);



function budgetCalculator(watch , phone ,laptop){
  var price=50*watch+100*phone+500*laptop;
    return price ; 
}
var price= budgetCalculator(1,1,1);
console.log(price)

var day=5000;
var taka =0;
if(day<=10){
  taka=day*100;
}
else if(day<=20){
 var first= 10*100;
 var remaining= day-10;
 var secand =remaining*80;
 taka =first+secand;

}
else{
  var first=10*100;
  var secand =10*80
   var remaining=day-20;
  var thard =remaining*50;
   taka=first+secand+thard;
}
console.log(taka);


function magaFriend(arra)
  {
    var max_str = arra[0].length;
   
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
      
        if (maxi > max_str) {
            ans = arra[i];
             max_str = maxi;
        }
    }
    return ans;
}
console.log(magaFriend(["ab", "a", "abcd"]));
