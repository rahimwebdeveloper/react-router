import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Friends from './components/Friends/Friends'
import NotFoud from './components/NotFound/NotFoud';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/friends' element={<Friends/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Posts/>}>
          <Route path=':postId' element={<PostDetail/>} ></Route>
        </Route>
        <Route path='/friend/:friendId' element={<FriendDetail/>}/>
        <Route path='*' element={<NotFoud/>} />
      </Routes>
    </div>
  );
}

export default App;
