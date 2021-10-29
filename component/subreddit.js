import React, { useEffect, useState } from 'react';
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
import SelectDropdown from 'react-native-select-dropdown';

function SubReddit({ navigation }) {
  const [isTopped, setTopped] = useState(false);
  const [subreddit, setSubreddit] = useState('');
  const filters =['top', 'hot', 'new', 'best']
  const [filter, setFilter] = useState(filters[0])

  const getTop = async () => {
    axios.get('https://www.reddit.com/r/'+ subreddit +'/' + filter + '.json?limit=10')
    .then(function (response) {
      global.top = response;
      global.d = top.data.data.children
      setTopped(true)
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get('https://www.reddit.com/r/' + subreddit + '/about.json')
    .then(function (response) {
      global.subCount = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(() => {
    getTop()
  }, [filter])

    return (
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TouchableOpacity
              onPress={() => setTopped(false)}
              style={styles.backButton}
              >
              <Image style={styles.back} source={require('../assets/back.png')} />
            </TouchableOpacity>
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
                  onPress={() => {getTop(subreddit), setTopped(false)}}
                >
                <Image style={styles.icon} source={require('../assets/find.png')} />
              </TouchableOpacity>
              : null}
            </View>
          </View>
          

          {isTopped === true ? 
            <ScrollView style={styles.info_box}>
              <View style={styles.info_subView}>
              {global.subCount ? 
                  <Image style={styles.jpgs} source={{uri: global.subCount.header_img}} />
              : null}
                <View style={styles.info_text}>
                  <Text style={styles.info_sub}> {d[0].data.subreddit_name_prefixed}</Text>
                  <Text style={styles.info_sub}> {global.subCount.public_description}</Text>
                  <Text style={styles.info_sub}> {d[0].data.subreddit_subscribers} Members</Text>
                  <SelectDropdown
                    data = {filters}
                    onSelect={(selectedItem, index) => {
                      setFilter(filters[index])
                      setTopped(false)
                    }}
                    defaultValue= {filter}
                    buttonStyle={styles.drop}
                    buttonTextStyle={styles.textDrop}
                  />
                </View>
              </View>
              {global.d.map((item, index) => (
                <Card key={index}>
                  <View style={styles.posts}>
                    <Text style={styles.title}> {item.data.title} </Text>
                    <Text style={styles.des}> Publie par {item.data.author} </Text>
                    {item.data.thumbnail ?
                      <Image style={styles.jpgs} key={index} source={{ uri: item.data.thumbnail }} />
                    : null}
                    <Text style={styles.info_sub}> {item.data.num_comments} comments</Text>
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
  backButton: {
    marginLeft: '-20%',
    marginRight: '5%',
    marginTop: 5,
  },
  back: {
    height: 30,
    width: 30
  },
  drop: {
    width: 70,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#B3C7D1"
  },
  textDrop: {
    fontSize: 15
  },
  search: {
    marginTop: '20%',
    width: 300,
  },
  inputView:{
    marginTop: '10%',
    width:"75%",
    backgroundColor:"#465881",
    borderRadius:15,
    height:40,
    marginBottom: 20,
    justifyContent:"center",
    flexDirection: 'row'
  },
  inputText: {
    height: 40,
    width:"85%",
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
  title: {
    fontWeight: 'bold',
    color: "#000",
    textAlign: 'center',
  },
  des: {
    textAlign: 'right',
    color: "#303030",
    fontSize: 12
  },
  info_sub: {
    color: "#000"
  },
  clickView: {
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