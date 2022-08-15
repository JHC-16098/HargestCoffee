const express = require('express');
const cors = require('cors');

//Sets up the Express application
const app = express();
app.use(cors());
const Pool = require('pg').Pool;

//Connects to the database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'coffee_testing',
    password: 'daMp6era',
    dialect: 'postgres',
    port: 5432
});

//BodyParser is used to handle HTTP Methods. It can 
//extract the body portion of the incoming request 
//stream and expose it to req.boDdy

const bodyParser = require('body-parser');
const res = require('express/lib/response');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


pool.connect((err, client, release) => {
    if(err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Connected to Database")
    })
})

app.get('/unfilled', (req, res, next) => {
    //console.log("Testing Data: ");
    pool.query('SELECT* FROM orders WHERE status=0 ORDER BY id')
        .then(testData => {
            //console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/inprogress', (req, res, next) => {
    //console.log("Testing Data: ");
    pool.query('SELECT* FROM orders WHERE status=1 ORDER BY id')
        .then(testData => {
            //console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/finished', (req, res, next) => {
    //console.log("Testing Data: ");
    pool.query('SELECT* FROM orders WHERE status=2 ORDER BY id')
        .then(testData => {
            //console.log(testData);
            res.send(testData.rows);
        })
})

app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    values = [req.body.name, req.body.coffee, req.body.quantity, req.body.milk, req.body.shot, 0];
    console.log("Submitting Order: "+values);
    pool.query('INSERT INTO orders(name, coffee, quantity, milk, shot, status) VALUES($1, $2, $3, $4, $5, $6)', values);
    res.send({"status":"submitted"});
})

app.post('/update', (req, res) => {
    console.log(req.body);
    var updateData = [req.body.id, req.body.status];
    console.log("Updating Order: "+ updateData[0] + " To Status: " + updateData[1]);
    pool.query("UPDATE orders SET status=$2 WHERE id=$1", updateData);
    res.end();
})

app.get('/eta', (req, res, next) => {
    //console.log("Testing Data: ");
    pool.query('SELECT COUNT( * ) FROM orders WHERE status=1')
        .then(testData => {
            console.log(testData.rows);
            res.send(testData.rows);
        })
})

app.get('/ClientOrders', (req, res, next) => {
    pool.query('SELCT * FROM orders')
        .then(data =>{
            res.send(data.rows);
        })
})

const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 3000
})
