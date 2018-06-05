import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';


const HeaderHome = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', }}>
            <View>
                <Image
                    style={styles.menuStyle}
                    source={require('./../../assets/image/menuButton.png')}
                />
            </View>

            <View>
                <SearchBar
                    style={styles.searchStyle}
                    placeholder='Type Here...' 
                />
            </View>

            <View>
                <Image
                    style={styles.bellStyle}
                    source={require('./../../assets/image/bell.png')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#5D9FE2'
    },
    searchStyle: {
        width: 100,
        marginTop: 100
    },
    menuStyle: {
        height: 20,
        width: 25,
        marginLeft: 15,
        marginRight: 12,
        marginBottom: 12,
        marginTop: 17
    },
    bellStyle: {
        height: 20,
        width: 25,
        marginLeft: 15,
        marginRight: 12,
        marginBottom: 12,
        marginTop: 17
    }
});


export { HeaderHome };
