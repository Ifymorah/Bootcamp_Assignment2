module.exports= function(n){

 if (typeof n === "string"){
 return n.length;   //returns length of string
 }
 if ( n === null ||n === undefined){
   return ("no value");
 }
 if (typeof n === "boolean"){
   return n;
 }
 if (typeof n === "number"){
   if (n < 100 ){
     return ("less than 100");
   }
   else if (n > 100){
     return ("more than 100");
   }
   else{
    return "equal to 100";

  }
 }
   
if(n instanceof Array){
   if (n.length < 3){
     return undefined;
   }
   else {
     return n[2]; //will return the 3rd value in array
   }
 }
 
 
 if (typeof n === "function"){
     return n(true);
 }
}