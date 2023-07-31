import { IconButton, Avatar, Container, Box, Typography, Tooltip } from '@mui/material';
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { Grid } from '@mui/material';

const Footer = () => {
    const footerStyle = {
        // Your footer style goes here
        color: '#fff',
        padding: '20px 0',

    };

    // Quick Link data
    const quickLink = ['Link 1', 'Link 2', 'Link 3'];

    return (
        <footer style={footerStyle} className='background'>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Tooltip title="Sharvesh Portfolio">
                                <IconButton sx={{ p: 1 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <div style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <IconButton aria-label="github" className='btn btn--ghost'>
                                    <AiFillGithub size={40} color='white' />
                                </IconButton>
                                <IconButton aria-label="instagram" className='btn btn--ghost'>
                                    <AiOutlineInstagram size={40} color='white' />
                                </IconButton>
                                <IconButton aria-label="linkedin" className='btn btn--ghost'>
                                    <AiFillLinkedin size={40} color='white' />
                                </IconButton>
                                <IconButton aria-label="facebook" className='btn btn--ghost'>
                                    <AiFillFacebook size={40} color='white' />
                                </IconButton>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant='h5' color={'red'}>
                            Quick Link
                        </Typography>
                        {quickLink.map((data, index) => (
                            <Typography key={index} component={'h4'} sx={{ marginTop: 2, color: 'white' }}>
                                {data}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant='h5' color={'red'}>
                            Resource
                        </Typography>
                        {quickLink.map((data, index) => (
                            <Typography key={index} component={'h4'} sx={{ marginTop: 2, color: 'white' }}>
                                {data}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant='h5' color={'red'}>
                            Developers
                        </Typography>
                        {quickLink.map((data, index) => (
                            <Typography key={index} component={'h4'} sx={{ marginTop: 2, color: 'white' }}>
                                {data}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ marginTop: 5, marginBottom: 5 }}>
                <Typography variant="body2" color="grey" align="center">
                    © {new Date().getFullYear()} S h a r v e s h.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
