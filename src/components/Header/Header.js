import styled from 'styled-components'
import logo from './logo.png';

// styled elements
const Head = styled.div
` display:flex;
  justify-content:space-between;
  height:70px;
  background:#b3d1ff;
  width:100vw;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;
const Image = styled.img
`
  height:50px;
  margin: 10px 30px;
`;
const Button = styled.button`
  display:inline-block;
  cursor:pointer;
  height:40px;
  margin: 15px ;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  &:hover {
  color: grey; 
  border: 2px solid grey;
  }
  &:active{
  color:red;
  border: 2px solid red;
  }
`;


function Carousel(props) {

  let button;

  // if logged in show logout else login
  if(!props.loginflag){
         button = <Button onClick={props.Loginact}>LOGIN</Button>
     }
     else{
        button =  <Button onClick={props.Logoutact}>LOGOUT</Button>
     }

  return (
      <div >
        <div>{props.loginflag}</div>  
        <Head>
        <div>
         <Image src ={logo} alt = "logo" />  
        </div>
        <div> 
          {button}
          <div> {props.loginflag}</div>
        </div>
        </Head>
      </div>
  );
}
export default Carousel;
