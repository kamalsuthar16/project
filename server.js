var express=require("express");
var fileupload=require("express-fileupload");
var mysql2=require("mysql2");

var app=express();

app.listen(2004,function(){
    console.log("Server Started...");
})
app.use(express.static("public"));
app.use(fileupload());

app.get("/c-profile",function(req,resp)
{
      resp.sendFile(process.cwd()+"/public/c-profile.html");
})
app.get("/ct-profile",function(req,resp)
{
      resp.sendFile(process.cwd()+"/public/ct-profile.html");
})

app.get("/",function(req,resp)
{
      resp.sendFile(process.cwd()+"/public/index.html");
})

//-=-------------------------DB Operations-------------------
//================Database Connectivity============
var dbConfig={
  host:"127.0.0.1",
  user:"root",
  password:"Kamal123@",
  database:"project",
  dateStrings:true
}

  
  var dbCon=mysql2.createConnection(dbConfig);//dbCon is an object
  dbCon.connect(function(jasoos){
      if(jasoos==null)
          console.log("Connected Successfulllyyy...");
          else
          console.log(jasoos);
  })

app.post("/cprofile-submit",function(req,resp)
{
  //---------------File Uploading================
  var fileName="nopic.jpg";
  if(req.files!=null)
   {
     //console.log(process.cwd());
      fileName=req.files.ppic.name;
     var path=process.cwd()+"/public/uploads/"+fileName;
     req.files.ppic.mv(path);
   }
    console.log(req.body);
    //resp.send("   File name="+fileName);

    //saving data in table
    var email=req.body.txtemail;
    var name=req.body.name;
    var mobile=req.body.contno;
    var address=req.body.address;
    var city=req.body.city;
    var dob=req.body.dob;
    var gender=req.body.gender;
    

         //fixed                             //same seq. as in table
    dbCon.query("insert into cprofile(email,name,mobile,address,city,dob,gender,picname) values(?,?,?,?,?,?,?,?)",[email,name,mobile,address,city,dob,gender,fileName],function(err)
    {
          if(err==null)
            resp.send("Record Saved Successssfullllyyyyyyyyyyyyyyyyyyyyyyyy!!!!!!!!!");
          else
            resp.send(err);
    })
})

app.post("/cprofile-delete",function(req,resp)
{
     //saving data in table
    var email=req.body.txtemail;
    

         //fixed                             //same seq. as in table
    dbCon.query("delete from cprofile where email=?",[email],function(err,result)
    {
          if(err==null)
          {
            if(result.affectedRows==1)
              resp.send("Account Removed Successssfullllyyyyyyyyyyyyyyyyyyyyyyyy!!!!!!!!!");
            else
              resp.send("Inavlid Email id");
            }
              else
            resp.send(err);
    })
})



app.post("/cprofile-update",function(req,resp)
{
  //---------------File Uploading================
  var fileName;
  if(req.files!=null)
   {
     //console.log(process.cwd());
      fileName=req.files.ppic.name;
     var path=process.cwd()+"/public/uploads/"+fileName;
     req.files.ppic.mv(path);
   }
   else
   {
    fileName=req.body.hdn;
   }
    console.log(req.body);
    //resp.send("File name="+fileName);

    //saving data in table
    var email=req.body.txtemail;
    var name=req.body.name;
    var mobile=req.body.contno;
    var address=req.body.address;
    var city=req.body.city;
    var dob=req.body.dob;
    var gender=req.body.gender;

         //fixed                             //same seq. as in table
    dbCon.query("update cprofile set name=?,mobile=?,address=?,city=?,dob=?,gender=?,picname=? where email=?",[name,mobile,address,city,dob,gender,fileName,email],function(err)
      {
          if(err==null)
            resp.send("Record Updated Successssfullllyyyyyyyyyyyyyyyyyyyyyyyy!!!!!!!!!");
          else
            resp.send(err);
    })
})





//for ct-profile
app.post("/ctprofile-delete",function(req,resp)
{
     //saving data in table
    var email=req.body.txtemail;
    

         //fixed                             //same seq. as in table
    dbCon.query("delete from ct1profile where email=?",[email],function(err,result)
    {
          if(err==null)
          {
            if(result.affectedRows==1)
              resp.send("Account Removed Successssfullllyyyyyyyyyyyyyyyyyyyyyyyy!!!!!!!!!");
            else
              resp.send("Inavlid Email id");
            }
              else
            resp.send(err);
    })
})


app.post("/ctprofile-update",function(req,resp)
{
  //---------------File Uploading================
  var fileName;
  if(req.files!=null)
   {
     //console.log(process.cwd());
      fileName=req.files.ppic.name;
     var path=process.cwd()+"/public/uploads/"+fileName;
     req.files.ppic.mv(path);
   }
   else
   {
    fileName=req.body.hdn;
   }
    console.log(req.body);
    //resp.send("File name="+fileName);

    //saving data in table
    var email=req.body.txtemail;
    var name=req.body.name;
    var mobile=req.body.contno;
    var address=req.body.address;
    var city=req.body.city;
    var aadhar=req.body.aadhar;
    var gender=req.body.gender;

         //fixed                             //same seq. as in table
    dbCon.query("update ct1profile set name=?,mobile=?,address=?,city=?,aadhar=?,gender=?,picname=? where email=?",[name,mobile,address,city,aadhar,gender,fileName,email],function(err)
      {
          if(err==null)
            resp.send("Record Updated Successssfullllyyyyyyyyyyyyyyyyyyyyyyyy!!!!!!!!!");
          else
            resp.send(err);
    })
  })





