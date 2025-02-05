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
                    <hr/>
                    <Row>
                        <CategoryFilter>
                            <CategoryTitle>Women</CategoryTitle>
                            <CustomDropdown />
                        </CategoryFilter>
                    </Row>
                    <hr/>
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
const CategoryFilter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`