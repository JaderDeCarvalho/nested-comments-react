import React from 'react'

import { Button, Card, CardActions, CardContent } from '@mui/material';
import ReplyIcon  from '@mui/icons-material/Reply';

interface CommentProps {
    text: string;
    date: Date;
}

function Comment(props: CommentProps) {
    return(
       <div>
            <div>
                <Card sx={{ padding: 3, background: 'Menu', }}>
                    <CardContent>
                        <h2>{ props.text }</h2>
                        <span>{ props.date.toString() }</span>
                    </CardContent>
                    <CardActions>
                        <Button 
                            size="medium"
                            endIcon={ <ReplyIcon /> }>
                                Reply
                        </Button>
                    </CardActions>
                </Card>
                
                <br></br>
            </div>


        </div>
    );
};

export default Comment;