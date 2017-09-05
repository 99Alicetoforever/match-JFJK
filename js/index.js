/**
 * Created by Administrator on 2017/6/30.
 */

//任务列表显示

//商城
var shop=document.getElementsByClassName("shop_box")[0];
var shack=document.getElementsByClassName("head_back")[0];
var shbtn=document.getElementById("shop_text");

var back=document.getElementById("back");
var roles=document.getElementById("change_roles");
var role=document.getElementsByClassName("role")[0];
role.onclick=function () {
    roles.style.display="block";
    shop.style.display="none";
}
back.onclick=function(){
    roles.style.display="none";
}


shbtn.onclick=function(){
    // console.log("aaa");
    shop.style.display="block";
    roles.style.display="none";
}
shack.onclick=function(){
    shop.style.display="none";
}

var list=document.getElementById("roles_list");
var next=document.getElementsByClassName("next")[0];
var prev=document.getElementsByClassName("prev")[0];
function animate(offset){

    var newLeft=parseInt(list.style.left)+offset;
    list.style.transition=" all 1s linear";
    list.style.left=newLeft+"px";
    if(newLeft<-620){
        list.style.left="0px";
    }
    if(newLeft>0){
        list.style.left="-620px";
    }
}
next.onclick=function(){
    animate(-624);
}
prev.onclick=function(){
    animate(+620);
}

//选择人物角色
var rolesli=document.getElementById("roles_list").getElementsByTagName("li");
var roleback=document.getElementsByClassName("role_p");
var rolename=document.getElementsByClassName("role_name");

for(var i=0;i<rolesli.length;i++){
    (function(i){
        roleback[i].onclick=function(){
            var ul=roleback[i].parentElement.parentElement.parentElement;
            var lis=ul.children;
            var role_b=document.getElementById("role");
            for(var j=0;j<lis.length;j++){
                if(rolesli[i]!=lis[j]){   //排除自己，也就是取兄弟节点
                    lis[j].getElementsByClassName("role_name")[0].getElementsByTagName("span")[0].setAttribute("class","no");
                }
            }
            rolename[i].getElementsByTagName("span")[0].setAttribute("class","select");
            role_b.style.background="url(../images/role_0"+(i+1)+".png)";
        }
    })(i);
}



//增加道具
var t_num=document.getElementsByClassName("tool_num");   //道具
var buy_btn=document.getElementsByClassName("buy_btn");  //购买按钮

for(var i=0;i<buy_btn.length;i++){
    (function(i){
        buy_btn[i].onclick=function(){
            if(CoinTotal>=300 && i==0 ){
                CoinTotal-=300;
                ProtectiveCover+=1;  //保护罩
                t_num[i].innerHTML=ProtectiveCover;
            }else if(CoinTotal>=500 && i==1){
                CoinTotal-=500;
                DoubleCoins+=1;   //金币翻倍
                t_num[i].innerHTML=DoubleCoins;
            }else if(CoinTotal>=800 && i==2){
                CoinTotal-=800;
                tongguan+=1;   //三星通关
            }else if( StarsTotal>=5 && i==3 ){
                StarsTotal-=5;

                var tnval=t_num[i].innerHTML;
                var n=Number(tnval);
                console.log(n);
                t_num[i].innerHTML=n+1;
            }else if( StarsTotal>=7 && i==4 ){
                StarsTotal-=7;

                var tnval=t_num[i].innerHTML;
                var n=Number(tnval);
                console.log(n);
                t_num[i].innerHTML=n+1;
            }else if( StarsTotal>=8 && i==5 ){
                StarsTotal-=7;

                var tnval=t_num[i].innerHTML;
                var n=Number(tnval);
                console.log(n);
                t_num[i].innerHTML=n+1;
            }
        }
    })(i)
}





