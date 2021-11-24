import Header from "./components/Header";
import Background from './images/bg-main-desktop.png';
import SectionBg from './images/illustration-app.png'

function App() {
  return (
    <div className="" style={mainBg}>
      <Header />
      <img src={SectionBg} alt="section image" />
    </div>
  );
}

const mainBg = {
  width: "100%",
  height: "100vh",
  backgroundImage: "url(" + Background + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};


export default App;
