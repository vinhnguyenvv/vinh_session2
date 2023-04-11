

import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View, Text, Button } from "react-native";
import { TViewNames, viewsName } from "./views-name";


Object.keys(viewsName)

const MenuView = (props: DrawerContentComponentProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            { Object.keys(viewsName).map((key) => {
                    const item = viewsName[key as TViewNames];
                return (
                    <Button
                        key={key}
                        title={key}
                        onPress={() => {
                            props.navigation.navigate(key)
                        }}
                    />
                )
            })}
        </View>


    );
}

export default MenuView;