//第一个道具：保护罩
var prize_box1=document.getElementsByClassName("prize_box")[0];
var sel_tool1=document.getElementsByClassName("sel_tool")[0];
var flag_too1=0;
prize_box1.onclick=function(){
    if(ProtectiveCover>0){
        if(flag_too1==0){
            sel_tool1.style.display="block";
            flag_too1=1;
            ProtectiveCover--;
        }else{
            sel_tool1.style.display="none";
            flag_too1=0;
            ProtectiveCover++;
        }
    }
};


//第二个道具：三星通关
var prize_box2=document.getElementsByClassName("prize_box")[1];
var sel_tool2=document.getElementsByClassName("sel_tool")[1];
var flag_too2=0;
prize_box2.onclick=function(){
    if(tongguan>0){
        if(flag_too2==0){
            sel_tool2.style.display="block";
            flag_too2=1;
            tongguan--;
        }else{
            sel_tool2.style.display="none";
            flag_too2=0;
            tongguan++;
        }
    }
};


//第三个道具：金币加倍
var prize_box3=document.getElementsByClassName("prize_box")[2];
var sel_tool3=document.getElementsByClassName("sel_tool")[2];
var flag_too3=0;  //双倍金币
prize_box3.onclick=function(){
    if(DoubleCoins>0){
        if(flag_too3==0){
            sel_tool3.style.display="block";
            flag_too3=1;
            DoubleCoins--;
        }else{
            sel_tool3.style.display="none";
            flag_too3=0;
            DoubleCoins++;
        }
    }
};


//任务
var go=document.getElementById("game_start");
var tareturn=document.getElementById("task_re");
var task_inter=document.getElementById("task_interface");
var start_inte=document.getElementById("start_interface");
go.onclick=function(){
    start_interface.style.display="none";
    task_inter.style.display="block";





    $("#moneys_jin").html(CoinTotal);    //显示金币总数   关卡层
    $("#stars").html(StarsTotal);  //显示星星总数

  /*  if(Levelopen==1){
        $(".star1_no").eq(0).css("display","none");
        $(".star2_no").css("display","none");
        $(".star3_no").css("display","none");
        $(".star1_yes").eq(0).css("display","block");
        $(".star2_yes").css("display","block");
        $(".star3_yes").css("display","block");
    }*/

    //判断每一个已通关的关卡所取得的星星数，并显示
    for(var i=0;i<=Levelopen-1;i++){
        (function(k){
            //Checkpoints
            for(var l=0;l<Checkpoints[k];l++){
                $(".star"+(l+1)+"_no").eq(k).css("display","none");
                $(".star"+(l+1)+"_yes").eq(k).css("display","block");
            }
        })(i);
    }

    for(var j=1;j<4;j++){
        (function(k){
            if(k<=Levelopen-1){
                $(".ev_gua_stars").eq(k).css("display","block");
            }else{
                $(".ev_gua_stars").eq(k).css("display","none");
            }
        })(j);
    }
};
tareturn.onclick=function(){
    task_inter.style.display="none";
    start_interface.style.display="block";
};


//每个任务
var gua=document.getElementsByClassName("gua ");
var every_task=document.getElementById("every_task");
var task_box=document.getElementById("tasks_inter_box");
var tare2=document.getElementById("task_re2");
var tong_desc=document.getElementsByClassName("tong_desc");
var gua_num=document.getElementsByClassName("decri_head")[0];

