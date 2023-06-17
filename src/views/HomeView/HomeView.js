import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SceneName from "../../constants/SceneName";

const Tab = createMaterialTopTabNavigator();
const HomeView = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Mis Reservas"
                //onPress={() => navigation.navigate(SceneName.RegistrationCode)}
            />
        </View>
    );
}

export default HomeView;