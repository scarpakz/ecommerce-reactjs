import { 
    Container,
    Row,
    Col
} from "react-bootstrap"

export const Header = () => {
    return (
        <>
            <div className='c-header-bg'>
                <Container>
                    <Row>
                        <Col className="c-header-description">
                            <h1 className="c-header1">UP TO 60% OFF</h1>
                            <h2 className="c-header2">TOP STYLES ARE SELLING FAST</h2>
                            <h2 className="c-header2">SHOP BLACK FRIDAY FAVES BEFORE THEY’RE GONE</h2>
                            <div className="c-header-shop-btn">
                                <button>SHOP WOMEN</button>
                                <button>SHOP MEN</button>
                                <button>SHOP KIDS</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}