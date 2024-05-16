const ejs=require("ejs");
const path=require("path");
const express=require("express");
const site=new express();
site.listen(3000,()=>{
    console.log("Site online");
});
site.use(express.static(path.join(__dirname + '/static')));
site.get("/",(req,res)=>{
    ejs.renderFile('./base.ejs', {t:req.query.t}, {}, function(err, str) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(str);
    });
});