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
import { PlacesGrid } from './Places/PlacesGrid';
import { PlacesList } from './Places/PlacesList';
import PlaceMarks from './Places/PlaceMarks';

import Posts from './Posts/Posts';
import PostsMenu from './Posts/PostsMenu';

import Post from './Posts/Post';
import PostAdd from './Posts/PostAdd';
import PostEdit from './Posts/PostEdit';
import { PostsGrid } from './Posts/PostsGrid';
import { PostsList } from './Posts/PostsList';
import { PostMarks } from './Posts/postmark/PostMarks';

import NotFound from './NotFound';

import { ReviewsList } from './Places/reviews/ReviewsList';

import ToDos from './todos/ToDos';
import Menu from './Layout/Menu';

function App() {
  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");
  function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
  }
  function enableScroll(){  
    window.onscroll = null;
  }
  
  return (
    
    <UserContext.Provider value= { { usuari, setUsuari,authToken,setAuthToken }}>
      {authToken ? (
      <>
      <div className='cajamaster'>
        <Header/>
        
        <Routes>
            <Route path="/*" element={<><Menu /><NotFound /></> } />
            <Route path="/about" element={<><Menu /><About /></> } />
            <Route path="/" element={<><Menu /><Posts /></>}/>
            <Route path="/places" element={ <> <PlacesMenu/><Places/> </> } /> 

            <Route path="/places/:id" element={ <> <PlacesMenu/><Place/> </>} />
            <Route path="/places/add" element={ <> <PlacesMenu/><PlaceAdd /> </>} /> 
            <Route path="/places/edit/:id" element={ <> <PlacesMenu/><PlaceEdit /> </>} /> 
            <Route path="/places/grid" element={ <> <PlacesMenu/><PlacesGrid /> </>} /> 
            <Route path="/places/list" element={ <> <PlacesMenu/><PlacesList /> </>} /> 
            <Route path="/places/marks" element={ <> <PlacesMenu/><PlaceMarks/> </>} />

            <Route path="/posts" element={ <> <PostsMenu/><Posts/> </>} />

            <Route path="/posts/:id" element={ <> <PostsMenu/><Post/> </>} />
            <Route path="/posts/add" element={  <> <PostsMenu/><PostAdd/> </>} /> 
            <Route path="/posts/edit/:id" element={ <> <PostsMenu/><PostEdit/> </>} /> 
            <Route path="/posts/grid" element={ <> <PostsMenu/><PostsGrid/> </>} /> 
            <Route path="/posts/list" element={ <> <PostsMenu/><PostsList/> </>} /> 
            <Route path="/posts/marks" element={ <> <PostsMenu/><PostMarks/> </>} /> 

            <Route path="/places/reviews" element={<><PlacesMenu /><ReviewsList /> </>} />
            <Route path="/todos" element={<><Menu /><ToDos /> </>} />
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
