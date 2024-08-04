
### Frontend (React)

#### `frontend/src/App.js`
```javascript
import React, { useEffect, useState } from 'react';

function App() {
    const [serviceA, setServiceA] = useState('');
    const [serviceB, setServiceB] = useState('');
    const [serviceC, setServiceC] = useState('');

    useEffect(() => {
        fetch('/api/service-a').then(res => res.json()).then(data => setServiceA(data.message));
        fetch('/api/service-b').then(res => res.json()).then(data => setServiceB(data.message));
        fetch('/api/service-c').then(res => res.json()).then(data => setServiceC(data.message));
    }, []);

    return (
        <div>
            <h1>Microservices Demo</h1>
            <p>{serviceA}</p>
            <p>{serviceB}</p>
            <p>{serviceC}</p>
        </div>
    );
}

export default App;
