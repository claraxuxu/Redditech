import React, { useState } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import axios from 'react-native-axios';
import { Card } from 'react-native-elements';
import Home from './Home';

function SubReddit({ navigation }) {
  const [isTopped, setTopped] = useState(false);
  const [subreddit, setSubreddit] = useState('');

  function getTop(subreddit) {
      if (subreddit) {
        axios.get('https://www.reddit.com/r/'+ subreddit +'/top.json?limit=10')
        .then(function (response) {
          global.top = response;
          global.d = top.data.data.children
          console.log(subreddit)
          setTopped(true)
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      axios.get('https://www.reddit.com/r/' + subreddit + '/about.json')
      .then(function (response) {
        global.subCount = response.data.data.header_img;
        console.log(subCount);
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
              onChangeText={(text) => setSubreddit(text)}
              value={subreddit}
            >
            </TextInput>

            <View style={styles.clickView}>
              {subreddit ?
                <TouchableOpacity
                  onPress={() => getTop(subreddit)}
                >
                <Image style={styles.icon} source={require('../assets/find.png')} />
              </TouchableOpacity>
              : null}
            </View>
          </View>

          {global.d ? 
            <ScrollView style={styles.info_box}>
              <View style={styles.info_subView}>
              {global.subCount ? 
                <Image style={styles.jpgs} source={{uri: global.subCount}} />
              : null}
                <View style={styles.info_text}>
                  <Text style={styles.info_sub}> Subreddit: {d[0].data.subreddit_name_prefixed}</Text>
                  <Text style={styles.info_sub}> {d[0].data.subreddit_subscribers} Members</Text>
                </View>
              </View>
              {global.d.map((item, index) => (
                <Card key={index}>
                  <View style={styles.posts}>
                    <Image style={styles.jpgs} key={index} source={{ uri: item.data.thumbnail }} />
                  </View>
                </Card>
                )
              )}
            </ScrollView>
          : <Home />}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  search: {
    marginTop: '20%',
    width: 300,
  },
  inputView:{
    marginTop: '3%',
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
    width: "97%",
  },
  jpgs: {
    width: 70,
    height: 70,
    resizeMode: 'contain'
  },
  info_subView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  info_text: {
    flexDirection: 'column'
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
  },
  posts: {
    justifyContent: 'flex-end'
  }
})

export default SubReddit;