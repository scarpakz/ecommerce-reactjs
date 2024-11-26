import { 
    Container,
    Row,
    Col
} from "react-bootstrap"
import brand from '../assets/brand.png'

export const NavBar = () => {
    return (
        <>
            <nav className="c-navbar">
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li className="c-brand">
                                    <a>
                                        <img src={brand} alt="brand"/>
                                    </a>
                                </li>
                                <li><a>Women</a></li>
                                <li><a>Men</a></li>
                                <li><a>Kids</a></li>
                                <li><a>Sport</a></li>
                                <li><a>Sale</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    )
}