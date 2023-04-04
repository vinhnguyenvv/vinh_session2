

import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View, Text, Button } from "react-native";




const TabbarView = (props: any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {Array.from({ length: 3 }).map((_, idx) => {
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

export default TabbarView;