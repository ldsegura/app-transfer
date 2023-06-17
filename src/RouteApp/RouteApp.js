import * as SecureStore from "expo-secure-store";
import React, { useContext, useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import SceneName from "../constants/SceneName";
import { Text, View } from "react-native";
import LoginView from "../views/LoginView/LoginView";
import RegistrationTrasferView from "../views/RegistrationTrasferView";
import HomeView from "../views/HomeView/HomeView";
//import localstorageConstants from "../constants/localstorageConstants";
import { useDispatch, useGlobalState } from "../context/StoreProvider";
import HomeRouteView from "../views/HomeRouteView/HomeRouteView";
// import userAuthAction from "../actions/userAuthAction";
// import userAuthUtils from "../utils/userAuthUtils";

const Stack = createStackNavigator();

const RouteApp = () => {
  const { userAuth } = useGlobalState();
  const dispatch = useDispatch();

  // const conextionLogin = async (response) => {
  //   const rawValue = JSON.stringify({
  //     username: response.username,
  //     password: response.password,
  //   });
  //   await SecureStore.setItemAsync(localstorageConstants.AUTH, rawValue).then(() => {
  //     console.log("finish de route");
  //     //navigation.navigate(SceneName.Home);
  //   });
  // }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const auxSession = await userAuthUtils.getLoginStoge();
  //     if (auxSession) {
  //       if(!userAuth.complete)
  //         userAuthAction.get(auxSession, dispatch,
  //           (response) => {
  //             if (response.id) {
  //               conextionLogin(auxSession);
  //             }
  //           }
  //         );
  //     }
  //     else
  //       console.log("invalid key");
  //   }
  //   fetchData().catch(console.error);
  // }, []);

  return (
    <Stack.Navigator
      initialRouteName={SceneName.Authentication}
      screenOptions={{
        headerShown: false,
        headerBackTitle: "Volver",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "red",
        },
        headerTitleStyle: {
          //fontFamily: theme.typography.fontFamily.bold,
          fontSize: 20,
          color: "orange", //theme.colors.text,
        },
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
    >
      <Stack.Group>
        <Stack.Screen name={SceneName.Authentication} component={LoginView} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name={SceneName.Home} component={HomeRouteView} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RouteApp;
