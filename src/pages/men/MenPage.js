import { 
    Container,
    Row,
    Col
} from "react-bootstrap"
import styled from "styled-components"
import { Breadcrumbs } from "../../components/Breadcrumbs"

export const MenPage = () => {
    return (
        <>
            <CategoryContainer>
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumbs 
                                links={[
                                       { name: 'Home', href: '/' },
                                       { name: 'Men', href: '/men' },
                                   ]}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <CategoryTitle>Men</CategoryTitle>
                    </Row>
                </Container>
            </CategoryContainer>
        </>
    )
}

const CategoryContainer = styled.div`
    padding-top: 100px;
`
const CategoryTitle = styled.h1`
    color: #222;
    text-transform: uppercase;
    font-weight: 600;
`