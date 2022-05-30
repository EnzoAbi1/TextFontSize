import './App.css';
import { useState } from 'react';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'; 
import { Button , Container, Header, Icon, Input, Segment } from 'semantic-ui-react';
function App() {
const [text,setText]=useState(null);
const [druck,setDruck]=useState(false);
let [fontsize, setFontSize] = useState(20);
function getText(val) {
  setText(val.target.value)
  setDruck(false);
  
  }
  return (
    
  <div>
       <Header color={'blue'} size={'huge'} >
          Ensar's Font Size Changer
        </Header> 
     <div class="ui action input" className="input1" >
        <Segment secondary>
         Current Font Size  <Input label={fontsize} size={'small'} placeholder="Enter the Text" type='text'  onChange={getText} />
        <Button color={'twitter'} size={'mini'} onClick={() => setDruck(true)} icon><Icon name={'dropdown'}/>Drop the Text</Button>
        </Segment>
     </div>
     <div className='tryout'> 
        <Button   color={'green'} size={'normal'} onClick={() => {setFontSize(fontsize + 5)}} icon><Icon name={'add'}/></Button>
        <Button  id='btn2' color={'red'} size={'normal'} onClick={() => {setFontSize(fontsize - 5)}} icon><Icon name={'minus'}/></Button>
        <Button  onClick={() => {setFontSize(fontsize = 20 )}} icon><Icon name={'font'}/></Button> 
     </div>
    { druck ?   
      <Container text-align={'center'}   className="TextHolder" style={{fontSize : fontsize}}> 
        {text} 
      </Container>  
       :null }  
  </div>

  );
}

export default App;
