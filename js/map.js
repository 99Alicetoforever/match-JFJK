/**
 * Created by Administrator on 2017/6/30.
 */
var mapObj=function(){
    this.Ph;  //跑道高度
};
var flag=true;
mapObj.prototype.init=function () {
    this.Ph=325;
};

mapObj.prototype.draw=function () {

    if(flag){
        Background2();   //背景
        Background3();   //背景
        flag=false;
    }

    if(OneMap2){
        Paodao2(this.Ph);  //跑道
        OneMap2=false;
    }

    if(OneMap3){
        Paodao3(this.Ph);  //跑道
        OneMap3=false;
    }


    //
    // if(OneMap2  || OneMap3){
    //     Paodao2(this.Ph);
    //     Paodao3(this.Ph);
    //     OneMap2=false;
    //     OneMap3=false;
    // }

    // if(flag){
    //     Paodao2(this.Ph);
    //     Paodao3(this.Ph);
    //     flag=false;
    // }


};

//背景2
function Background2(){
    for(var i=0;i<=canWidth2/800;i++){
        // 图片位置 截取起始位置  截取图片大小   展示起始位置    展示大小
        ctx2.drawImage(bgPic,3,3,505,195,i*800,0,canWidth+5,canHeight*0.5);  //  天空
        ctx2.drawImage(bgPic,3,199,505,180,i*800,115,canWidth,canHeight*0.55);  //建筑物
        ctx2.drawImage(bgPic,514,3,505,92,(i*800+46),163,canWidth,122);  //楼顶部
        ctx2.drawImage(bgPic,3,382,505,122,i*800,280,canWidth,canHeight*0.5);  //楼
    }
}
//背景3
function Background3(){
    for(var i=0;i<=canWidth2/800;i++){
        // 图片位置 截取起始位置  截取图片大小   展示起始位置    展示大小
        ctx3.drawImage(bgPic,3,3,505,195,i*800,0,canWidth+5,canHeight*0.5);  //  天空
        ctx3.drawImage(bgPic,3,199,505,180,i*800,115,canWidth,canHeight*0.55);  //建筑物
        ctx3.drawImage(bgPic,514,3,505,92,(i*800+46),163,canWidth,122);  //楼顶部
        ctx3.drawImage(bgPic,3,382,505,122,i*800,280,canWidth,canHeight*0.5);  //楼
    }
}

