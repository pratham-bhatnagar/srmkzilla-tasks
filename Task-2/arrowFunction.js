greet = () =>{
    if(d.getHours()<=12){
        return "Good Morning";
    }
    else if(d.getHours()>12 && d.getHours()<=16){
        return "Good Afternoon";
    }
    else{
        return "Good Evsening";
    }
}
var d = new Date();
const message=greet(d);
console.log(message);

