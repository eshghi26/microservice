
### Service B (Python Flask)

#### `service-b/app.py`
```python
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/service-b', methods=['GET'])
def hello():
    return jsonify(message='Hello from Service B!')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3002)
