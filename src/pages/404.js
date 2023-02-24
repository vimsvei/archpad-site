import {ErrorWrapper} from "../components/wrappers/ErrorWrapper";
import {Container, Grid, Typography} from "@mui/material";
import {ErrorImage} from "../components/images";
import {gridSpacing} from "../constant";
import {getNotFoundError} from "./api/getNotFoundPage";
import Image from "next/image";

export default function NotFound({ item }) {
  const { title, subtitle, image } = item;
  
  return(
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={gridSpacing}
      >
        <Grid item xs={12}>
          <ErrorImage src={image.url} alt={image.title}/>
        </Grid>
        <Grid item xs={12}>
          <ErrorWrapper>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Typography variant="h1" component="div">
                  { title }
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  { subtitle }
                </Typography>
              </Grid>
            </Grid>
          </ErrorWrapper>
        </Grid>
      </Grid>
    </Container>
  )
}

export async function getStaticProps() {
  
  return {
    props: {
      item: await getNotFoundError(),
    }
  }
}
