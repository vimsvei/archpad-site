import Image from 'next/image';
import {Button, Container, Grid, Link, Typography, useTheme} from "@mui/material";
import {FooterSubWrapper, FooterWrapper} from "../wrappers/FooterWrapper";
import {gridSpacing} from "../../constant";

const FooterSubNavigation = ({items}) => {
  return(
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {
        items.map(item => {
          const { sys, title, slug } = item;
          return(
          <Grid
            key={ sys.id }
            item xs={3}
            sx={{marginBottom: '8px'}}
          >
            <Button
              color="inherit"
              component={Link}
              href={slug}
              target="_blank"
            >
              <Typography
                variant="subtitle1"
                color="inherit"
                component="div"
              >
                { title }
              </Typography>
            </Button>
          </Grid>
        )})
      }
    </Grid>
  )
}
const FooterNavigation = ({items}) => {
  return(
    <>
      {
        items.map(item => {
          const {title, pagesCollection} = item;
          const {items: pages} = pagesCollection;
          
          return (
            <>
              <Grid item xs={3}>
                <Typography
                  variant="h6"
                  component="div"
                  color="inherit"
                  textTransform="uppercase"
                  sx={{marginBottom: '36px'}}
                >
                  { title }
                </Typography>
                {
                  pages.length > 0 ? <FooterSubNavigation items={pages}/> : <></>
                }
              </Grid>
            </>
          )})
      }
    </>
  )
}

export const Footer = ({item}) => {
  const { logo, groupLinksCollection, privacy, year, copyright } = item;
  const {items} = groupLinksCollection;
  
  const theme = useTheme();
  return(
    <>
      <FooterWrapper>
        <Container>
          <Grid
            container
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={3}>
              <Image
                src={logo.url}
                alt={logo.title}
                width={128}
                height={64}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-end"
              >
                <FooterNavigation items={items}/>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </FooterWrapper>
      <FooterSubWrapper>
        <Container>
          <Grid
            container
            alignItems="center"
            spacing={gridSpacing}
          >
            <Grid item xs={12} md={6}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  color="inherit"
                >
                  { privacy.title }
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="caption"
                  color="inherit"
                  component="div"
                >
                  { privacy.description }
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
            
            </Grid>
            <Grid item xs={12} md={6}>
  
            </Grid>
          </Grid>
          <Typography
            variant="subtitle2"
            component="div"
            color="inherit"
          >
            &#169; &nbsp;
            {year}-{new Date().getFullYear()} &nbsp;
            {copyright}
          </Typography>
        </Container>
      </FooterSubWrapper>
    </>
  );
}
