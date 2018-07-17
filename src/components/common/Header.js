import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
    const { textStyle, header } = styles;
    return (
        <View style={header}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#EFF6F9',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 1
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});


export { Header };
