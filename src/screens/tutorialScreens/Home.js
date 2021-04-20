import React from 'react';
import { ScrollView, Button, Text, View, StyleSheet, TouchableOpacity,Image, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#406BE9',
	},
	text: {
		color: 'white',
		fontSize: 20
	},
	input:{
		width:"85%",
		backgroundColor: "white",
		marginBottom: 10,
		padding: 15,
		borderRadius: 10
	},
    buttonsContainer:{
		flexDirection: "row",
		justifyContent: "center",
		padding: 10
	},
    imagesContainer:{
        flexDirection: "row",
		justifyContent: "center",
		padding: 10,
        marginTop:20, 
        bottom: 0,
        overflow:'hidden',
    },
	button:{
		padding: 10,
		width: "45%",
		backgroundColor: '#402688',
		alignItems: 'center',
		marginTop: 5,
		borderRadius: 10
	},
	topButton:{
		padding: 10,
		width: "45%",
		backgroundColor: '#402688',
		alignItems: 'center',
		marginTop: 1, //change to whatever
		borderRadius: 10
	},
    title:{
        fontSize:30,
        color:'white',
        alignItems:'center',
        fontWeight:'bold'
    },
    titleContainer:{
        marginTop:20,
		flexDirection: "row",
		justifyContent: "center",
		padding: 10,
	},
    paraContainer:{
        flexDirection: "row",
		justifyContent: "center",
		padding: 10,
        marginLeft:'15%',
        marginRight:'15%', 
        bottom: 0,
        overflow:'hidden',
        alignItems:'center',
    }
});

const HomeTutorial = ({navigation,onSignUp}) => { //add navigation later

    
    return (

        <View style={styles.container}>
            <ScrollView>
            
                <View style={styles.titleContainer}>
                <Image source={require('../../IconImages/star.png')} style={{height: 40, width: 40,}}/>
                    <Text style={styles.title}>  Home Info  </Text>
                <Image source={require('../../IconImages/star.png')} style={{height: 40, width: 40,}}/>
                </View>

                <TouchableHighlight style={styles.imagesContainer}>
                    <Image source={require('./Todo.gif')} style={{ height: 260, width: 200,}}/>
                </TouchableHighlight>

                <View style={styles.paraContainer}>
                    <Text style={{fontSize:25,color:'white',}}>
                        {'\u2022'} Create, edit, delete, and/or complete tasks! {'\n'}{'\n'}
                        {'\u2022'} Create daily and one-time tasks! {'\n'}{'\n'}
                        {'\u2022'} Adjust task difficulty and complete tasks to earn coins!
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    
                    <TouchableOpacity
                        style={styles.topButton}
                        onPress={()=>{navigation.navigate('Profile Page')}}
                    >
                        <Text style={styles.text}>Next</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsContainer}>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSignUp}
                    >
                        <Text style={styles.text}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeTutorial;