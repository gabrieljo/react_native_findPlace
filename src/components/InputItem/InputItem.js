import React, {Component} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

//placeInput
class InputItem extends Component{

    state = {
        placeName: ''
    }
    
    componentDidMount(){
        
    }

    placeNameChangeHnadler = (val) => {
        this.setState({placeName: val})
    }

    placeButtonChangeHnadler = () => {
        if(this.state.placeName.trim() === "") {
            return;
        }
        
        this.props.onPlaceAdded(this.state.placeName)
    }    

    render(props){
        return(
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.placeInput}
                    value = {this.state.placeName}
                    onChangeText={this.placeNameChangeHnadler}
                />
                <Button title="Add" 
                    style={styles.palceButton}
                    onPress={this.placeButtonChangeHnadler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer:{
        // flex:1,
        flexDirection: 'row',
        justifyContent:"space-between"
      },
      placeInput:{
        width:"70%"
      },
      placeButton:{
        width:"30%",
        backgroundColor:'green'
      }
  });
  

export default InputItem