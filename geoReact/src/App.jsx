import reactLogo from './assets/react.svg'
import './App.css'
import LoginRegister from './auth/LoginRegister'
import { UserContext} from "./userContext";
import { useState } from 'react'
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import About from './About';
import { Routes, Route, Router } from 'react-router-dom';

import Places from './Places/Places';
import PlacesMenu from './Places/PlacesMenu';

import Place from './Places/Place';
import PlaceAdd from './Places/PlaceAdd';
import PlaceEdit from './Places/PlaceEdit';
import PlacesGrid from './Places/PlacesGrid';
import PlacesList from './Places/PlacesList';

import Posts from './Posts/Posts';
import PostsMenu from './Posts/PostsMenu';

import Post from './Posts/Post';
import PostAdd from './Posts/PostAdd';
import PostEdit from './Posts/PostEdit';
import PostsGrid from './Posts/PostsGrid';
import PostsList from './Posts/PostsList';

import NotFound from './NotFound';


function App() {
  let [authToken, setAuthToken] = useState("");
  let [userEmail, setUserEmail] = useState("");

  return (
    
    <UserContext.Provider value= { { userEmail,setUserEmail,authToken,setAuthToken }}>
      {authToken ? (
      <>
      <div className='cajamaster'>
        <Header/>
        
        <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Posts />}/>
            <Route path="/places" element={ <> <PlacesMenu/><Places/> </> } /> 

            <Route path="/places/:id" element={ <> <PlacesMenu/><Place/> </>} />
            <Route path="/places/add" element={ <> <PlacesMenu/><PlaceAdd /> </>} /> 
            <Route path="/places/edit/:id" element={ <> <PlacesMenu/><PlaceEdit /> </>} /> 
            <Route path="/places/grid" element={ <> <PlacesMenu/><PlacesGrid /> </>} /> 
            <Route path="/places/list" element={ <> <PlacesMenu/><PlacesList /> </>} /> 

            <Route path="/posts" element={ <> <PostsMenu/><Posts/> </>} />

            <Route path="/posts/:id" element={ <> <PostsMenu/><Post/> </>} />
            <Route path="/posts/add" element={  <> <PostsMenu/><PostAdd/> </>} /> 
            <Route path="/posts/edit/:id" element={ <> <PostsMenu/><PostEdit/> </>} /> 
            <Route path="/posts/grid" element={ <> <PostsMenu/><PostsGrid/> </>} /> 
            <Route path="/posts/list" element={ <> <PostsMenu/><PostsList/> </>} /> 

        </Routes>

        <div className='footer'>
          <Footer/>
        </div>
      </div>
     
        
      </>): ( 
      <>
        <LoginRegister/>
      </>)}
      
    </UserContext.Provider>
  )
}

export default App
