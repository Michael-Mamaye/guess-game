import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");
	const handleInputChange = (enteredText) => {
		setEnteredNumber(enteredText);
	};
	function resetInputHandler() {
		setEnteredNumber("");
	}
	function confirmEnteredNumber() {
		const choosenNumber = parseInt(enteredNumber);
		console.log("entered nUm", choosenNumber);
		if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
			Alert.alert("Invalid Number", "Please Enter a Number between 1 and 99", [
				{
					text: "Okay",
					style: "destructive",
					onPress: resetInputHandler,
				},
			]);
			return;
		}
		return onPickNumber(choosenNumber);
	}

	return (
		<View style={styles.mainContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<Text style={styles.instructionText}>Enter a number</Text>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					value={enteredNumber}
					onChangeText={handleInputChange}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmEnteredNumber}>
							Confirm
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	mainContainer: {
		padding: 16,
		marginTop: 50,
	},

	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
		fontFamily: "open-sans",
	},
	buttonsContainer: {
		flexDirection: "row",
		marginTop: 8,
	},
	buttonContainer: {
		flex: 1,
	},
	instructionText: {
		color: "#ddb52f",
		fontFamily: "open-sans-bold",
		fontSize: 18,
		paddingTop: 10,
	},
});
