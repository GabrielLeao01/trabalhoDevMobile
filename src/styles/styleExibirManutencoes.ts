import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2E2E2E',
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  item: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    color: "#000",
  },
  label: {
    fontWeight: "bold",
  },
  updateButton: {
    backgroundColor: "#2F9400",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center'
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
