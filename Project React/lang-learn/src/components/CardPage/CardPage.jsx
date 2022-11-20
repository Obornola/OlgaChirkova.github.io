import React from 'react';
import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import LogIn from '../LogIn/LogIn.jsx';
import Main from '../Main/Main.jsx';
import Help from '../Help/Help.jsx';
import CardItem from '../CardItem/CardItem.jsx';
import Timer from '../Timer/Timer.jsx';
import Button from '../Button/Button.jsx';
import Footer from '../Footer/Footer.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './style/App.css';

function CardPage() {
  return (
    <div className='cardPage'>
      <Header>
        <Search/>
        <LogIn/>
      </Header>
      <Main>
        <Help/>
        <CardItem/>
        <Timer/>
        <Button/>
      </Main>
      <Footer>
        <Navbar/>
      </Footer>
    </div>
  )
}

export default CardPage
