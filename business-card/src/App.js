import ProfilePic from './components/ProfilePic'
import About from './components/About'
import Contacts from './components/Contacts'
import NameOcupation from './components/NameOcupation'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <ProfilePic/>
      <NameOcupation/>
      <Contacts/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
