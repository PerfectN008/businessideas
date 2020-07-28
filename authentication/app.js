const { urlencoded } = require('body-parser');

var express        =require('express'),
    app            =express(),
    passport       =require('passport'),
    LocalStrategy  =require("passport-local"),
    mongoose       =require("mongoose"),
    methodOverride=require("method-override")
    User           =require('./models/user'),
    bodyParser     =require("body-parser"),
    Score          =require("./models/score");



mongoose.connect("mongodb://localhost/Contestants");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.set("view engine","ejs");


app.use(require("express-session")({ //This creates a session for every user logged in(No changes required here.)
    secret:"This is a secret",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*everything above is important for authorisation and updation for score.....
install method-override (npm install method-override) for using put method*/
app.get("/",function(req,res){
    res.send("Welcome")
})
//Register routes
app.get("/register",function(req,res){
    res.render("register");
})
app.post("/register",function(req,res){
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){/*here User model using passport, creates new user taking in his username 
        and hashing the password, the callback checks for error and authenicates the user in the website*/
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/");
        })
    })
})

app.get("/company",isLoggedIn,function(req,res){
    
    res.render("company");
    
    
})
//Login routes
app.get("/login",function(req,res){
    res.render("login");
})
//once the login button is pressed the form(check login page) is linked to this route and the passport.authenticate() checks the users credentials and redirects 
app.post("/login",passport.authenticate('local',{
    successRedirect:"/",
    failureRedirect:"/login"
}),function(req,res){})

//Company updation(Ignore if not necessary)
app.put("/company",function(req,res){
    var usercompany=req.body.company
    var id=req.user._id
    User.findByIdAndUpdate(id,{company:req.body.company},function(err,founduser){
        if(err){
            console.log(err)
        }/*
        else{
            
            founduser.update({usercompany})
            
            console.log(founduser.company)
            res.redirect("/")
        }*/
        res.redirect("/")
    })

})

//QUIZ(main)

app.get("/quiz",function(req,res){//this route render the quiz form
    res.render("quiz")
})
app.put("/quiz",function(req,res){//the form is linked to this route...
    useranswer=req.body.userans//user ans
    
    User.findById(req.user._id,function(err,founduser){//req.users._id gives the id of the current logged in user..
        if(useranswer=="A"){
            console.log("updated")
            var newscore=founduser.score+10

            User.updateOne({username:req.user.username},{score:newscore},function(err){
                if(err){
                    console.log(err)
                }
                else{
                    console.log("updated")
                }
            })
        }
        else{
            User.update({score:founduser.score})
        }
        res.redirect("/")
        
    })

})
    
//logout route
app.get("/logout",function(req,res){
    req.logout()
    res.redirect("/home")
})
//this is the middleware ,this is very important...it keeps unauthorised ppl(those who havent logged in) from accessing the quiz page using routes..
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())  // <-- typo here
        return next();
    res.redirect('/login');
}


app.listen(3000,function(){
    console.log("Server has started")

})