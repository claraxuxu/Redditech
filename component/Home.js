import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Text
} from 'react-native';
import { Card } from 'react-native-elements';


const Home = ({ navigation }) => {
    const [isLoaded, setLoaded] = useState(false);
    const filter = (filter) => {
      let filterName;
      switch (filter) {
        case 'top':
          filterName = 'top';
          break;
        case 'best':
          filterName = 'best';
        case 'new':
          filterName = 'new';
        default:
          break;
      }
    }
    const getPostNoLog = async () => {
      try {
          const res = await fetch("https://www.reddit.com/r/all/" + 'top' + ".json?limit=50", {
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
  }, [])
  if (isLoaded === true)
    return (
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
                    {item.data.num_comments}
                    <Image source={require('../assets/comment.png')} style={styles.voteImg}/>
                  </Text>
                </View>
              </View>
            </Card>
          )
        )}
      </ScrollView>
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
  voteContainer:{
    justifyContent: 'space-around'
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