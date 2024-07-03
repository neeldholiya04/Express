const express = require('express');

const app = express();

let courese = [
    {id: 1, name: "John", email: "john@example.com"},
    {id: 2, name: "John", email: "john@example.com"},
    {id: 3, name: "Johan", email: "john@example.com"}
]

app.get('/', (req, res) => {
        res.json(courese);
    }
);

app.post('/', (req, res) => {
    const course = {
        id: courese.length + 1,
        name: req.body.name
    };
    courese.push(course);
    res.json(course);
}
);

app.listen(3000,
    () => console.log('Listening on port 3000...')
)