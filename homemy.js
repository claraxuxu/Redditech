import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import axios from 'react-native-axios';

function Home({ navigation }) {
  const [isTopped, setTopped] = useState(false);
  const [subreddit, setSubreddit] = useState('');

  function getSub() {
    const res = axios.get('https://www.reddit.com/r/Anime/about.json')
    .then(function (response) {
      global.subreddi = response;
      console.log(subreddi);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function getTop() {
    const res = axios.get('https://www.reddit.com/r/'+ subreddit +'/top.json?limit=10')
    .then(function (response) {
      global.top = response;
      global.d = top.data.data.children
      setTopped(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    return (
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
              placeholder="Searching..." 
              placeholderTextColor="#E5E5E5"
              onChangeText={text => setSubreddit(text)}
              defaultValue={''}
            >
            </TextInput>
            <View style={styles.clickView}>
              <TouchableOpacity
                onPress={() => getTop(subreddit)}
              >
                <Image style={styles.icon} source={require('../assets/find.png')} />
              </TouchableOpacity>
            </View>
          </View>
          {global.d ? 
            <View style={styles.info_box}>
              <View>
                <Text style={styles.info_sub}> Subreddit {d[0].data.subreddit_name_prefixed}</Text>
                {/* <Text key={index} style={styles.info_sub}> {item.data.thumbnail} </Text> */}
                <Text style={styles.info_sub}> {d[0].data.subreddit_subscribers} Members</Text>
              </View>
              {global.d.map((item, index) => (
                  <Image style={styles.jpgs} key={index} source={{ uri: item.data.thumbnail }} />
                )
              )}
            </View>
          : null}
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
    marginBottom: 20,
    justifyContent:"center",
    flexDirection: 'row'
  },
  inputText: {
    height: 40,
    color: "#fff"
  },
  info_box: {
    width: 300,
    backgroundColor: "#465881"
  },
  jpgs: {
    width: 100,
    height: 100,
  },
  info_sub: {
    color: "#000"
  },
  clickView: {
    marginLeft: '50%',
    marginTop: '4%'
  },
  icon: {
    width: 18,
    height: 18
  }
})
export default Home;