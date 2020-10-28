import logo from './logo.svg';
import borat from './image/borat.jpg';
import flag from './image/flag2.webp';
import mountains from './image/mountains.jpg';

import './App.css';
import styled from 'styled-components';


function App() {
  return (
    <Wrapper>
      <Flex>
        <BoratDiv url={borat}/>
        <MountainsDiv url={mountains}/>
      </Flex>
      <Flex>
        <FlagDiv url={flag}/>
        <LogoDiv url={logo}/>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;

  align-items: center;
  border: 3px solid red;
`
const Flex = styled.div`
  display: flex;
  border: 10px solid pink;
  align-items: center;
`
const BoratDiv = styled.div`
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  height: 200px;
  width: 300px;
  border: 3px solid blue;
  // flex-grow: 1;
`
const MountainsDiv = styled.div`
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  height: 200px;
  width: 200px;
  border: 3px solid green;
  // flex-shrink: 3;

`
const FlagDiv = styled.div`
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  height: 300px;
  width: 200px;
  border: 3px solid magenta;
`
const LogoDiv = styled.div`
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  height: 50px;
  width: 50px;
  border: 3px solid orange;
`
export default App;
