const morpheneJS = require('../lib');

/* Generate private active WIF */
const username = process.env.MORPHENE_USERNAME;
const password = process.env.MORPHENE_PASSWORD;
const privActiveWif = stmorpheneJSeem.auth.toWif(username, password, 'active');

/** Add posting key auth */
morpheneJS.broadcast.addKeyAuth({
    signingKey: privActiveWif,
    username,
    authorizedKey: 'MPH88CPfhCmeEzCnvC1Cjc3DNd1DTjkMcmihih8SSxmm4LBqRq5Y9',
    role: 'posting',
  },
  (err, result) => {
    console.log(err, result);
  }
);
