import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id : 1,
        todo : "Todo title",
        completed : false,
    }
]
, addtodo : (todo) => {},
  updatetodo : (id ,todo) => {},
  deletetodo : (id) => {},
  toggleComplete : (id) => {},

})

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}