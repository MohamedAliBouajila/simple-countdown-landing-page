const countdown = () => {
    const countDate = new Date("September 18, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    // time regles
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate 
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // DOM

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;


    // YOU CAN ADD SOMTHING TO UI IF IT'S VERY SOON
/*
    if(gap < 100000){

    }
*/
}

setInterval(countdown,1000);