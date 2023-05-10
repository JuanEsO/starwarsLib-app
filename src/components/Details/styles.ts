import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    // FilmDetail
    detailContainer: {
        width: '100%',
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#502F4C',
        paddingVertical: 15,
        borderRadius: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    infoContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: '#502F4C',
        borderRadius: 20,
        padding: 20,
    },
    infoItem: {
        marginBottom: 10,
        width: '100%',
    },
    infoLabel: {
        fontWeight: 'bold',
    },
});

export default styles;
