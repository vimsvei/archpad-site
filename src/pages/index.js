import Page from "../components/common/Page";
import Title from "../components/landing/Title";
import Header from "../components/landing/Header";
import {Footer} from "../components/landing/Footer";
import {Feature} from "../components/landing/Feature";
import {HeaderWrapper} from "../components/wrappers/HeaderWrapper";
import {SecondWrapper, SecondWrapper2} from "../components/wrappers/SecondWrapper";

import {getTitle} from "./api/getTitle";
import {getFeatures} from "./api/getFeatures";
import {getFooter} from "./api/getFooter";
import {getHeader} from "./api/getHeader";

export default function Landing({ header, title, features, footer }) {
  
  return (
    <Page title="ArchPad">
      <HeaderWrapper>
        <Header item={header}/>
        <Title item={title}/>
      </HeaderWrapper>
      <SecondWrapper>
        {
          features.map( feature => {
            const { sys } = feature;
            return(
              <Feature key={sys.id} item={feature}/>
            )
          })
        }
      </SecondWrapper>
     <Footer item={footer}/>
    </Page>
  )
}

export async function getStaticProps() {
  return {
    props: {
      header: await getHeader(),
      title: await getTitle(),
      features: await getFeatures(),
      footer: await getFooter()
    }
  }
}