for(var i=0;i<gua.length;i++){
    (function(i){
        gua[i].onclick=function(){
            if(i<=Levelopen-1){
                task_box.style.display="none";   //开始游戏层
                every_task.style.display="block";
                for(var j=0;j<tong_desc.length;j++){
                    if(j==i){
                        Checkpoint=i+1;   //获取当前是第几关卡
                        tong_desc[i].style.display="block";
                        gua_num.innerHTML="第"+(i+1)+"关";
                        $("#moneys_jin2").html(CoinTotal);    //显示金币总数   开始游戏层
                        $("#stars_2").html(StarsTotal);  //显示星星总数

                        //判断开始游戏层的星星显示还是隐藏
                        if(Checkpoints[Checkpoint-1]==0){
                            $(".tong_star").find("li").removeClass("tong_yes"); //星星隐藏
                            $(".tong_star").find("li").addClass("tong_no"); //星星隐藏
                        }else if(Checkpoints[Checkpoint-1]==1){
                            $(".tong_star").find("li").removeClass("tong_no"); //星星隐藏
                            $(".tong_star").find("li").eq(0).addClass("tong_yes");  //星星显示
                            $(".tong_star").find("li").eq(1).addClass("tong_no");  //星星显示
                            $(".tong_star").find("li").eq(2).addClass("tong_no");  //星星显示
                        }else if(Checkpoints[Checkpoint-1]==2){
                            $(".tong_star").find("li").removeClass("tong_no"); //星星隐藏
                            $(".tong_star").find("li").eq(0).addClass("tong_yes");  //星星显示
                            $(".tong_star").find("li").eq(1).addClass("tong_yes");  //星星显示
                            $(".tong_star").find("li").eq(2).addClass("tong_no");  //星星显示
                        }else if(Checkpoints[Checkpoint-1]==3){
                            $(".tong_star").find("li").removeClass("tong_no"); //星星隐藏
                            $(".tong_star").find("li").addClass("tong_yes");  //星星显示
                        }


                        if(Checkpoints[Checkpoint-1]>0){
                           // console.log(Checkpoints[Checkpoint-1]+"---已通关");
                            $(".yes_no").html("已通关");
                        }else if(Checkpoints[Checkpoint-1]==0){
                            $(".yes_no").html("未通关");
                        }
                    }else if(j!=i){
                        tong_desc[j].style.display="none";
                    }
                }
            }else{
                alert("只有通关前一关卡，才能开启本关卡");
            }
        }
    })(i);
}


//
tare2.onclick=function(){
    every_task.style.display="none";
    task_box.style.display="block";

    $("#moneys_jin").html(CoinTotal);    //显示金币总数   关卡层
    $("#stars").html(StarsTotal);  //显示星星总数


    //判断每一个已通关的关卡所取得的星星数，并显示
    for(var i=0;i<=Levelopen-1;i++){
        (function(k){
            //Checkpoints
            for(var l=0;l<Checkpoints[k];l++){
                $(".star"+(l+1)+"_no").eq(k).css("display","none");
                $(".star"+(l+1)+"_yes").eq(k).css("display","block");
            }
        })(i);
    }

};



    var register=$("#register");
    var register_box=$("#register_box");
    var regi_close=$("#regi_close");

    var login_butn=$("#login");
    var login_box=$("#login_box");
    var log_close=$("#login_close");
    var now_l=$("#now_login");
    var now_r=$("#now_re");

    register.on("click",function () {
        register_box.show();
        login_box.hide();
    });
    regi_close.on("click",function(){
        register_box.hide();
    });
    login_butn.on("click",function () {
        login_box.show();
        register_box.hide();
    });
    log_close.on("click",function(){
        login_box.hide();
    });
    now_l.on("click",function(){
        login_box.show();
        register_box.hide();
    });
    now_r.on("click",function () {
        register_box.show();
        login_box.hide();
    });


//注册
//失焦事件
var regi_user=$("#regi_user");
var regi_btn=$("#regi_btn");
var fla=0;
var fla1=0;
var tel=$("#telphone");
var check_user=$("#check_user");
var check_tel=$("#check_tel");


regi_user.blur(function () {
    var uPatten1=/^[a-zA-Z0-9_-]{4,16}$/;  //用户名正则,4到16位(字母，数字，下划线，减号)
    var ruval=$("#regi_user").val();
    if(uPatten1.test(ruval)){
        fla=1;
        if(fla1==2){
            register_box.css("height","320px");
        }else if(fla1==1){
            register_box.css("height","300px");
        }else if(fla1==0){
            register_box.css("height","300px");
        }
        check_user.css("display","none");
    }else{
         fla=0;
        if(fla1==1){
            register_box.css("height","320px");
        }else if(fla1==2){
            register_box.css("height","340px");
        }else{
            register_box.css("height","320px");
        }
         check_user.css("display","block");
    }
});

