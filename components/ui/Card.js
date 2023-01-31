import { StyleSheet, View } from "react-native";

function Card({ children }) {
	return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 50,
		padding: 16,
		marginHorizontal: 24,
		backgroundColor: "#4e0329",
		borderRadius: 8,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
		justifyContent: "center",
		alignItems: "center",
	},
});
