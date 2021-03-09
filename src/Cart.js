import React from 'react'
import {FlatList, Text,TouchableOpacity,View,StyleSheet} from 'react-native'
import { connect } from 'react-redux'

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
                <Text>{item}</Text>
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

export default connect(mapStateToProps)(Cart)

const styles = StyleSheet.create({
    listItem:{
        margin:10,
        marginHorizontal:20,
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