import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StoreProvider from "./src/context/StoreProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import RouteApp from './src/RouteApp/RouteApp';
import Constants from 'expo-constants';
export default function App() {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        {/* <StatusBar style="light" /> */}
        <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
          <NavigationContainer>
            <RouteApp />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
