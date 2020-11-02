import './App.css';
import Profile from './profile/Profile'
import PropTypes from 'prop-types'

const App=() => {
  return (
    <div >
    <Profile name="Saïda" bio="Hi, I'm new here!" profession="Developer">
    <img src="/download.png" alt="userPhoto"/>
    </Profile>
    </div>
  );
}

Profile.PropTypes = {
  name : PropTypes.string,
  bio : PropTypes.string,
  profession : PropTypes.string
}
export default App;
