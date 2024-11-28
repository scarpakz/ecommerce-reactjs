import { useState } from "react"
import { 
    Container,
    Row,
    Col
} from "react-bootstrap"
import brand from '../assets/brand.png'
import search from '../assets/search.png'
import heart from '../assets/heart.png'
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
            <nav className="c-navbar">
                <Container>
                    <Row className="row-navbar">
                        <Col className="c-right-column-mobile">
                            <button onClick={sideBarToggle}>
                                <MenuIcon />
                            </button>
                        </Col>
                        <Col className="c-left-column">
                            <a>
                                <img src={brand} alt="brand" className="brand-responsive"/>
                            </a>
                            <ul className="navlinks">
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
                        <Col className="c-right-column">
                            <div className="c-cart-links">
                                <div className="c-search">
                                    <img src={search}/>
                                    <input type="text" name="search" placeholder="SEARCH"/>
                                </div>
                                <div>
                                    <a className="c-nav-cart-link">
                                        <img src={cart} alt="cart"/>
                                    </a>
                                </div>
                                <div>
                                    <a className="c-nav-cart-link">
                                        <img src={user} alt="user"/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    )
}