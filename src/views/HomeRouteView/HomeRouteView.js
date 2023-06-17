import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import TabScreenHome from "../../constants/TabScreenHome";
import HomeView from "../HomeView/HomeView";
import RegistrationTrasferView from "../RegistrationTrasferView";
import HomeHeaderScreen from "./components/HomeHeaderScreen";

const Tab = createMaterialTopTabNavigator();
const HomeRouteView = () => {
    return (
        <>
            <HomeHeaderScreen />
            <Tab.Navigator
                initialRouteName={TabScreenHome.MyHome}
            >
                <Tab.Screen name={TabScreenHome.MyHome} component={HomeView} />
                <Tab.Screen name={TabScreenHome.RegistrationCode} component={RegistrationTrasferView} />
            </Tab.Navigator>
        </>
    )
}

export default HomeRouteView;