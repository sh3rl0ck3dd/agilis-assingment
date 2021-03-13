
import styled from 'styled-components'


const Ccarousel = styled.div
`display:flex;
 justify-content:center;
 margin-top:50px;
 
 width:80vw;

 @media (max-width: 750px) {
   margin-top:30px;
 
 	width:50vw;
    }


`;
const Button = styled.button`
  display:inline-block;
  cursor:pointer;
	height:400px;

  font-size: 60px;
  margin: 0px 20px;
  padding: auto;
  border: 2px solid black;
  border-radius: 3px;
  &:hover {
    color: red; 
  border: 2px solid red;

  }

  @media (max-width: 750px) {
	height:260px;
 
    }

`;
const Image=styled.img
`
height:400px;
width:600px;

@media (max-width: 750px) {
  height:260px;
width:390px;
    }

`;

function Carousel(props) {
  return (
    <Ccarousel >
     <div><Button onClick={props.prev}>&#x2190;</Button></div>
     <div><Image src ={props.picsArray[props.index]} alt = "logo"/>	</div>
     <div> <Button onClick={props.next}>&#x2192;</Button></div>
     
    </Ccarousel>
  );
}

export default Carousel;
