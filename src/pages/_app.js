import {ConfigProvider} from "../contexts/ConfigContext";
import ThemeCustomization from "../themes";
import NavigationScroll from "../layout/NavigationScroll";

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

MyApp.displayName = 'MyApp';

export default MyApp
