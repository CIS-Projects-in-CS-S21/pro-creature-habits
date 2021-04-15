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
        marginTop:1, 
        bottom: 0,
        overflow:'hidden',
    },
	button:{
		padding: 10,
		width: "70%",
		backgroundColor: '#402688',
		alignItems: 'center',
		marginTop: 5,
		borderRadius: 10
	},
	topButton:{
		padding: 10,
		width: "70%",
		backgroundColor: '#402688',
		alignItems: 'center',
		marginTop: 10, //change to whatever
		borderRadius: 10
	},
    title:{
        fontSize:30,
        color:'white',
        alignItems:'center',
        fontWeight:'bold'
    },
    titleContainer:{
        marginTop:50,
		flexDirection: "row",
		justifyContent: "center",
		padding: 10,
	},
    paraContainer:{
        flexDirection: "row",
		justifyContent: "center",
		padding: 10,
        marginTop: 10,
        marginBottom:10,
        marginLeft:'15%',
        marginRight:'15%', 
        bottom: 0,
        overflow:'hidden',
        alignItems:'center',
    }
});

const ProfileTutorial = ({onSignUp, navigation}) => {

    
    return (

        <View style={styles.container}>
            <ScrollView>
            <View style={styles.titleContainer}>
                <Image source={require('../../IconImages/star.png')} style={{height: 40, width: 40,}}/>
                    <Text style={styles.title}>  Profile Info  </Text>
                <Image source={require('../../IconImages/star.png')} style={{height: 40, width: 40,}}/>
                </View>

                <TouchableHighlight style={styles.imagesContainer}>
                    <Image source={require('../../images/dog.png')} style={{ height: 210, width: 160,}}/>
                </TouchableHighlight>

                <View style={styles.paraContainer}>
                    <Text style={{fontSize:25,color:'white',}}>
                        {'\u2022'} Feed your pet! {'\n'}{'\n'}
                        {'\u2022'} Clothe your pet! {'\n'} {'\n'}
                        {'\u2022'} View their status!  
                    </Text>
                </View>
               <View style={styles.buttonsContainer}>
                    
                    <TouchableOpacity
                        style={styles.topButton}
                        onPress={()=>{navigation.navigate('Marketplace Page')}}
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

export default ProfileTutorial;