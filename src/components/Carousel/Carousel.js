import styled from 'styled-components'

// styled elements
const Ccarousel = styled.div
`
  display:flex;
  justify-content:center;
  margin-top:50px;
  width:80vw;
  @media (max-width: 750px) {
  margin-top:30px;
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
  color: grey; 
  border: 2px solid grey;
  }
  &:active{
  color:red;
  border: 2px solid red;
  }
  @media (max-width: 750px) {
  height:260px;
  font-size: 40px;
  margin: 0px 10px;
  }
  @media (max-width: 600px) {
  height:200px;
  margin: 0px 20px;
  font-size: 20px;
  margin: 0px 2px;
  }
`;
const Image=styled.img
`
  height:400px;
  width:600px;
  @media (max-width: 750px) {
  height:260px;
  width:360px;
  }
  @media (max-width: 600px) {
  height:200px;
  width:300px;
  }
`;


function Carousel(props) {

  return (
    <Ccarousel >
     <div><Button onClick={props.prev}>&#x2190;</Button></div>
     <div><Image src ={props.picsArray[props.index]} alt = "logo"/></div>
     <div> <Button onClick={props.next}>&#x2192;</Button></div>
    </Ccarousel>
  );
}
export default Carousel;
