import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography } from '@material-ui/core';
import Comments from '../Comments/Comments';

const NewsDetails = () => {
    const { newsid } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${newsid}`)
            .then(response => response.json())
            .then(data => setDetails(data))
            .catch(err => console.log(err))
    }, [])

    const styles={
        borderRadius: '30px',
        textAlign: 'center',
        margin: '20px', 
        padding: '10px',
        color:"white",
        fontWeight:'bold' 
    }

return (
    <>
        <Container style={{ marginTop: '100px', textAlign: 'center' }}>
            <Box>
                <Typography style={{ color: 'purple', marginBottom: '50px' }} variant="h4"># {details.id} : {details.title}</Typography>
                <Typography style={{ margin: '0 100px' }}>{details.body} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum numquam, rerum praesentium sequi error, vel doloribus mollitia cum reiciendis aut nesciunt earum, quos illo placeat ad illum cumque iste itaque temporibus soluta incidunt quae. Nisi sint sapiente voluptates doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti atque fuga modi, eos totam quas quasi aliquid facilis tempora quis! Nihil dicta officia deleniti velit minus sequi ex laudantium incidunt.</Typography>
            </Box>
            <Box bgcolor="primary.main" style={styles}>
                <Typography variant="h6">Comments Section</Typography>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Box>
                    <Comments></Comments>
                </Box>
            </Box>
        </Container>
    </>
);
};

export default NewsDetails;
