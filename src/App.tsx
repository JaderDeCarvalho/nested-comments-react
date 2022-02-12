import React, { ChangeEvent, MouseEvent, useState } from 'react';
import './App.css';
import { Button, Container, TextField } from '@mui/material';
import Comment from './components/NestedComments/Comment';


function App() {
  const [comments, setComments] : any[] = useState([]);
  const [comment, setComment] = useState('');

  const saveComment = (e: MouseEvent<HTMLButtonElement>) => {
    if (comment){
      const newComments = [...comments];

      let commentObject = {
        text: comment,
        date: new Date(),
      };

      newComments.push(commentObject);
      setComments([...newComments]);
      setComment('');
    }
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  };

  return (
    <Container className="App">
      <br></br>
      <TextField
        id="outlined-multiline-flexible"
        label="Some Comment"
        multiline
        maxRows={ 10 }
        minRows={ 5 }
        fullWidth
        value={ comment }
        onChange={ handleChange }
      />
      
      <br></br>
      <br></br>

      <Button 
        variant='contained' onClick={ saveComment }>
          Comentar!
      </Button>

      <br></br>
      <br></br>
      <h1>Nested Comments:</h1>

      {
        comments.map((item: any) => 
          <Comment 
            text={ item.text }
            date={ item.date }
          />
        )
      }

    </Container>
  );
}

export default App;
