let Express = require('express');

let app = Express();

app.use(Express.json());

app.get('/test', function (req, res) {
    console.log(req.body);
    res.send('test: GET endpoint success');
});

app.get('/home', (req, res) => {
    //this will send back a file in the current directory (__dirname),
    // followed by the path of the file we want to send
    
    res.sendFile(__dirname + '/static.html')
})
// app.get('/test', function (req, res) {
//     console.log(req.body);
//     res.send('test: GET endpoint success #2');
// });

app.post('/test', function (req, res) {
    console.log(req.body);
    res.send('test: endpoint success');
});

app.listen(8080, function () { console.log('app is listening') });