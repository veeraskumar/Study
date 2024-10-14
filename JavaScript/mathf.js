let sout = console.log.bind();
sout("PI values : ",Math.PI);

sout("Round to nearest value (4.6) : ", Math.round(4.6));
sout("ceil(3.4) : ",Math.ceil(3.4));
sout("Floor(9.6) : ", Math.floor(9.6));
sout("Pow(2,8) : ",Math.pow(2,8));
sout("SQRT(256) : ",Math.sqrt(256));
sout("abs(-10) : ",Math.abs(-10));
sout("Sin(1): ",Math.sin(1), "| Cos(0) : ",Math.cos(0),"| tan(8) : ", Math.tan(8));
let num = [1,2,4,4,6,8,9,1000,-9,-10];
sout("Min() : ",Math.min(...num),"| Max() : ",Math.max(...num));
sout("Exp(2) : ",Math.exp(3));
sout("Random : ",Math.floor((Math.random()) * 10000));

sout("-------------------------------------------------------------------------------------------------------")
sout();
sout("Date Function() ")

let date = new Date();
let da = date.getDay();
let hi = date.getDate();
let year = date.getFullYear();
let month =  date.getMonth();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let mill = date.getMilliseconds();
let mon;
let day;

switch (month) {
    case 0:
        mon = "Jan";
        break;
    case 1:
        mon = "Feb";
        break;
    case 2:
        mon = "Mar";
        break;
    case 3:
        mon = "Apr";
        break;
    case 4:
        mon = "May";
        break;
    case 5:
        mon = "Jun";
        break;
    case 6:
        mon = "Jul";
        break;
    case 7:
        mon = "Aug";
        break;
    case 8:
        mon = "Sep";
        break;
    case 9:
        mon = "Oct";
        break;
    case 10:
        mon = "Nov";
        break;
    case 11:
        mon = "Dec";
        break;

    default:
        break;
}

switch (da) {
    case 0:
    day = "SUN"
        break;
    case 1:
        day = "MON"
        break;
    case 2:
        day = "TUE"
        break;
    case 3:
        day = "WED"
        break;
    case 4:
        day = "THUR"
        break;
    case 5:
        day = "FIR"
        break;
    case 6:
        day = "SAT"
        break;

    default:

        break;
}

sout("-------------------------------------------")
sout(`|       ${hour}:${min}:${sec}:${mill} ${day} ${hi}th-${mon}-${year}    |`);
sout("-------------------------------------------")
