import React from 'react'
import {FlatList, Text,TouchableOpacity,View,StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
 
const Cart = (props) => {
    return ( 
        <View>
        <View style={styles.cartInfo}>
        <Text style={styles.username}> {props.user}'s Cart</Text>
        <Text style={styles.cartInfoText}>Total Items in the Cart : {props.totalItems}</Text>
        <Text style={styles.cartInfoText}>Total Price : {props.totalPrice}</Text>
        <Text style={styles.cartInfoText3}>Items in the cart are : </Text>
        </View>
        <FlatList
        data={props.items}
        keyExtractor={(item,index)=>index}
        renderItem={({item})=>{
            return(
                <View style={styles.listItem}>
                <Text style={{flex:1}}>{item.name}</Text>
                <TouchableOpacity><Text>+</Text></TouchableOpacity>
                <Text>No.</Text>
                <TouchableOpacity><Text>-</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>props.deleteItem(item)}>
                    <FontAwesome name='trash' size={25}/>
                </TouchableOpacity>
                </View>
            )
        }}
        />
        </View>
    )
}

const mapStateToProps = (state) => ({
    user : state.user,
    totalItems : state.totalItems,
    items : state.items,
    totalPrice : state.totalPrice
})

const mapDispatchToProps = (dispatch) => ({
    deleteItem : (item) => dispatch({type:'DELETE_ITEM',item:item})
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)

const styles = StyleSheet.create({
    listItem:{
        margin:10,
        marginHorizontal:20,
        flexDirection:'row'
    },
    username:{
        fontSize:25,
        fontWeight:'bold'
    },
    cartInfo:{
        margin:15,
    },
    cartInfoText:{
        fontSize:18
    },
    cartInfoText3:{
        fontSize:18,
        marginTop:30
    }
})