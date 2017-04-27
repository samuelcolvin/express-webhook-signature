# webhook signature check with express js

## Usage

To install (assuming you have yarn and python 3.5 installed):

```
yarn
virtualenv -p $(which python3.5) env
source env/bin/activate
pip install -r requirements.txt
```

To test, in one terminal:

```
yarn start
```

In another terminal, with the env activated (`source env/bin/activate`):

```
python fire_webhook.py 
```

## Result

[crypto](https://www.npmjs.com/package/crypto) yields the same (correct) result as python and successfully 
authenticates the request while [crypto-js](https://www.npmjs.com/package/crypto-js) returns a completely wrong result.
 
I've done a bit of googling but can't get `crypto-js` to give a correct result - it seems to just be plain wrong
for this case.


## Output

Server Terminal:

```
(env) express-webhook-signature ➤  yarn start
yarn start v0.21.3
$ node index.js 
Running on port 8000
crypto-js signature: be2538e5a35157d58cdd8f8b5e4c01c3f4dd0ebff8eaaf4625511dca2d315759
crypto signature:    3addae32b7b45dcbe4f1c1112b91cf9ca854fec55a3b4958ebdd42d439239805
webhook-signature:   3addae32b7b45dcbe4f1c1112b91cf9ca854fec55a3b4958ebdd42d439239805
body json: { hello: 'this is an example',
  of: 'checking a webhook signature with javacript',
  success: null }
```

Client Terminal:

```
(env) express-webhook-signature ➤  python fire_webhook.py 
response status:  200
response text:    Valid Signature, body: {"hello":"this is an example","of":"checking a webhook signature with javacript","success":null}

```
