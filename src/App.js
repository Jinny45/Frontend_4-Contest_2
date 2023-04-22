import Login from "./Components/LoggingPage";
import Profile from "./Components/ProfilePage";
import{BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<Login />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;