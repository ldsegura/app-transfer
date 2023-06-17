import { View, Text, Button } from "react-native";
import { Image, KeyboardAvoidingView, Platform, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SceneName from "../../constants/SceneName";
import { useState } from "react";
import PhoneInput from "./components/PhoneInput";
import PasswordInput from "./components/PasswordInput";

const SET_NUMBER = "(999) 9999-999";
const LoginView = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handlePhoneNumberChange = (phone) => {
        setPhoneNumber(phone);
    };
    const handlePasswordChange = (password) => {
        setPassword(password);
    };
    const handleLogin = async () => {
        setLoading(true);

        if (phoneNumber === SET_NUMBER) {
            Alert.alert(
                "Error de acceso",
                "El número de teléfono celular no se encuentra registrado, por favor registrate y se parte de nuestra comunidad Telcel."
            );
            setLoading(false);
            return;
        }

        setTimeout(() => {
            navigation.navigate(SceneName.Home);
            setLoading(false);
        }, 1000);
    };
    const loginButtonDisabled = Boolean(!phoneNumber || !password);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flexGrow: 1, width: "80%", justifyContent: "center" }}>
                <View style={{ alignContent: "center", alignItems: "center" }}>
                    <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: "orange", justifyContent: "center", alignItems: "center" }}><Text style={{ fontWeight: "bold", fontSize: 30 }}>LE</Text></View>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 20 }}>Logo Empresa</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold" }}>Bienvenido de vuelta!</Text>
                    <Text>Ingresa tu número telefónico y password</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <PhoneInput
                        enablesReturnKeyAutomatically
                        returnKeyType="send"
                        onPhoneNumberChange={handlePhoneNumberChange}
                        blurOnSubmit={false}
                        placeholder="(999) 9999-999"
                    />
                    <PasswordInput onPasswordChange={handlePasswordChange} />
                    <TouchableOpacity
                        style={{ backgroundColor: "#0074cc", borderRadius: 5, padding: 20, alignContent: "center", alignItems: "center" }}
                        disabled={loginButtonDisabled}
                        onPress={handleLogin}>
                        <Text style={{ color: "white" }}>{`${loading ? "Iniciando..." : "Iniciar sesión"}`}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default LoginView;