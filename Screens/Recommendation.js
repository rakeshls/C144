import React,{Component} from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import axios from 'axios'
import {Card} from 'react-native-elements'
export default class Recommended extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    getData =()=>{
        const url = 'http://localhost:5000/recommended-Movie'
        axios
        .get(url)
        .then(response =>{
            this.setState({
                data : response.data.data
            })
        })
    .catch(error =>{
        console.log(error.message)
    })
    }
    timeConvert(num){
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return `${hours} hrs ${minutes} mins`;
    }
    componentDidMount(){
        this.getData()
    }
    keyExtractor = (item,index)=> index.toString()
    
    renderItems = ({ item, index }) => {
        return (
          <Card
            key={`card-${index}`}
            image={{ uri: item.poster_link }}
            imageProps={{ resizeMode: "cover" }}
            featuredTitle={item.title}
            containerStyle={styles.cardContainer}
            featuredTitleStyle={styles.title}
            featuredSubtitle={`${
              item.release_date.split("-")[0]
            } | ${this.timeConvert(item.duration)}`}
            featuredSubtitleStyle={styles.subtitle}
          ></Card>
        );
      };
      render(){
          const {data} = this.state
          return(
              <View style={styles.container}>
                  <FlatList 
                  data ={data}
                  keyExtractor={this.keyExtractor}
                  renderItem = {this.renderItems}/>
              </View>
          )
      }
      
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    title: {
      color: "#fff",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(25),
      marginTop: RFValue(65)
    },
    subtitle: {
      fontWeight: "bold",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(15)
    },
    cardContainer: {
      flex: 1,
      borderRadius: RFValue(10),
      justifyContent: "center",
      height: RFValue(110),
      marginBottom: RFValue(20)
    }
  });