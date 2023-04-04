import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import RootNavigation from "../RootNavigation";
import HomeDetailView from "./HomeDetailView";







const HomeView = () => {

    const [id, setId] = useState(1);

    const [title, setTitle] = useState("");


    const [obj, setObj] = useState({
        name: "",
        website: ""
    });

    useEffect(() => {
        /// load data receipt call API
        setObj({
            ...obj,
            website: "smartlog.ifo " + Math.random().toFixed(2)
        })
    }, [id])

    useEffect(() => {
        setObj({
            ...obj,
            name: "smartlog.ifo " + Math.random().toFixed(2)
        })
    }, [title])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Text> ID: {id} </Text>

            <Text> Title: {title} </Text>


            <Text> SWM NAME: {obj.name} </Text>


            <Text> SWM website: {obj.website} </Text>

            <Button
                title="Increment"
                onPress={() => setId(id + 1)}
            />


            <Button
                title="Change Title"
                onPress={() => setTitle(Math.random().toString())}
            />

            <Button
                title="Change OBJ"
                onPress={() => setObj({
                    ...obj,
                    name: "HEHE"
                })}
            />

            <Button
                title="Go to Details"
                onPress={() => RootNavigation.navigate("HomeDetailView")}
            />
        </View>
    );
}

export default HomeView;