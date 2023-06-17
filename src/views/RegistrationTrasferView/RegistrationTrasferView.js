import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SceneName from "../../constants/SceneName";

const RegistrationTrasferView = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Crear nuevo servicio</Text>
            {/* <Button
                title="Go to Home"
                //onPress={() => navigation.navigate(SceneName.Home)}
            /> */}
        </View>
    );
}
 
export default RegistrationTrasferView;