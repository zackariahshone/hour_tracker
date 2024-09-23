import React, { Fragment, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Calendar from 'react-calendar';


const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const datesEntered = [];

export default (props) => {
    const [value, onChange] = useState(new Date());
    const [signedIn, setSignedIn] = useState();
    const [employee, setEmployee] = useState('');
    const [hoursWorked, setHoursWorked] = useState(0);
    const [totalHours, setTotalHours ] = useState(0);
    console.log(datesEntered);
    
    return (
        <Fragment>
        {  !true ?  <Container>
            <input
                onChange={(e=> {
                    setEmployee(e.target.value)
                    })}
            />
            <Button
                onClick={(e)=>setSignedIn(true)}
            > Submit </Button>
        </Container> 
        :
        <Fragment>

        <Container>
            <Container>
                <h1> {employee} enter times for the week</h1>
            </Container>
            <Row>
                {
                    <Fragment>

                        <Col>
                            {value.toDateString()}
                        </Col>
                        <Col style={{ "padding-top": '10px' }}>
                            <input
                                onChange={(e)=>{
                                    setHoursWorked(e.target.value);
                                }}
                             />
                        </Col>
                        <Col>
                            <Button
                                onClick={()=>{
                                    datesEntered.push({[value.toDateString()]:hoursWorked});
                                    setTotalHours(Number(totalHours) + Number(hoursWorked));
                                }}
                            > Submit </Button>
                        </Col>
                       
                    </Fragment>
                }
            </Row>
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
        </Container>
        <Container>
            <Row>
                {datesEntered.map(date=>{
                    console.log(date);
                    const nextDate = Object.entries(date);
                    return(
                    <Col>
                        {nextDate[0][0]}  Hours worked: {nextDate[0][1]}
                    </Col>
                    )
                })}
            </Row>
            
            <Row>
                <b>Total Hours Worked {totalHours} </b>
            </Row>
        </Container>
        </Fragment>
        
        }
        </Fragment>
    )
}
