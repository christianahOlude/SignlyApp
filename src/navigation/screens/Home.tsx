import { Text } from '@react-navigation/elements';
import { Pressable, StyleSheet, View } from 'react-native';
import { s } from 'react-native-wind';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



export function Home() {
  const navigation = useNavigation();
  useEffect(()=> {
  setTimeout(()=>{
    navigation.navigate("Login")
  },1000)
}, [])
  return (
    <View style={styles.container}>
     <Text style={s`text-white-500 text-5xl`}>Signly</Text>
     <Text style={s`text-white-500 text-3xl`}> A Learning Platform</Text>
     <Pressable style={styles.button}> 
      <Text style={styles.buttonText}> Start Learning  Journey </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009044',
    gap: 10,
    // paddingBottom: 30
  },
  button: {
    paddingRight: 80,
    paddingLeft: 80,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#48D04E',
    borderColor: '#48D04E',
    borderRadius: 30,
    position: "relative",
    top: 100,
    
  },
  buttonText: {
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold'
  }
});
