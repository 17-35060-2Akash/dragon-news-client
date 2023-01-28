import React, { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import './RightSideNav.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";


const RightSideNav = () => {
    const { providerLoginGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLoginGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    };

    const pdfExportComponent = useRef(null);

    const handleExportPdf = (event) => {
        pdfExportComponent.current.save();
    };

    return (
        <div>
            <PDFExport ref={pdfExportComponent} paperSize='a4'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                    <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
                </ButtonGroup>
                <div className='mt-4 mb-1' >
                    <h5>Find Us On</h5>
                    <ListGroup>
                        <ListGroup.Item className='mb-3 find-us-on'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                        <ListGroup.Item className='mb-3 find-us-on'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                        <ListGroup.Item className='mb-3 find-us-on'><FaTwitter /> Twitter</ListGroup.Item>
                        <ListGroup.Item className='mb-3 find-us-on'><FaTwitch /> Twitch</ListGroup.Item>
                        <ListGroup.Item className='mb-3 find-us-on'><FaInstagram /> Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
                <div>
                    <BrandCarousel></BrandCarousel>
                </div>
                <div>
                    <Button onClick={handleExportPdf}>PDF</Button>
                </div>
            </PDFExport>
        </div>
    );
};

export default RightSideNav;