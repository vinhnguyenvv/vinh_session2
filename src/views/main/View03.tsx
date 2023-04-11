import { View, Text, Button } from "react-native";
import RootNavigation from "../RootNavigation";




const View03 = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>View 03</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("View03")}
            />
        </View>
    );
}

export default View03;