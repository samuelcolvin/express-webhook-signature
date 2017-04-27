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

[crypto](https://www.npmjs.com/package/crypto) yeild the same (correct) has and successfully authenticates the request
 while [crypto-js](https://www.npmjs.com/package/crypto-js) returns a completely wrong result.
 
I've done a bit of googling but can't get `crypto-js` to give an accurate result - it seems to just be plain wrong
for this case.
