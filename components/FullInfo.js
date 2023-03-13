import { StyleSheet, Text, View } from 'react-native';

export default function FullInfo({ personalInfo }) {
    return (
        <View style={styles.card}>
            <Text style={styles.textStyle}>{personalInfo.name}</Text>
            {personalInfo.birth_date && <Text style={styles.textStyle}>Was born in {personalInfo.birth_date}</Text>}
            {personalInfo.eye_color && <Text style={styles.textStyle}>His eyes are {personalInfo.eye_color}</Text>}
            {personalInfo.hair_color && <Text style={styles.textStyle}>His hair is {personalInfo.hair_color}</Text>}
            <Text style={styles.textStyle}>His height is {personalInfo.height} cm</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 34
    }
});
