const User =require("../models/user");

module.exports.renderSignupForm =(req,res) =>{
    res.render("user/signUp.ejs");
}

module.exports.createUser =async(req,res) =>{
    try {
        // 1. Password ko alag se extract karein
        let { username, email, password } = req.body; 
        
        // 2. Sirf email aur username se User model banayein
        let newUser = new User({ email, username });
        
        // 3. Extracted password ko yaha directly pass karein
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) =>{
            if(err) {
                return next(err);
            }
             req.flash("success","Welcome to Wanderlust!");
             res.redirect("/listings");
        })
    } catch(e) {
        // Error handling agar user already exist karta ho
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req,res) =>{
    res.render("user/loginUP.ejs");
}

module.exports.loginUser =async(req,res) =>{
       try{
         req.flash("success","Welcome to Wanderlust You are logged in !");
         let redirectUrl  = res.locals.redirectUrl || "/listings";
         res.redirect(redirectUrl);
       }catch(e){
        req.flash("error", e.message);
        res.redirect("/login");
       }
}

module.exports.logoutUser =  (req,res, next) =>{
    req.logout((err) =>{
        if(err) {
           return next(err);
        }
        req.flash("success","You are logged Out!");
        res.redirect("/listings");
    });
} 