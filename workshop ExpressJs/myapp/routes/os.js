const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res) => {
  res.json({
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
    uptime: os.uptime(),
    loadavg: os.loadavg(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    cpus: os.cpus()
  });
});

router.get('/cpus', (req, res) => {
  res.json(os.cpus());
});

router.get('/cpus/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const cpus = os.cpus();
  if (id >= 0 && id < cpus.length) {
    res.json(cpus[id]);
  } else {
    res.status(404).send('CPU not found');
  }
});

module.exports = router;
