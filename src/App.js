// import logo from './logo.svg';
import './App.css';
import Gpt from './chat/Gpt';
import Container from './day01/props/Container';
import Colors from './day01/state/Colors';
import Count from './day01/state/Count';
import Name from './day01/state/Name';
import Sound from './day01/state/Sound';
import FoodContainer from './day02/map/basic/FoodContainer';
import SportsContainer from './day02/map/basic/SportsContainer';
import User from './day02/map/expert/User';
import UserContainer from './day02/map/expert/UserContainer';
import Check from './day02/ref/basic/Check';
import NameRef from './day02/ref/basic/NameRef';
import Validation from './day02/ref/basic/Validation';
import CheckMessege from './day02/ref/expert/CheckMessege';
import ExpertFood from './day02/ref/expert/ExpertFood';

function App() {
  return (
    <>
      {/* <Container /> */}
      {/* <Count /> */}
      {/* <Sound /> */}
      {/* <Name/> */}
      {/* <Colors/> */}
      {/* <SportsContainer/> */}
      {/* <FoodContainer /> */}
     {/* <UserContainer/> */}
     {/* <NameRef /> */}
     {/* <Validation/> */}
     {/* <Check/> */}
     {/* <ExpertFood/> */}
     <CheckMessege/>
     {/* <Gpt/> */}
    </>
  );
}

export default App;
