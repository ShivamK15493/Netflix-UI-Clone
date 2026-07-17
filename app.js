let plusIcon1 = document.querySelector("#icon1");
let downInfo1 = document.querySelector('#downInfo1');
let state = true;


plusIcon1.addEventListener("click", function(){
     if(state == true){
          this.style.transform="rotate(45deg)";
          state = false;
          downInfo1.style.display="block";
        }
        else{
            this.style.transform="rotate(0deg)";
            state = true;
            downInfo1.style.display="none";
        }
});

let plusIcon2 = document.querySelector("#icon2");
let downInfo2 = document.querySelector('#downInfo2');

plusIcon2.addEventListener("click", function(){
     if(state == true){
          this.style.transform="rotate(45deg)";
          state = false;
          downInfo2.style.display="block";
        }
        else{
            this.style.transform="rotate(0deg)";
            state = true;
            downInfo2.style.display="none";
        }
});

let plusIcon3 = document.querySelector("#icon3");
let downInfo3 = document.querySelector('#downInfo3');

plusIcon3.addEventListener("click", function(){
     if(state == true){
          this.style.transform="rotate(45deg)";
          state = false;
          downInfo3.style.display="block";
        }
        else{
            this.style.transform="rotate(0deg)";
            state = true;
            downInfo3.style.display="none";
        }
});

let plusIcon4 = document.querySelector("#icon4");
let downInfo4 = document.querySelector('#downInfo4');

plusIcon4.addEventListener("click", function(){
     if(state == true){
          this.style.transform="rotate(45deg)";
          state = false;
          downInfo4.style.display="block";
        }
        else{
            this.style.transform="rotate(0deg)";
            state = true;
            downInfo4.style.display="none";
        }
});

let plusIcon5 = document.querySelector("#icon5");
let downInfo5 = document.querySelector('#downInfo5');

plusIcon5.addEventListener("click", function(){
     if(state == true){
          this.style.transform="rotate(45deg)";
          state = false;
          downInfo5.style.display="block";
        }
        else{
            this.style.transform="rotate(0deg)";
            state = true;
            downInfo5.style.display="none";
        }
});

let plusIcon6 = document.querySelector("#icon6");
let downInfo6 = document.querySelector('#downInfo6');

plusIcon6.addEventListener("click", function(){
     if(state == true){
          this.style.transform="rotate(45deg)";
          state = false;
          downInfo6.style.display="block";
        }
        else{
            this.style.transform="rotate(0deg)";
            state = true;
            downInfo6.style.display="none";
        }
});