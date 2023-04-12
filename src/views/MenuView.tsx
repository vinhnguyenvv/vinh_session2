

import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import RootNavigation from "./RootNavigation";
import { Select, Box, CheckIcon } from "native-base";
import React from "react";
import { useGlobalStore } from "./stores/useGlobalStore";



const menus = [
    {
        targetView: "View01"
    },
    {
        targetView: "View02"
    }, {
        targetView: "View03"
    },
    {
        targetView: "View04"
    },
    {
        targetView: "View05"
    },
]


const MenuView = (props: DrawerContentComponentProps) => {
    const { valuseWhseid, setWhseid } = useGlobalStore();

    const changeWhseid = (al: string) => {

        setWhseid(al);
    }

    // const navigation = RootNavigation.navigationRef;
    const navigation = useNavigation<any>();
    const [service, setService] = React.useState("");
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Box maxW="300">
                <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => { setService(itemValue), changeWhseid(itemValue) }}>
                    <Select.Item label="WH01" value="WH01" />
                    <Select.Item label="WH02" value="WH02" />
                    <Select.Item label="WH03" value="WH03" />
                </Select>
            </Box>

            {menus.map(({ targetView }) => (<Button
                key={targetView}
                title={targetView}
                onPress={() => {
                    navigation.navigate(targetView)
                }}
            />))}
        </View>
    );
}

export default MenuView;