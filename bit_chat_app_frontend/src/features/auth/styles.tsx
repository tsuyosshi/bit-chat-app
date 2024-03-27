import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form_container: {
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '60%',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'gray',
  },
  button_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  error_text: {
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
