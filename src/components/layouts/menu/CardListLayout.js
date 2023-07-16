import { Row, Col, Card } from "react-bootstrap";

export default function CardListLayout(props) {
    return (
        <>
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto my-4 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            <Row lg={4} md={3} xs={2}>
                {props.listItem.map((item, index) => {
                    return (
                        <Col key={index} className="my-2">
                            <a href={item.url} style={{ textDecoration: 'none' }}>
                                <Card bg='light' border="light" className="card-shadow text-dark-custom">
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
        </>
    );
}