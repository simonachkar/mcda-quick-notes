import * as fs from 'fs'
import data from './data.json'

export default function saveNote(id, content) {
    var myArray = data
    const index = myArray.map((note) => note.id).indexOf(id)
    myArray[index].content = content
    fs.writeFile('data.json', JSON.parse(myArray), 'utf8', callback);
}