tel.blur(function(){
    var uPatten2=/^1[34578]\d{9}$/;  //手机号码正则, 表示以1开头，第二位可能是3/4/5/7/8
    // 等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束

    var rtval=$("#telphone").val();
    if(uPatten2.test(rtval)){
        fla1=1;
        check_tel.css("display","none");
    }else{
        fla1=2;
        if(fla==1){
            register_box.css("height","320px");
        }else if(fla==0){
            register_box.css("height","340px");
        }
        check_tel.css("display","block");
    }
});
//注册发请求
regi_btn.on("click",function(){
    if(fla==1&&fla1==1){
        var uname=$("#regi_user").val();
        var tel=$("#telphone").val();
        var pwd=$("#passowrd").val();

        if(uname!=""&&tel!=""&&pwd!=""){
            //发请求
            $.post("./userRegister",{uname:uname,tel:tel,pwd:pwd},function (data) {
                if(data=="0"){
                    alert("hey, 你注册不了");
                }else if(data=="1"){
                    alert("注册成功，即将跳到登录界面");
                    register_box.hide();
                    login_box.show();
                }
            })
        }
    }else{
       // console.log("用户名或密码错误");
        alert("请输入正确的用户名或手机号码或密码");
    }
});

//登录
var  login_btn=$("#login_btn");
var login_face=$("#login_interface");
var start_face=$("#start_interface");
var check_luser=$("#check_luser");
var login_user=$("#login_user");
var fla2=0;
// 失焦事件

login_user.blur(function () {
    var uPatten3=/^[a-zA-Z0-9_-]{4,16}$/;  //用户名正则,4到16位(字母，数字，下划线，减号)
    var luval=$("#login_user").val();
    if(uPatten3.test(luval)){
        fla2=1;
        login_box.css("height","250px");
        check_luser.css("display","none");
    }else{
        fla2=0;
        login_box.css("height","270px");
        check_luser.css("display","block");
    }
});

//登录
var player=$("#player");
login_btn.on("click",function () {
    if(fla2==1){
        var uname=$("#login_user").val();
        var pwd=$("#login_password").val();
        $.post("./userLogin",{uname:uname,pwd:pwd},function (data) {
            if(data=="0"){
                alert("hey，你是出错了吗");
            }else if(data=="1"){
                alert("用户名或密码没有输对哦");
            }else if(data=="2"){
                // console.log("aaa");
                login_face.hide();
                start_face.show();
                player.html("欢迎"+uname+"进入游戏");
                var audio_bgm=document.getElementById("audio_bgm");
                audio_bgm.play();

            }
        });



    }else{
        alert("用户名或密码不正确");
    }
});


//播放音乐
var audio_bgm=document.getElementById("audio_bgm");
var c_audio=document.getElementsByClassName("c_audio")[0];
function playOrPause(obj){
    if(audio_bgm.paused){
        audio_bgm.play();
        c_audio.style.background="url(../images/open.png)";
    }else{
        audio_bgm.pause();
        c_audio.style.background="url(../images/v_close.png)";
    }
}

var out=$("#out");
out.click(function(){


    $.ajax({
        url:"./outLogin",
        success:function(resu){
            if(!resu.code){
                window.location.reload();
            }
        }
    })





});




/* ############################################################################################### */
var fGame=true;  //用来做结算游戏，让游戏结算每次只结算一次

//开始游戏
$("#begin").on("click",function(){
    //window.location.reload();
    ResetGame(); //重置游戏

    $("#every_task").hide();     //开始游戏界面隐藏
    $("#task_interface").hide();
    $("#bg").show();
    $(".tong_desc").hide();      //所有的任务小模块隐藏

    Stars=0;  //重置该关卡的星星
    Suspend=false;
    fGame=true;


    clearInterval(Totime);

    if(flag_too1==1){
        Gameover=2;
        flag_too1=0;
        sel_tool1.style.display="none";
    }

    gameloop();


});

