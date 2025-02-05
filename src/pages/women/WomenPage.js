import { 
    Container,
    Row,
    Col
} from "react-bootstrap"
import styled from "styled-components"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import {CustomDropdown} from "../../components/CustomDropdown"

export const WomenPage = () => {
    return (
        <>
            <CategoryContainer>
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
                    <Row>
                        <CategoryTitle>Women</CategoryTitle>
                        <CustomDropdown />
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