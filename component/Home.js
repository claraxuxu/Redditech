import React, {useEffect, useState, useCallback} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import axios from 'react-native-axios';
import { Card } from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import Abonne from './abonne';

const Home = ({ navigation }) => {
    const [isLoaded, setLoaded] = useState(false);
    const [isAbonned, setAbonned] = useState(false);
    const filters =['top', 'hot', 'new', 'best'];
    const [filter, setFilter] = useState(filters[0]);
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
  const getToken = useCallback(
    async lave => {
        try {
            var l = [];
            const res1 = await fetch('https://oauth.reddit.com/subreddits/mine/', {
              credentials: 'include',
              method: 'GET',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + global.authState.accessToken,
              }
            });
            global.resSub = await res1.json();
            global.child = resSub.data.children;
            {global.child.map((item, i) => (
              l.push(item.data.display_name)
            ))}
            global.l = l;
            setAbonned(true);
            setLoaded(false);
        }
        catch(e) { console.log(e) }
    },
  )

  useEffect(() => {
    getPostNoLog()
  }, [filter])
  if (isLoaded === true) {
    return (
      <View style={{alignItems: "center", flex: 1, marginTop: 20}}>
        <View style={styles.top}>
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

          <TouchableOpacity style={styles.drop}
          onPress={()=> getToken()}>
            <Text style={{color: "#000", fontSize: 15}}>Followed</Text>
          </TouchableOpacity>
        </View>

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
  } else if (isAbonned === true) {
    return( 
      <Abonne />
    );
  }
  else {
    return (
      null
    )
  }
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    width: "90%",
    justifyContent: 'space-between'
  },
  author:{
    color: 'grey',
    textAlign: 'right'
  },
  inputText: {
    color: 'black',
    margin: 10
  },
  drop: {
    width: 85,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#B3C7D1",
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDrop: {
    fontSize: 15
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