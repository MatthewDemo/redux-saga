import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FullInfo from '../components/FullInfo';


export default function InfoScreen(props) {
const personalInfo = props.route.params.item
    return (
        <View style={styles.container}>
            <FullInfo personalInfo={personalInfo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
