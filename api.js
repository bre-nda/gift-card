const express = require ('express');
const bodyparser = require ('body-parser');
const cors = require ('cors');
const mysql = require ('mysql2');

const app = express();

app.use(cors());

app.use (bodyparser.json());


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




app.listen(3000,()=>{
    console.log('Server running...');
});