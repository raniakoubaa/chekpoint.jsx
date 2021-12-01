
import './App.css';
import fleur from './fleur.jpg';
import Header from './component/Headers/Header';
import Video from './component/Video/Video';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './component/Footer/Footer';
import Firstimg from './component/FirstImg/Firstimg';
// import chat from './chat.mp4';
function App() {
  return (
    <div className="App">
    <Header/>
    <h3>Picture public</h3>
    <Firstimg/>
     <h3>Picture src</h3>
     <div className="imagesrc"><img src={fleur} className="App-fleur" alt="fleur" /></div>
     <h3>Video</h3>
      <Video/>
    <Footer/>
    </div>
  );
}

export default App;
