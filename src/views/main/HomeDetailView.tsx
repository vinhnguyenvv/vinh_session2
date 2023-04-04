import { View, Text, Button } from "react-native";
import RootNavigation from "../RootNavigation";




const HomeDetailView = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Detail Screen</Text>
            <Button
                title="Go back"
                onPress={() => RootNavigation.goBack()}
            />
            <Button
                title="Go Home"
                onPress={() => RootNavigation.goHome()}
            />
        </View>
    );
}

export default HomeDetailView;