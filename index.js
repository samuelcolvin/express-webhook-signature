var express = require('express')
var bodyParser = require('body-parser')
var CryptoJS = require('crypto-js')
var crypto = require('crypto')
var app = express()

const secret = 'the-very-secret-secret'

app.use(bodyParser.raw({type: 'application/json'}))

app.post('/', function (req, res) {
  var cryptojs_signature = CryptoJS.HmacSHA256(req.body, secret).toString(CryptoJS.enc.Hex)
  var crypto_signature = crypto.createHmac('sha256', secret).update(req.body).digest('hex')
  console.log('crypto-js signature:', cryptojs_signature)
  console.log('crypto signature:   ', crypto_signature)
  console.log('webhook-signature:  ', req.headers['webhook-signature'])
  if (crypto_signature === req.headers['webhook-signature']) {
    var obj = JSON.parse(req.body)
    console.log('body json:', obj)
    res.end('Valid Signature, body: ' + JSON.stringify(obj) + '\n')
  } else {
    res.status(401).send('Invalid Signature\n')
  }
})

app.listen(8000, function () {
  console.log('Running on port 8000')
})
