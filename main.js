const clock=document.querySelector('.clock');
const Day=document.querySelector('.day');
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];


function runClock() {
    var time=new Date();
    console.log(time);
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var txt="AM";
    var date=time.getDate();
    var day=weekday[time.getDay()];
    var year =time.getFullYear();
    console.log(date);
    if(hrs>12){
        hrs=hrs-12;
        txt="PM"
    }else if(hrs==0){
        hrs=12;
        txt="AM";
    }


    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;

    clock.innerHTML=`${hrs} : ${min} : ${sec}  ${txt}`;
    Day.innerHTML=`${date}  ${day}  ${year}`;

}

setInterval(runClock,1000);
