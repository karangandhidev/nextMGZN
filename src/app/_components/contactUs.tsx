import { Facebook, Instagram, Mail, MapPin, PhoneCall, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React, { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement, {}>((props, ref) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email: string) => {
        const re = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhoneNumber = (phoneNumber: string): boolean => {
        const re = /^\d{10}$/;
        return re.test(phoneNumber);
    };

    const validateForm = () => {
        const { firstName, lastName, email, phoneNumber, message } = formData;
        if (!firstName || !lastName || !email || !phoneNumber || !message) {
            toast.warning('Please fill in all fields.', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return false;
        }
        if (!validateEmail(email)) {
            toast.warning('Please enter a valid email address.', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return false;
        }
        if (!validatePhoneNumber(phoneNumber)) {
            toast.warning('Please enter a valid phone number.', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success('Email sent successfully!', { position: 'top-center' });
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                });
            } else {
                toast.error('Failed to send email.', { position: 'top-center' });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send email.', { position: 'top-center' });
        }
    };

    return (
        <div ref={ref} className="contactContainer section">
            <div className="text-Container">
              <h1 className="header">Contact Us</h1>
              <p className="subheader">Any questions or remarks? Just write us a message!</p>
            </div>
            <div className="contactWrapper">
                <div className="infoSection">
                    <p className="title">Contact Information</p>
                    <p className="subtitle">Let&apos;s Grow your business together</p>
                    <div className="contactInfo">
                        <div className="contactItem" onClick={() => window.location.href = 'tel:+918018695050'}>
                            <PhoneCall className="icon phone" />
                            <p>+91 80186 95050</p>
                        </div>
                        <div className="contactItem">
                            <a className="mail-tag" href="mailto:contact@themagazinestudios.com" target="_blank" rel="noopener noreferrer">
                                <Mail className="icon" />
                                <p>contact@nextmgzn.com</p>
                            </a>
                        </div>
                        <div className="contactItem" onClick={() => window.open("https://maps.app.goo.gl/hwpMkh444ZjS7Eia6?g_st=iw", "_blank")}>
                            <MapPin className="icon" />
                            <p>M84, M block market, Greater Kailash 2, New Delhi</p>
                        </div>
                    </div>
                    <div className="socialIcons">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                        <Link href={`https://www.instagram.com/nextmgzn/?igsh=c3hyb3NreGVweDNi&utm_source=qr`} target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </Link>
                        <FontAwesomeIcon icon={faDiscord} className="icon" />
                    </div>
                </div>

                <div className="formSection">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="formGroup">
                            <div className="formControl">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="formControl">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formControl">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="formControl">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="messageControl">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="buttonContainer">
                        <button type="submit" className="submitButton">
                            Send Message
                        </button></div>
                    </form>
                </div>
            </div>
        </div>
    );
});
Contact.displayName = 'Contact Us';
export default Contact;
