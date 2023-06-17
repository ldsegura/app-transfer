import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SceneName from "../../../constants/SceneName";

const HomeHeaderScreen = () => {
    const navigation = useNavigation();

    return (<View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center", backgroundColor: "white" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Logo Empresa</Text>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(SceneName.Authentication)}>
                <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "orange", justifyContent: "center", alignItems: "center" }}><Text style={{ fontWeight: "bold" }}>LS</Text></View>
            </TouchableOpacity>
        </View>
    </View>);
}

export default HomeHeaderScreen;