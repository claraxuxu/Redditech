import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
              placeholder="Searching..." 
              placeholderTextColor="#fff"
              onChangeText={text => this.setState({email:text})}
            >
            </TextInput>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputView:{
    marginTop: '10%',
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:15,
    height:40,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText: {
    height: 50,
    color: "#fff",
    opacity: 0.7
  }
})
export default Home;