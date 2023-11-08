import { BrowserRouter , Route, Routes} from "react-router-dom"
import "./App.css";
import Homepage from "./components/HomePage";
import NavBar from "./components/NavBar"
import VideoPage from "./components/VideoPage";
import LoginPage from "./components/LoginPage";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
       <Routes>
         <Route path="/" element= {<Homepage/>} />
         <Route path="/vedios" element= {<VideoPage/>} />
         <Route path="/login" element={<LoginPage />} />
       
       
    </Routes>
       
      
       
    </BrowserRouter>
  );
    
};
export default App;
