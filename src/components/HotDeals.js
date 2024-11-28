import { 
    Container,
    Row,
    Col
} from "react-bootstrap"
import shoes from '../assets/hot-deals/shoes.png'
import kids from '../assets/hot-deals/kids.png'
import woman from '../assets/hot-deals/woman.png'

export const HotDeals = () => {
    return (
        <>
            <Container className="c-hotdeals">
                <Row>
                    <Col className="c-banner-title">
                        <h1>HOT DEALS RIGHT NOW</h1>
                        <h4>DEALS TOO GOOD TO MISS</h4>
                    </Col>
                </Row>
                <Row className="c-hotdeals-responsive">
                    <Col>
                        <div className="c-card-relative">
                            <img src={shoes} alt="shoes"/>
                            <span>SHOES UNDER $75</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="c-card-relative">
                            <img src={woman} alt="woman"/>
                            <span>FALL DISCOUNTS</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="c-card-relative">
                            <img src={kids} alt="kids"/>
                            <span>KIDS WEAR</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}