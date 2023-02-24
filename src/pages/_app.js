import {ConfigProvider} from "../contexts/ConfigContext";
import ThemeCustomization from "../themes";
import NavigationScroll from "../layout/NavigationScroll";
import {Head} from "next/document";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ConfigProvider>
        <ThemeCustomization>
          <NavigationScroll>
            <Component {...pageProps} />
          </NavigationScroll>
        </ThemeCustomization>
      </ConfigProvider>
    </>
  )
}

export default MyApp
