/**
 * Created by Administrator on 2017/7/3.
 */
var ObstacleObj=function(){
    this.a;
    this.b;
    this.c;
    this.d;
    this.Coins;   //金币
    //  this.CoinNum;   //金币生成的位置

};

ObstacleObj.prototype.init=function () {
    this.a=new Image();
    this.b=new Image();
    this.c=new Image();
    this.d=new Image();
    this.Coins=new Image();
    this.a.src="../images/Trap_04.BIG.png";
    this.b.src="../images/Item_05_New.png";
    this.c.src="../images/LD.png";
    this.d.src="../images/Trap_01.BIG.png";
    this.Coins.src="../images/Item_03_New.png";
    //  this.CoinNum=500;

};

ObstacleObj.prototype.draw=function () {
    //开始生成金币
    if(OneCoin2){
        CreateCoins4();
        OneCoin2=false;
    }
    if(OneCoin3){
        CreateCoins5();
        OneCoin3=false;
    }
};
// ctx2.clearRect(0,0,canWidth2,canHeight2);
function CreateCoins4(){
    if(coins4==0){
        style(900,295,coins4,1);
        bornCoin2(1020,135,7,coins4);   //x坐标，y坐标   z生成种类  p所画的层数
        bornCoin2(1100,135,7,coins4);
    }
    if(coins4==2){
        // ctx4.clearRect(0,0,canWidth2,canHeight2);
        style(25,320,coins4,8);
        style(200,350,coins4,3);
        style(1070,320,coins4,3);
    }
    if(coins4==4){
        // ctx4.clearRect(0,0,canWidth2,canHeight2);
        bornCoin2(170,30,5,coins4);
        style(140,335,coins4,6);
        // bornCoin2(730,330,8,coins4);
        style(750,235,coins4,8);
        bornCoin2(1180,0,5,coins4);
        style(1150,305,coins4,6);
    }
    if(coins4==6){
        // ctx4.clearRect(0,0,canWidth2,canHeight2);
        bornCoin2(40,0,5,coins4);
        style(10,305,coins4,6);
        bornCoin2(450,275,9,coins4);
        style(750,290,coins4,8);
        style(900,290,coins4,8);
    }
    if(coins4==8){
        //  ctx4.clearRect(0,0,canWidth2,canHeight2);
        bornCoin2(80+100,0,5,coins4);
        style(50+100,305,coins4,6);
        bornCoin2(500+50,270,8,coins4);
        style(465+50,160,coins4,6);
        style(800,290,coins4,6);
        bornCoin2(1030,350,7,coins4);
        bornCoin2(1100,350,7,coins4);
        style(1350,290,coins4,6);
        style(1410,200,coins4,8);
        // style(1310,220,coins4,8);
    }
    if(coins4==10){
        //  ctx4.clearRect(0,0,canWidth2,canHeight2);
        bornCoin2(10,270,8,coins4);
        bornCoin2(110,270,8,coins4);
        style(30,180,coins4,8);
        style(137,180,coins4,8);
        bornCoin2(300+170,0,5,coins4);
        style(270+170,305,coins4,6);
        bornCoin2(850+20,250,6,coins4);
        bornCoin2(910+20,250,6,coins4);
        bornCoin2(10+990,270,8,coins4);
        bornCoin2(110+990,270,8,coins4);
        style(30+990,180,coins4,8);
        style(137+990,180,coins4,8);
        bornCoin2(1300+15,350,7,coins4);
        bornCoin2(1370+15,350,7,coins4);
        bornCoin2(1440+15,350,7,coins4);
        bornCoin2(1510+15,350,7,coins4);
    }
    if(coins4==12){
        //  ctx4.clearRect(0,0,canWidth2,canHeight2);
        bornCoin2(30,310,6,coins4);
        bornCoin2(70+20,310,6,coins4);
        style(70,180,coins4,8);
        style(370,275,coins4,7);
        bornCoin2(30+680,283,6,coins4);
        bornCoin2(90+680,283,6,coins4);
        style(690,180,coins4,6);
        bornCoin2(1050,30,5,coins4);
        style(1020,350,coins4,6);
        bornCoin2(30+1320,283,6,coins4);
        bornCoin2(90+1320,283,6,coins4);
        style(1330,180,coins4,6);
    }
    if(coins4==14){
        // ctx4.clearRect(0,0,canWidth2,canHeight2);
        bornCoin2(380,0,5,coins4);
        style(350,310,coins4,6);
        style(600,230,coins4,2);
        bornCoin2(1180,280,7,coins4);
        bornCoin2(1180+80,280,7,coins4);
        style(1420,200,coins4,7);
    }
    if(coins4==16){
        // ctx4.clearRect(0,0,canWidth2,canHeight2);
        style(30,295,coins4,8);
        bornCoin2(240,290,9,coins4);
        style(202,180,coins4,6);
        bornCoin2(800,290,9,coins4);
        style(480,350,coins4,7);
        style(765,180,coins4,6);
        style(1200,320,coins4,6);
    }
    if(coins4==18){
        //  ctx4.clearRect(0,0,canWidth2,canHeight2);
        bornCoin2(30+270,315,6,coins4);
        bornCoin2(90+270,315,6,coins4);
        style(120,280,coins4,3);
        style(90,320,coins4,6);
        style(600,320,coins4,1);
        bornCoin2(760,150,7,coins4);
        bornCoin2(1080+30,30,5,coins4);
        style(1050+30,335,coins4,6);
        bornCoin2(1470,300,9,coins4);
    }
    if(coins4==20){
        //   ctx4.clearRect(0,0,canWidth2,canHeight2);
        style(50,305,coins4,7);
        style(200,305,coins4,7);
        style(350,305,coins4,7);
        style(500,305,coins4,7);
        style(650,305,coins4,7);
        style(800,305,coins4,7);
        style(950,305,coins4,7);
        style(1100,305,coins4,7);
        style(1250,305,coins4,7);
    }
}

