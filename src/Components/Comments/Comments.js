import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Commenter from '../Commenter/Commenter';
import { Box, Typography } from '@material-ui/core';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { newsid } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${newsid}`)
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(err => console.log(err))

    }, [])

    const styles = {
        width: '505px',
        border: '1px solid lightgray',
        borderRadius: '20px',
        padding: '10px',
        margin: '15px',
        backgroundColor: '#fafafa'
    }

    return (
        <>
            {
                comments.map((comment) =>
                    <Box display='flex' margin='20px'>
                        <Box>
                            <Commenter></Commenter>
                            </Box>
                        <Box>
                            <Box>
                                <Typography variant='h6' style={{fontWeight:'bold'}}>{comment.name}</Typography>
                                <Typography>email : {comment.email}</Typography>
                            </Box>
                            <Box  style={styles}> 
                                {comment.body}
                            </Box>
                        </Box>
                    </Box>)
            }
        </>
    );
};

export default Comments;