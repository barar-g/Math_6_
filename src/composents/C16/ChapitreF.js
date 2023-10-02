import React, { useState } from 'react';
import { Button, Collapse, Row, Col } from 'reactstrap';
import QcmFraction from './QcmFraction'
import Chap13 from './Chap13';
import teacherImage from '../images/Prof1.png'



function MyComponent(Props ) {
  const [isOpenRappelle, setIsOpenRappelle] = useState(false);
  const [isOpenActivite, setIsOpenActivite] = useState(true);
  const [isOpenQCM, setIsOpenQCM] = useState(false);

  return (
    <div className="container mt-5">
      <Row className="justify-content-center">
      <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
        <Col md="3" className="mb-4">
          <Button color="primary" onClick={() => setIsOpenRappelle(!isOpenRappelle)} block>Rappelle</Button>
          <Collapse isOpen={isOpenRappelle} className="mt-3">
            <div className="border p-3 rounded"></div>
          </Collapse>
        </Col>
      
        <Col md="3" className="mb-4">
          <Button color="primary" onClick={() => setIsOpenActivite(!isOpenActivite)} block>Activité</Button>
          <Collapse isOpen={isOpenActivite} className="mt-3">
            <div className="border p-3 rounded"><div><br/>
            <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
            <br/><br/>
            <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
            <br/></div> <Chap13/></div>
          </Collapse>
        </Col>
        
        <Col md="3" className="mb-4">
          <Button color="primary" onClick={() => setIsOpenQCM(!isOpenQCM)} block>QCM</Button>
          <Collapse isOpen={isOpenQCM} className="mt-3">
            <div className="border p-3 rounded"><QcmFraction/></div>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
}

export default MyComponent;