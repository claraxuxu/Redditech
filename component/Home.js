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
                <Text style={styles.inputText}> {item.data.author} </Text>
                <Text style={styles.inputText}> {item.data.title} </Text>
                <View style={styles.voteContainer}>
                  <Text style={styles.voteText}>
                    <Image source={require('../assets/up.png')} style={styles.voteImg}/>
                    {item.data.ups}
                    <Image source={require('../assets/down.png')} style={styles.voteImg}/>
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
  inputText: {
    color: 'red',
    margin: 10
  },
  voteContainer:{
    justifyContent: 'flex-end'
  },
  voteImg: {
    height: 17,
    width: 17,
  },
  voteText:{
    color: 'black',
    padding: 10
  }
})
export default Home;