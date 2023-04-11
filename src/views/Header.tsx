import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContext, useNavigation } from "@react-navigation/native";
import { DrawerActions } from '@react-navigation/native';
import { useContext } from "react";
const Header = (props: any) => {
    const navigation = useNavigation();
    const nav01 = useContext(NavigationContext);

    return <>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="violet.600" />
        <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
            <HStack alignItems="center">
                <IconButton
                    onPress={() => {
                        navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                    icon={<Icon size="lg" as={MaterialIcons} name="menu" color="white" />} />
                <Text color="white" fontSize="20" fontWeight="bold">
                    {props.options.title}
                </Text>
            </HStack>
            <HStack>
                <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
                <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
                <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
            </HStack>
        </HStack>
    </>;
}

export default Header;