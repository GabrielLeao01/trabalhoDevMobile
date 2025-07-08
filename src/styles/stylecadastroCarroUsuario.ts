import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#2E2E2E',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: 'white',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
    color: 'white',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom: 16,
    overflow: 'hidden',
  },
  pickerAndroid: {
    height: 50,
    width: '100%',
  },
  pickerIOS: {
    height: 150,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2F9400',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
