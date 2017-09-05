/**
 * Created by lvjin on 2017/5/26.
 */

var can1;
var ctx1;

var can2;
var ctx2;

var can3;
var ctx3;

var can4;
var ctx4;

var can5;
var ctx5;

var canWidth;
var canHeight;

var canWidth2; //canvas2的宽
var canHeight2;

var canWidth3;
var canHeight3;

var canWidth4;
var canHeight4;


var canWidth5;
var canHeight5;

var ground=345;    //设置y值为400的时候是地面


var dimian;
var act=0;    //运动的状态判断，当act为0的时候是正常的跑，当act为1的时候为向上跳，当act为2的时候为下蹲，当act为3的时候是二段跳，当act=4的时候是三段跳，当cat=5的时候为角色二段跳三段跳之后下落的翻滚


var mapReset=0; //地图转换次数
var coins4=0;
var coins5=1;


var mnum1=0;
var mnum2=1600;


var map; //地图1
var Obstacle; //障碍物,怪物

var bgPic=new Image();  //背景
var bgPicDm=new Image();  //跑道
var DPscore=new Image();  //表现分，距离的背景

var Checkpoint;   //关卡

var CoinPosition=[];

var Gameover=0;  //游戏结束
var Suspend=true;   //暂停

var MapPaodao=0;



var jqxs;      //金枪小帅
var jqxsI=0;
var jqxsImg;
var jqxsImage=[];
var jqxsCloak=[[561,1],[641,1],[721,1],[799,1],[875,1],[560,42],[647,47],[728,49],[810,47],[562,79],[641,84],[723,88]]; //金枪小帅披风
var jqxsCloakSize=[[78,37],[78,44],[77,48],[74,47],[74,45],[84,35],[81,35],[82,37],[80,45],[77,49],[80,36],[79,36]];//金枪小帅披风的大小
var jqxsJumpCloak=[[192,152],[352,166],[417,165],[493,178],[560,130],[635,122],[712,125],[186,108],[48,146],[123,138],[60,201],[0,220]];        //金枪小帅跳跃披风坐标
var jqxsJumpCloakSize=[[71,52],[63,59],[73,47],[76,38],[73,47],[76,38],[76,40],[76,40],[72,53],[66,72],[57,78],[59,75]];    //金枪小帅跳跃披风的大小



var Total=0;
var TotalDis=0;
var GoldCoinNum=0;      //吃到的金币的数量
var SilverCoinNum=0;    //吃到银币的数量
var CopperCoinNum=0;    //吃到铜币的数量
var BearHeadNum=0;      //吃到熊头的数量
var FoxHeadNum=0;       //吃到狐狸头的数量

var StampBoxNum=0;      //踩盒子的数量
var StampMonstrNum=0;   //踩怪物的数量

var Totime;   //定时器


