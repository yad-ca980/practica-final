import { form } from './Form';
import { StyleSheet } from 'react-native';
export const globalStyles = StyleSheet.create({
    container: {
        width: '100%', // Adjust the width as needed
        padding: 20,
        borderRadius: 10,
        elevation: 5, // For Android
        shadowColor: '#000', // For iOS
        shadowOffset: { width: 0, height: 2 }, // For iOS
        shadowOpacity: 0.25, // For iOS
        shadowRadius: 3.84, // For iOS
        marginBottom: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    input: {
        marginBottom: 20,
        padding: 2,
        fontSize: 16,
        borderRadius: 7,
        borderCurve: 40,
        height: 60,
        width: 290
    },
    buttonSubmit: {
        padding: 10,
    },
    buttonText: {
        marginTop: 10,
        width: "100%",

    }
})