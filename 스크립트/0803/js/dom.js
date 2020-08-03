var bigPic=document.querySelector("#cup"); //큰 이미지 가져오기
var smallPic=document.querySelectorAll(".small"); //작은 이미지 가져오기

for(var i=0;i<smallPic.length;i++){
    // var newPic=this.src; //클릭 이벤트가 발생한 대상의 src 속성 저장
    // bigPic.setAttribute("src", newPic); //newPic 값을 큰 이미지의 src 속성에 할당
    // smallPic[i].onclick=changePic;

    smallPic[i].addEventListener("click", changePic);
}

function changePic(){
    var newPic=this.src;
    bigPic.setAttribute("src",newPic);
}

var isOpen=false;
var view=document.querySelector("#view");
view.addEventListener("click",function(){
    if(isOpen==false){
        document.querySelector("#detail").style.display="block";
        view.innerText="상세 설명 닫기"
        isOpen=true;
    }else{
        document.querySelector("#detail").style.display="none";
        view.innerText="상세 설명 보기"
        isOpen=false;
    }
});