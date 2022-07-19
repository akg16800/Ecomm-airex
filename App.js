import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import ProductScreen from "./src/screens/products/productScreen";
import { ProductContainer } from "./src/screens/products/productScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SingleProduct } from "./src/screens/products/singleProduct";
import { Main } from "./src/navigators/Main";
import { AuthenticationContextProvider } from "./src/services/favourites/authentication-context";

// import { NavigationContainer } from "react-navigation";
import { Header } from "./src/shared/header";
import { SafeArea } from "./src/utils/safeArea";

export default function App() {
  return (
    <AuthenticationContextProvider>
      <NavigationContainer>
        <SafeArea>
          <Main />
          <ExpoStatusBar style="auto" />
        </SafeArea>
      </NavigationContainer>
    </AuthenticationContextProvider>
  );
}
