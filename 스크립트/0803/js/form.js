var userId=document.querySelector("#user-id");
var pw1=document.querySelector("#user-pw1");
var pw2=document.querySelector("#user-pw2");

userId.onChange=checkId;
pw1.onChange=checkPw;
pw2.onChange=comparePw;

function checkId(){
    if(userId.value.length<4 || userId.value.length>15){
        alert("4~15자리의 영문과 숫자 사용");
        userId.select(); //재입력할 수 있도록 userId필드를 선택하게함
    }
}

function checkPw(){
    if(pw1.value.length<8){
        alert("비밀번호는 8글자 이상이어야 합니다.");
        pw1.value=""; //비밀번호 필드 지움
        pw1.focus();
    }
}

function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        pw2.value="";
        pw2.focus();
    }
}

