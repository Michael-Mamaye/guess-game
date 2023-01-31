import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, countRound, roundsNumber }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "higher" && currentGuess > userNumber)
		) {
			Alert.alert("Don't Lie", "You that this is wrong...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}
		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRndNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		countRound(newRndNumber);
		setCurrentGuess(newRndNumber);
	};

	return (
		<View style={styles.screen}>
			<Title>Oponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<Text style={styles.instructionText}>Higher or Lower?</Text>
				<View style={styles.rowDirection}>
					<PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
						<Ionicons name="md-remove" size={24} color="white" />
					</PrimaryButton>
					<PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
						<Ionicons name="md-add" size={24} color="white" />
					</PrimaryButton>
				</View>
			</Card>
			<View style={{ marginTop: 36, flex: 1, padding: 16 }}>
				<FlatList
					data={roundsNumber}
					renderItem={(item) => {
						return (
							<View style={styles.listStyleContainer}>
								<Text>{roundsNumber.length - item.index}</Text>
								<Text>Opponent's Guess {item.item}</Text>
							</View>
						);
					}}
					keyExtractor={(item) => item}
				/>
			</View>
		</View>
	);
}
export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 28,
		marginTop: 20,
	},

	rowDirection: {
		flexDirection: "row",
	},
	instructionText: {
		color: "#ddb52f",
		fontStyle: "verdana",
		fontSize: 18,
		paddingTop: 10,
	},
	listStyleContainer: {
		flexDirection: "row",
		borderRadius: 8,
		backgroundColor: "#bbd52f",
		justifyContent: "space-around",
		padding: 8,
		margin: 8,
	},
});
