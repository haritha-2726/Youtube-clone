 
import './App.css';
import Header from './components/Header';
import Body from "./components/Body"
import { Provider } from 'react-redux';
import store from './components/Utils/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Maincomponent from './components/Maincomponent';
import Watch from './components/Watch';


function App() {
  return (
     <div>
      <Provider store={store}> 
         <Header/>
          <RouterProvider router={appRouter}/>
      </Provider>
     </div>
  );
}
const appRouter = createBrowserRouter([
   {
     path: "/",
     element: <Body />,
   
     children: [
       {
         path: "/",
         element: <Maincomponent />,
       },
       {
         path: "watch",
         element: <Watch />,
       },
     ],
   },
 ]);
export default App;
