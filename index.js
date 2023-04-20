let myDate;
let date;
let time;

setInterval(() => {
    myDate=new Date();
    date= myDate.toLocaleDateString();
    time=myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds();
    document.getElementById('time').innerHTML=time + " on " + date;
}, 1000);