import { useState } from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { 
    Container,
    Row,
    Col
} from "react-bootstrap"
import brand from '../assets/brand.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import user from '../assets/user.png'
import { MenuIcon } from "../icon/MenuIcon"


export const NavBar = () => {

    const [isShowSideBar, setIsShowSideBar] = useState(false)

    const sideBarToggle = () => {
        setIsShowSideBar((prevState) => !prevState)
    }

    return (
        <>
          {isShowSideBar && (
            <div className="left-nav">
              <NavList>
                <Brand>
                  <Link to="/">
                    <img src={brand} alt="brand" />
                  </Link>
                </Brand>
                <NavItem><Link to="/women">Women</Link></NavItem>
                <NavItem><Link to="/men">Men</Link></NavItem>
                <NavItem><Link to="/kids">Kids</Link></NavItem>
                <NavItem><Link to="/sport">Sport</Link></NavItem>
                <NavItem><Link to="/sale">Sale</Link></NavItem>
              </NavList>
            </div>
            )}
          <Navbar>
            <Container>
              <Row>
                <Col className="c-right-column-mobile">
                  <button onClick={sideBarToggle}>
                    <MenuIcon />
                  </button>
                </Col>
                <Col className="c-left-column">
                  <Link to="/">
                    <img src={brand} alt="brand" className="brand-responsive" />
                  </Link>
                  <NavList>
                    <Brand>
                      <Link to="/">
                        <img src={brand} alt="brand" />
                      </Link>
                    </Brand>
                    <NavItem><Link to="/women">Women</Link></NavItem>
                    <NavItem><Link to="/men">Men</Link></NavItem>
                    <NavItem><Link to="/kids">Kids</Link></NavItem>
                    <NavItem><Link to="/sport">Sport</Link></NavItem>
                    <NavItem><Link to="/sale">Sale</Link></NavItem>
                  </NavList>
                </Col>
                <RightColumn>
                  <CartLinks>
                    <SearchContainer>
                      <img src={search} alt="search" />
                      <input type="text" name="search" placeholder="SEARCH" />
                    </SearchContainer>
                    <NavCartLink href="#">
                      <img src={cart} alt="cart" />
                    </NavCartLink>
                    <NavCartLink href="#">
                      <img src={user} alt="user" />
                    </NavCartLink>
                  </CartLinks>
                </RightColumn>
              </Row>
            </Container>
          </Navbar>
        </>
      );
}

const Navbar = styled.nav`
  background-color: #272727;
  color: #F4E3D2;
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NavItem = styled.li`
  padding: 20px 10px;

  a {
    font-weight: bold;
    color: inherit;
    text-decoration: none;
  }
`;

const Brand = styled.li`
  padding-bottom: 5px;
  padding-top: 0 !important;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    margin-right: 20px;
    background-color: #272727;
    border: solid 1px #fff;
    color: #F4E3D2;
    font-size: 14px;
    padding: 5px 5px 5px 40px;
  }

  img {
    position: absolute;
    padding-left: 15px;
  }
`;

const RightColumn = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CartLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavCartLink = styled.a`
  padding: 0 10px;
`;