var Variables=0;  //用于做判断星星总数的中间转换变量

//游戏结算
function Setupgames() {

        if(flag_too2==1){
            //三星通关
            flag_too2=0;
            sel_tool2.style.display="none";
            Stars=3;
        }
        if(flag_too3==1){
            //金币翻倍
            flag_too3=0;
            sel_tool3.style.display="none";
            GoldCoinNum=GoldCoinNum*2;
        }
        var Coin = GoldCoinNum;   //金币数量
        var Star = Stars;       //星星

        if (Stars > 0) {
            if(Star==1){
                $(".sucess_star").find("li").eq(0).attr({class:"fs_li_12"});
                $(".sucess_star").find("a").eq(0).attr({class:"st_a1_2"});
                $(".sucess_star").find("li").eq(1).attr({class:"fs_li_21"});
                $(".sucess_star").find("a").eq(1).attr({class:"st_a2_1"});
                $(".sucess_star").find("li").eq(2).attr({class:"fs_li_31"});
                $(".sucess_star").find("a").eq(2).attr({class:"st_a3_1"});

            }else if(Star==2){
                $(".sucess_star").find("li").eq(0).attr({class:"fs_li_12"});
                $(".sucess_star").find("a").eq(0).attr({class:"st_a1_2"});
                $(".sucess_star").find("li").eq(1).attr({class:"fs_li_22"});
                $(".sucess_star").find("a").eq(1).attr({class:"st_a2_2"});
                $(".sucess_star").find("li").eq(2).attr({class:"fs_li_31"});
                $(".sucess_star").find("a").eq(2).attr({class:"st_a3_1"});

            }else if(Star==3){
                $(".sucess_star").find("li").eq(0).attr({class:"fs_li_12"});
                $(".sucess_star").find("a").eq(0).attr({class:"st_a1_2"});
                $(".sucess_star").find("li").eq(1).attr({class:"fs_li_22"});
                $(".sucess_star").find("a").eq(1).attr({class:"st_a2_2"});
                $(".sucess_star").find("li").eq(2).attr({class:"fs_li_32"});
                $(".sucess_star").find("a").eq(2).attr({class:"st_a3_2"});
            }

            //闯关成功
            $("#sucess_box").show();   //闯关成功界面
            $(".fail_number").html("第" + Checkpoint + "关");
            $("#star_number2").html(Coin);
            Levelopen = Checkpoint + 1; //关卡通关，开启下一关
            //获取当前关卡的通关星星数
            if (Checkpoints[Checkpoint - 1] < Star) {
                Checkpoints[Checkpoint - 1] = Star;
            }
            CoinTotal += GoldCoinNum;  //累加金币，获得金币总数
            //获得星星总数
            for (var i = 0; i < Checkpoints.length; i++) {
                Variables += Checkpoints[i];
                StarsTotal = Variables;
            }
            Variables = 0;
            //判断每一关上面的星星是否可以显示
            for (var j = 1; j < 4; j++) {
                (function (k) {
                    if (k <= Levelopen - 1) {
                        $(".ev_gua_stars").eq(k).css("display", "block");
                    } else {
                        $(".ev_gua_stars").eq(k).css("display", "none");
                    }
                })(j);
            }

        } else if (Stars == 0) {
            //闯关失败
            $("#fail_box").show();   //闯关失败界面
            $(".fail_number").html("第" + Checkpoint + "关");
            $("#star_number").html(Coin);
            CoinTotal += GoldCoinNum;  //累加金币，获得金币总数
        }

}


