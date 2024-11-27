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
import { MenuIcon } from "../assets/icon/MenuIcon"

export const NavBar = () => {
    return (
        <>
            <nav className="c-navbar">
                <Container>
                    <Row>
                        <Col className="c-left-column">
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
                                        <img src={heart} alt="heart"/>
                                    </a>
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
                        <Col className="c-right-column-mobile">
                            <button>
                                <MenuIcon />
                            </button>
                            {/* <div className="c-cart-links">
                                <div className="c-search">
                                    <img src={search}/>
                                    <input type="text" name="search" placeholder="SEARCH"/>
                                </div>
                                <div>
                                    <a className="c-nav-cart-link">
                                        <img src={heart} alt="heart"/>
                                    </a>
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
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    )
}