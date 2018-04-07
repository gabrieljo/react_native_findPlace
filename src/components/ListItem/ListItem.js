import React, {Component} from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'


const listItem = (props) => (
    <TouchableOpacity onPressOut={props.onItemPressed}>
        <View style={styles.listItem} >
            <Image reasizeMode="cover" source={props.placeImage} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding:10,
        marginBottom: 5,
        backgroundColor: "#eee",
        flexDirection:"row",
        alignItems: 'center',
    },
    placeImage:{
        marginRight:8,
        height:30,
        width:30
    }
})

export default listItem;