//返回
$(".btn_return").on("click",function(){

    $("#sucess_box").hide();   //闯关成功界面
    $("#fail_box").hide();   //闯关失败界面

    $("#bg").hide();

    $("#task_interface").show();  //关卡界面
    $("#tasks_inter_box").show(); //关卡界面

   // Checkpoint=0;
    ResetGame();//重置游戏

    $("#moneys_jin").html(CoinTotal);    //显示金币总数   关卡层
    $("#stars").html(StarsTotal);  //显示星星总数


    //判断每一个已通关的关卡所取得的星星数，并显示
    for(var i=0;i<=Levelopen-1;i++){
        (function(k){
            //Checkpoints
            for(var l=0;l<Checkpoints[k];l++){
                $(".star"+(l+1)+"_no").eq(k).css("display","none");
                $(".star"+(l+1)+"_yes").eq(k).css("display","block");
            }
        })(i);
    }

});

//再来一次
$(".fail_again").on("click",function(){
    $("#fail_box").hide();   //闯关失败界面
    $("#bg").hide();

    $(".decri_head").html("第"+Checkpoint+"关");
    $("#every_task").show();
    $("#task_interface").show();
    $(".tong_desc").hide();
    $(".tong_desc").eq(Checkpoint-1).show();

    ResetGame();//重置游戏

    $("#moneys_jin2").html(CoinTotal);    //显示金币总数   开始游戏层
    $("#stars_2").html(StarsTotal);  //显示星星总数

    if(Checkpoints[Checkpoint-1]>0){
        $(".yes_no").html("已通关");
    }else if(Checkpoints[Checkpoint-1]==0){
        $(".yes_no").html("未通关");
    }


    if(Checkpoints[Checkpoint-1]==0){
        $(".tong_star").find("li").removeClass("tong_yes"); //星星隐藏
        $(".tong_star").find("li").addClass("tong_no"); //星星隐藏
    }else if(Checkpoints[Checkpoint-1]==1){
        $(".tong_star").find("li").removeClass("tong_no"); //星星隐藏
        $(".tong_star").find("li").eq(0).addClass("tong_yes");  //星星显示
        $(".tong_star").find("li").eq(1).addClass("tong_no");  //星星显示
        $(".tong_star").find("li").eq(2).addClass("tong_no");  //星星显示
    }else if(Checkpoints[Checkpoint-1]==2){
        $(".tong_star").find("li").removeClass("tong_no"); //星星隐藏
        $(".tong_star").find("li").eq(0).addClass("tong_yes");  //星星显示
        $(".tong_star").find("li").eq(1).addClass("tong_yes");  //星星显示
        $(".tong_star").find("li").eq(2).addClass("tong_no");  //星星显示
    }else if(Checkpoints[Checkpoint-1]==3){
        $(".tong_star").find("li").removeClass("tong_no"); //星星隐藏
        $(".tong_star").find("li").addClass("tong_yes");  //星星显示
    }
});

//下一关
$(".next_Checkpoint").on("click",function(){

    $("#bg").hide();
    $("#sucess_box").hide();  //闯关成功界面
    //every_task
    Checkpoint++;
    $(".decri_head").html("第"+Checkpoint+"关");

    $("#every_task").show();
    $("#task_interface").show();

    $(".tong_desc").hide();
    $(".tong_desc").eq(Checkpoint-1).show();

    $("#moneys_jin2").html(CoinTotal);    //显示金币总数   开始游戏层
    $("#stars_2").html(StarsTotal);  //显示星星总数



    if(Checkpoints[Checkpoint-1]>0){
        $(".yes_no").html("已通关");
    }else if(Checkpoints[Checkpoint-1]==0){
        $(".yes_no").html("未通关");
    }


    if(Checkpoints[Checkpoint-1]==0){
        $(".tong_star").find("li").removeClass("tong_yes"); //星星隐藏
        $(".tong_star").find("li").addClass("tong_no"); //星星隐藏
    }else if(Checkpoints[Checkpoint-1]==1){
        $(".tong_star").find("li").removeClass("tong_no"); //星星隐藏
        $(".tong_star").find("li").eq(0).addClass("tong_yes");  //星星显示
        $(".tong_star").find("li").eq(1).addClass("tong_no");  //星星显示
        $(".tong_star").find("li").eq(2).addClass("tong_no");  //星星显示
    }else if(Checkpoints[Checkpoint-1]==2){
        $(".tong_star").find("li").removeClass("tong_no"); //星星隐藏
        $(".tong_star").find("li").eq(0).addClass("tong_yes");  //星星显示
        $(".tong_star").find("li").eq(1).addClass("tong_yes");  //星星显示
        $(".tong_star").find("li").eq(2).addClass("tong_no");  //星星显示
    }else if(Checkpoints[Checkpoint-1]==3){
        $(".tong_star").find("li").removeClass("tong_no"); //星星隐藏
        $(".tong_star").find("li").addClass("tong_yes");  //星星显示
    }

    ResetGame();//重置游戏

});


