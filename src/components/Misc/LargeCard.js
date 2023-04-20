import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const LargeCard = () => {
  return (
    <Card style={{ border: "0px solid" }} >
    
    <Card.Body style={{width:'500px'}} className="theme-background  h-80 rounded-3xl">
     
      <Card.Text>
        
      </Card.Text>
      
    </Card.Body>
  </Card>
  )
}

export default LargeCard