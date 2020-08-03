var now=new Date(); //오늘 날짜 정보를 date객체의 인스턴스 now객체로 만듦
var firstDay=new Date("2020-05-22"); //처음 만난 날

var toNow=now.getTime(); //오늘 날짜를 밀리초로 변경
var toFirst=firstDay.getTime(); //처음 만난 날을 밀리초로 변경

var passedTime=toNow-toFirst; //처음 만난 날과 오늘 날짜의 차이 (밀리초)
var passedDay=Math.round(passedTime/(1000*60*60*24)); //밀리초를 일로 변환 후 반올림

document.querySelector('#accent').innerText=passedDay+"일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    var future=toFirst+days*(1000*60*60*24); //처음 만난 날에 밀리초를 날로 바꾸어서 더함
    var someday=new Date(future); //future값을 사용한 Date 객체의 인스턴스
    var year=someday.getFullYear(); //연도
    var month=someday.getMonth()+1; //월
    var date=someday.getDate(); //일
    document.querySelector("#date"+days).innerText=year+"년 "+month+"월 "+date+"일";
}
