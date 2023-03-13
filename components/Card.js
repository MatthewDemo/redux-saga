import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Card({ item }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Info', item={item})}>
            <View style={styles.card}>
                <Text style={{ fontSize: 30 }}>{item.name}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    card: {
        height: 50,
        width: 300,
        borderColor: "black",
        border: 1,
        backgroundColor: '#878997',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,

    },
});
