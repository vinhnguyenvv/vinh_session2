import { View, Text, Button,StyleSheet } from "react-native";
import RootNavigation from "../RootNavigation";
import { useGlobalStore } from "../stores/useGlobalStore";




const View03 = ({ navigation }: any) => {
    const { themeMode, setThemeMode } = useGlobalStore();

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
            <Text style={bg.styText}>View 03</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("View03")}
            />
        </View>
    );
}

export default View03;