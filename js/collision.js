/**
 * Created by Administrator on 2017/8/22.
 */

var flag1=true;   //控制人物是否被跑道夹住
var flag2=false;  //控制人物恢复初始位置
var flagH=0;   //记录被跑道夹住时下一条跑道的高度

//人和跑道的碰撞检测
function RenRunwayCollision(Position){
    if(!flag1){
        jqxs.x=jqxs.x-(speed);
        if(jqxs.x>0 && jqxs.h<=flagH){
            flag1=true;
            ground=flagH;
            flagH=0;
            flag2=true;

        }else if(jqxs.x<=0){
            jqxs.x=0;
            console.log("游戏结束-夹死");
            Gameover=0;
        }
    }
    if(flag2){
        if( jqxs.x<200 && (Gameover==1|| Gameover==2)){
            jqxs.x++;
        }else if(jqxs.x>=200){
            jqxs.x=200;
            flag2=false;
        }
    }
    for(var i=0;i<Position.length;i++){
        //当人物跑到一条跑道的末尾时
        if( Total+110==Position[i][2] &&  Position[i][0]-Position[i][2]<=0 ){
            if(i>0){
                if(Position[i-1][1]<Position[i][1]  ){
                    //下坡
                    console.log("下坡");
                    ground=Position[i][1]+20;
                    if(act!=1 && act!=3 && act!=4 && act!=6 && act!=2){
                        act =5;
                        jqxsI=9;
                    }


                }else if(Position[i-1][1]>Position[i][1]){
                    if(jqxs.h<=(Position[i][1]+20)){
                        //上坡
                        console.log("上坡");
                        ground=Position[i][1]+20;
                        //console.log("高过了");

                        flag1=true;
                    }else if(jqxs.h>(Position[i][1]+20)){
                        //夹死
                        flag1=false;
                        flagH=Position[i][1]+20;
                    }
                }
            }else if(i==0){
                // act =5;
                // jqxsI=9;
                ground=Position[i][1]+20;
            }
        }else if(Total+110>=Position[i][2] && Total+110<=Position[i][0]){
            if(Total+110==Position[i][2] && act!=1 && act!=3 && act!=4 && act!=6 && act!=2){
                ground=Position[i][1]+135;
                act =5;
                jqxsI=9;
            }else if(Total+110>=Position[i][2]){
                ground=450;
                if(jqxs.h>=ground){
                    ground=jqxs.h;
                    Gameover=0;
                }else if(jqxs.h<=(Position[i][1]+20) && Total+110==Position[i][0]){
                    ground=Position[i][1]+20;
                }
            }

        }
    }
}

