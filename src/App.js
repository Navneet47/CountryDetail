import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { useState } from "react";
function App() {
  const [isDark,setDark] = useState(true);
  const [addClass,setClass] = useState({
          headerClass:"header-div",
          mainClass:"main-div-one",
          footerClass:"footer-div",
          mainSectionOneClass:"section-one",
          countriesChildClass:"child-div",
          mainSectionThreeClass:"section-three",
          mainSectionFourClass:"mainSectionChildDiv",
          divClass:"divStyle",
          btnClass:"darkMode-btn",
          bgTheme:"light",
          textTheme:''
        });
        function setDarkMode(){
          setDark(!isDark);
          if(isDark){
            setClass({
              headerClass:"header-div dark-header",
              mainClass:"main-div-one dark-main",
          footerClass:"footer-div dark-footer",
          mainSectionOneClass:"section-one dark-section-one",
          countriesChildClass:"child-div dark-child-div",
          mainSectionThreeClass:"section-three section-three-dark",
          mainSectionFourClass:"mainSectionChildDiv mainSectionChildDiv-dark",
          divClass:"divStyle divStyle-dark",
          btnClass:"darkMode-btn lightMode-btn",
          bgTheme:"dark",
          textTheme:'white'
          })
      }
    if(!isDark){
        setClass({
          headerClass:"header-div",
          mainClass:"main-div-one",
          footerClass:"footer-div",
          mainSectionOneClass:"section-one",
          countriesChildClass:"child-div",
          mainSectionThreeClass:"section-three",
          mainSectionFourClass:"mainSectionChildDiv",
          divClass:"divStyle",  
          btnClass:"darkMode-btn",
          bgTheme:"light",
          textTheme:''
        })
      }
    }
  return (
    <div className="App">
      <Main func={setDarkMode} class={addClass} />
      <Footer class={addClass} />
    </div>
  );
}

export default App;
