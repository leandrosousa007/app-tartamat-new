import { Image } from "react-native";

export default function LogoTitle() {
	return <Image style={{ width: 60, height: 50, marginRight: 10 }} resizeMode="contain" source={require("../../assets/logo_matematicando-fundo-transparente.png")} />;
}
