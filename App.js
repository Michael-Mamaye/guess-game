import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [isGameOver, setIsGameOver] = useState(true);
	const [roundsNumber, setRoundsNumber] = useState([]);
	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	function onStartNewGame() {
		setIsGameOver(false);
		setUserNumber("");
		setRoundsNumber([]);
	}
	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
		setIsGameOver(false);
	}
	function gameOverHandler() {
		setIsGameOver(true);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen
				userNumber={userNumber}
				onGameOver={gameOverHandler}
				roundsNumber={roundsNumber}
				countRound={(number) => {
					setRoundsNumber((prevState) => [number, ...prevState]);
				}}
			/>
		);
	}
	if (isGameOver && userNumber) {
		screen = (
			<GameOverScreen
				roundsNumber={roundsNumber}
				userNumber={userNumber}
				onStartNewGame={onStartNewGame}
			/>
		);
	}

	return (
		<>
			<StatusBar style="light" />
			<LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.root}>
				<ImageBackground
					source={require("./assets/images/background.png")}
					resizeMode="cover"
					style={styles.root}
					imageStyle={styles.backgroundImage}>
					<SafeAreaView style={styles.root}>{screen}</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
