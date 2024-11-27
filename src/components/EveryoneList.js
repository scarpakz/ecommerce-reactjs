import { 
    Container,
    Row,
    Col
} from "react-bootstrap"
import wintershoes from '../assets/wintershoes.png'
import womandress from '../assets/womandress.png'

export const EveryoneList = () => {
    return (
        <>
            <Container className="c-everyonelist">
                <Row>
                    <Col className="c-banner-title">
                        <h1>ON EVERYONE'S LIST</h1>
                        <h4>OUR TOP CHOICES THIS YEAR</h4>
                    </Col>
                </Row>
                <Row className="c-everyonelist-links">
                    <Col className="c-everyonelist-item">
                        <img src={wintershoes}/>
                        <span>WINTER CLASSICS</span>
                    </Col>
                    <Col className="c-everyonelist-item">
                        <img src={womandress}/>
                        <span>FAVORITES</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}