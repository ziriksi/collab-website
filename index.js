const express = require('express');  
const app = express();
const server = require('http').Server(app);
const db = new (require('@replit/database'))();
const rateLimit = require('express-rate-limit');

app.use(express.static('public'));
app.use(express.json());


app.post('/upload_collab', rateLimit({
    // 3 uploads per 24 hours
  	windowMs: 1000 * 60 * 60 * 24,
  	max: 3
  }), (req, res) => {
  const body = req.body;
  const checks = {
    req: {
      name: s => s.length < 50,
      songName: s => s.length < 50,
      songUrl: s => s.length < 200,
      coverUrl: s => s.length < 200,
      serverUrl: s => s.length < 200
    },

    opt: {
      description: s => s.length < 4000,
      collabType: s => /^(layout|glow|modern|effect|other)$/g.test(s),
      difficulty: s => /^(15star|69star|easydemon|mediumdemon|harddemon|insanedemon|extremedemon|impossible|challenge)$/g.test(s),
      averagePartLength: s => /^(1-4s|5-9s|10-19s|20-40s|40s+)$/g.test(s),
      qualityStandards: s => /^(low|mid|high)$/g.test(s),
      activity: s => /^(low|mid|high)$/g.test(s)
    }
  };

  for(const key of Object.keys(checks.req)) {
    if(!checks.req[key](body[key])) {
      res.send('invalid');
      return;
    }
  }
  
  console.log(body);
});


app.get('*', (req, res) => {
  res.redirect('/');
});

server.listen(3000);