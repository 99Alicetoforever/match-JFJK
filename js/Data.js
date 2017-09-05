/**
 * Created by Administrator on 2017/8/28.
 */
var Stars=0;  //星星数量

var CoinTotal=300;  //金币总数
var StarsTotal=0;  //星星总数
var Levelopen=1;   //关卡开启判断
var Checkpoints=[0,0,0,0,0,0,0]; //每个关卡的星星数量



var ProtectiveCover=0;  //保护罩
var tongguan=0;  //3星通关
var DoubleCoins=0; //双倍金币

//保护罩     为1表示使用 ， 0表示未使用
/*  flag_too2    3星通关
 flag_too3    双倍金币            */

//闯关成功判断
function Success(num) {
    var n=num;
    if(Checkpoint==1){
        //第一关
        if(n>=50 && n<100){
            Stars=1;
        }else if(n>=100 && n<150){
            Stars=2;
        }else if(n>=150){
            Stars=3;
            Gameover=0;
        }
    }else if(Checkpoint==2){
        //第二关
        //第一关
        if(n>=100 && n<150){
            Stars=1;
        }else if(n>=150 && n<200){
            Stars=2;
        }else if(n>=200){
            Stars=3;
            Gameover=0;
        }
    }
    else if(Checkpoint==3){
        //第二关
        //第一关
        if(n>=100 && n<150){
            Stars=1;
        }else if(n>=150 && n<200){
            Stars=2;
        }else if(n>=200){
            Stars=3;
            Gameover=0;
        }
    }
}
