import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import React from "react";

function App() {
  const [isOpenSidebar, setOpenSidebar] = React.useState(false);
  const openSidebar = (isOpen) => {
    setOpenSidebar(isOpen);
  };
  return (
    <div className="App">
      <Header openMenu={openSidebar} />
      <Sidebar isOpen={isOpenSidebar} />
      <div className="content">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