app.post("/ctprofile-submit",function(req,resp)
{
  //---------------File Uploading================
  var fileName="nopic.jpg";
  if(req.files!=null)
   {
     //console.log(process.cwd());
      fileName=req.files.ppic.name;
     var path=process.cwd()+"/public/uploads/"+fileName;
     req.files.ppic.mv(path);
   }
    console.log(req.body);
    //resp.send("   File name="+fileName);

    //saving data in table
    var email=req.body.txtemail;
    var name=req.body.name;
    var mobile=req.body.contno;
    var address=req.body.address;
    var city=req.body.city;
    var aadhar=req.body.aadhar;
    var gender=req.body.gender;
    

         //fixed                             //same seq. as in table
    dbCon.query("insert into ct1profile(email,name,mobile,address,city,aadhar,gender,picname) values(?,?,?,?,?,?,?,?)",[email,name,mobile,address,city,aadhar,gender,fileName],function(err)
    {
          if(err==null)
            resp.send("Record Saved Successssfullllyyyyyyyyyyyyyyyyyyyyyyyy!!!!!!!!!");
          else
            resp.send(err);
    })
})



app.get("/html-signup", function (req, resp) {

  let data = [req.query.Email, req.query.Pwd, req.query.Utype];
  dbCon.query("insert into csignup (email, password, usertype ) value(?,?,?)", data, function (err) {
    if (err) {
      resp.send("Already a User");
    }
    else {
      resp.send("Signup Successfully");
    }
  });
});


app.get("/login", function (req, resp) {
  // Extract query parameters correctly
  let data = [req.query.Email, req.query.password];

  dbCon.query("SELECT * FROM csignup WHERE email=? AND password=?", data, function (err, result) {
    if (err) {
      // Handle error properly, send back a 500 status code for internal server error
      resp.status(500).send(err.message);
    } else if (result.length === 1) {
      if (result[0].status === 1) {
        // Check if the user is active
        if (result[0].usertype === "Citizen") {
          resp.send("Citizen Logined");  // Respond for Citizen user
        } else if (result[0].usertype === "Caretaker") {
          resp.send("Caretaker Logined");  // Respond for Caretaker user
        }
      } else if (result[0].status === 0) {
        resp.send("You Are Blocked");  // Handle blocked users
      }
    } else {
      resp.send("Invalid (Please Check Email Or Password)");  // Handle invalid login credentials
    }
  });
});



//update password
// Update password route
app.get("/update-now", function (req, resp) {
  console.log(req.query);  // Log the query parameters to check the values

  let email = req.query.email; // Get the email from the query parameters
  let oldpass = req.query.password; // Get the old password
  let newpass = req.query.newpassword; // Get the new password

  // Validate old password and update it
  let data = [email, oldpass]; // Check if the old password is correct
  dbCon.query("select * from csignup where email=? and password=?", data, function (err, table) {
      if (err != null) {
          resp.send(err.toString());  // Send the error if any
      } else if (table.length == 1) { // If the email and password match
          if (table[0].usertype == "Citizen") { // Ensure the user is a Citizen
              var updateData = [newpass, email]; // Prepare the data to update the password
              dbCon.query("update csignup set password=? where email=?", updateData, function (err, result) {
                  if (err != null) {
                      resp.send(err.toString());  // Send the error if any
                  } else {
                      resp.send("Password changed successfully.");
                  }
              });
          } else {
              resp.send("You are not a Citizen."); // If the user type is not Citizen
          }
      } else {
          resp.send("Invalid email or password."); // If the email or old password is incorrect
      }
  });
});

//update password
// Update password route
app.get("/update-now", function (req, resp) {
  console.log(req.query);  // Log the query parameters to check the values

  let email = req.query.email; // Get the email from the query parameters
  let oldpass = req.query.password; // Get the old password
  let newpass = req.query.newpassword; // Get the new password

  // Validate old password and update it
  let data = [email, oldpass]; // Check if the old password is correct
  dbCon.query("select * from csignup where email=? and password=?", data, function (err, table) {
      if (err != null) {
          resp.send(err.toString());  // Send the error if any
      } else if (table.length == 1) { // If the email and password match
          if (table[0].usertype == "Caretaker") { // Ensure the user is a Citizen
              var updateData = [newpass, email]; // Prepare the data to update the password
              dbCon.query("update csignup set password=? where email=?", updateData, function (err, result) {
                  if (err != null) {
                      resp.send(err.toString());  // Send the error if any
                  } else {
                      resp.send("Password changed successfully.");
                  }
              });
          } else {
              resp.send("You are not a caretaker."); // If the user type is not Citizen
          }
      } else {
          resp.send("Invalid email or password."); // If the email or old password is incorrect
      }
  });
});
