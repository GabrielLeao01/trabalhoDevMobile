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
    marginBottom: 16,
    textAlign: 'center',
    color: 'white',
  },
  noCarMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#2F9400',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  carButton: {
    backgroundColor: '#e0e0e0',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  carButtonText: {
    fontSize: 16,
    color: '#000',
  },
  scrollContainer: {
    flexGrow: 0,
  },
  logoutButton: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  backgroundColor: '#D32F2F',
  borderRadius: 30,
  paddingVertical: 12,
  paddingHorizontal: 20,
  elevation: 5, // sombra no Android
  shadowColor: '#000', // sombra no iOS
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
 },
 logoutButtonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
 },

});
