import {Box, Container, Grid, Typography} from "@mui/material";
import {gridSpacing} from "../../constant";
import {FeatureImage} from "../images";

const ImageBlock = ({ image }) => {
  const { title, url } = image;
  
  return(
    <Box sx={{ position: 'relative', mt: 8.75 }}>
      <FeatureImage src={url} alt={title} />
    </Box>
  )
}

const TextBlock = ({title, description}) => {
  return(
    <>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          component="div"
          sx={{marginBottom: '24px'}}
        >
          { title }
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          color="inherit"
          component="div"
        >
          { description }
        </Typography>
      </Grid>
    </>
  )
}

export const Feature = ({ item }) => {
  const { order, title, description, image} = item;
  
  return(
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          {
            order % 2 === 0
              ? <ImageBlock image={ image } />
              : <TextBlock title={ title } description={ description }/>
          }
        </Grid>
        <Grid item xs={12} md={6}>
          {
            order % 2 !== 0
              ? <ImageBlock image={ image } />
              : <TextBlock title={ title } description={ description }/>
          }
        </Grid>
      </Grid>
    </Container>
  )
}
