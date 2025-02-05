import { 
    Container,
    Row,
    Col
} from "react-bootstrap"
import styled from "styled-components"
import { Breadcrumbs } from "../../components/Breadcrumbs"

export const WomenPage = () => {
    return (
        <>
            <WomenContainer>
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumbs 
                                links={[
                                       { name: 'Home', href: '/' },
                                       { name: 'Women', href: '/women' },
                                   ]}
                            />
                        </Col>
                    </Row>
                </Container>

            </WomenContainer>
        </>
    )
}

const WomenContainer = styled.div`
    padding-top: 100px;
`