//用来记录每次跑道高度变化时的位置
var Position=[[18*80+50,355,18*80+50,0,2],[1600+9*80+50,385,1600+9*80+50,1,3],
    [1600*2+4*80+50,355,1600*2+4*80+50,2,2],[1600*2+15*80+50,325,1600*2+15*80+50,2,2],
    [1600*3+15*80+50,355,1600*3+15*80+50,3,3],[1600*4+5*80+50,385,1600*4+5*80+50,4,2],
    [1600*4+10*80+50,325,1600*4+10*80+50,4,2],[1600*5+3*80+50,325,1600*5+50,5,3],
    [1600*6+7*80+50,355,1600*6+4*80+50,6,2],[1600*6+16*80+50,325,1600*6+13*80+50,6,2],
    [1600*7+14*80+50,325,1600*7+12*80+50,7,3],[1600*7+19*80+50,325,1600*7+16*80+50,7,3],
    [1600*8+14*80+50,325,1600*8+12*80+50,8,2],[1600*9+ 5*80+50,385,1600*9+5*80+50,9,3],
    [1600*9+15*80+50,325,1600*9+15*80+50,9,3],[1600*11+30  ,325,1600*10+15*80+50,10,2],
    [1600*11+12*80+50,385,1600*11+12*80+50,11,3],[1600*12+2*80+50,325,1600*12+2*80+50,12,2],
    [1600*12+8*80+50,355,1600*12+8*80+50,12,2],[1600*12+18*80+50,325,1600*12+18*80+50,12,2],
    [1600*13+7*80+50,415,1600*13+5*80+50,13,3],[1600*13+10*80+50,325,1600*13+10*80+50,13,3],
    [1600*13+15*80+50,415,1600*13+13*80+50,13,3],[1600*13+18*80+50,325,1600*13+18*80+50,13,3],
    [1600*14+12*80+50,355,1600*14+8*80+50,14,2],[1600*15+7*80+50,385,1600*15+5*80+50,15,3],
    [1600*15+12*80+50,325,1600*15+12*80+50,15,3],[1600*15+15*80+50,355,1600*15+15*80+50,15,3],
    [1600*16+4*80+50,385,1600*16+2*80+50,16,2],[1600*16+11*80+50,355,1600*16+9*80+50,16,2],
    [1600*16+17*80+50,385,1600*16+17*80+50,16,2],[1600*17+3*80+50,355,1600*17+3*80+50,17,3],
    [1600*17+9*80+50,385,1600*17+9*80+50,17,3],[1600*18+20  ,385,1600*17+15*80+50,17,3],
    [1600*18+5*80+50,355,1600*18+5*80+50,18,2],[1600*19+10   ,355,1600*18+17*80+50,18,2],
    [1600*19+13*80+50,325,1600*19+13*80+50,19,3],[1600*19+19*80+50,355,1600*19+19*80+50,19,3],
    [1600*20+1800   ,450,1600*20+19*80+50,20,2]
];


//音乐声音
var gameBgm=document.getElementById("gameBgm");    //游戏背景音乐
var FirJumpm=document.getElementById("FirJumpm");   //第一次跳跃的声音
var SecJumpm=document.getElementById("SecJumpm");    //第二次跳跃的声音
var landm=document.getElementById("landm");       //落地的声音

//控制声音大小
gameBgm.volume=0;


var OneMap2=true;
var OneMap3=true;
var OneCoin2=true;
var OneCoin3=true;
var score=0;


var speed=10;

var timeI=0;
var protection;    //保护罩

window.onload=game;


function game() {
    //游戏初始化
    init();

}

function init() {
    can1=document.getElementById("canvas1");
    can2=document.getElementById("canvas2");
    can3=document.getElementById("canvas3");
    can4=document.getElementById("canvas4");
    can5=document.getElementById("canvas5");


    ctx1=can1.getContext("2d");   //绘制人物
    ctx2=can2.getContext("2d");	  //绘制地图
    ctx3=can3.getContext("2d");	  //绘制地图
    ctx4=can4.getContext("2d");	  //绘制地图
    ctx5=can5.getContext("2d");	  //绘制地图

    //在canvas里面绘制图片
    canWidth=can1.width;
    canHeight=can1.height;

    canWidth2=can2.width;   //4000
    canHeight2=can2.height;

    canWidth3=can3.width;   //4000
    canHeight3=can3.height;

    canWidth4=can4.width;   //4000
    canHeight4=can4.height;

    canWidth5=can5.width;   //4000
    canHeight5=can5.height;

    bgPic.src="../images/Background_06_1.png";
    bgPicDm.src="../images/Item_05_New.png";
    DPscore.src="../images/ui_game_n.png";
    map=new mapObj();
    map.init();

    Obstacle=new ObstacleObj();
    Obstacle.init();

    jqxs=new jqxsObj();
    jqxs.init();

    //金枪小帅
    jqxsImg=new Image();
    jqxsImg.src="../images/character_JQ.png";
    for(var i=0;i<12;i++){
        jqxsImage[i]=new Image();
        jqxsImage[i].src="../images/paoku00"+(188+i)+".png";
    }

    //保护罩
    protection=new Image();
    protection.src="../images/effect_map.png";
}

