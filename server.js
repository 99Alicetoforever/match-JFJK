/**
 * Created by Administrator on 2017/8/25.
 */

var express=require("express");
var cookieParser=require("cookie-parser");
var session=require("express-session");
var mysql=require("mysql");
var bodyParser=require("body-parser");

//创建web程序入口
var app=express();
app.use(cookieParser());

//配置
app.use(bodyParser.urlencoded({extended:false}));

//配置session
app.use(session({
    secret:"keyboard cat",
    resave:true,
    saveUninitialized:true,
    cookie:{secure:false},
    cookie:{maxAge:1000*60}

}));
var pool=mysql.createPool({   //数据连接池
    host:"127.0.0.1",
    port:3306,
    database:"ttkp",
    user:"root",
    password:"aaaa"
});

//注册
app.post("/userRegister",function(req,res){
    var uname=req.body.uname;
    var tel=req.body.tel;
    var pwd=req.body.pwd;

    pool.getConnection(function(err,conn){
        conn.query("insert into user values(null,?,?,?)",[uname,tel,pwd],function (err,result) {
            if(err){
                console.log(err);
                res.send("0");
            }else{
                res.send("1");   //注册成功
            }
        });

    });
});


//登录
app.post("/userLogin",function (req,res) {
    var uname=req.body.uname;
    var pwd=req.body.pwd;
    pool.getConnection(function(err,conn){
        conn.query("select * from user where uname=? and pwd=?",[uname,pwd],function(err,result){
            conn.release();
            if(err){
                console.log(err);
                res.send("0");
            }else if(result.length<=0){
                res.send("1");
            }else{
                req.session.user=result[0].uid;
                console.log( req.session.user);

                res.send("2");
            }
        })
    })
});

//获取当前最大关卡数
app.post("/GetLevel",function (req,res) {

    pool.getConnection(function(err,conn){
        conn.query("select maxg from user where uid=?",[req.session.user],function(err,result){
            if(err){
                console.log(err);
            }else {
                res.send(result[0]);
                console.log(result[0]);
            }
        })
    })
});

//获取星星的总数量
app.post("/GetStarNum",function (req,res) {
    pool.getConnection(function(err,conn){
        conn.query("select starnum from guanka where uid=?",[req.session.user],function (err,result) {
            if(result<=0){
                res.send("0");
            }else {
                conn.query("select sum(starnum) as ToStar from guanka where uid=?",[req.session.user],function(err,result){
                    if(err){
                        console.log(err);
                    }else {
                        res.send(result[0]);
                        console.log(result[0])

                    }
                })
            }
        })
    })
});

//获取金币的数量
app.post("/GetCoinNum",function (req,res) {

    pool.getConnection(function(err,conn){
        conn.query("select tnum from uktype where uid=? and tid=1",[req.session.user],function(err,result){
            if(result<=0){
                res.send("0");
            }else {
                res.send(result);
            }
        })
    })
});

//获取每一关的星星数量
app.post("/GetGidStarNum",function (req,res) {
    pool.getConnection(function(err,conn){
        conn.query("select * from guanka where uid=? ",[req.session.user],function (err,result) {
            if(result<=0){
                res.send("0");
            }else {
                res.send(result[0]);
            }
        })
    })
});




//退出登录
app.get("/outLogin",function(req,res){
    delete req.session.user;
    res.send("0");
});



//使用静态资源插件
app.use(express.static("../ttkp3"));

app.listen(80,function (err) {
    if(err){
        console.log(err);
    }else{
        console.log("服务器启动成功");
    }
});


