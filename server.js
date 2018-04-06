require('dotenv').config({ silent: true });

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http');
const moment = require('moment-timezone');
moment.tz.setDefault('UTC');
const serialize = require('serialize-javascript');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(require('body-parser').json());
app.post('/add_event', (req, res) => {
  //console.log(req.body);
  events.push(req.body);
  res.sendStatus(200);
});

let events = [
  { description: 'Random Event 1', date: moment('2018-04-06', 'YYYY-MM-DD') },
  { description: 'Random Event 2', date: moment('2018-04-08', 'YYYY-MM-DD') },
  { description: 'Random Event 3', date: moment('2018-05-10', 'YYYY-MM-DD') }
];

let renderer;

app.get('/', (req, res) => {
  let template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
  let contentMarker = '<!--APP-->';
  if (renderer) {
    renderer.renderToString({}, (err, html) => {
      if (err) {
        console.log(err);
      } else {
        //console.log(html);
        res.send(template.replace(contentMarker, `<script>var __INITIAL_STATE__ = ${ serialize(events) }</script>\n${html}`));
      }
    });
  } else {
    res.send('<p>Awaiting compilation</p>');
  }
});


const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  const reload = require('reload');
  const reloadServer = reload(server, app);
  require('./webpack-dev-middleware').init(app);
  require('./webpack-server-compiler').init(function(bundle) {
    //console.log('Node bundle built')
    renderer = require('vue-server-renderer').createBundleRenderer(bundle);
  })
}

server.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === 'development') {
    require("open")(`http://localhost:${process.env.PORT}`);
  }
});
