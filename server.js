var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
  //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

var articles = {
    'article-one': {
        title: 'Article One : Hari Prasad',
        header: 'Article One',
        date: '11 August 2017',
        content:`<p>
                        This is the content for my first article during building web apps course learning through IMAD.. This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  
                    </p>
                    <p>
                        This is the content for my first article during building web apps course learning through IMAD.. This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  
                    </p>
                    <p>
                        This is the content for my first article during building web apps course learning through IMAD.. This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  This is the content for my first article during building web apps course learning through IMAD..  
                    </p>`
    },
    
    'article-two': {
        title: 'Article Two : Hari Prasad',
        header: 'Article Two',
        date: '15 August 2017',
        content:`<p>
                        This is the content for my second article during building web apps course learning through IMAD..   This is the content for my second article during building web apps course learning through IMAD..  
                    </p>
                    <p>
                        This is the content for my second article during building web apps course learning through IMAD..   This is the content for my second article during building web apps course learning through IMAD..  
                    </p>
                    <p>
                        This is the content for my second article during building web apps course learning through IMAD..   This is the content for my second article during building web apps course learning through IMAD..  
                    </p>`
    },
    
    'article-three': {
        title: 'Article Three : Hari Prasad',
        header: 'Article Three',
        date: '11 August 2017',
        content:`<p>
                       This is the content for my third article during building web apps course learning through IMAD..   This is the content for my third article during building web apps course learning through IMAD..   
                    </p>
                    <p>
                        This is the content for my third article during building web apps course learning through IMAD..   This is the content for my third article during building web apps course learning through IMAD..   
                    </p>
                    <p>
                        This is the content for my third article during building web apps course learning through IMAD..   This is the content for my third article during building web apps course learning through IMAD..   
                    </p>`
    }
};


function createTemplate(data){
    var title = data.title;
    var header = data.header;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate=`<html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1">
           <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div><a href="/">Home</a></div>
                <hr>
                <h3>${header}</h3>
                <div>${date}</div>
            
                <div>
                   ${content}
                </div>
            </div>
            <hr>
            <input type"text" id="comments" placeholder="enter comments"></input>
            <input type"submit" id="submit-com" value="Submit"></input>
            <ul id="comlist"></ul>
        </body>
    </html>`;    
    
    return htmlTemplate;
};

app.get('/article-one1', function (req, res) {
  res.send(createTemplate(articleOne));
  //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
