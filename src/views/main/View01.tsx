import { View, Text, Button, StyleSheet } from "react-native";
import RootNavigation from "../RootNavigation";
import MainHeader from "../MainHeader";
import { useState } from "react";
import { Center, Radio } from "native-base";
import { useGlobalStore } from "../stores/useGlobalStore";




const View01 = ({ navigation }: any) => {
    const { themeMode, setThemeMode } = useGlobalStore();

    const changeTheme = (al: string) => {
        let ab = themeMode;
        if (al == 'dark') {
            ab = 'dark'
        } else {
            ab = 'light'
        }
        setThemeMode(ab);
    }
    const [value, setValue] = useState("light");



    const [dataView, setDataView] = useState({
        name: "Hello",
        id: 1
    })

    const styles = StyleSheet.create({
        dark: {
            backgroundColor: '#121212',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'red',
            styText: {
                color: 'red',
                fontSize: 20
            },
            styRadio: {
                color: 'red',
            }
        },
        light: {
            backgroundColor: 'white',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            styText: {
                color: 'blue',
                fontSize: 20
            },
            styRadio: {
                lableColor: 'blue'
            }
        }
    })
    let bg
    if (themeMode == 'dark') {
        bg = styles.dark
    } else {
        bg = styles.light
    }


    return (
        <View style={bg}>
            <MainHeader title="Hello" type="MENU" />
            <View style={{ flex: 1 }}>
                <Center>
                    <Text style={bg.styText}>View 01</Text>
                    <Button
                        title="Go to Details"
                        onPress={() => navigation.navigate("View02")}
                    />

                    {/* <Button
                        title="change theme"
                        onPress={changeTheme}
                    />

                    <Button
                        title="change theme"
                        onPress={changeTheme}
                    /> */}

                    <Radio.Group defaultValue="light" name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                        setValue(nextValue);
                        changeTheme(nextValue)
                    }}>
                        <Radio color='error' colorScheme="green" value="light" my={1} >
                            light
                        </Radio>
                        <Radio value="dark" my={1}>
                            dark
                        </Radio>
                    </Radio.Group>
                </Center>
            </View>
        </View>
    );

}

export default View01;