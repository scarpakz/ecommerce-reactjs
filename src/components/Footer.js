import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import facebook from '../assets/facebook.png'
import bing from '../assets/bing.png'
import medium from '../assets/medium.png'
import pinterest from '../assets/pinterest.png'
import x from '../assets/x.png'

export const Footer = () => {
    return (
        <>
            <div className="c-footer">
                <Container>
                    <Row>
                        <Col>
                            <div className='c-footer-nav-links'>
                                <span>SUPPORT</span>
                                <ul>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Shipping and Delivery</a></li>
                                    <li><a href="">Terms & Conditions</a></li>
                                    <li><a href="">Transparency in Supply Chain</a></li>
                                    <li><a href="">Service Discount</a></li>
                                    <li><a href="">Refer a Friend</a></li>
                                    <li><a href="">Cookie Settings</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className='c-footer-nav-links'>
                                <span>ABOUT</span>
                                <ul>
                                    <li><a href="">Company</a></li>
                                    <li><a href="">Corporate News</a></li>
                                    <li><a href="">Press Center</a></li>
                                    <li><a href="">#REFORM</a></li>
                                    <li><a href="">Investors</a></li>
                                    <li><a href="">Sustainability</a></li>
                                    <li><a href="">Careers</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='c-footer-social-media'>
                            <div>
                                <span>FOLLOW US ON SOCIAL MEDIA</span>
                                <ul className='c-footer-ul'>
                                    <li><img src={facebook} alt='facebook'/></li>
                                    <li><img src={medium} alt='medium'/></li>
                                    <li><img src={bing} alt='bing'/></li>
                                    <li><img src={pinterest} alt='pinterest'/></li>
                                    <li><img src={x} alt='x'/></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}