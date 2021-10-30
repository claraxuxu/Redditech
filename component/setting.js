import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    Switch,
    Image
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import countryList from 'react-select-country-list';

function Setting({ navigation }) {
    const getSetting = useCallback(
        async lave => {
            try {
                const res = await fetch('https://oauth.reddit.com/api/v1/me/prefs', {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + global.authState.accessToken,
                  }
                });
                global.prefs = await res.json();
                console.log(prefs)
            }
            catch(e) { console.log(e) }
        },
    );
    const [setOpen, setSetOpen] = useState(false);

    const demande = () => {
        setSetOpen(true); getSetting();
    };

    if (setOpen === false) {
        return (
            <TouchableOpacity
                style={styles.setbutton}
                onPress={() => demande()}
            >
                <Text style={styles.settextButton}>Setting</Text>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <Modal visible={setOpen} animationType='slide'>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
                        <View style={styles.button}>
                            <TouchableOpacity
                            onPress={() => setSetOpen(false)}>
                                <Image style={styles.BackIcon} source={require('../assets/back.png')}></Image>
                            </TouchableOpacity>
                            <Text style={styles.title}>Setting</Text>
                            <Text> </Text>
                        </View>
                    </View>
                    <View style={styles.settingInfo}>
                        <SelectDrop />
                        <SwitchView />
                        <TouchableOpacity
                            style={styles.SetSave}
                            onPress={() => setSetOpen(false)}
                        >
                            <Text style={styles.settextButton}>Save   Changement</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

const SelectDrop = () => {
    const filtersCountry = countryList().getLabels();
    const [filterCountry, setFilterCountry] = useState("France");
    const filtersLang = ['Français','English','Deutsh','Italiano','Español','Português'];
    const [filterLang, setFilterLang] = useState(filtersLang[0]);
    const filtersPms = ['Everyone','+30jours','Nobody'];
    const [filterPms, setFilterPms] = useState(filtersPms[0]);

    return(
        <>
            <View style={styles.everyLine}>
                <Text style={styles.info}>Country</Text>
                <SelectDropdown
                    data = {filtersCountry}
                    onSelect={(selectedItem, index) => {
                        setFilterCountry(filtersCountry[index])
                    }}
                    defaultValue= {filterCountry}
                    buttonStyle={styles.drop}
                    buttonTextStyle={styles.textDrop}
                />
            </View>
            <View style={styles.everyLine}>
                <Text style={styles.info}>Language</Text>
                <SelectDropdown
                    data = {filtersLang}
                    onSelect={(selectedItem, index) => {
                        setFilterLang(filtersLang[index])
                    }}
                    defaultValue= {filterLang}
                    buttonStyle={styles.drop}
                    buttonTextStyle={styles.textDrop}
                />
            </View>
            <View style={styles.everyLine}>
                <Text style={styles.info}>Private messages</Text>
                <SelectDropdown
                    data = {filtersPms}
                    onSelect={(selectedItem, index) => {
                        setFilterPms(filtersPms[index])
                    }}
                    defaultValue= {filterPms}
                    buttonStyle={styles.drop}
                    buttonTextStyle={styles.textDrop}
                />
            </View>
        </>
    );
}
const SwitchView = () => {
    const [Is18, setIs18] = useState(global.prefs.over_18);
    const toggle18 = () => setIs18(previousState => !previousState);
    const [Autovideo, setAutovideo] = useState(global.prefs.video_autoplay);
    const toggleVideo = () => setAutovideo(previousState => !previousState);
    const [EnFollow, setEnFollow] = useState(global.prefs.enable_followers);
    const toggleEnFollow = () => setEnFollow(previousState => !previousState);

    return (
        <>
            <View style={styles.everyLine}>
                <Text style={styles.info}>Over 18</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#CBD6EA" }}
                    thumbColor={Is18 ? "#81b0ff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggle18}
                    value={Is18}
                    style={{marginTop: 10}}
                />
            </View>
            <View style={styles.everyLine}>
                <Text style={styles.info}>Video Autoplay</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#CBD6EA" }}
                    thumbColor={Autovideo ? "#81b0ff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleVideo}
                    value={Autovideo}
                    style={{marginTop: 10}}
                />
            </View>
            <View style={styles.everyLine}>
                <Text style={styles.info}>Accept Followers</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#CBD6EA" }}
                    thumbColor={EnFollow ? "#81b0ff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleEnFollow}
                    value={EnFollow}
                    style={{marginTop: 10}}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    button: {
        width: '90%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10
    },
    title: {
        marginTop: 12,
        marginLeft: -17,
        fontSize: 18,
        color: "#000"
    },
    BackIcon: {
        width: 30,
        height: 30,
        marginTop: 10,
        marginLeft: -10
    },
    setbutton : {
        marginTop: '30%',
        width: 320,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#CBD6EA"
    },
    settextButton: {
        fontSize: 16,
        letterSpacing: 1.5,
        textAlign: 'center',
        color: '#1C3A70'
    },
    settingInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        position: 'relative',
        color: '#000',
        fontSize: 16,
        marginTop: 12,
    },
    drop: {
        marginTop: 10,
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: "#B3C7D1"
    },
    textDrop: {
        fontSize: 15
    },
    everyLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 20
    },
    SetSave : {
        marginTop: '50%',
        width: "90%",
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#CBD6EA"
    },
})
  
export default Setting;