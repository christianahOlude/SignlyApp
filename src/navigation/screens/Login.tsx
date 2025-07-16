import { View, Text } from "react-native";
import { Pressable, StyleSheet, TextInput } from "react-native";
import { s } from 'react-native-wind';
import {useState} from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');

    const handleLogin = async () => {
        const api = "http://localhost:3000/api/auth/register"
        const payload = {
            userName: username,
            password
        }
        const {data} = await axios.post(api, payload);
        setResponse(data)
        alert("login successful")
        await AsyncStorage.setItem('user', JSON.stringify(response));
    };

    return (
        <View style={styles.container}>
            <View style={s`text-white-300 mb-4`}>
                <Text style={styles.text}>Start Learning</Text>
            </View>
            <View style={s`text-white-300 mb-4`}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#fff"
                    onChangeText={setUsername}
                    value={username}
                />
            </View>
            <View style={s`mb-4`}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <Pressable onPress={() => handleLogin()} style={styles.button}>
                <Text style={styles.buttonText}>START</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009044',
        justifyContent: 'center',

    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 8,
        marginRight: 12,
        marginLeft: 12,
        padding: 12,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        // width: '80%',
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        marginRight: 12,
        marginLeft: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#009044',
        fontWeight: 'bold',
        fontSize: 16,
    }
})
