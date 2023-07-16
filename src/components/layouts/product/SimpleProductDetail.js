import { useState } from "react";
import { Row, Col, Button, ButtonGroup, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import ThumbsSliderVertical from "../slide/ThumbsSlider";

export default function SimpleProductDetail(props) {
    const [size, setSize] = useState('l');
    const [number, setNumber] = useState(1);
    const handleChangeNumber = (val) => {
        var newNumber = number + val;
        if (newNumber >= 1)
            setNumber(number + val);
    }
    const handleChangeSize = (val) => { setSize(val); }
    return (
        <Row className={props.reverse ? "flex-row-reverse" : ""}>
            <Col xs={1} md={6} className="d-flex text-dark">
                <div className="ps-5 pt-4">
                    <h1 className="fw-bold">
                        {/* {props.title} */}
                        Áo dài truyền thống
                    </h1>
                    <hr style={{ width: '100%' }} />
                    <h4 className="fw-bold">
                        $10
                    </h4>
                    <div className="my-5">
                        <span className="fw-normal">Size</span>
                        <ToggleButtonGroup type="radio" value={size} name="size" onChange={handleChangeSize}>
                            <ToggleButton id="size-s" value="s" className="ms-3" style={{ borderRadius: '0px' }} variant="outline-dark" >S</ToggleButton>
                            <ToggleButton id="size-m" value="m" className="ms-2" variant="outline-dark">M</ToggleButton>
                            <ToggleButton id="size-l" value="l" className="ms-2" variant="outline-dark">L</ToggleButton>
                            <ToggleButton id="size-xl" value="xl" className="ms-2" style={{ borderRadius: '0px' }} variant="outline-dark">XL</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div className="my-5">
                        <span className="fw-normal me-3">Số lượng</span>
                        <ButtonGroup >
                            <Button variant="outline-dark" onClick={() => handleChangeNumber(-1)}>-</Button>
                            <Button variant="outline-dark" disabled>{number}</Button>
                            <Button variant="outline-dark" onClick={() => handleChangeNumber(1)}>+</Button>
                        </ButtonGroup>
                    </div>
                    <div className="my-5">
                        <Button variant="dark" size="lg" className="px-5">
                            Mua Hàng
                        </Button>
                    </div>
                    <div>
                        <div className="fw-bold text-decoration-underline">
                            Đặc điểm nổi bật
                        </div>
                        <div className='d-block mt-3'>
                            <p className="text-start fw-normal">
                                {/* {props.description} */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={1} md={6} className="d-flex align-items-center pt-4">
                <div className="px-4 w-100">
                    <ThumbsSliderVertical slides={props.images} />
                </div>
            </Col>
        </Row>
    );
}