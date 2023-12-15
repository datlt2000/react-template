import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Card, Container, ToggleButton } from "react-bootstrap";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default function CardListSwitcherLayout(props) {
    const [radioValue, setRadioValue] = useState(1);
    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        const data = props.getData(props['tabs'][radioValue]);
        setListItem(data);
    }, [radioValue, props]);
    return (
        <Container>
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto my-4 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            <div className="d-flex justify-content-center my-4">
                <ToggleButtonGroup type='radio' name="menu" style={{ border: '3px var(--bs-border-style) var(--bs-border-color)' }}
                    className="mx-auto rounded-pill p-2" defaultValue={0}>
                    {props.tabs.map((radio, idx) => (
                        <ToggleButton
                            className="px-4 py-2 rounded-pill border-0 fw-bold"
                            key={idx}
                            id={`menu-${idx}`}
                            type="radio"
                            variant='outline-primary'
                            value={idx}
                            checked={radioValue === idx}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <Row lg={4} md={3} xs={2}>
                {listItem.map((item, index) => {
                    return (
                        <Col key={index} className="my-2">
                            <a href={item.url} style={{ textDecoration: 'none' }}>
                                <Card className="card-shadow shadow-sm text-dark-custom">
                                    <div className="hover-zoom">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text style={{ fontWeight: 400 }} className="opacity-75">
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    )
                })
                }
            </Row>
        </Container>
    );
}