function CreateCoins5(){
    if(coins5==1){
        style(420,290,coins5,5);
        style(200,320,coins5,7);
        style(700,320,coins5,4);
        style(1200,320,coins5,8);
        style(1360,260,coins5,6);
    }
    if( coins5==3 ){
        //   ctx5.clearRect(0,0,canWidth2,canHeight2);
        style(100,300,coins5,6);
        bornCoin3(130,0,5,coins5);   //x坐标，y坐标   z生成种类  p所画的层数
        style(730,280,coins5,2);
        style(1314,310,coins5,6);
        bornCoin3(130,0,5,coins5);
    }
    if(coins5==5){
        //   ctx5.clearRect(0,0,canWidth2,canHeight2);
        style(165,180,coins5,8);
        bornCoin3(580,0,5,coins5);
        style(550,305,coins5,6);

        style(900+100,290,coins5,1);
        bornCoin3(1020+100,135,7,coins5);
        bornCoin3(1100+100,135,7,coins5);
    }
    if(coins5==7){
        //  ctx5.clearRect(0,0,canWidth2,canHeight2);

        bornCoin3(40,270,8,coins5);
        bornCoin3(150,270,8,coins5);

        style(60,180,coins5,8);
        style(170,180,coins5,8);
        style(430,290,coins5,7);

        bornCoin3(40+700,270,8,coins5);
        bornCoin3(150+700,270,8,coins5);

        style(760,180,coins5,8);
        style(870,180,coins5,8);
        style(1220,290,coins5,6);
    }
    if(coins5==9){
        // ctx5.clearRect(0,0,canWidth2,canHeight2);

        bornCoin3(200,270,8,coins5);
        bornCoin3(300,270,8,coins5);

        style(210,180,coins5,6);

        bornCoin3(800+200,335,8,coins5);
        bornCoin3(900+200,335,8,coins5);

        style(810,320,coins5,3);
    }
    if(coins5==11){
        // ctx5.clearRect(0,0,canWidth2,canHeight2);
        style(220,280,coins5,2);
        style(467,160,coins5,5);
        bornCoin3(1310,60,5,coins5);
        style(1280,370,coins5,6);
    }
    if(coins5==13){
        //  ctx5.clearRect(0,0,canWidth2,canHeight2);
        bornCoin3(120,0,5,coins5);
        style(90,310,coins5,6);
        bornCoin3(650,365,8,coins5);
        bornCoin3(740,365,8,coins5);
        style(450,220,coins5,4);
        style(280,280,coins5,7);
        style(950,250,coins5,8);
        bornCoin3(30+1280,345,6,coins5);
        bornCoin3(90+1280,345,6,coins5);
        style(1280,220,coins5,7);
    }
    if(coins5==15){
        //  ctx5.clearRect(0,0,canWidth2,canHeight2);
        bornCoin3(150,30,5,coins5);
        style(120,340,coins5,6);
        bornCoin3(30+830,315,6,coins5);
        bornCoin3(90+830,315,6,coins5);
        style(400,270,coins5,4);
        style(1110,230,coins5,8);
        style(1420,320,coins5,7);
    }
    if(coins5==17){
        // ctx5.clearRect(0,0,canWidth2,canHeight2);
        bornCoin3(30+110,315,6,coins5);
        bornCoin3(90+110,315,6,coins5);
        style(180,180,coins5,8);
        bornCoin3(150+370,30,5,coins5);
        style(120+370,340,coins5,6);
        /*bornCoin3(30+770,315,6,coins5);
         bornCoin3(90+770,315,6,coins5);*/
        style(70+770,305,coins5,8);
        style(1050,345,coins5,6);

        bornCoin3(1300,325,9,coins5);
        bornCoin3(1450,325,9,coins5);
        style(1330,240,coins5,7);
    }
    if(coins5==19){
        // ctx5.clearRect(0,0,canWidth2,canHeight2);
        bornCoin3(400,285,6,coins5);
        style(280,270,coins5,8);
        style(410,180,coins5,8);
        style(590,270,coins5,8);
        bornCoin3(800,285,6,coins5);
        style(810,180,coins5,8);
        bornCoin3(110+1120,0,5,coins5);
        style(80+1120,310,coins5,6);
        bornCoin3(1490,255,6,coins5);
        style(1500,140,coins5,8);
        // bornCoin3(1110,255,6,coins5);
        //  style(1120,140,coins5,8);
    }

}

