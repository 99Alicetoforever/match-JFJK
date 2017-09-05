function doKeyup(e){
    window.addEventListener('keydown', doKeydown);

    var keyID = e.keyCode ? e.keyCode : e.which;

    //在地面上跑动的时候才可以跳
    if(act===0 && dimian===ground){
        //跳，按方向上键或者w键
        if(keyID === 38 || keyID===87){
            act=1;
            jqxsI=0;
            ysxfI=0;
            FirJumpm.play();
        }
    }


    //当在跳状态时，
    if(act===1 && jqxsI>3 && jqxsI<11){
        if(keyID === 38 || keyID===87){

            act=3;
            jqxsI=0;
            ysxfI=0;
            SecJumpm.play();
        }
    }

    //当在二段跳的时候并且在下落阶段的时候可以进行三段跳
    if(act===3 && jqxsI>3 && jqxsI<11){

        if(keyID === 38 || keyID===87){
            act=4;                       //三段跳状态
            jqxsI=0;
            SecJumpm.play();
        }
    }

    if(act==5){
        if(keyID === 38 || keyID===87){
            act=3;
            jqxsI=0;
            SecJumpm.play();
        }
    }

    if(act==6){
        if(keyID === 38 || keyID===87){
            act=3;
            jqxsI=0;
            SecJumpm.play();
        }
    }



}
function doKeydown(e){

    var keyID = e.keyCode ? e.keyCode :e.which;

    if(act===0){
        //下蹲 按方向下键或者S键
        if( (keyID === 40 || keyID === 83) && dimian===ground){

            act=2;
            jqxsI=0;
        }
        window.addEventListener("keyup",dokeyup2)
    }





}
function dokeyup2(e) {

    //当在下蹲过程中并且在地面的时候
    if(act===2 && dimian===ground){
        var keyID = e.keyCode ? e.keyCode :e.which;

        //下蹲 按方向下键或者S键
        if(keyID === 40 || keyID === 83){
            act=0;
            jqxsI=0;
        }
    }

}

//暂停  Q健
function doSuspend(e){
    var keyID = e.keyCode ? e.keyCode :e.which;
    // console.log(keyID);
    if((keyID === 81) && Gameover!=0){
        Suspend=true;
        $("#stop_box").show();
        if(Checkpoint==1){
            //st_req1
            $("#st_req1").show();
            $("#st_req2").hide();
            $("#st_req3").hide();
        }else if(Checkpoint==2){
            $("#st_req2").show();
            $("#st_req1").hide();
            $("#st_req3").hide();
        }else if(Checkpoint==3){
            $("#st_req2").hide();
            $("#st_req1").hide();
            $("#st_req3").show();
        }
    }
}


