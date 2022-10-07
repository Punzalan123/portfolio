import React from "react";
import './contact.css';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import mailpic from '../../imagess/mail_pic.png';
import swal from 'sweetalert';



const Contact = () => {

    const send = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lr9aefl', 'template_3x8fj1i', e.target, 'UY5VNVdEbsF9IIdgB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setTimeout( () => {
            swal({
                title: 'Message has been sent!',
                text: "Please wait 1-3 days for my response. Thank You!",
                icon: "success",
                button: 'Done',
            }).then(() => {window.location.reload(); } ); 
        }, 600);
    }

    return(
        <div id="contact" name="contact" >
            <h2 className="contact-txt" >Let's Chat</h2>

            <div className="contBox container mx-auto">
                <div className="row justify-content-center">
                    <div className="image-container">
                        <h3>I would be happy to communicate with you</h3>
                        <img src={mailpic} alt="123" className="circlepic" />
                    </div>
                    <div className="contactForm">
                    <Form onSubmit={send}>
                        <Form.Group className="capital mb-3" controlId="">
                            <Form.Label className="formlabel">Name:</Form.Label>
                            <Form.Control className="formControl" type="name" placeholder="Name" required name="name"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label className="formlabel">Email:</Form.Label>
                            <Form.Control className="formControl" type="email" placeholder="Email" required name="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label className="formlabel">Contact:</Form.Label>
                            <Form.Control className="formControl" type="text" pattern="[0-9]+" minLength={11} maxLength={11} placeholder="Number" required name="number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label className="formlabel">Message:</Form.Label>
                            <Form.Control className="formControl" as="textarea" rows={4} placeholder="Enter message" required name="message"/>
                        </Form.Group>
                        <Button className="submitButton" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>




            <div className="triangle">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="waves-bot">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>

        </div>
    )
}


export default Contact;