function gameloop(){
    Totime=setInterval(function () {


    if(Gameover==0){
        speed=0;
        removeEventListener("keyup",doKeyup);
        removeEventListener("keydown",doKeydown);
        jqxsI=0;
        Suspend=true;
        console.log(GoldCoinNum);
        Setupgames();
        ResetGame();
        clearInterval(Totime);
    }
    if(Gameover==2){
        ctx1.drawImage(protection,890,229,100,99,jqxs.x,jqxs.h-130,93*1.5,95*1.5);
    }


        //3星闯关达成
        if(Stars==3){
            Gameover=0;
        }
    if(!Suspend){
        timeI++;
        if(timeI>2){
            timeI=0;
            ctx1.clearRect(0,0,canWidth,canHeight);
            jqxs.draw();
            jqxsI++;
            if(jqxsI>11){
                jqxsI=0;
            }

            //任务
            if(Checkpoint==1){
                //获得金币
                ctx1.drawImage(DPscore,560,2,266,64,390,5,266,64*0.78);
                ctx1.beginPath();
                ctx1.fillStyle="#fff";
                ctx1.font="bold 24px 宋体";
                ctx1.fillText("收集",420,37);
                ctx1.font="22px  Times New Roman";
                ctx1.fillText("/ 150",570,37);
                ctx1.drawImage(Obstacle.Coins,1,315,36,38,475,9,36,38); //金币
                ctx1.fillStyle="#FFE204";
                ctx1.font="900 26px  Times New Roman";
                ctx1.fillText(GoldCoinNum,520,38);

                Success(GoldCoinNum);
            }else if(Checkpoint==2){
                //获得熊头
                ctx1.drawImage(DPscore,560,2,266,64,390,5,266,64*0.78);
                ctx1.beginPath();
                ctx1.fillStyle="#fff";
                ctx1.font="bold 24px 宋体";
                ctx1.fillText("收集",420,37);
                ctx1.font="22px  Times New Roman";
                ctx1.fillText("/ 200",585,37);
                ctx1.drawImage(Obstacle.Coins,266,188,55,47,475+6,5+7,55*0.7,47*0.7);
                ctx1.drawImage(Obstacle.Coins,436,179,71,71,475,5,71*0.7,71*0.7);
                ctx1.fillStyle="#FFE204";
                ctx1.font="900 26px  Times New Roman";
                ctx1.fillText(BearHeadNum,535,38);

                Success(BearHeadNum);
            }else if(Checkpoint==3){
                //生成狐狸头
                ctx1.drawImage(DPscore,560,2,266,64,390,5,266,64*0.78);
                ctx1.beginPath();
                ctx1.fillStyle="#fff";
                ctx1.font="bold 24px 宋体";
                ctx1.fillText("收集",420,37);
                ctx1.font="22px  Times New Roman";
                ctx1.fillText("/ 200",585,37);
                ctx1.drawImage(Obstacle.Coins,215,186,50,49,475+6,5+7,50*0.7,49*0.7);
                ctx1.drawImage(Obstacle.Coins,436,179,71,71,475,5,71*0.7,71*0.7);
                ctx1.fillStyle="#FFE204";
                ctx1.font="900 26px  Times New Roman";
                ctx1.fillText(FoxHeadNum,535,38);

                Success(FoxHeadNum);
            }


        }
        map.draw();
        Obstacle.draw();
        runmap();
        eatCoin();
        window.addEventListener('keyup', doSuspend);
    }
    },1000/60)
}

//地图运行
function runmap(){
    var map2=document.getElementById("map2");
    var map3=document.getElementById("map3");

    map2.style.left=mnum1+"px";
    map3.style.left=mnum2+"px";

    mnum1-=speed;
    mnum2-=speed;
    TotalDis+=speed;
    Total=TotalDis+jqxs.x;

    if(Total>50000){
        Total=50000;
    }

    if(Gameover!=0){
        MapPaodao+=0.25;
        score=GoldCoinNum*20+SilverCoinNum*15+CopperCoinNum*10+BearHeadNum*50+FoxHeadNum*40+StampBoxNum*40+StampMonstrNum*50;
    }


    if(mnum1<=-1600){
        mnum1=1600;
        mapReset++;
        coins4+=2;
        OneMap2=true;
        OneCoin2=true;
        ctx4.clearRect(0,0,canWidth2,canHeight2);
        // console.log(aa);

    }
    if(mnum2<=-1600){
        mnum2=1600;
        mapReset++;
        coins5+=2;
        OneCoin3=true;
        OneMap3=true;
        ctx5.clearRect(0,0,canWidth2,canHeight2);
        // console.log(aa);
    }
    RenRunwayCollision(Position);

}


