import React, { useState } from 'react';
import styled from 'styled-components';

// styled elements
const Blur = styled.div `
  position:absolute;
  height:100%;
  width:100%;
  background:white;
  opacity:0.7;
  top:0;
  left:0;
`;
const Mmodal = styled.div
`
  position:absolute;
  height:70%;
  width:70%;
  background:#eee;
  border:3px solid white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity:1;
  text-align: center;
`;
const Grid = styled.div `
  display: grid;
  place-items: center;
`
const Button = styled.button `
  display:inline-block;
  cursor:pointer;
  height:40px;
  font-size: 1em;
  margin: 1em;
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
const Image = styled.img `
  height:400px;
  width:600px;
`;
const Label = styled.div `
  display:block;
  height:40px;
  margin-top:20px;
  font-size:20px;
`;
const Input = styled.input `
  display:block;
  width:300px;
  height:40px;
`

function Modal(props) {
    // hook -useState for declaring and initialising state.(with setter funtion).
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    function handleName(event) {
        setName(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }
    //function for sending credentials to the backend.
    function onTrigger() {
        props.handlesub(name, password);
    }

    return (
        <div>
            <Blur>
            </Blur>
          <Mmodal>
              <Grid>
              <Label>
                Name
              </Label>
                <Input type="text" value={name} onChange={handleName} />
              <Label>
                Password
              </Label>
                <Input type="password" value={password} onChange={handlePassword} />
              <div>
              <Button type="submit" value="Submit" onClick={onTrigger} >Submit</Button> 
              <Button type="submit" value="Submit" onClick={props.close} >cancel</Button> 
              </div>
            </Grid>
          </Mmodal>
     </div>
    );
}
export default Modal;