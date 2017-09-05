var  tempX=false;
var  ActivationAction=false;

function eatCoin() {
    if(tempX){
        if(jqxs.x<200 && Gameover!=0){
            jqxs.x++;
        }else if(jqxs.x=200){
            tempX=false;
        }
    }
    if(ActivationAction){
        act=5;
        jqxsI=9;
        ActivationAction=false;
    }
    for(var i=0;i<CoinPosition.length;i++){
        if(act==1 || act==0 || act==3 || act==4 || act==5  || act==6){

            //在人物站立状态   人宽100，高90
            if(CoinPosition[i][3]%2==0){
                if(CoinPosition[i][2]==2) {
                    //吃到金币
                    if (Total + 100 > CoinPosition[i][0] + CoinPosition[i][3] * 1600 && Total + 100 < CoinPosition[i][0] + 28 + CoinPosition[i][3] * 1600 && jqxs.h - 90 < CoinPosition[i][1] + 28 && jqxs.h > CoinPosition[i][1]) {
                        //金币的最左端<人的最右端<金币的最右边    人的最上端<金币的最下端  人的最下端>金币的最上端
                        ctx4.clearRect(CoinPosition[i][0], CoinPosition[i][1], 28, 28);
                        CoinPosition[i].shift();
                        GoldCoinNum = GoldCoinNum + 1;    //金币加1

                    }
                }else if(CoinPosition[i][2]==3){
                    //吃到熊头
                    if(Total+100>CoinPosition[i][0]+CoinPosition[i][3]*1600  && Total+100<CoinPosition[i][0]+(71*0.7)+CoinPosition[i][3]*1600  && jqxs.h-90<CoinPosition[i][1]+(71*0.7) && jqxs.h>CoinPosition[i][1]  ){
                        //熊头最左边<人的最有右端<熊的最右边      人的最上端<熊头的最下端      人的最下端>熊头的最上端
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],(71*0.7),(71*0.7));

                        CoinPosition[i].shift();
                        BearHeadNum=BearHeadNum+1;
                    }
                }else if(CoinPosition[i][2]==4){
                    //吃到狐狸头
                    if(Total+100>CoinPosition[i][0]+CoinPosition[i][3]*1600  && Total+100<CoinPosition[i][0]+(71*0.7)+CoinPosition[i][3]*1600  && jqxs.h-90<CoinPosition[i][1]+(71*0.7) && jqxs.h>CoinPosition[i][1]  ){
                        //狐狸头最左边<人的最有右端<狐狸的最右边      人的最上端<狐狸头的最下端      人的最下端>狐狸头的最上端
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],(71*0.7),(71*0.7));
                        CoinPosition[i].shift();
                        FoxHeadNum=FoxHeadNum+1;
                    }
                }else if(CoinPosition[i][2]==6){
                    //碰到钉子
                    if(((Total+90>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+90<CoinPosition[i][0]+CoinPosition[i][3]*1600+(90*0.75))) && jqxs.h>CoinPosition[i][1]){
                        //钉子的最左端<人的最右端<钉子的最右端       人的最低点<钉子的最高点
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }
                        console.log("游戏结束钉子");
                    }
                }else if(CoinPosition[i][2]==9) {
                    //碰到闪电怪
                    if (Total + 100 >= CoinPosition[i][0] + CoinPosition[i][3] * 1600 - 20 && Total + 100 < CoinPosition[i][0] + CoinPosition[i][3] * 1600 + 150 - 20 && jqxs.h - 90 < CoinPosition[i][1] + (123 * 0.8) && jqxs.h > CoinPosition[i][1]) {
                        //闪电怪的最左端<人的最右端<闪电怪的最右端   人的最上端<闪电怪的最下端      人的最下端>闪电怪的最上端
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }
                        console.log("游戏结束闪电");
                    }
                }else if(CoinPosition[i][2]==5){
                    //碰到柱子
                    if(Total+100>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+100<CoinPosition[i][0]+100+CoinPosition[i][3]*1600 ){
                        //碰到柱子并且没有下蹲，所以人物停止不动
                        jqxs.x-=speed;
                        if(jqxs.x<=0){
                            console.log("游戏结束");
                            jqxs.x=0;
                            Gameover=0;
                        }
                    }
                }else if(CoinPosition[i][2]==8){
                    //碰到怪物
                    if(Total+100>=(CoinPosition[i][0]+CoinPosition[i][3]*1600)  && Total+100<=(CoinPosition[i][0]+CoinPosition[i][3]*1600)+(106*0.9) && jqxs.h>CoinPosition[i][1]){
                        //人物的左侧碰到怪物的左侧，人物死亡
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }

                    }else if(  Total+100>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<=CoinPosition[i][0]+(106*0.9)+CoinPosition[i][3]*1600 && jqxs.h<CoinPosition[i][1]){
                        //人物越过怪物，没有任何事
                        console.log("越过怪物");
                    }else if( Total<=CoinPosition[i][0]+(106*0.9)+CoinPosition[i][3]*1600  && Total+20>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && jqxs.h>CoinPosition[i][1]){
                        //怪物死亡
                        console.log("怪物死亡");
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],106*0.9,98*0.9);
                        act=6;
                        jqxsI=0;
                        CoinPosition[i].shift();
                        StampMonstrNum=StampMonstrNum+1;
                    }
                }else if(CoinPosition[i][2]==7){
                    //碰到盒子
                    if(((Total+100>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+100<CoinPosition[i][0]+CoinPosition[i][3]*1600+65) || (Total>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<CoinPosition[i][0]+CoinPosition[i][3]*1600+65)) && jqxs.h-110<CoinPosition[i][1]+58 && jqxs.h-110>CoinPosition[i][1]  && jqxs.h<jqxs.y){
                        console.log("正下方碰到盒子");
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],65,58);
                        CoinPosition[i].shift();
                        StampBoxNum=StampBoxNum+1;
                        ActivationAction=true;
                    }else if(((Total+100>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+100<CoinPosition[i][0]+CoinPosition[i][3]*1600+65) ||(Total>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<CoinPosition[i][0]+CoinPosition[i][3]*1600+65)) && jqxs.h>CoinPosition[i][1] && jqxs.h<CoinPosition[i][1]+58  && jqxs.h<jqxs.y){
                        console.log("正上方碰到盒子");
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],65,58);
                        CoinPosition[i].shift();
                        StampBoxNum=StampBoxNum+1;

                    }else if(Total+100>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+100<CoinPosition[i][0]+CoinPosition[i][3]*1600+65 && ((jqxs.h-100<CoinPosition[i][1]+58 && jqxs.h-100>=CoinPosition[i][1]))){
                        //正前方碰到盒子
                        console.log("正前方碰到盒子");
                        jqxs.x=jqxs.x-(speed*1.43);
                        if(jqxs.x<=0){
                            jqxs.x=0;
                            console.log("游戏结束盒子");
                            Gameover=0;
                        }
                    }else if(Total==CoinPosition[i][0]+CoinPosition[i][3]*1600+65){
                        tempX=true;
                    }
                }
            }else {
                if(CoinPosition[i][2]==2) {
                    //吃到金币
                    if (Total + 100 > CoinPosition[i][0] + CoinPosition[i][3] * 1600 && Total + 100 < CoinPosition[i][0] + 28 + CoinPosition[i][3] * 1600 && jqxs.h - 90 < CoinPosition[i][1] + 28 && jqxs.h > CoinPosition[i][1]) {
                        //金币的最左端<人的最右端<金币的最右边    人的最上端<金币的最下端  人的最下端>金币的最上端
                        ctx5.clearRect(CoinPosition[i][0], CoinPosition[i][1], 28, 28);
                        CoinPosition[i].shift();
                        GoldCoinNum = GoldCoinNum + 1;    //金币加1
                    }
                }else if(CoinPosition[i][2]==3){
                    //吃到熊头
                    if(Total+100>CoinPosition[i][0]+CoinPosition[i][3]*1600  && Total+100<CoinPosition[i][0]+(71*0.7)+CoinPosition[i][3]*1600  && jqxs.h-90<CoinPosition[i][1]+(71*0.7) && jqxs.h>CoinPosition[i][1]  ){
                        //熊头最左边<人的最有右端<熊的最右边      人的最上端<熊头的最下端      人的最下端>熊头的最上端
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],(71*0.7),(71*0.7));
                        CoinPosition[i].shift();
                        BearHeadNum=BearHeadNum+1;
                    }
                }else if(CoinPosition[i][2]==4){
                    //吃到狐狸头
                    if(Total+100>CoinPosition[i][0]+CoinPosition[i][3]*1600  && Total+100<CoinPosition[i][0]+(71*0.7)+CoinPosition[i][3]*1600  && jqxs.h-90<CoinPosition[i][1]+(71*0.7) && jqxs.h>CoinPosition[i][1]  ){
                        //狐狸头最左边<人的最有右端<狐狸的最右边      人的最上端<狐狸头的最下端      人的最下端>狐狸头的最上端
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],(71*0.7),(71*0.7));
                        CoinPosition[i].shift();
                        FoxHeadNum=FoxHeadNum+1;
                    }
                }else if(CoinPosition[i][2]==6){
                    //碰到钉子
                    if(((Total+90>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+90<CoinPosition[i][0]+CoinPosition[i][3]*1600+(90*0.75))) && jqxs.h>CoinPosition[i][1]){
                        //钉子的最左端<人的最右端<钉子的最右端       人的最低点<钉子的最高点
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        };
                        console.log("游戏结束钉子");
                    }
                }else if(CoinPosition[i][2]==9) {
                    //碰到闪电怪
                    if (Total + 100 >= CoinPosition[i][0] + CoinPosition[i][3] * 1600 - 20 && Total + 100 < CoinPosition[i][0] + CoinPosition[i][3] * 1600 + 150 - 20 && jqxs.h - 90 < CoinPosition[i][1] + (123 * 0.8) && jqxs.h > CoinPosition[i][1]) {
                        //闪电怪的最左端<人的最右端<闪电怪的最右端   人的最上端<闪电怪的最下端      人的最下端>闪电怪的最上端
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }
                        console.log("游戏结束闪电");
                    }
                }else if(CoinPosition[i][2]==5){
                    //碰到柱子
                    if(Total+100>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+100<CoinPosition[i][0]+100+CoinPosition[i][3]*1600 ){
                        //碰到柱子并且没有下蹲，所以人物停止不动
                        jqxs.x-=speed;
                        if(jqxs.x<=0){
                            console.log("游戏结束");
                            Gameover=0;
                        }
                    }
                }else if(CoinPosition[i][2]==8){
                    //碰到怪物
                    if(Total+100>=(CoinPosition[i][0]+CoinPosition[i][3]*1600)  && Total+100<=(CoinPosition[i][0]+CoinPosition[i][3]*1600)+(106*0.9) && jqxs.h>CoinPosition[i][1]){
                        //人物的左侧碰到怪物的左侧，人物死亡
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }

                    }else if(  Total+100>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<=CoinPosition[i][0]+(106*0.9)+CoinPosition[i][3]*1600 && jqxs.h<CoinPosition[i][1]){
                        //人物越过怪物，没有任何事
                        console.log("越过怪物");
                    }else if( Total<=CoinPosition[i][0]+(106*0.9)+CoinPosition[i][3]*1600  && Total+20>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && jqxs.h>CoinPosition[i][1]){
                        //怪物死亡
                        console.log("怪物死亡");
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],106*0.9,98*0.9);
                        act=6;
                        jqxsI=0;
                        CoinPosition[i].shift();
                        StampMonstrNum=StampMonstrNum+1;
                    }
                }else if(CoinPosition[i][2]==7){
                    //碰到盒子
                    if(((Total+100>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+100<CoinPosition[i][0]+CoinPosition[i][3]*1600+65) || (Total>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<CoinPosition[i][0]+CoinPosition[i][3]*1600+65)) && jqxs.h-110<CoinPosition[i][1]+58 && jqxs.h-110>CoinPosition[i][1]  && jqxs.h<jqxs.y){
                        console.log("正下方碰到盒子");
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],65,58);
                        StampBoxNum=StampBoxNum+1;
                        CoinPosition[i].shift();
                        ActivationAction=true;
                    }else if(((Total+100>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+100<CoinPosition[i][0]+CoinPosition[i][3]*1600+65) ||(Total>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<CoinPosition[i][0]+CoinPosition[i][3]*1600+65)) && jqxs.h>CoinPosition[i][1] && jqxs.h<CoinPosition[i][1]+58  && jqxs.h<jqxs.y){
                        console.log("正上方碰到盒子");
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],65,58);
                        CoinPosition[i].shift();
                        StampBoxNum=StampBoxNum+1;

                    }else if(Total+100>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+100<CoinPosition[i][0]+CoinPosition[i][3]*1600+65 && ((jqxs.h-100<CoinPosition[i][1]+58 && jqxs.h-100>=CoinPosition[i][1]))){
                        //正前方碰到盒子
                        console.log("正前方碰到盒子");
                        jqxs.x=jqxs.x-(speed*1.43);
                        if(jqxs.x<=0){
                            jqxs.x=0;
                            console.log("游戏结束盒子");
                            Gameover=0;
                        }
                    }else if(Total==CoinPosition[i][0]+CoinPosition[i][3]*1600+65){
                        tempX=true;
                    }
                }
            }
        }else if(act==2){
            //人躺着高70   120
            if(CoinPosition[i][3]%2==0){
                if(CoinPosition[i][2]==2) {
                    //吃到金币
                    if (Total + 120 > CoinPosition[i][0] + CoinPosition[i][3] * 1600 && Total + 120 < CoinPosition[i][0] + 28 + CoinPosition[i][3] * 1600 && jqxs.h - 70 < CoinPosition[i][1] + 28 && jqxs.h > CoinPosition[i][1]) {
                        //金币的最左端<人的最右端<金币的最右边    人的最上端<金币的最下端  人的最下端>金币的最上端
                        ctx4.clearRect(CoinPosition[i][0], CoinPosition[i][1], 28, 28);
                        CoinPosition[i].shift();
                        GoldCoinNum = GoldCoinNum + 1;    //金币加1
                    }
                }else if(CoinPosition[i][2]==3){
                    //吃到熊头
                    if(Total+120>CoinPosition[i][0]+CoinPosition[i][3]*1600  && Total+120<CoinPosition[i][0]+(71*0.7)+CoinPosition[i][3]*1600  && jqxs.h-70<CoinPosition[i][1]+(71*0.7) && jqxs.h>CoinPosition[i][1]  ){
                        //熊头最左边<人的最有右端<熊的最右边      人的最上端<熊头的最下端      人的最下端>熊头的最上端
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],(71*0.7),(71*0.7));
                        CoinPosition[i].shift();
                        BearHeadNum=BearHeadNum+1;
                    }
                }else if(CoinPosition[i][2]==4){
                    //吃到狐狸头
                    if(Total+120>CoinPosition[i][0]+CoinPosition[i][3]*1600  && Total+120<CoinPosition[i][0]+(71*0.7)+CoinPosition[i][3]*1600  && jqxs.h-70<CoinPosition[i][1]+(71*0.7) && jqxs.h>CoinPosition[i][1]  ){
                        //狐狸头最左边<人的最有右端<狐狸的最右边      人的最上端<狐狸头的最下端      人的最下端>狐狸头的最上端
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],(71*0.7),(71*0.7));
                        CoinPosition[i].shift();
                        FoxHeadNum=FoxHeadNum+1;
                    }
                }else if(CoinPosition[i][2]==6){
                    //碰到钉子
                    if(((Total+110>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+110<CoinPosition[i][0]+CoinPosition[i][3]*1600+(90*0.75))) && jqxs.h>CoinPosition[i][1]){
                        //钉子的最左端<人的最右端<钉子的最右端       人的最低点<钉子的最高点
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }
                        console.log("游戏结束钉子");
                    }
                }else if(CoinPosition[i][2]==9) {
                    //碰到闪电怪
                    if (Total + 120 >= CoinPosition[i][0] + CoinPosition[i][3] * 1600 - 20 && Total + 120 < CoinPosition[i][0] + CoinPosition[i][3] * 1600 + 150 - 20 && jqxs.h - 70 < CoinPosition[i][1] + (123 * 0.8) && jqxs.h > CoinPosition[i][1]) {
                        //闪电怪的最左端<人的最右端<闪电怪的最右端   人的最上端<闪电怪的最下端      人的最下端>闪电怪的最上端
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }
                        console.log("游戏结束闪电");
                    }
                }else if(CoinPosition[i][2]==5){
                    //碰到柱子
                    if(Total+120>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+120<CoinPosition[i][0]+100+CoinPosition[i][3]*1600 ){
                        //碰到柱子并且没有下蹲，所以人物停止不动
                        tempX=true;
                    }
                }else if(CoinPosition[i][2]==8){
                    //碰到怪物
                    if(Total+120>=(CoinPosition[i][0]+CoinPosition[i][3]*1600)  && Total+120<=(CoinPosition[i][0]+CoinPosition[i][3]*1600)+(106*0.9) && jqxs.h>CoinPosition[i][1]){
                        //人物的左侧碰到怪物的左侧，人物死亡
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }

                    }else if(  Total+120>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<=CoinPosition[i][0]+(106*0.9)+CoinPosition[i][3]*1600 && jqxs.h<CoinPosition[i][1]){
                        //人物越过怪物，没有任何事
                        console.log("越过怪物");
                    }else if( Total<=CoinPosition[i][0]+(106*0.9)+CoinPosition[i][3]*1600  && Total+20>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && jqxs.h>CoinPosition[i][1]){
                        //怪物死亡
                        console.log("怪物死亡");
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],106*0.9,98*0.9);
                        act=6;
                        jqxsI=0;
                        CoinPosition[i].shift();
                        StampMonstrNum=StampMonstrNum+1;
                    }
                }else if(CoinPosition[i][2]==7){
                    //碰到盒子
                    if(((Total+120>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+120<CoinPosition[i][0]+CoinPosition[i][3]*1600+65) || (Total>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<CoinPosition[i][0]+CoinPosition[i][3]*1600+65)) && jqxs.h-71<CoinPosition[i][1]+58 && jqxs.h-71>CoinPosition[i][1]  && jqxs.h<jqxs.y){
                        console.log("正下方碰到盒子");
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],65,58);
                        StampBoxNum=StampBoxNum+1;
                        CoinPosition[i].shift();
                        ActivationAction=true;
                    }else if(((Total+120>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+120<CoinPosition[i][0]+CoinPosition[i][3]*1600+65) ||(Total>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<CoinPosition[i][0]+CoinPosition[i][3]*1600+65)) && jqxs.h>CoinPosition[i][1] && jqxs.h<CoinPosition[i][1]+58  && jqxs.h<jqxs.y){
                        console.log("正上方碰到盒子");
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],65,58);
                        CoinPosition[i].shift();
                        StampBoxNum=StampBoxNum+1;

                    }else if(Total+160>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+160<CoinPosition[i][0]+CoinPosition[i][3]*1600+65 && ((jqxs.h-71<CoinPosition[i][1]+58 && jqxs.h-71>=CoinPosition[i][1]))){
                        //正前方碰到盒子
                        console.log("正前方碰到盒子");
                        jqxs.x=jqxs.x-(speed*1.43);
                        if(jqxs.x<=0){
                            jqxs.x=0;
                            console.log("游戏结束盒子");
                            Gameover=0;
                        }
                    }else if(Total==CoinPosition[i][0]+CoinPosition[i][3]*1600+65){
                        tempX=true;
                    }
                }


            }else {
                if(CoinPosition[i][2]==2) {
                    //吃到金币
                    if (Total + 120 > CoinPosition[i][0] + CoinPosition[i][3] * 1600 && Total + 120 < CoinPosition[i][0] + 28 + CoinPosition[i][3] * 1600 && jqxs.h - 70 < CoinPosition[i][1] + 28 && jqxs.h > CoinPosition[i][1]) {
                        //金币的最左端<人的最右端<金币的最右边    人的最上端<金币的最下端  人的最下端>金币的最上端
                        ctx5.clearRect(CoinPosition[i][0], CoinPosition[i][1], 28, 28);
                        CoinPosition[i].shift();
                        GoldCoinNum = GoldCoinNum + 1;    //金币加1
                    }
                }else if(CoinPosition[i][2]==3){
                    //吃到熊头
                    if(Total+120>CoinPosition[i][0]+CoinPosition[i][3]*1600  && Total+120<CoinPosition[i][0]+(71*0.7)+CoinPosition[i][3]*1600  && jqxs.h-70<CoinPosition[i][1]+(71*0.7) && jqxs.h>CoinPosition[i][1]  ){
                        //熊头最左边<人的最有右端<熊的最右边      人的最上端<熊头的最下端      人的最下端>熊头的最上端
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],(71*0.7),(71*0.7));
                        CoinPosition[i].shift();
                        BearHeadNum=BearHeadNum+1;
                    }
                }else if(CoinPosition[i][2]==4){
                    //吃到狐狸头
                    if(Total+120>CoinPosition[i][0]+CoinPosition[i][3]*1600  && Total+120<CoinPosition[i][0]+(71*0.7)+CoinPosition[i][3]*1600  && jqxs.h-70<CoinPosition[i][1]+(71*0.7) && jqxs.h>CoinPosition[i][1]  ){
                        //狐狸头最左边<人的最有右端<狐狸的最右边      人的最上端<狐狸头的最下端      人的最下端>狐狸头的最上端
                        ctx4.clearRect(CoinPosition[i][0],CoinPosition[i][1],(71*0.7),(71*0.7));
                        CoinPosition[i].shift();
                        FoxHeadNum=FoxHeadNum+1;
                    }
                }else if(CoinPosition[i][2]==6){

                    if(Total+110>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+110<CoinPosition[i][0]+CoinPosition[i][3]*1600+(90*0.75) && jqxs.h>CoinPosition[i][1]){
                        //钉子的最左端<人的最右端<钉子的最右端       人的最低点<钉子的最高点
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }
                        console.log("游戏结束钉子");
                    }

                }else if(CoinPosition[i][2]==9) {
                    //碰到闪电怪
                    if (Total + 120 >= CoinPosition[i][0] + CoinPosition[i][3] * 1600 - 20 && Total + 120 < CoinPosition[i][0] + CoinPosition[i][3] * 1600 + 150 - 20 && jqxs.h - 70 < CoinPosition[i][1] + (123 * 0.8) && jqxs.h > CoinPosition[i][1]) {
                        //闪电怪的最左端<人的最右端<闪电怪的最右端   人的最上端<闪电怪的最下端      人的最下端>闪电怪的最上端
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }
                        console.log("游戏结束闪电");
                    }
                }else if(CoinPosition[i][2]==5){
                    //碰到柱子
                    if(Total+120>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+120<CoinPosition[i][0]+100+CoinPosition[i][3]*1600 ){
                        //碰到柱子并且没有下蹲，所以人物停止不动
                        tempX=true;
                    }
                }else if(CoinPosition[i][2]==8){
                    //碰到怪物
                    if(Total+120>=(CoinPosition[i][0]+CoinPosition[i][3]*1600)  && Total+120<=(CoinPosition[i][0]+CoinPosition[i][3]*1600)+(106*0.9) && jqxs.h>CoinPosition[i][1]){
                        //人物的左侧碰到怪物的左侧，人物死亡
                        if(Gameover==2){
                            Gameover=1;
                        }else if(Gameover==1){
                            Gameover=0;
                        }

                    }else if(  Total+120>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<=CoinPosition[i][0]+(106*0.9)+CoinPosition[i][3]*1600 && jqxs.h<CoinPosition[i][1]){
                        //人物越过怪物，没有任何事
                        console.log("越过怪物");
                    }else if( Total<=CoinPosition[i][0]+(106*0.9)+CoinPosition[i][3]*1600  && Total+20>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && jqxs.h>CoinPosition[i][1]){
                        //怪物死亡
                        console.log("怪物死亡");
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],106*0.9,98*0.9);
                        act=6;
                        jqxsI=0;
                        CoinPosition[i].shift();
                        StampMonstrNum=StampMonstrNum+1;
                    }
                }else if(CoinPosition[i][2]==7){
                    //碰到盒子
                    if(((Total+160>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+160<CoinPosition[i][0]+CoinPosition[i][3]*1600+65) || (Total>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<CoinPosition[i][0]+CoinPosition[i][3]*1600+65)) && jqxs.h-71<CoinPosition[i][1]+58 && jqxs.h-71>CoinPosition[i][1]  && jqxs.h<jqxs.y){
                        console.log("正下方碰到盒子");
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],65,58);
                        StampBoxNum=StampBoxNum+1;
                        CoinPosition[i].shift();
                        ActivationAction=true;
                    }else if(((Total+160>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+160<CoinPosition[i][0]+CoinPosition[i][3]*1600+65) ||(Total>CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total<CoinPosition[i][0]+CoinPosition[i][3]*1600+65)) && jqxs.h>CoinPosition[i][1] && jqxs.h<CoinPosition[i][1]+58  && jqxs.h<jqxs.y){
                        console.log("正上方碰到盒子");
                        ctx5.clearRect(CoinPosition[i][0],CoinPosition[i][1],65,58);
                        CoinPosition[i].shift();
                        StampBoxNum=StampBoxNum+1;

                    }else if(Total+160>=CoinPosition[i][0]+CoinPosition[i][3]*1600 && Total+160<CoinPosition[i][0]+CoinPosition[i][3]*1600+65 && ((jqxs.h-160<CoinPosition[i][1]+58 && jqxs.h-71>=CoinPosition[i][1]))){
                        //正前方碰到盒子
                        console.log("正前方碰到盒子");
                        jqxs.x=jqxs.x-(speed*1.43);
                        if(jqxs.x<=0){
                            jqxs.x=0;
                            console.log("游戏结束盒子");
                            Gameover=0;
                        }
                    }else if(Total==CoinPosition[i][0]+CoinPosition[i][3]*1600+65){
                        tempX=true;
                    }
                }
            }
        }
    }
}
