import { View, Text, Button } from "react-native";
import RootNavigation from "../RootNavigation";




const View01 = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>View01</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("View01")}
            />
        </View>
    );
}

export default View01;