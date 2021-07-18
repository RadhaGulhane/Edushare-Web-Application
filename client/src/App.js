import react from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Section from './components/Section/Section'
import Navbar from './components/Navbar/Navbar';
import Post from './components/Posts/Posts';
import Chat from './components/Chat/Chat';
import Form from './components/Form/Form';
import Subject from './components/Subjects/Subjects';
function App() {
  return (
    <div>
        <Navbar/>
        {/* <Form/> */}
        <Router>
          <Route path="/sections" exact component= {Section}></Route>
          <Route path="/all posts" exact component= {Post}></Route>
          <Route path="/chat" exact component= {Chat}></Route>
          <Route path="/subjects" exact component= {Subject}></Route>
        </Router>
    </div>
    
  );
}

export default App;
