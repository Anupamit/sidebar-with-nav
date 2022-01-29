import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Notification from './pages/Notification';
import Attendence from './pages/Attendence';
import Exam from './pages/Exam';
import Logout from './pages/Logout';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exactcomponent={Home} />
          <Route path='/notification' component={Notification} />
          <Route path='/attendence' component={Attendence} />
          <Route path='/exam' component={Exam} />
          <Route path='/logout' component={Logout} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
