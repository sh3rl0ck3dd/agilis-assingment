

import styled from 'styled-components'
import logo from './logo.png';
const Head = styled.div
`display:flex;
 justify-content:space-between;
 height:70px;
 background:lightblue;
 width:100vw;

`;
const Button = styled.button`
  display:inline-block;
  cursor:pointer;
  height:40px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

function Carousel(props) {
	let button;
	if(!props.loginflag){
     	button = <Button onClick={props.Loginact}>LOGIN</Button>
     }
     else{
        button =	<Button onClick={props.Logoutact}>LOGOUT</Button>
     }
  return (
    <div >
    <div>{props.loginflag}</div>	
     <Head>
     <div>
     	<img src ={logo} alt = "logo"/>	
     </div>
     	<div>	
     	{button}
     	<div>	{props.loginflag}</div>
     	</div>

     </Head>
    </div>
  );
}

export default Carousel;
