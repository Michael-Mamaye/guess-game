import { Text, StyleSheet, View, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
	return (
		<View style={styles.mainContainer}>
			<Title>Game Over!</Title>
			<View style={styles.imageContainer}>
				<Image source={require("../assets/images/jaguar.jpg")} />
			</View>
			<Text style={styles.summaryText}>
				Your phone needed{" "}
				<Text style={styles.highlights}>{roundsNumber.length}</Text> round(s) to
				guess the number <Text style={styles.highlights}>{userNumber}</Text>
			</Text>
			<PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
		</View>
	);
}

export default GameOverScreen;

const styles = StyleSheet.create({
	mainContainer: {
		marginTop: 50,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		borderRadius: 200,
		width: 370,
		height: 370,
		borderWidth: 3,
		marginTop: 36,
		overflow: "hidden",
		borderColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 25,
		color: "#4e0329",
		margin: 8,
		marginBottom: 36,
		textAlign: "center",
	},
	highlights: {
		fontSize: 28,
	},
});
