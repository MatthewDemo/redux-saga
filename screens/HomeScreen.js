import { StyleSheet, View, FlatList} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';

export default function HomeScreen() {
    const people = useSelector(store => store.people)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'FIRST_LOAD' })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                    keyExtractor={(people) => people.edited}
                    data={people} 
                    renderItem={({ item }) => <Card item={item} />}
                /> 
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
