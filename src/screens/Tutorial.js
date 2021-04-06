import React from 'react';
import {ScrollView, Text, View, Button, StyleSheet, Image, TextInput, TouchableHighlight} from "react-native";
import { List } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#406BE9',
    },
    text: {
        fontFamily: 'sans-serif',
        color: 'black',
        fontSize: 20,
        textAlign: 'left',
        paddingTop: 5,
    },
    text2: {
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
        },
    image: {
        width: 100,
        height: 100,
        borderWidth: 2,
        		borderColor: "white",
        		borderRadius: 20,
        		padding: 8,
        		backgroundColor: "lightblue",
        		margin: 10
    },
    imageContainer: {
            flexDirection: 'row',
    		justifyContent: 'space-evenly',
    		marginTop: 20,
    		flexWrap: 'wrap',
    		alignContent: 'flex-end'
    },
    }
);

const TutorialScreen = ({onSignUp}) => {
    // const [expanded, setExpanded] = React.useState(true);
    // const handlePress = () => setExpanded(!expanded);

    return (

        <View>
            <ScrollView>
            <List.Section title="Tutorial Page">
                <List.Accordion
                title="Navigation"
                left={props => <List.Icon {...props} icon={'equal'} />}
                >
                <Text style={styles.text}>
                    There are four screens: Home, Profile, 
                    MarketPlace, and Settings!
                </Text>
                </List.Accordion>
                <List.Accordion
                title="How to Login"
                left={props => <List.Icon {...props} icon="equal" />}
                // expanded={expanded}
                // onPress={handlePress}
                >
                <Text style={styles.text}>
                    To login with a new account, go to
                    the settings page and click sign out. 
                    Then you can login with a new username and password!
                </Text>
                </List.Accordion>
                <List.Accordion
                title="Home Screen"
                left={props => <List.Icon {...props}  icon="equal" />}
                // expanded={expanded}
                // onPress={handlePress}
                >
                <Text style={styles.text}>
                    In Home, you can create, modify, complete
                    and delete tasks! {'\n'}You can also set a deadline
                    for them after creation!
                    {'\n\n'}
                    If the task is completed before the due date,
                    you will recieve 5 coins !!! 😃
                    {'\n\n'}
                    If the task is completed after the due date,
                    you will not recieve any coins 😔
                </Text>
                </List.Accordion>
                <List.Accordion
                title="Profile Screen"
                left={props => <List.Icon {...props} icon="equal" />}
                // expanded={expanded}
                // onPress={handlePress}
                >
                <Text style={styles.text}>
                    In Profile, you can view your pet's health
                    bars and you can choose to apply things
                     you purchased from the marketplace!
                     {'\n\n'}
                    If you purchased food 🍕 🍔, you can feed your
                    pet so their health can be replenished!
                    {'\n\n'}
                    If you purchased shirts 👕, shoes 👞, or other items ⚽,
                    you can let your pet wear them! {'\n\n'}Collect as many
                    outfits as you can to mix and match! 
                     {'\n\n'}
                    You can also edit your pet's name 
                    if you change your mind!

                </Text>
                </List.Accordion>
                <List.Accordion
                title="Marketplace Screen"
                left={props => <List.Icon {...props} icon="equal" />}
                // expanded={expanded}
                // onPress={handlePress}
                >
                <Text style={styles.text}>
                    Welcome to the Marketplace!!!
                    {'\n\n'}There are lots of things to
                    buy with your available coin balance!
                    {'\n\n'}
                    Each item will cost different amount {'\n'}so
                    save up those coins! 💰
                    {'\n\n'}
                    Food: 🥕 🍔 🍕 🥞 🍙{'\n\n'}
                    Clothes: 👕 👚 👗{'\n\n'}
                    Shoes: 🩰 👞 👟{'\n\n'}
                    Accesories: ⚽ 🧶{'\n\n'}
                    and more!!!
                </Text>
                </List.Accordion>
                <List.Accordion
                title="Settings Screen"
                left={props => <List.Icon {...props} icon="equal" />}
                // expanded={expanded}
                // onPress={handlePress}
                >
                <Text style={styles.text}>
                    View your achievements and collect coins!!! 💰
                    {'\n\n'}
                    View your user statistics! 📈
                    {'\n\n'}
                    Set Easy, Medium, or Hard difficulty
                    for achievements!
                    {'\n\n'}
                    To switch to a new account or log out,
                    click sign out 🙋‍♂️
                </Text>
                </List.Accordion>
               
            </List.Section>
            </ScrollView>

            <Button title="End Tutorial" color="purple" onPress={onSignUp}/>
        </View>
    );
};

export default TutorialScreen;

