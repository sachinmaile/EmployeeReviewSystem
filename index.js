const express=require('express');
const cookieParser=require('cookie-parser');
require('dotenv').config();
const app=express();
const port=process.env.PORT;
const expressLayouts=require('express-ejs-layouts');
const path=require('path');
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local');
// const MongoStore=require('connect-mongo')(session);
const flash=require('connect-flash');
const customMWare=require('./config/flashMiddleware');

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(session({
    name:'EmployeeReviewSystem',
    secret:process.env.SECRET_SESSION_COOKIE,
    saveUninitialized:false,
    resave:false,
    cookie:{maxAge:(1000*60*5)},
    // store: MongoStore.create({
    //     mongoUrl: 'mongodb://localhost:27017/social_media_web_app_db'
    // })
    // store:new MongoStore({mongooseConnection:db,autoRemove:'disabled'})
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMWare.setFlash);

// use express router
app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log('Yup! My Express server is running on port :', port);
})