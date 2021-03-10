import React from 'react'
import {FlatList, Text,TouchableOpacity,View,StyleSheet,Image} from 'react-native'
import { connect } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {delITEM,incITEM,decITEM} from '../redux/actions' 

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
                <Image style={styles.itemImage} source={{uri:item.imageUrl}} />
                <Text style={{flex:1,paddingHorizontal:15,fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                <TouchableOpacity style={styles.addBTN}  onPress={()=>props.increaseItem(item)}><Text>+</Text></TouchableOpacity>
                <View style={styles.counter} ><Text>{item.count}</Text></View>
                <TouchableOpacity style={styles.subBTN}  onPress={()=>props.decreaseItem(item)}><Text>-</Text></TouchableOpacity>
                <TouchableOpacity style={styles.delBtn} onPress={()=>props.deleteItem(item)}>
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
    deleteItem : (item) => dispatch(delITEM(item)),
    decreaseItem : (item) => dispatch(decITEM(item)),
    increaseItem : (item) => dispatch(incITEM(item)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)

const styles = StyleSheet.create({
    listItem:{
        margin:10,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    addBTN:{
        padding:10,
        borderWidth:1,
       borderRadius:10,
       borderRightWidth:0 ,
       marginRight:-10,
       borderTopRightRadius:0,
       borderBottomRightRadius:0
    },
    subBTN:{
        padding:10,
        borderWidth:1,
        borderRadius:10,
        borderLeftWidth:0,
        marginLeft:-10,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0
    },
    counter:{
        padding:10,
        borderWidth:1,
        borderLeftWidth:0,
        borderRightWidth:0
    },
    username:{
        fontSize:25,
        fontWeight:'bold'
    },
    delBtn:{
        padding:20
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
    },
    itemImage:{
        width:60,
        height:80,
    }
})