const express = require('express');

const app = express();

app.use(express.json());

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
    let singleCourse = {
        id: courese.length + 1,
        name: req.body.name,
        email: req.body.email
    }
    courese.push(singleCourse);
    res.json(courese);
}
);

app.put('/:id', (req, res) => {
    let course = courese.find(c => c.id === parseInt(req.params.id));

    course.name = req.body.name;
    course.email = req.body.email;
    res.json(course);

}
);

app.delete('/:id', (req, res) => {
    let course = courese.find(c => c.id === parseInt(req.params.id));
    let index = courese.indexOf(course);
    courese.splice(index, 1);
    res.json(courese);
}
);

app.listen(3000,
    () => console.log('Listening on port 3000...')
)