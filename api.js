const express = require ('express');
const bodyparser = require ('body-parser');
const cors = require ('cors');
const mysql = require ('mysql2');

const app = express();

app.use(cors());

app.use (bodyparser.json());

// const express = require('express');
// const path = require('path');
// const app = express();
// const mysql = require ('mysql2')
// app.use(express.static(__dirname +'/giftcard'));
// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname +'/src/index.html'));});
// app.use(express.static(__dirname +'/giftcard'));
// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname +'/api.js'));});

console.log(__dirname); 



// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '_@123KOa',
    database: 'gift_cards',
});

// Check Database Connection
db.connect(err=>{
    if (err){console.log(err, 'db err');}
    console.log('Database connected...');
});



// Get all data
app.get('/Wallet_Balances',(req, res)=>{
    let qr = `select * from Wallet_Balances`;
    db.query(qr,(err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message: 'all wallet_balances data',
                data: result
            });
        }
    });
});

// Get all data
app.get('/gifts',(req, res)=>{
    let qr = `select * from gifts order by Trans_Date DESC`;
    db.query(qr,(err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message: 'all gifts data',
                data: result
            });
        }
    });
});
app.get('/gift_redemptions',(req, res)=>{
    let qr = `select * from gift_redemptions order by Redeem_Date DESC`;
    db.query(qr,(err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message: 'all gifts data',
                data: result
            });
        }
    });
});

app.get('/gift_accounts',(req, res)=>{
    let qr = `select * from gift_accounts order by Acc_TransDate DESC`;
    db.query(qr,(err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message: 'all gifts data',
                data: result
            });
        }
    });
});


app.get('/users',(req, res)=>{
    let qr = `select * from users order by User_Reg_Date DESC`;
    db.query(qr,(err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message: 'all gifts data',
                data: result
            });
        }
    });
});

app.get('/users/:id',(req, res)=>{

    let gID = req.params.id;
    let qr = `select * from users where id = ${gID}`;
    db.query(qr,(err, result)=>{
        if(err){console.log(err);}

        if(result.length>0){
            res.send({
                message: 'single data',
                data: result
            });
        }
        else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// update user
app.put('/users/:id',(req, res)=>{
    let qID = req.params.id;
    console.log(req.body, 'update data');

    let mobile = req.body.User_Mobile;
    let username = req.body.User_Name;
    let qr = `update users set User_Mobile = '${mobile}', User_Name = '${username}' where id = ${qID} `;

    db.query(qr,(err, result)=>{
        if(err){console.log(err);}

       console.log(result, 'result');
       res.send({
        message: 'data updated',
       })
    });
});

// create data
app.post('/users',(req, res)=>{
    console.log(req.body, 'createdata');
    let mobile = req.body.User_Mobile;
    let username = req.body.User_Name;
    
    let qr = `insert into users(User_Mobile, User_Name)
                values('${mobile}', '${username}')`;

    db.query(qr,(err, result)=>{
        if(err){console.log(err);}

       console.log(result, 'result');
       res.send({
        message: 'data inserted',
       })
    });
});

// Delete single user
app.delete('/users/:id',(req, res)=>{
    let qID = req.params.id;
    let qr = `delete from users where id = ${qID}`;

    db.query(qr,(err, result)=>{
        if(err){console.log(err);}

       console.log(result, 'result');
       res.send({
        message: 'data deleted',
       })
    });
});


app.get('/outgoing_msg',(req, res)=>{
    let qr = `select * from outgoing_msg order by Trans_Date DESC `;
    db.query(qr,(err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message: 'all gifts data',
                data: result
            });
        }
    });
});

app.get('/sessions',(req, res)=>{
    let qr = `select * from sessions`;
    db.query(qr,(err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message: 'all gifts data',
                data: result
            });
        }
    });
});

app.get('/tarrifs',(req, res)=>{
    let qr = `select * from tarrifs`;
    db.query(qr,(err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message: 'all gifts data',
                data: result
            });
        }
    });
});
app.get('/whitelist',(req, res)=>{
    let qr = `select * from whitelist`;
    db.query(qr,(err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message: 'all gifts data',
                data: result
            });
        }
    });
});




// SERVER RUNNING
// app.listen(process.env.PORT || 8080,() =>{
//     console.log('server running...');
// });
// app.listen(process.env.PORT || 3000,() =>{
//     console.log('server running...');
// });


app.listen(3000,()=>{
    console.log('Server running...');
});