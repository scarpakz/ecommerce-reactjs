import { 
    Container,
    Row,
    Col
} from "react-bootstrap"

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
            </Container>
        </>
    )
}