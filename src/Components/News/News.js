import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Link } from '@material-ui/core';
import './News.css';

const News = (props) => {
    const { title, id } = props.item;
    const styles = {
        width: '345px',
        height: '225px',
        backgroundColor: 'white',
        borderRadius: '15px',
        margin: '24px',
        padding: '16px'
    }

    return (
        <Box style={styles} boxShadow={4}>
            <Box>
                <Typography variant = 'h5'>#{id} Title: {title} </Typography>
            </Box>
            <Box>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, pariatur...</p>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Link href={`/newsdetails/${id}`}><Button variant="outlined" style={{borderRadius:'30px'}}>Learn More</Button></Link>
            </Box>
        </Box>
    );
};

export default News;