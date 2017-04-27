import json
import hashlib
import hmac

import requests

data = {
    'hello': 'this is an example',
    'of': 'checking a webhook signature with javacript',
    'success': None,
}
secret_key = 'the-very-secret-secret'
webhook_url = 'http://localhost:8000/'

payload = json.dumps(data)
b_payload = payload.encode()
m = hmac.new(secret_key.encode(), b_payload, hashlib.sha256)

headers = {
    'Webhook-Signature': m.hexdigest(),
    'User-Agent': 'TutorCruncher',
    'Content-Type': 'application/json',
}
r = requests.post(webhook_url, data=payload, headers=headers, timeout=3)
print('response status: ', r.status_code)
print('response text:   ', r.text)
