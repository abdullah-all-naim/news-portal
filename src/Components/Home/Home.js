import React, { useEffect } from 'react';
import { useState } from 'react';
import News from '../News/News';
import { Box, Container, Typography } from '@material-ui/core';

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Box bgcolor="info.main" textAlign='center' marginBottom='50px'>
                <Typography variant="h4">Number of News For Today : {news.length}</Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                {
                    news.map((item) => <News item={item}></News>)
                }
            </Box>
        </Container>

    );
};

export default Home;