//继续游戏
$("#Continue").on("click",function(){
    Suspend=false;
    $("#stop_box").hide();
});

//返回关卡
$("#Checkpoint").on("click",function(){
    $("#stop_box").hide();   //暂停界面
    $("#bg").hide();

    $("#task_interface").show();  //关卡界面
    $("#tasks_inter_box").show(); //关卡界面
    //tasks_inter_box

    $("#moneys_jin").html(CoinTotal);    //显示金币总数   关卡层
    $("#stars").html(StarsTotal);  //显示星星总数

    //判断每一个已通关的关卡所取得的星星数，并显示
    for(var i=0;i<=Levelopen-1;i++){
        (function(k){
            //Checkpoints
            for(var l=0;l<Checkpoints[k];l++){
                $(".star"+(l+1)+"_no").eq(k).css("display","none");
                $(".star"+(l+1)+"_yes").eq(k).css("display","block");
            }
        })(i);
    }


    ResetGame();//重置游戏
});

//重新开始
$("#Restart").on("click",function(){
    $("#stop_box").hide();
    $("#bg").hide();

    $(".decri_head").html("第"+Checkpoint+"关");
    $("#every_task").show();
    $("#task_interface").show();
    $(".tong_desc").hide();
    $(".tong_desc").eq(Checkpoint-1).show();

    ResetGame(); //重置游戏

    $("#moneys_jin2").html(CoinTotal);    //显示金币总数   开始游戏层
    $("#stars_2").html(StarsTotal);  //显示星星总数


    if(Checkpoints[Checkpoint-1]>0){
        $(".yes_no").html("已通关");
    }else if(Checkpoints[Checkpoint-1]==0){
        $(".yes_no").html("未通关");
    }
});


//重置游戏
function ResetGame() {
    act = 0;
    mapReset = 0; //地图转换次数
    coins4 = 0;
    coins5 = 1;

    mnum1 = 0;
    mnum2 = 1600;

    jqxsI = 0;

    CoinPosition.length = 0;  //金币、障碍、怪物的位置

    Total = 0;
    TotalDis = 0;
    GoldCoinNum = 0;      //吃到的金币的数量
    SilverCoinNum = 0;    //吃到银币的数量
    CopperCoinNum = 0;    //吃到铜币的数量
    BearHeadNum = 0;      //吃到熊头的数量
    FoxHeadNum = 0;       //吃到狐狸头的数量

    StampBoxNum = 0;      //踩盒子的数量
    StampMonstrNum = 0;   //踩怪物的数量

    OneMap2 = true;
    OneMap3 = true;
    OneCoin2 = true;
    OneCoin3 = true;

    score = 0;

    timeI = 0;
    speed = 10;

    MapPaodao = 0;

    Gameover = 1;  //游戏结束
    Suspend = true;   //暂停

    flag = true;

    ground = 345;

    flag1 = true;   //控制人物是否被跑道夹住
    flag2 = false;  //控制人物恢复初始位置
    flagH = 0;   //记录被跑道夹住时下一条跑道的高度
    tempX = false;
    ActivationAction = false;
    init();
    ctx4.clearRect(0, 0, canWidth2, canHeight2);
    ctx5.clearRect(0, 0, canWidth2, canHeight2);
}