//金币生成
function bornCoin2(x,y,z,p){      //x坐标，y坐标   z生成种类  p所画的层数
    //console.log(Obstacle.Coins);
    if(z==0){
        //生成铜币
        ctx4.drawImage(Obstacle.Coins,39,355,36,38,x,y,28,28);
    }else if(z==1){
        //生成银币
        ctx4.drawImage(Obstacle.Coins,39,395,36,38,x,y,28,28);
    }else if(z==2){
        //生成金币
        ctx4.drawImage(Obstacle.Coins,1,315,36,38,x,y,28,28);
    }else if(z==3){
        //生成小熊头
        ctx4.drawImage(Obstacle.Coins,266,188,55,47,x+6,y+7,55*0.7,47*0.7);
        ctx4.drawImage(Obstacle.Coins,436,179,71,71,x,y,71*0.7,71*0.7);
    }else if(z==4){
        //生成狐狸头
        ctx4.drawImage(Obstacle.Coins,215,186,50,49,x+6,y+7,50*0.7,49*0.7);
        ctx4.drawImage(Obstacle.Coins,436,179,71,71,x,y,71*0.7,71*0.7);
    }else if(z==5){
        //生成柱子
        ctx4.drawImage(Obstacle.b,546,0,121,509,x,y-130,100,400);   //柱子  (x,270)
    }else if(z==6){
        //生成钉子
        ctx4.drawImage(Obstacle.c,368,1,90,128,x,y,90*0.8,128*0.8); //钉子
    }else if(z==7){
        //生成盒子
        ctx4.drawImage(Obstacle.d,0,288,87,80,x,y,65,58);   //盒子
    }
    else if(z==8){
        //生成怪物1
        ctx4.drawImage(Obstacle.a,133,93,106,98,x,y,106*0.9,98*0.9);   //怪物
    }else if(z==9){
        //生成闪电怪物
        ctx4.drawImage(Obstacle.d,258,214,46,53,x-20,y+10,46*0.9,53*0.9);   //怪物翅膀左
        ctx4.drawImage(Obstacle.d,304,153,58,56,x+70,y+5,58,56);   //怪物翅膀右;
        ctx4.drawImage(Obstacle.d,234,0,114,123,x,y,114*0.8,123*0.8);   //怪物
    }
    var bb=[];
    bb.push(x,y,z,p);
    CoinPosition.push(bb);
}
function bornCoin3(x,y,z,p){    //x坐标，y坐标   z生成种类  p所画的层数
    if(z==0){
        //生成铜币
        ctx5.drawImage(Obstacle.Coins,39,355,36,38,x,y,28,28);
    }else if(z==1){
        //生成银币
        ctx5.drawImage(Obstacle.Coins,39,395,36,38,x,y,28,28);
    }else if(z==2){
        //生成金币
        ctx5.drawImage(Obstacle.Coins,1,315,36,38,x,y,28,28);
    }else if(z==3){
        //生成小熊头
        ctx5.drawImage(Obstacle.Coins,266,188,55,47,x+6,y+7,55*0.7,47*0.7);
        ctx5.drawImage(Obstacle.Coins,436,179,71,71,x,y,71*0.7,71*0.7);
    }else if(z==4){
        //生成狐狸头
        ctx5.drawImage(Obstacle.Coins,215,186,50,49,x+6,y+7,50*0.7,49*0.7);
        ctx5.drawImage(Obstacle.Coins,436,179,71,71,x,y,71*0.7,71*0.7);
    }else if(z==5){
        //生成柱子
        ctx5.drawImage(Obstacle.b,546,0,121,509,x,y-130,100,400);   //柱子  (x,270)
    }else if(z==6){
        //生成钉子
        ctx5.drawImage(Obstacle.c,368,1,90,128,x,y,90*0.8,128*0.8); //钉子
    }else if(z==7){
        //生成盒子
        ctx5.drawImage(Obstacle.d,0,288,87,80,x,y,65,58);   //盒子
    }
    else if(z==8){
        //生成怪物
        ctx5.drawImage(Obstacle.a,133,93,106,98,x,y,106*0.9,98*0.9);   //怪物
    }else if(z==9){
        //生成闪电怪物
        ctx5.drawImage(Obstacle.d,258,214,46,53,x-20,y+10,46*0.9,53*0.9);   //怪物翅膀左
        ctx5.drawImage(Obstacle.d,304,153,58,56,x+70,y+5,58,56);   //怪物翅膀右;
        ctx5.drawImage(Obstacle.d,234,0,114,123,x,y,114*0.8,123*0.8);   //怪物
    }
    var bb=[];
    bb.push(x,y,z,p);
    CoinPosition.push(bb);
}

