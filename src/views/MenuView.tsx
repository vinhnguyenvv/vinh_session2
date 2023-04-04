

import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View, Text, Button } from "react-native";




const MenuView = (props: DrawerContentComponentProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {Array.from({ length: 10 }).map((_, idx) => {
                return (
                    <Button
                        key={idx.toString()}
                        title="Go to Details"
                        onPress={() => {
                            props.navigation.navigate("Details")
                        }}
                    />
                )
            })}
        </View>
    );
}

export default MenuView;