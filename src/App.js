import React,{useEffect,useState} from 'react';
import styled from 'styled-components'
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';


const Div = styled.div`
  background-color: #282c34;

`
const Button = styled.button`
background:white;
color:black;

`

const Img = styled.img`
object-fit:cover;
width:45vw;
margin:5%;
transition: all .2s ease-in-out;
:hover{
    transform: scale(1.1);
}

`
function App() {
  const [image,setImage] = useState("")
  const [submitted,setSubmitted] = useState(false);
  const SubmitHandler = () => {
    return setSubmitted(true)
  }
  const changeHandler = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    return setImage(e.target.value)
  }
useEffect(()=>{
  let net;



  if(submitted === true){
    console.log("yeet")
    async function app() {
      console.log('Loading mobilenet..');
    
      // Load the model.
      net = await mobilenet.load();
    
      console.log('Successfully loaded model');
    
      // Make a prediction through the model on our image.
      const imgEl = document.getElementById('img');
      const result = await net.classify(imgEl);
      console.log(result);
    }
    app();
  }
  

},[])
  return (
    <Div>
          <form >

            <input onChange={changeHandler}/>
          </form>
          <Button onClick={SubmitHandler}>
            Submit Image
          </Button>
          <Img id ="img" crossorigin src={image}/>
    </Div>
  );
}

export default App;