function style(numX,numY,cens,styles){  //初始位置  初始高度  层数  样式
    var num=numX;
    var high=numY;
    var cen=cens;
    if(cen%2==0){
        //在canvas4上画
        if(styles==1){
            //拱形
            bornCoin2(num-7,high,2,cen);
            bornCoin2(num+30-7,high,2,cen);
            bornCoin2(num+61-7,high-13,4,cen);
            bornCoin2(num+110-7,high-35,2,cen);
            bornCoin2(num+125-7,high-60,2,cen);
            bornCoin2(num+145-7,high-85,2,cen);
            bornCoin2(num+175-7,high-97,3,cen);
            bornCoin2(num+225-7,high-85,2,cen);
            bornCoin2(num+245-7,high-60,2,cen);
            bornCoin2(num+260-7,high-32,2,cen);
            bornCoin2(num+279+8-7,high-13,4,cen);
            bornCoin2(num+330+8-7,high,2,cen);
            bornCoin2(num+360+8-7,high,2,cen);
        }else if(styles==2){
            //M形
            bornCoin2(num,high,2,cen);
            bornCoin2(num+30,high,2,cen);
            bornCoin2(num+30,high-30,2,cen);
            bornCoin2(num+60,high-30,2,cen);
            bornCoin2(num+60,high-60,2,cen);
            bornCoin2(num+90,high-60,2,cen);
            bornCoin2(num+90,high-90,2,cen);
            bornCoin2(num+120,high-90,2,cen);
            bornCoin2(num+150,high-100,3,cen);
            bornCoin2(num+180+22,high-90,2,cen);
            bornCoin2(num+210+22,high-90,2,cen);
            bornCoin2(num+210+22,high-60,2,cen);
            bornCoin2(num+240+22,high-60,2,cen);
            bornCoin2(num+240+22,high-30,2,cen);
            bornCoin2(num+270+22,high-30,2,cen);
            bornCoin2(num+270+22,high,2,cen);
            bornCoin2(num+300+22,high,2,cen);
            bornCoin2(num+300+22,high-30,2,cen);
            bornCoin2(num+300+22+30,high-30,2,cen);
            bornCoin2(num+300+22+30,high-60,2,cen);
            bornCoin2(num+300+22+60,high-60,2,cen);
            bornCoin2(num+300+22+60,high-90,2,cen);
            bornCoin2(num+300+22+90,high-90,2,cen);
            bornCoin2(num+300+22+120,high-100,3,cen);
            bornCoin2(num+300+22+120+52,high-90,2,cen);
            bornCoin2(num+300+22+120+52+30,high-90,2,cen);
            bornCoin2(num+300+22+120+52+30,high-60,2,cen);
            bornCoin2(num+300+22+120+52+60,high-60,2,cen);
            bornCoin2(num+300+22+120+52+60,high-30,2,cen);
            bornCoin2(num+300+22+120+52+90,high-30,2,cen);
            bornCoin2(num+300+22+120+52+90,high,2,cen);
            bornCoin2(num+300+22+120+52+120,high,2,cen);
        }else if(styles==3){
            //上坡形
            bornCoin2(num,high,2,cen);
            bornCoin2(num+30,high,2,cen);
            bornCoin2(num+60,high,2,cen);
            bornCoin2(num+90,high,2,cen);
            bornCoin2(num+120,high,2,cen);
            bornCoin2(num+120,high-30,2,cen);
            bornCoin2(num+150,high-30,2,cen);
            bornCoin2(num+150,high-60,2,cen);
            bornCoin2(num+180,high-60,2,cen);
            bornCoin2(num+210,high-60,2,cen);
            bornCoin2(num+240,high-70,4,cen);
            bornCoin2(num+290,high-70,4,cen);
        }else if(styles==4){
            //下坡形
            bornCoin2(num,high,2,cen);
            bornCoin2(num,high-30,2,cen);
            bornCoin2(num+30,high,2,cen);
            bornCoin2(num+30,high-30,2,cen);
            bornCoin2(num+60,high,2,cen);
            bornCoin2(num+60,high-30,2,cen);
            bornCoin2(num+90,high,2,cen);
            bornCoin2(num+90,high-30,2,cen);
            bornCoin2(num+120,high,2,cen);
            bornCoin2(num+120,high-30,2,cen);
            bornCoin2(num+150,high,2,cen);
            bornCoin2(num+150,high+30,2,cen);
            bornCoin2(num+180,high,2,cen);
            bornCoin2(num+180,high+30,2,cen);
            bornCoin2(num+210,high,2,cen);
            bornCoin2(num+210,high+30,2,cen);
            bornCoin2(num+240,high+30,2,cen);
            bornCoin2(num+270,high+20,3,cen);
        }else if(styles==5){
            //五角形
            bornCoin2(num,high,2,cen);
            bornCoin2(num+25,high+12,3,cen);
            bornCoin2(num+25,high-35,3,cen);
            bornCoin2(num+72,high+12,3,cen);
            bornCoin2(num+72,high-35,3,cen);
            bornCoin2(num+120,high,2,cen);



        }else if(styles==6){
            //一线形  用于有障碍物的时候
            bornCoin2(num,high,2,cen);
            bornCoin2(num+30,high,2,cen);
            bornCoin2(num+58,high-10,3,cen);
            bornCoin2(num+108,high,2,cen);
            bornCoin2(num+138,high,2,cen);
        }else if(styles==7){
            //二线形
            bornCoin2(num,high,2,cen);
            bornCoin2(num,high-30,2,cen);
            bornCoin2(num+30,high,2,cen);
            bornCoin2(num+30,high-30,2,cen);
            bornCoin2(num+60,high,2,cen);
            bornCoin2(num+60,high-30,2,cen);
            bornCoin2(num+90,high,2,cen);
            bornCoin2(num+90,high-30,2,cen);
            bornCoin2(num+120,high,2,cen);
            bornCoin2(num+120,high-30,2,cen);
            bornCoin2(num+150,high,2,cen);
            bornCoin2(num+150,high-30,2,cen);
        }else if(styles==8){
            //六边形
            bornCoin2(num-28,high+10,2,cen);
            bornCoin2(num+50,high+10,2,cen);
            bornCoin2(num-5,high-27,2,cen);
            bornCoin2(num+27,high-27,2,cen);
            bornCoin2(num-5,high+46,2,cen);
            bornCoin2(num+27,high+46,2,cen);
            bornCoin2(num,high,3,cen);
        }
    }else {
        if(styles==1){
            //拱形
            bornCoin3(num-7,high,2,cen);
            bornCoin3(num+30-7,high,2,cen);
            bornCoin3(num+61-7,high-13,4,cen);
            bornCoin3(num+110-7,high-35,2,cen);
            bornCoin3(num+125-7,high-60,2,cen);
            bornCoin3(num+145-7,high-85,2,cen);
            bornCoin3(num+175-7,high-97,3,cen);
            bornCoin3(num+225-7,high-85,2,cen);
            bornCoin3(num+245-7,high-60,2,cen);
            bornCoin3(num+260-7,high-32,2,cen);
            bornCoin3(num+279+8-7,high-13,4,cen);
            bornCoin3(num+330+8-7,high,2,cen);
            bornCoin3(num+360+8-7,high,2,cen);
        }else if(styles==2){
            //M形
            bornCoin3(num,high,2,cen);
            bornCoin3(num+30,high,2,cen);
            bornCoin3(num+30,high-30,2,cen);
            bornCoin3(num+60,high-30,2,cen);
            bornCoin3(num+60,high-60,2,cen);
            bornCoin3(num+90,high-60,2,cen);
            bornCoin3(num+90,high-90,2,cen);
            bornCoin3(num+120,high-90,2,cen);
            bornCoin3(num+150,high-100,3,cen);
            bornCoin3(num+180+22,high-90,2,cen);
            bornCoin3(num+210+22,high-90,2,cen);
            bornCoin3(num+210+22,high-60,2,cen);
            bornCoin3(num+240+22,high-60,2,cen);
            bornCoin3(num+240+22,high-30,2,cen);
            bornCoin3(num+270+22,high-30,2,cen);
            bornCoin3(num+270+22,high,2,cen);
            bornCoin3(num+300+22,high,2,cen);
            bornCoin3(num+300+22,high-30,2,cen);
            bornCoin3(num+300+22+30,high-30,2,cen);
            bornCoin3(num+300+22+30,high-60,2,cen);
            bornCoin3(num+300+22+60,high-60,2,cen);
            bornCoin3(num+300+22+60,high-90,2,cen);
            bornCoin3(num+300+22+90,high-90,2,cen);
            bornCoin3(num+300+22+120,high-100,3,cen);
            bornCoin3(num+300+22+120+52,high-90,2,cen);
            bornCoin3(num+300+22+120+52+30,high-90,2,cen);
            bornCoin3(num+300+22+120+52+30,high-60,2,cen);
            bornCoin3(num+300+22+120+52+60,high-60,2,cen);
            bornCoin3(num+300+22+120+52+60,high-30,2,cen);
            bornCoin3(num+300+22+120+52+90,high-30,2,cen);
            bornCoin3(num+300+22+120+52+90,high,2,cen);
            bornCoin3(num+300+22+120+52+120,high,2,cen);
        }else if(styles==3){
            //上坡形
            bornCoin3(num,high,2,cen);
            bornCoin3(num+30,high,2,cen);
            bornCoin3(num+60,high,2,cen);
            bornCoin3(num+90,high,2,cen);
            bornCoin3(num+120,high,2,cen);
            bornCoin3(num+120,high-30,2,cen);
            bornCoin3(num+150,high-30,2,cen);
            bornCoin3(num+150,high-60,2,cen);
            bornCoin3(num+180,high-60,2,cen);
            bornCoin3(num+210,high-60,2,cen);
            bornCoin3(num+240,high-70,4,cen);
            bornCoin3(num+290,high-70,4,cen);
        }else if(styles==4){
            //下坡形
            bornCoin3(num,high,2,cen);
            bornCoin3(num,high-30,2,cen);
            bornCoin3(num+30,high,2,cen);
            bornCoin3(num+30,high-30,2,cen);
            bornCoin3(num+60,high,2,cen);
            bornCoin3(num+60,high-30,2,cen);
            bornCoin3(num+90,high,2,cen);
            bornCoin3(num+90,high-30,2,cen);
            bornCoin3(num+120,high,2,cen);
            bornCoin3(num+120,high-30,2,cen);
            bornCoin3(num+150,high,2,cen);
            bornCoin3(num+150,high+30,2,cen);
            bornCoin3(num+180,high,2,cen);
            bornCoin3(num+180,high+30,2,cen);
            bornCoin3(num+210,high,2,cen);
            bornCoin3(num+210,high+30,2,cen);
            bornCoin3(num+240,high+30,2,cen);
            bornCoin3(num+270,high+20,3,cen);
        }else if(styles==5){
            //五角形
            bornCoin3(num,high,2,cen);
            bornCoin3(num+25,high+12,3,cen);
            bornCoin3(num+25,high-35,3,cen);
            bornCoin3(num+72,high+12,3,cen);
            bornCoin3(num+72,high-35,3,cen);
            bornCoin3(num+120,high,2,cen);
        }else if(styles==6){
            //一线形  用于有障碍物的时候
            bornCoin3(num,high,2,cen);
            bornCoin3(num+30,high,2,cen);
            bornCoin3(num+58,high-10,3,cen);
            bornCoin3(num+108,high,2,cen);
            bornCoin3(num+138,high,2,cen);
        }else if(styles==7){
            //二线形
            bornCoin3(num,high,2,cen);
            bornCoin3(num,high-30,2,cen);
            bornCoin3(num+30,high,2,cen);
            bornCoin3(num+30,high-30,2,cen);
            bornCoin3(num+60,high,2,cen);
            bornCoin3(num+60,high-30,2,cen);
            bornCoin3(num+90,high,2,cen);
            bornCoin3(num+90,high-30,2,cen);
            bornCoin3(num+120,high,2,cen);
            bornCoin3(num+120,high-30,2,cen);
            bornCoin3(num+150,high,2,cen);
            bornCoin3(num+150,high-30,2,cen);
        }else if(styles==8){
            //六边形
            bornCoin3(num-28,high+10,2,cen);
            bornCoin3(num+50,high+10,2,cen);
            bornCoin3(num-5,high-27,2,cen);
            bornCoin3(num+27,high-27,2,cen);
            bornCoin3(num-5,high+46,2,cen);
            bornCoin3(num+27,high+46,2,cen);
            bornCoin3(num,high,3,cen);
        }
    }
}

