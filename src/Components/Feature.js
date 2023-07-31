import React from 'react'
import { Grid, Container, Card, CardContent, Typography,Box } from '@mui/material'
import { FiMenu, FiArrowRight } from 'react-icons/fi'
import '../assets/css/feature.css'


const DetailCard = (props) => {
  return (
    <Card sx={{ maxWidth: 350, backgroundColor: '#0c0430',marginTop:5 }} className='shake-horizontal'>
      <CardContent>
        <FiMenu color='red' size={40} />
        <Typography variant='h5' mt={2} mb={2} color={'white'}>
          {props.topicData}
        </Typography>
        <Typography variant='p' color={'grey'}>
          Want to gain real-life experience of
          managing a complete software project cycle.
        </Typography>
        <div style={{ marginTop: 15 }}>
          <FiArrowRight color='red' size={40} />
        </div>
      </CardContent>
    </Card>
  )
}

export default function Feature() {
  const detail = ['Project Management', 'App Development', 'SEO Optimisation',
    'Web Development', 'Data Analyst', 'Machine Learning']

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', marginBottom: 50 }}>
    <Typography variant='h3' color={'whitesmoke'} sx={{ marginBottom: 3, textAlign: 'center' }}>What I Do</Typography>
    <Grid container spacing={{ xs: 2, sm: 3,md: 3 }} columns={{ xs: 1, sm: 2, md: 12 }}>
      {detail.map((data, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <DetailCard topicData={data}/>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}
