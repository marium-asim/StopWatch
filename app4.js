var min=0;
var sec=0;
var msec=0;
var hour=0;
var minHead=document.getElementById("min");
var secHead=document.getElementById("sec");
var msecHead=document.getElementById("msec");
var hourHead=document.getElementById("hour");
var interval;
var startbt;

function timer()
{
    msec++
    msecHead.innerHTML=msec;
    if(msec>=100)
    {
        sec++
        secHead.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60)
    {
        min++
        minHead.innerHTML=min;
        sec=0;
        secHead.innerHTML=sec;
    }
    else if(min>=60)
    {
        hour++
        hourHead.innerHTML=hour;
        min=0;
        minHead.innerHTML=min;
    }
}

function start()
{
 interval= setInterval(timer,10);
 document.getElementById("start").disabled= true;
 document.getElementById("pbtn").disabled=false;
 
}

function stop()
{
    clearInterval(interval);
    document.getElementById("start").disabled=false;
    document.getElementById("pbtn").disabled=true;
}

function reset()
{
    min=0;
    sec=0;
    msec=0;
    hour=0;
    minHead.innerHTML=min;
    secHead.innerHTML=sec;
    msecHead.innerHTML=msec;
    hourHead.innerHTML=hour;
    clearInterval(interval);
    document.getElementById("start").disabled= false;
    document.getElementById("pbtn").disabled=false;
 
}