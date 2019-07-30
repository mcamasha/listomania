import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/boards', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'boards retrieved successfully',
        boards: db
    })
});

app.get('/board/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    db.map((todo) => {
        if (todo.id === id) {
            return res.status(200).send({
                success: 'true',
                message: 'board retrieved successfully',
                todo,
            });
        }
    });
    return res.status(404).send({
        success: 'false',
        message: 'board does not exist',
    });
})

app.post('/boards', (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            success: 'false',
            message: 'title is required'
        });
    }
    const board = {
        id: db.length + 1,
        title: req.body.title
    }
    db.push(board);
    return res.status(201).send({
        success: 'true',
        message: 'board added successfully',
        board
    })
});

app.delete('/board/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
  
    db.map((board, index) => {
      if (board.id === id) {
         db.splice(index, 1);
         return res.status(200).send({
           success: 'true',
           message: 'board deleted successfuly',
         });
      }
    });
  
  
      return res.status(404).send({
        success: 'false',
        message: 'board not found',
      });
});

app.put('/list/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    let listFound;
    let itemIndex;
    db.map((list, index) => {
      if (list.id === id) {
        listFound = list;
        itemIndex = index;
      }
    });
  
    if (!listFound) {
      return res.status(404).send({
        success: 'false',
        message: 'list not found',
      });
    }
  
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    }
  
    const updatedList = {
      id: listFound.id,
      title: req.body.title || listFound.title,
      description: req.body.description || listFound.description,
    };
  
    db.splice(itemIndex, 1, updatedList);
  
    return res.status(201).send({
      success: 'true',
      message: 'List updated successfully',
      updatedList
    });
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})