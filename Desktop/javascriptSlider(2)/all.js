
var simg = document.getElementById('simg');
var bimg =document.getElementById('bimg');
var imgbox = document.getElementById('imgbox');
var vWidth = window.innerWidth;  //取得螢幕寬度
var bimgWidth = 4000;  //容器寬度
var imgWidth = 800; //圖片大小

// document.onload =function(){
//   vWidth = window.innerWidth;
//    run();
// };
document.onclick=function(){
  run();
  vWidth = window.innerWidth;
};
// document.body.onresize =function(){
//   parent.location.reload();
//    vWidth = window.innerWidth;
//    run();
//    };


var run =function(){
      console.log(vWidth);
      if(vWidth >=1000){
      bimgWidth = 4000;
      imgWidth = 800;
    }else if (vWidth <1000 && vWidth>=700 ){
      bimgWidth = 3500;
      imgWidth = 700;
    }else if (vWidth<700){
      bimgWidth = 2500;
      imgWidth = 500;
      };
};
console.log(vWidth);

//var turnLf = bimg.style.left;  //把left宣告給turnLf

var right = document.getElementById('right');
var left = document.getElementById('left');
var close =document.getElementById('close');
var i = 0;
var p =0 ;
//開啟輪播圖
var imgOpen = function(){
  run();
  imgbox.style.display = "block";
    for(s=0;s<5;s++){      //判斷0~4張照片分別給I值
      if(this.id === "p"+s){
        i=s;
        console.log(this.id+"  ； " +"id:"+i);
      };
    };

turn();
};
//關閉輪播圖
var imgClose = function(){
  imgbox.style.display = "none";
  // console.log(x);
};

//取得每張圖片的id位置
for(p=0;p<5;p++){
var simgG =document.getElementById("p"+p);
simgG.onclick = imgOpen;
};


//畫面移動 <i*800px>
var turn = function(){
   run();
  var x= i * -(imgWidth) ;        //i為圖片定位   圖片800px
  bimg.style.left = x+"px";
};
//按鈕>右鍵執行效果
var turnR = function(){

  if(i<4){   //需先判斷i<4
  i += 1;    //圖框定位 i+1  往右+
  turn();
  }else{
    i=0;     //若i>4 的話回到最前
    turn();
  }
};
//<按鈕<左鍵執行效果
var turnL = function(){

  if(i>0){    //需先判斷i>0
  i = i- 1;   //圖框定位 i-1  往左-
    turn();
  }else{
    i=4;    //若i小於0則須回最後
    turn();
  }
};

//關閉圖片
close.onclick = function(){imgClose()};
//<>按鈕觸發
right.onclick = function(){turnR()};
left.onclick = function(){turnL()};

/* 拖动完成后触发 */
// 默认情况下,数据/元素不能在其他元素中被拖放。对于drop我们必须防止元素的默认处理
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

    bimg.onmousedown =function(){  //大圖被點擊時

      var downX = event.clientX;  //當滑鼠點擊得到點擊X的數值
      bimg.ondrag  =  function(){  //大圖被抓取時，做定位取值

          var  oLX= event.clientX-(imgWidth-imgWidth/3-50) ;
          var x= i * -(imgWidth) ;    // 這兩行相當turn()
          var sum = x +oLX;    //這兩行相當turn()  稍作修改(以抓取定位)
            if(sum <= -(bimgWidth)){  //設if以免跑出框外
              sum= -(bimgWidth);
            }else if(sum >= 0){
              sum=0;
            };
            oLY =event.clientY; //取Y值然後切於600時 關閉，這裡也可取兩個Y值關閉，偷懶-0-
            if(oLY>600){
              imgClose();
            }
           bimg.style.left= sum+"px";  //圖片位移

            bimg.ondrop =function(){
              var dropX = event.clientX; //當滑鼠放開得到放開X的數值
              console.log(downX+"downX");
              console.log(dropX+"deopX");
                  if(downX-dropX >25){
                    turnR(); //當往左滑時切動右圖
                  }else if(downX-dropX < -25){
                    turnL();//當網幼華時切動左圖
                  };

            };
      };
    };
