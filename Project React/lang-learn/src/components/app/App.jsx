import React from 'react';
import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import LogIn from '../LogIn/LogIn.jsx';
import Main from '../Main/Main.jsx';
import SelectionLang from '../SelectionLang/SelectionLang.jsx';
import DescriptionTask from '../DescriptionTask/DescriptionTask.jsx';
import Footer from '../Footer/Footer.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <Search/>
        <LogIn/>
      </Header>
      <Main>
        <SelectionLang/>
        <DescriptionTask/>
      </Main>
      <Footer>
        <Navbar/>
      </Footer>
    </div>
  );
}

export default App;
