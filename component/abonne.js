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
import Home from './Home';

const Abonne = () => {
    const [isLoaded, setLoaded] = useState(false);
    const [isHome, setHome] = useState(false);
    const filters = global.l;
    const [filter, setFilter] = useState(filters[0]);
    const getPostNoLog = async () => {
        const res = axios.get("https://www.reddit.com/r/" + filter + "/top.json?limit=30")
        .then(function (response) {
            global.t = response;
            global.abSub = t.data.data.children
            console.log(abSub[0])
            setLoaded(true)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        getPostNoLog()
    }, [filter])
    const backHome = () => {
        setHome(true);
        setLoaded(false);
    }
  if (isLoaded === true) {
    return (
      <View style={{alignItems: "center"}}>
        <View style={{flexDirection: 'row', width: "90%", justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity
            onPress={() => backHome()}>
                <Image style={{marginTop: 10, width: 30, height: 30}} source={require('../assets/home_black.png')} />
            </TouchableOpacity>
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
        </View>

        <ScrollView>
          {global.abSub.map((item, index) => (
            <Card key={index}>
                <View style={styles.posts}>
                    <Text style={styles.title}> {item.data.title} </Text>
                    <Text style={styles.des}> Publie par {item.data.author} </Text>
                    {item.data.thumbnail ?
                        <Image style={{width: item.data.thumbnail_width, height: item.data.thumbnail_height,resizeMode: 'contain'}} key={index} source={{ uri: item.data.thumbnail }} />
                    : null}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.info_sub}>
                            <Image source={require('../assets/up.png')} style={styles.voteImg}/>
                            {item.data.score}
                            <Image source={require('../assets/down.png')} style={styles.voteImg}/>
                        </Text>
                        <Text style={styles.info_sub}>
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
  } else if (isHome === true) {
      return (
          <Home />
      )
  }
  else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: "#000", fontSize: 17}}>Loading... ...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  author:{
    color: 'grey',
    textAlign: 'right'
  },
  drop: {
    marginTop: 10,
    width: "80%",
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#B3C7D1"
  },
  textDrop: {
    fontSize: 16
  },
  posts: {
    justifyContent: 'flex-end'
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
  voteImg: {
    height: 17,
    width: 17,
    padding: 10,
  }
})
export default Abonne;