import React from 'react';
import { View } from 'react-native';


const CardSectionProduct = (props) => {
    return (
        <View style={style.containerStyle}>
            {props.children}
        </View>
    );
};


const style = {
    containerStyle: {
        flex: 1,
        borderBottomWidth: 1,
        padding: 2,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative'
    }
};


export { CardSectionProduct };
