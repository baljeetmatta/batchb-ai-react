//1. Store 
//2. action
//3. Reducer

import { createStore } from "redux";

//type,payload
let id=1;
function TasksReducer(store=[],action)
{
    if(action.type=="taskAdded")
    {
        const updatedStore=[...store];
        updatedStore.push({
            id:id,

            title:action.payload.title,
            isResolved:false
        })
        id++;
        return updatedStore;
    }
    if(action.type=="taskDeleted")
    {
        const updatedStore=store.filter((item)=>{
            if(item.id!=action.payload.id)
                return true;
        })
        return updatedStore;
    }
    return store;


}
export const store=createStore(TasksReducer);
console.log(store.getState());
store.dispatch({
    type:"taskAdded",
    payload:{
        title:"first Task in the store"
    }
})

console.log(store.getState());
store.dispatch({
    type:"taskAdded",
    payload:{
        title:"Second Task in the store"
    }
})
console.log(store.getState());
store.dispatch({
    type:"taskDeleted",
    payload:{
        id:1
    }
})
console.log(store.getState());

const addTask=title=>
{
    store.dispatch({
        type:"taskAdded",
        payload:{
            title:title
        }
    })

}