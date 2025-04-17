import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalButtons: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
      padding: 10,
      borderRadius: 5,
      width: '45%',
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: '#bdbdbd',
    },
    confirmButton: {
      backgroundColor: '#4caf50',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });