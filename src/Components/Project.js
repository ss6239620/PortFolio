import React from 'react'
import { Box, Grid, Container, Card, Typography, CardMedia } from '@mui/material'
import '../assets/css/project.css'

const ProjectCard = (props) => {
    return (
        <Card sx={{ maxWidth: 350, backgroundColor: '#0c0430', marginTop: 5, borderRadius: 3 }}>
            <Box sx={{ padding: { xs: 3, sm: 5 }, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ marginY: 2 }}>
                    <CardMedia
                        component={'img'}
                        sx={{ borderRadius: 3, height: { xs: 150, sm: 200 } }}
                        src={props.image}
                        alt="Bus"
                        className='rotate-vertical-center'
                    />
                </Box>
                <Typography gutterBottom variant="h5" component="div" color={'white'}>
                    {props.topicData}
                </Typography>
                <Typography variant="body2" color="grey" sx={{ marginBottom: 2 }}>
                    {props.desc}
                </Typography>
            </Box>
        </Card>
    );
};

export default function Feature() {
    // const detail = ['VOLO Mart', 'Bus Tracking', 'SharveshGpt',
    //     'FilmFlow', 'Chess', 'News-Webapp']
    const detail = [
        {
            name: "VOLO Mart",
            desc: "A ML project using logistic regression to find out the win probability of the chasing team in an IPL match.Used Kaggle dataset from 2008-2019.",
            asset: require('../assets/images/volo_mart.png')
        },
        {
            name: "Bus Tracking",
            desc: "This is a blog website have a EJS, Node & Express as backend and Mongoose & MongoDB database.",
            asset: require('../assets/images/bus.jpeg')
        },
        {
            name: "SharveshGpt",
            desc: "This is a website for posting secrets anonymously with an authentication system .",
            asset: require('../assets/images/sharveshgpt.jpeg')
        },
        {
            name: "FilmFlow",
            desc: "To create a website which plays Cartoon/Show songs' audio when user clicks on a particular cartoon image. Using HTML,CSS,JS,Bootstrap to bundle the songs we loved during our childhood!",
            asset: require('../assets/images/filmflow.jpeg')
        },
        {
            name: "Chess",
            desc: "This is a weather website created using HTML,CSS,Bootstrap,Node.js,Express.js and OpenWeather API .",
            asset: require('../assets/images/chess.jpeg')
        },
        {
            name: "News-Webapp",
            desc: "This project uses various libraries like to detect human face from a given image, detect a face from a live -webcam video and to create an attendance system.",
            asset: require('../assets/images/news.jpeg')
        },
    ]

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', marginBottom: 50 }}>
        <Typography variant='h3' color={'whitesmoke'} sx={{ marginBottom: 3, textAlign: 'center' }}>What I Do</Typography>
        <Grid container spacing={{ xs: 2, sm: 3,md: 3 }} columns={{ xs: 1, sm: 2, md: 12 }}>
          {detail.map((data, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <ProjectCard topicData={data.name} image={data.asset} desc={data.desc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    )
}

