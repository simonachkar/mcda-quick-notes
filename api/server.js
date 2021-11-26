const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
app.options('*', cors());

const port = 3001

const data = require('./data.json')


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/get-notes', (req, res) => {
    res.status(200).json(data)
})

app.post('/save-note', (req, res) => {
    const { id, content, title } = req.body
    const myArray = data
    const index = myArray.map((note) => (note.id)).indexOf(id)

    if (index !== -1) {
        myArray[index] = {
            id,
            content,
            title
        }
    } else {
        const newNote = {
            id: new Date(),
            content,
            title: title || 'Untitled Note'
        }
        myArray.push(newNote)
    }

    fs.writeFile('data.json', JSON.stringify(myArray), 'utf8', () => {
        res.sendStatus(200)
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})