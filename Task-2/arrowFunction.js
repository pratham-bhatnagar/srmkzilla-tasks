greet = () =>{
    if(d.getHours()<=12){
        return "Good Morning";
    }
    else if(d.getHours()>12 && d.getHours()<=15){
        return "Good Afternoon";
    }
    else{
        return "Good Evening";
    }
}
var d = new Date();
const message=greet(d);
console.log(message);

