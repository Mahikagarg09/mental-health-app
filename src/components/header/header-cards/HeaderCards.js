import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useStyles from './Headercss';
import img from "./headerimage.png"

export default function THeaderCards() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 , backgroundColor:"#325343"}} className={classes.overall}>
      <Grid container spacing={2}>
        <Grid item lg={8} md={6} sm={12} xs={12}>
          <img src={img} sx={{ maxWidth: "100%" }} alt='image' />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Typography variant="h3" gutterBottom className={classes.heading}>
            YOU DESERVE TO BE HAPPY
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.subheading}>
            What are you waiting for ? Go thorugh the page and find the thing which interests you!
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
}