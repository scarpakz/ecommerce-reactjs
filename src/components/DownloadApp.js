import { 
    Container,
    Row,
    Col
} from "react-bootstrap"
import phone from '../assets/phone.png'
import brandlg from '../assets/brandlg.png'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'

export const DownloadApp = () => {
    return (
        <>
            <Container className="c-downloadapp">
                <Row>
                    <Col className="c-banner-title">
                        <h1>SHOPPING MADE EASY</h1>
                        <h4>FIND WHAT WORKS FOR YOU</h4>
                    </Col>
                </Row>
                <Row className="c-downloadapp-row">
                    <Col>
                        <div className="c-downloadapp-left-column">
                            <div>
                                <img src={brandlg} alt="brandlg"/>
                                <h1>DOWNLOAD OUR APP</h1>
                                <p>
                                Download our app today and unlock a world of convenience
                                at your fingertips! Whether you’re looking for exclusive deals,
                                personalized recommendations, or seamless access to all our 
                                services, our app has you covered. Stay connected, enjoy faster
                                navigation, and never miss out on the latest updates and features.
                                </p>
                            </div>
                            <div className="c-downloadapp-links">
                                <img src={googleplay} alt="googleplay" className="c-download-phone"/>
                                <img src={appstore} alt="appstore" className="c-download-phone"/>
                            </div>
                        </div>
                    </Col>
                    <Col className="c-phone-content">
                        <img src={phone} alt="phone" className="c-download-phone"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}