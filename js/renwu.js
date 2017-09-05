
var jqxsObj=function () {
    this.x;      //x坐标
    this.y;      //y坐标
    this.gv;     //竖直方向的速度
    this.g;      //重力
    this.h;      //起跳时起始点的高度

};


jqxsObj.prototype.init=function () {
    this.x=100;
    this.y=ground;
    this.g=6;
    this.gv=36;

};

jqxsObj.prototype.draw=function () {
    this.y=ground;

    window.addEventListener('keyup', doKeyup);

    window.addEventListener('keydown', doKeydown);



    //正常情况下跑的动作
    if(act===0){
        //console.log(jqxsI);
        ctx1.drawImage(jqxsImage[jqxsI],this.x,this.y-105);   //人
        //console.log(this.y);
        this.h=ground;
    }

    //一段跳的动作
    if(act===1){
        if(jqxsI===0){
            this.gv=36;
            this.h=this.y;
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-68,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12s
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===1){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+20,this.h-65,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===2){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+10,this.h-65,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12s
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3

            this.gv-=this.g;

        }
        if(jqxsI===3){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+10,this.h-72,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12s
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===4){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+10,this.h-68,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12s
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===5){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,915,47,27,47,this.x+52,this.h-65,27,47);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+80,this.h-38,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+8,this.h-73,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-78,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-88,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,803,94,31,38,this.x+70,this.h-35,31,38);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+73,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,41,410,40,40,this.x+43,this.h-58,40,40);//右臂         3

            this.gv=-this.gv;
        }
        if(jqxsI===6){

            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+17,this.h-104,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3

            this.gv-=this.g;

        }
        if(jqxsI===7){

            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-100,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===8){
            this.h-=this.gv;

            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-123,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===9){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+20,this.h-135,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===10){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-143,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===11){
            this.h=this.y;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-140,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv=36;
            act=0;
            landm.play();
        }
        // console.log(this.h);         //当前人物的高度
    }

    //下蹲动作
    if(act===2){
        ctx1.drawImage(jqxsImg,jqxsCloak[jqxsI][0],jqxsCloak[jqxsI][1],jqxsCloakSize[jqxsI][0],jqxsCloakSize[jqxsI][1],this.x-10,this.y-58,jqxsCloakSize[jqxsI][0],jqxsCloakSize[jqxsI][1]); //披风
        ctx1.drawImage(jqxsImg,154,219,128,71,this.x+20,this.y+35-105,128,71);   //人
        ctx1.drawImage(jqxsImg,406,265,26,33,this.x+58,this.y+19+35-105,26,33);   //眼镜
    }

    //二段跳阶段
    if(act===3){



        //翻滚阶段
        if(jqxsI===0){
            this.gv=24;
            this.h-=this.gv;
            ctx1.save();
            ctx1.translate(this.x+80,this.h-61);
            ctx1.rotate(130*Math.PI/180);
            ctx1.translate(-(this.x+80),-(this.h-61));
            ctx1.drawImage(jqxsImg,940,273,82,123,this.x+41,this.h-123,82,123);
            ctx1.restore();
            this.gv-=this.g;

        }
        if(jqxsI===1){
            this.h-=this.gv;
            ctx1.save();
            ctx1.translate(this.x+80,this.h-61);
            ctx1.rotate(220*Math.PI/180);
            ctx1.translate(-(this.x+80),-(this.h-61));
            ctx1.drawImage(jqxsImg,940,273,82,123,this.x+41,this.h-123,82,123);
            ctx1.restore();
            this.gv-=this.g;
        }
        if(jqxsI===2){
            this.h-=this.gv;
            ctx1.save();
            ctx1.translate(this.x+80,this.h-61);
            ctx1.rotate(310*Math.PI/180);
            ctx1.translate(-(this.x+80),-(this.h-61));
            ctx1.drawImage(jqxsImg,940,273,82,123,this.x+41,this.h-123,82,123);
            ctx1.restore();
            this.gv-=this.g;
        }
        if(jqxsI===3){
            this.h-=this.gv;
            ctx1.save();
            ctx1.translate(this.x+80,this.h-61);
            ctx1.rotate(400*Math.PI/180);
            ctx1.translate(-(this.x+80),-(this.h-61));
            ctx1.drawImage(jqxsImg,940,273,82,123,this.x+41,this.h-123,82,123);
            ctx1.restore();
            this.gv=0;

        }

        //下落阶段
        if(jqxsI===4){
            this.gv=-6;
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,915,47,27,47,this.x+52,this.h-65,27,47);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+80,this.h-38,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+8,this.h-73,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-78,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-88,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,803,94,31,38,this.x+70,this.h-35,31,38);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+73,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,41,410,40,40,this.x+43,this.h-58,40,40);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===5){

            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+17,this.h-104,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===6){

            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-100,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
        }
        if(jqxsI===7){
            this.h-=this.gv;

            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.y;
            }
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-123,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3

            this.gv-=this.g;


        }
        if(jqxsI===8){

            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.y;
            }

            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+20,this.h-135,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3

            this.gv-=this.g;
        }
        if(jqxsI===9){

            this.h-=this.gv;

            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.y;
            }
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-143,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===10){


            this.h-=this.gv;
            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.y;
            }

            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-140,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===11){
            this.h=ground;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-140,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            landm.play();
            act=0;
        }
    }

    //三段跳
    if(act===4){

        //翻滚阶段
        if(jqxsI===0){
            this.gv=24;
            this.h-=this.gv;
            ctx1.save();
            ctx1.translate(this.x+80,this.h-61);
            ctx1.rotate(130*Math.PI/180);
            ctx1.translate(-(this.x+80),-(this.h-61));
            ctx1.drawImage(jqxsImg,940,273,82,123,this.x+41,this.h-123,82,123);
            ctx1.restore();
            this.gv-=this.g;
        }
        if(jqxsI===1){
            this.h-=this.gv;
            ctx1.save();
            ctx1.translate(this.x+80,this.h-61);
            ctx1.rotate(220*Math.PI/180);
            ctx1.translate(-(this.x+80),-(this.h-61));
            ctx1.drawImage(jqxsImg,940,273,82,123,this.x+41,this.h-123,82,123);
            ctx1.restore();
            this.gv-=this.g;

        }
        if(jqxsI===2){
            this.h-=this.gv;
            ctx1.save();
            ctx1.translate(this.x+80,this.h-61);
            ctx1.rotate(310*Math.PI/180);
            ctx1.translate(-(this.x+80),-(this.h-61));
            ctx1.drawImage(jqxsImg,940,273,82,123,this.x+41,this.h-123,82,123);
            ctx1.restore();
            this.gv-=this.g;
        }
        if(jqxsI===3){
            this.h-=this.gv;
            ctx1.save();
            ctx1.translate(this.x+80,this.h-61);
            ctx1.rotate(400*Math.PI/180);
            ctx1.translate(-(this.x+80),-(this.h-61));
            ctx1.drawImage(jqxsImg,940,273,82,123,this.x+41,this.h-123,82,123);
            ctx1.restore();
            this.gv=0;
        }

        //下落阶段
        if(jqxsI===4){
            this.gv=-12;
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,915,47,27,47,this.x+52,this.h-65,27,47);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+80,this.h-38,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+8,this.h-73,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-78,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-88,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,803,94,31,38,this.x+70,this.h-35,31,38);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+73,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,41,410,40,40,this.x+43,this.h-58,40,40);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===5){

            this.h-=this.gv;
            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.y;
                act=0;
            }
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+17,this.h-104,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===6){

            this.h-=this.gv;
            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.h;
                act=0;
            }
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-100,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===7){

            this.h-=this.gv;
            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.y;
                act=0;
            }

            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-123,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===8){

            this.h-=this.gv;
            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.y;
                act=0;
            }


            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+20,this.h-135,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===9){

            this.h-=this.gv;
            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.y;
                act=0;
            }


            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-143,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===10){

            this.h-=this.gv;
            //判断是否到达地面
            if(this.h-this.gv>this.y){
                this.h=this.y;
                act=0;
            }

            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-140,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3

            this.gv-=this.g;
        }
        if(jqxsI===11){
            this.h=ground;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-140,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            act=0;
            landm.play();
        }


    }


    //从高处往低处下落动作
    if(act===5){
        if(jqxsI===9){
            if(this.h+2*speed<this.y){
                this.h=this.h+2*speed;
            }else{
                this.h=this.y;
            }


            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+20,this.h-135,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3

        }
        if(jqxsI===10){
            if(this.h+speed<this.y){
                this.h=this.h+speed;
            }else{
                this.h=this.y;
            }
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-143,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3

        }
        if(jqxsI===11){
            this.h=this.y;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-140,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            act=0;
            landm.play();
        }
    }

    //踩怪,踩盒子动作
    if(act===6){
        if(jqxsI===0){
            this.gv=36;
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-68,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12s
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===1){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+20,this.h-65,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===2){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+10,this.h-65,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12s
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3

            this.gv-=this.g;

        }
        if(jqxsI===3){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+10,this.h-72,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12s
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===4){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,0,47,43,20,this.x+89,this.h-48,43,20);//左臂             3
            ctx1.drawImage(jqxsImg,835,94,38,42,this.x+50,this.h-43,38,42);//左腿        3
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+10,this.h-68,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12s
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-68,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-85,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,952,7,31,31,this.x+68,this.h-37,31,31);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+75,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,2,401,36,51,this.x+50,this.h-58,36,51);//右臂         3
            this.gv-=this.g;
        }
        if(jqxsI===5){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,915,47,27,47,this.x+52,this.h-65,27,47);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+80,this.h-38,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+8,this.h-73,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+68,this.h-62,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-93,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-68,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-110,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-68,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-81,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-78,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-88,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-77,10,15); //耳机     不动
            ctx1.drawImage(jqxsImg,803,94,31,38,this.x+70,this.h-35,31,38);//右腿         3
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+73,this.h-65,19,23);//右肩        不动
            ctx1.drawImage(jqxsImg,41,410,40,40,this.x+43,this.h-58,40,40);//右臂         3

            this.gv=-this.gv;
        }
        if(jqxsI===6){

            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+17,this.h-104,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3

            this.gv-=this.g;

        }
        if(jqxsI===7){

            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-100,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===8){
            this.h-=this.gv;

            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+15,this.h-123,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===9){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+20,this.h-135,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===10){
            this.h-=this.gv;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-143,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv-=this.g;

        }
        if(jqxsI===11){
            this.h=this.y;
            ctx1.drawImage(jqxsImg,944,47,25,42,this.x+65,this.h-64,25,42);//左臂             3
            ctx1.drawImage(jqxsImg,875,93,28,35,this.x+90,this.h-46,28,35);//左腿        3
            ctx1.drawImage(jqxsImg,jqxsJumpCloak[jqxsI][0],jqxsJumpCloak[jqxsI][1],jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1],this.x+30,this.h-140,jqxsJumpCloakSize[jqxsI][0],jqxsJumpCloakSize[jqxsI][1]);//披风        12

            //胸部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-30*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,144,34,37,this.x+65,this.h-83,34,37); //胸部       不动
            ctx1.drawImage(jqxsImg,45,47,19,23,this.x+70,this.h-85,19,23);//右肩        不动
            ctx1.restore();
            //头部旋转
            ctx1.save();
            ctx1.translate(this.x+105,this.h-78);
            ctx1.rotate(-10*Math.PI/180);
            ctx1.translate(-(this.x+105),-(this.h-78));
            ctx1.drawImage(jqxsImg,2,0,44,44,this.x+90,this.h-109,42,44); //头                  不动
            ctx1.drawImage(jqxsImg,119,222,10,12,this.x+116,this.h-84,10,12);//眼睛      2
            ctx1.drawImage(jqxsImg,312,1,59,53,this.x+68,this.h-126,59,53); //头发1      不动
            ctx1.drawImage(jqxsImg,380,269,12,16,this.x+118,this.h-84,12,16); //眼镜     不动
            ctx1.drawImage(jqxsImg,138,220,10,9,this.x+100,this.h-87,10,9);//耳环        不动
            ctx1.drawImage(jqxsImg,46,76,10,12,this.x+100,this.h-94,10,12);//耳朵        不动
            ctx1.drawImage(jqxsImg,2,181,46,40,this.x+88,this.h-101,46,40); //头发2        不动
            ctx1.drawImage(jqxsImg,139,253,10,15,this.x+101,this.h-93,10,15); //耳机     不动
            ctx1.restore();
            ctx1.drawImage(jqxsImg,987,3,35,45,this.x+81,this.h-48,35,45);//右腿         3
            ctx1.drawImage(jqxsImg,84,407,29,47,this.x+58,this.h-67,29,47);//右臂         3
            this.gv=36;
            act=0;
            landm.play();
        }

    }



    dimian=this.y;
    //console.log("人物的高是:"+this.h);
};