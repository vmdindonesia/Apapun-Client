import React from 'react';
import { View } from 'react-native';

const CardProduct = (props) => {
    return (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'transparent',
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        shadowOffset: { width: 0, heigth: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 13,
        marginRight: 5,
        marginTop: 1
    },
};

export { CardProduct };
