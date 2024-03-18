// import { useReducer } from "react";
// import tododata from "./data/tododata";
import TodoContainer from "./component/TodoContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { TodoContext } from "./Context/TodoContext";
// import { TodoDispatch } from "./Context/TodoDispatch";


function App() {
  // const [datastodo, dispatch] = useReducer(todreducer, tododata)

  // function todreducer(datastodo, action) {
  //   switch (action.type) {
  //     case 'Add':
  //       return [...datastodo, {
  //         ...action.payload,
  //         id: datastodo.length + 1
  //       }]

  //     case 'Delete':
  //       return datastodo.filter((val) => val.id !== action.payload)

  //     default:
  //       return datastodo
  //   }

  // }


  return (
    <>
      {/* <TodoContext.Provider value={datastodo}>
        <TodoDispatch.Provider value={dispatch}> */}

      <Provider store={store}>

        <TodoContainer />

      </Provider>



      {/* </TodoDispatch.Provider>

      </TodoContext.Provider> */}


    </>
  );
}

export default App;
