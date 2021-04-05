import React from 'react';
import {Text, View, Button, StyleSheet, Image, TextInput, TouchableHighlight} from "react-native";
import { List } from 'react-native-paper';



const TutorialScreen = ({onSignUp}) => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (

        <View style={styles.container}>
            
            

            <List.Section title="Accordions">
                <List.Accordion
                title="Uncontrolled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}
                >
                <List.Item title="First item" />
                <List.Item title="Second item" />
                </List.Accordion>

                <List.Accordion
                title="Controlled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}
                >
                <List.Item title="First item" />
                <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>


            <Text>Footer Tutorial Page</Text>
            <Button title="End Tutorial" color="purple" onPress={onSignUp}/>
        </View>
    );
};

export default TutorialScreen;

