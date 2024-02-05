function showtime() {
    //getting date format
    var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayname = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var today = new Date();
    var date = dayname[today.getDay()] + " " + today.getDate() + " " + monthname[today.getMonth()] + " " + today.getFullYear();

    //display date on display in format
    document.getElementsByTagName('h2')[0].innerText = date;

    // getting time formmat
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";
    //session am or pm
    if (h >= 12) {
        session = "PM";
    }
    //getting 24 and 12 hours clock for getting 24 hrs if(h>24){h=h-24;} and remove am & pm
    if (h > 12) {
        h = h - 12;
    }

    //for showing time in 01,02,03... format
    var hrs = h < 10 ? '0' + h : h;
    var min = m < 10 ? '0' + m : m;
    var sec = s < 10 ? '0' + s : s;
    var time = hrs + " : " + min + " : " + sec + " : " + session;

    document.getElementsByTagName('h1')[0].innerText = time;

    //load page after every 1000ms/1sec
    setTimeout(showtime, 1000);
}