import React from "react";
import {
    Box,
    Container,
    Card,
    CardContent,
    Typography,
    IconButton,
    Avatar,
    Grid
} from "@mui/material";
import {
    AiFillGithub,
    AiOutlineInstagram,
    AiFillLinkedin,
    AiFillFacebook,
} from "react-icons/ai";
import {
    BiLogoDjango,
    BiLogoJava,
    BiLogoJavascript,
    BiLogoPython,
} from "react-icons/bi";
import "../assets/css/home.css";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
    const infoData = [
      'A Web Developer',
      1000,
      'A Passionate Engineer',
      1000,
      'A Data Analyst',
      1000,
      'A programming enthusiast',
      1000,
    ];
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
        <Container maxWidth="lg" sx={{ mt: 15 }}>
          <Grid container spacing={3}>
            {/* Card section */}
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#0A0130' }}>
                <CardContent>
                  <Typography variant='h6' sx={{ color: '#b7b8b6', mt: 3 }}>
                    hello world
                  </Typography>
                  <Typography variant='h3' sx={{ color: '#b7b8b6', fontFamily: 'cursive', mt: 2.5, mb: 3 }}>
                    Hi, I'm <span style={{ color: 'red', fontWeight: 'bold', fontFamily: 'monospace', fontSize: 45 }} className='text'>Sharvesh Singh</span>
                  </Typography>
                  <Typography variant='h3' sx={{ color: '#b7b8b6', fontFamily: 'cursive', mt: 2.5, mb: 3 }}>
                    <TypeAnimation sequence={infoData} speed={50} repeat={Infinity} />
                  </Typography>
  
                  <Typography variant='h8' sx={{ color: '#939491' }}>
                    The Material UI Card Component is an excellent tool for organizing and displaying data. It includes classes for creating card containers, card titles, card contents, card images, and card actions, among other things. These classes can be used to create cards with a distinct look and feel.
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 5 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: { xs: 0, md: 5 } }}>
                      <Typography variant='h8' color={'#b7b8b6'} sx={{ mb: 1.5 }}>
                        Find me on
                      </Typography>
                      <Box sx={{ flexDirection: 'row' }}>
                        <IconButton aria-label="github" className='shake-vertical'>
                          <AiFillGithub size={40} color='white' />
                        </IconButton>
                        <IconButton aria-label="instagram" className='btn-2'>
                          <AiOutlineInstagram size={40} color='white' />
                        </IconButton>
                        <IconButton aria-label="linkedin" className='btn-2'>
                          <AiFillLinkedin size={40} color='white' />
                        </IconButton>
                        <IconButton aria-label="facebook" className='btn-2'>
                          <AiFillFacebook size={40} color='white' />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography variant='h8' color={'#b7b8b6'} sx={{ mb: 1.5 }}>
                        My knowledge
                      </Typography>
                      <Box sx={{ flexDirection: 'row' }}>
                        <IconButton aria-label="github" className='btn btn--ghost'>
                          <BiLogoJava size={40} color='white' />
                        </IconButton>
                        <IconButton aria-label="instagram" className='btn-2'>
                          <BiLogoJavascript size={40} color='white' />
                        </IconButton>
                        <IconButton aria-label="linkedin" className='btn-2'>
                          <BiLogoDjango size={40} color='white' />
                        </IconButton>
                        <IconButton aria-label="facebook" className='btn-2'>
                          <BiLogoPython size={40} color='white' />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Avatar section */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card sx={{ backgroundColor: '#0A0130', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                  alt="User Image"
                  src={require('../assets/images/bus.jpeg')}
                  variant="circular"
                  sx={{ width: 40, height: '40px' }}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
        </Box>
  );
};
