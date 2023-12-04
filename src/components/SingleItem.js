import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const SingleItem = ({ item, index, checkedState, handleOnChange }) => {
  const { text, icon } = item;

  return (
    <Col>
      <Card className='shadow bg-body-tertiary'>
        <Row xs={1} md={1} className='g-3'>
          <Col xs={4} md={4}>
            <div className='card__icon'>
              <div className='card__icon__container'>{icon}</div>
            </div>
          </Col>
          <Col xs={8} md={8}>
            <Card.Body>
              <Card.Title>
                <h5 className='card__text'>{text}</h5>
              </Card.Title>
              <Form>
                {/* <input
                  type='checkbox'
                  onChange={() => handleOnChange(index)}
                  checked={checkedState[index]}
                /> */}
                {/* <div class='switch btn on btn-primary' style='width: 100px;'>
                  <div class='switch-group'>
                    <span class='switch-on btn btn-primary'>On</span>
                    <span class='switch-off btn btn-light'>Off</span>
                    <span class='switch-handle btn btn-light'></span>
                  </div>
                </div> */}
                <Form.Check // prettier-ignore
                  type='switch'
                  id='custom-switch'
                  // label='Check this switch'
                  onChange={() => handleOnChange(index)}
                  checked={checkedState[index]}
                />
                {/* <BootstrapSwitchButton
                  width={100}
                  // id={`custom-checkbox-${index}`}
                  // name={text}
                  // value={text}
                  onChange={() => handleOnChange(index)}
                  checked={checkedState[index]}
                /> */}
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default SingleItem;
// const SingleItem = ({ item }) => {
//   const [checkedState, setCheckedState] = useState(
//     new Array(allItems.length).fill(false)
//   );
//   const { id, text, icon } = item;
//   return (
//     <Col>
//       <Card className='shadow'>
//         <Row xs={1} md={1} className='g-3'>
//           <Col xs={4} md={4}>
//             {/* <Card.Body> */}
//             {/* <Card.Text>Card Icon</Card.Text> */}
//             <div className='card__icon'>
//               <div className='card__icon__container'>{icon}</div>
//             </div>
//             {/* </Card.Body> */}
//           </Col>
//           <Col xs={8} md={8}>
//             <Card.Body>
//               <Card.Title>
//                 <h5 className='card__text'>{text}</h5>
//               </Card.Title>
//               <Form>
//                 <BootstrapSwitchButton checked={checkedState} width={100} />
//                 {/* <BootstrapSwitchButton
//                   checked={false}
//                   onlabel='Admin User'
//                   offlabel='Regular User'
//                   onChange={(checked: boolean) => {
//                     this.setState({ isUserAdmin: checked });
//                   }}
//                 /> */}

//                 {/* <Form.Check // prettier-ignore
//                   type='switch'
//                   id='custom-switch'

//                   // label='<i class='fa fa-unlock'></i>'
//                 /> */}
//               </Form>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>
//     </Col>
//   );
// };