//跑道2
function Paodao2(ph){
    //初始地图
    if(mapReset==0){
        //第1层
        for(var i=0;i<18;i++){
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,18*80,ph,76,canHeight/2);  //跑道尾部
        }
        //第2层
        ph+=30;
        for(var i=19;i<20;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,18*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80+44,ph,89,canHeight/2);  //跑道中间
        }
        //335
    }
    //第1次转换地图
    if(mapReset==1 || mapReset==2){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();

        ph += 60;
        for(var i=0;i<4;i++){
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,4*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph -= 30;
        for(var i=5;i<15;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,4*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80+44,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,15*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph -= 30;
        for(var i=16;i<20;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,15*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80+44,ph,89,canHeight/2);  //跑道中间
        }
        //305

    }
    //第3次转换地图
    if(mapReset==3 || mapReset==4){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();
        ph+=30;
        for(var i=0;i<5;i++){
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,5*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph +=30;
        for(var i=6;i<10;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,5*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80+44,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,10*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph -=60;
        for(var i=11;i<20;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,10*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80+44,ph,89,canHeight/2);  //跑道中间
        }
        //305
    }
    //第5次转换地图
    if(mapReset==5 || mapReset==6){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();

        for(var i=0;i<4;i++){
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,4*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph +=30;
        for(var i=8;i<13;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,7*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,13*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph -=30;
        for(var i=17;i<20;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,16*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
        }
        //305
    }
    //第7次转换地图
    if(mapReset==7 || mapReset==8){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();

        for(var i=0;i<12;i++){
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm, 27, 5, 76, 310, -30, ph, 76, canHeight / 2);  //跑道开始
            ctx2.drawImage(bgPicDm,231,5,65,310,12*80,ph,76,canHeight/2);  //跑道尾部
        }

        for(var i=15;i<20;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,14*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80+44,ph,89,canHeight/2);  //跑道中间
        }
        //305
    }
    //第9次转换地图
    if(mapReset==9 || mapReset==10){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();

        for(var i=0;i<15;i++){
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,15*80,ph,76,canHeight/2);  //跑道尾部
        }
        //305
    }
    //第11次转换地图
    if(mapReset==11 || mapReset==12){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();
        ph+=60;
        for(var i=0;i<2;i++){
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,2*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph-=60;
        for(var i=3;i<8;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,2*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,8*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph+=30;
        for(var i=9;i<18;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,8*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,18*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph-=30;
        ctx2.drawImage(bgPicDm,104,5,123,310,19*80,ph,89,canHeight/2);  //跑道中间
        ctx2.drawImage(bgPicDm,27,5,76,310,18*80+50,ph,76,canHeight/2);  //跑道开始

        //305
    }
    //第13次转换地图
    if(mapReset==13 || mapReset==14){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();
        for(var i=0;i<8;i++){
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,8*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph+=30;
        for(var i=13;i<20;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,12*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
        }
        //335
    }
    //第15次转换地图
    if(mapReset==15 || mapReset==16){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();
        ph+=30;
        for(var i=0;i<2;i++){
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,2*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph+=30;
        for(var i=5;i<9;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,4*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,9*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph-=30;
        for(var i=12;i<17;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,11*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,17*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph+=30;
        for(var i=18;i<20;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,17*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
        }
        //365
    }
    //第17次转换地图
    if(mapReset==17 || mapReset==18){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();
        ph+=60;
        for(var i=1;i<5;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,20,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,5*80,ph,76,canHeight/2);  //跑道尾部
        }
        ph-=30;
        for(var i=6;i<17;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,5*80+50,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,17*80,ph,76,canHeight/2);  //跑道尾部
        }
        //335
    }
    //第19次转换地图
    if(mapReset==19 || mapReset==20){
        ctx2.clearRect(0,0,canWidth2,canHeight2);
        Background2();
        ph+=30;
        for(var i=0;i<20;i++){
            ctx2.drawImage(bgPicDm,27,5,76,310,-30,ph,76,canHeight/2);  //跑道开始
            ctx2.drawImage(bgPicDm,104,5,123,310,i*80,ph,89,canHeight/2);  //跑道中间
            ctx2.drawImage(bgPicDm,231,5,65,310,19*80,ph,76,canHeight/2);  //跑道尾部
        }

        //335
    }
}
//跑道3
function Paodao3(ph) {
    //初始地图
    if (mapReset==0 || mapReset==1) {
        ph+=30;
        for (var i = 0; i < 9; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 9 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        //第2层
        ph+=30;
        for (var i = 10; i < 20; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 9 * 80 + 50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80 + 44, ph, 89, canHeight / 2);  //跑道中间
        }
        //365

    }
    //第2次转换地图
    if ( mapReset == 2 || mapReset==3) {
        ctx3.clearRect(0,0,canWidth2,canHeight2);
        Background3();

        for (var i = 0; i < 15; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 15 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph+=30;
        for (var i = 16; i < 20; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 15 * 80 + 50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80 + 44, ph, 89, canHeight / 2);  //跑道中间
        }
        // console.log(ph+"33333333333");
        //335

    }
    //第4次转换地图
    if ( mapReset == 4 || mapReset==5) {
        ctx3.clearRect(0,0,canWidth2,canHeight2);
        Background3();

        ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 0, ph, 76, canHeight / 2);  //跑道尾部
        for (var i = 4; i < 20; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 3*80 + 50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
        }
        //305
    }
    //第6次转换地图
    if ( mapReset == 6 || mapReset==7) {
        ctx3.clearRect(0,0,canWidth2,canHeight2);
        Background3();

        for (var i = 0; i < 12; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 12 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }

        ctx3.drawImage(bgPicDm, 104, 5, 123, 310, 15 * 80, ph, 89, canHeight / 2);  //跑道中间
        ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 17 * 80, ph, 76, canHeight / 2);  //跑道尾部
        ctx3.drawImage(bgPicDm, 104, 5, 123, 310, 16 * 80, ph, 89, canHeight / 2);  //跑道中间
        ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 14*80 + 50, ph, 76, canHeight / 2);  //跑道开始

        ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 19*80 + 50, ph, 76, canHeight / 2);  //跑道开始
        //305
    }
    //第8次转换地图
    if ( mapReset == 8 || mapReset==9) {
        ctx3.clearRect(0,0,canWidth2,canHeight2);
        Background3();

        for (var i = 0; i < 5; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 5 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph+=60;
        for (var i = 6; i < 15; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 5*80 + 50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 15 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph-=60;
        for (var i = 16; i < 20; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 15*80 + 50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
        }
        //305
    }
    //第10次转换地图
    if ( mapReset == 10 || mapReset==11) {
        ctx3.clearRect(0,0,canWidth2,canHeight2);
        Background3();
        for (var i = 1; i < 12; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 30, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 12 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph+=60;
        for (var i = 13; i < 20; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 12 * 80+50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
        }
        //365
    }
    //第12次转换地图
    if ( mapReset == 12 || mapReset==13) {
        ctx3.clearRect(0,0,canWidth2,canHeight2);
        Background3();
        for (var i = 0; i < 5; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 5 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph+=90;
        ctx3.drawImage(bgPicDm, 104, 5, 123, 310, 8 * 80, ph, 89, canHeight / 2);  //跑道中间
        ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 7 * 80+50, ph, 76, canHeight / 2);  //跑道开始
        ctx3.drawImage(bgPicDm, 104, 5, 123, 310, 9 * 80, ph, 89, canHeight / 2);  //跑道中间
        ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 10 * 80, ph, 76, canHeight / 2);  //跑道尾部
        ph-=90;
        ctx3.drawImage(bgPicDm, 104, 5, 123, 310, 11 * 80, ph, 89, canHeight / 2);  //跑道中间
        ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 10 * 80+50, ph, 76, canHeight / 2);  //跑道开始
        ctx3.drawImage(bgPicDm, 104, 5, 123, 310, 12 * 80, ph, 89, canHeight / 2);  //跑道中间
        ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 13 * 80, ph, 76, canHeight / 2);  //跑道尾部
        ph+=90;
        for (var i = 16; i < 18; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 15 * 80+50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 18 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph-=90;
        ctx3.drawImage(bgPicDm, 104, 5, 123, 310, 19 * 80, ph, 89, canHeight / 2);  //跑道中间
        ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 18 * 80+50, ph, 76, canHeight / 2);  //跑道开始
        //305
    }
    //第14次转换地图
    if ( mapReset == 14 || mapReset==15) {
        ctx3.clearRect(0,0,canWidth2,canHeight2);
        Background3();
        ph+=30;
        for (var i = 0; i < 5; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 5 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph+=30;
        for (var i = 8; i < 12; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 7 * 80+50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 12 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph-=60;
        for (var i = 13; i < 15; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 12 * 80+50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 15 * 80-10, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph+=30;
        for (var i = 16; i < 20; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 15 * 80+50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
        }
        //335
    }
    //第16次转换地图
    if ( mapReset == 16 || mapReset==17) {
        ctx3.clearRect(0,0,canWidth2,canHeight2);
        Background3();
        ph+=60;
        for (var i = 0; i < 3; i++) {
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 3 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph-=30;
        for (var i =4; i < 9; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 3 * 80+50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 9 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph+=30;
        for (var i =10; i < 15; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 9 * 80+50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 15 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        //365
    }
    //第18次转换地图
    if ( mapReset == 18 || mapReset==19) {
        ctx3.clearRect(0,0,canWidth2,canHeight2);
        Background3();
        ph+=30;
        for (var i =1; i < 13; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 10, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 13 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph-=30;
        for (var i =14; i < 19; i++) {
            ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 13 * 80+50, ph, 76, canHeight / 2);  //跑道开始
            ctx3.drawImage(bgPicDm, 104, 5, 123, 310, i * 80, ph, 89, canHeight / 2);  //跑道中间
            ctx3.drawImage(bgPicDm, 231, 5, 65, 310, 19 * 80, ph, 76, canHeight / 2);  //跑道尾部
        }
        ph+=30;
        ctx3.drawImage(bgPicDm, 27, 5, 76, 310, 19 * 80+50, ph, 76, canHeight / 2);  //跑道开始

        //335
    }
}

/*//获取位置
              //头的x,头的y,尾的x
function GetPosition(Tx,Ty,Wx,mapReset,num){
   var Datas=[Tx,Ty,Wx,mapReset,num];
   Position.push(Datas);
}*/


