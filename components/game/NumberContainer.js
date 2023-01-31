import { View, StyleSheet, Text } from "react-native";

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}
export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: "#ddb52f",
		borderRadius: 8,
		padding: 24,
		margin: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		color: "#ddb52f",
		fontSize: 36,
		fontWeight: "bold",
	},
});
