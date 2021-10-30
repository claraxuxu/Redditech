import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Text
} from 'react-native';
import { Card } from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';

const Home = ({ navigation }) => {
    const [isLoaded, setLoaded] = useState(false);
    const filters =['top', 'hot', 'new', 'best']
    const [filter, setFilter] = useState(filters[0])
    const getPostNoLog = async () => { 
      try {
          const res = await fetch("https://www.reddit.com/r/all/" + filter + ".json?limit=50", {
              method: 'GET',
          });
          postJson = await res.json();
          global.elem = postJson.data.children
          setLoaded(true)
      }
      catch(e) {
          console.error(e);
      }
  }
  useEffect(() => {
    getPostNoLog()
  }, [filter])
  if (isLoaded === true)
    return (
      <View style={{alignItems: "center"}}>
        <SelectDropdown
        data = {filters}
        onSelect={(selectedItem, index) => {
          setFilter(filters[index])
          setLoaded(false)
        }}
        defaultValue= {filter}
        buttonStyle={styles.drop}
        buttonTextStyle={styles.textDrop}
        />
        <ScrollView>
          {global.elem.map((item, index) => (
            <Card key={index}>
              <Card.Title>{item.data.subreddit_name_prefixed}</Card.Title>      
                <View>
                  <Text style={styles.author}> Publié par {item.data.author} </Text>
                  <Text style={styles.inputText}> {item.data.title} </Text>
                  <Image style={{width: item.data.thumbnail_width, height: item.data.thumbnail_height}} source={{uri: item.data.thumbnail}}/>
                  <View style={styles.voteContainer}>
                    <Text style={styles.voteText}>
                      <Image source={require('../assets/up.png')} style={styles.voteImg}/>
                      {item.data.score}
                      <Image source={require('../assets/down.png')} style={styles.voteImg}/>
                    </Text>
                    <Text style={styles.voteText}>
                      <Image source={require('../assets/comment.png')} style={styles.voteImg}/>
                      {item.data.num_comments}
                    </Text>
                  </View>
                </View>
              </Card>
            )
          )}
        </ScrollView>
      </View>
    );
  else
    return (
      <View>
        
      </View>
    )
}

const styles = StyleSheet.create({
  author:{
    color: 'grey',
    textAlign: 'right'
  },
  inputText: {
    color: 'black',
    margin: 10
  },
  drop: {
    width: 70,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#B3C7D1"
  },
  textDrop: {
    fontSize: 16
  },
  voteContainer:{
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  voteImg: {
    height: 17,
    width: 17,
    padding: 10,
  },
  voteText:{
    color: 'black',
    padding: 10
  }
})
export default Home;