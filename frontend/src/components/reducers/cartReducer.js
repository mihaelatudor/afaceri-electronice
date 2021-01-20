import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'DELAKTIG', desc: "Acest aranjament are tot ce ai nevoie: o canapea cu 2 locuri compactă şi plăcută pentru spaţii mai mici cu o măsuţă auxiliară pentru a ţine cana de cafea, cartea şi ochelarii la îndemână.", price:2480,img:Item1},
        {id:2,title:'GRÖNLID', desc: "O canapea ideală pentru somn, dar şi pentru relaxare. Această canapea are scaun cu adâncime mai mare, perne pentru spate moi, flexibile şi disponibile în diferite dimensiuni şi forme - totul pentru confortul tău.", price:6760,img: Item2},
        {id:3,title:'KLIPPAN', desc: "Am lansat canapeaua KLIPPAN în anii '80 şi este un articol încă popular. Este confortabilă, încape în aproape orice spaţiu şi are multe huse din care să alegi. Un model clasic care rămâne neschimbat în timp.",price:999,img: Item3},
        {id:4,title:'LANDSKRONA', desc: "Un lux accesibil. Am folosit umplutură din spumă rezistentă pentru confort, piele groasă în zonele de contact pentru un aspect extraordinar şi ţesătură durabilă în celelalte părţi pentru a menţine preţul redus.", price:2749,img:Item4},
        {id:5,title:'LIDHULT', desc: "Canapeaua LIDHULT cu spătar înalt şi suport pentru gât este concepută pentru confort maxim. Poţi trage un pui de somn binemeritat în timpul zilei sau te poţi relaxa cu familia şi prietenii seara. O canapea confortabilă, care oferă spaţiu generos..", price:7600,img: Item5},
        {id:6,title:'REMSTA', desc: "Colţurile frumos rotunjite şi detaliile plăcute conferă fotoliului REMSTA un aspect clasic. Husa are un aspect neted, forma asigură suport lombar, iar ambalajul compact reduce impactul asupra mediului în timpul transportului.",price:699,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
