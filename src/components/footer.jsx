import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <div className="footer_bg text-center">
                <div className="container p-5">
                    <h1 className='mb-4 fw-bold'>NasaAPI.Com</h1> 
                        <p className='fw-bold'>Contact us via social media:</p>
                        <a
                            className="btn btn_image rounded-5 text-white m-1"
                            style={{backgroundColor: "#6a6868"}}
                        >
                            <FaFacebookF/>
                        </a>

                        <a
                            className="btn btn_image rounded-5 text-white m-1"
                            style={{backgroundColor: "#6a6868"}}
                        >
                            <FaInstagram/>
                        </a>

                        <a
                            className="btn btn_image rounded-5 text-white m-1"
                            style={{backgroundColor: "#6a6868"}}
                        >
                            <FaTwitter/>
                        </a>

                        <a
                            className="btn btn_image rounded-5 text-white m-1"
                            style={{backgroundColor: "#6a6868"}}
                        >
                            <FaGithub/>
                        </a>

                        <a
                            className="btn btn_image rounded-5 text-white m-1"
                            style={{backgroundColor: "#6a6868"}}
                        >
                            <FaWhatsapp/>
                        </a>
                </div>

                <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                    © 2023 Copyright:
                    <a href="/">NasaAPI.com </a>:
                    All rights resereved.
                </div>
            </div>
        </>
    )
}