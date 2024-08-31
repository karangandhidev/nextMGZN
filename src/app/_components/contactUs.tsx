import { Facebook, Instagram, Mail, MapPin, PhoneCall, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { forwardRef } from 'react';
import useToggleClassOnResize from '../scripts/minHeight';

const Contact = forwardRef<HTMLDivElement, {}>((props, ref) => {
    useToggleClassOnResize('.contactContainer');

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const [errors, setErrors] = useState({
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
        let valid = true;
        const newErrors = { firstName: "", lastName: "", email: "", phoneNumber: "", message: "" };

        if (!firstName) {
            newErrors.firstName = 'First name is required.';
            valid = false;
        }
        if (!lastName) {
            newErrors.lastName = 'Last name is required.';
            valid = false;
        }
        if (!email) {
            newErrors.email = 'Email is required.';
            valid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address.';
            valid = false;
        }
        if (!phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required.';
            valid = false;
        } else if (!validatePhoneNumber(phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid phone number.';
            valid = false;
        }
        if (!message) {
            newErrors.message = 'Message is required.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
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
                setErrors({
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
            <div className="page-Wrapper">
                <div className="text-Container">
                    <h1 className="header">Contact Us</h1>
                    <p className="subheader">Any questions or remarks? Just write us a message!</p>
                </div>
                <div className="contactWrapper">
                    <div className="infoSection desktop-only">
                        <p className="title">Contact Information</p>
                        <p className="subtitle">Let&apos;s Grow your business together</p>
                        <div className="contactInfo">
                            <div className="contactItem" onClick={() => window.location.href = 'tel:+918018695050'}>
                                <PhoneCall className="icon phone" />
                                <p>+91 80186 95050</p>
                            </div>
                            <div className="contactItem">
                                <a className="mail-tag" href="mailto:contact@nextmgzn.com" target="_blank" rel="noopener noreferrer">
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
                        <form onSubmit={handleSubmit} className="form" noValidate>
                            <div className="formGroup">
                                <div className="formControl">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                    <p className="errorText">
                                        {errors.firstName ? errors.firstName : '\u00A0'}
                                    </p>
                                </div>
                                <div className="formControl">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                    <p className="errorText">
                                        {errors.lastName ? errors.lastName : '\u00A0'}
                                    </p>
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
                                    <p className="errorText">
                                        {errors.email ? errors.email : '\u00A0'}
                                    </p>
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
                                    <p className="errorText">
                                        {errors.phoneNumber ? errors.phoneNumber : '\u00A0'}
                                    </p>
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
                                <p className="errorText">
                                    {errors.message ? errors.message : '\u00A0'}
                                </p>
                            </div>
                            <div className="buttonContainer">
                                <button type="submit" className="submitButton mobile-only">Send </button>
                                <button type="submit" className="submitButton desktop-only">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-Wrapper mobile-only">
                <p className="title">NeXTMGZN</p>
                <div className="footer-Container">
                    <div className="contactInfo">
                        <p className="contacttitle">Reach Us</p>

                        <div className="contactItem" onClick={() => window.location.href = 'tel:+918018695050'}>
                            <PhoneCall className="icon phone" />
                            <p className="contactsubtitle">+91 80186 95050</p>
                        </div>
                        <div className="contactItem">
                            <a className="mail-tag" href="mailto:contact@nextmgzn.com" target="_blank" rel="noopener noreferrer">
                                <Mail className="icon" />
                                <p className="contactsubtitle">contact@nextmgzn.com</p>
                            </a>
                        </div>
                        <div className="contactItem" onClick={() => window.open("https://maps.app.goo.gl/hwpMkh444ZjS7Eia6?g_st=iw", "_blank")}>
                            <MapPin className="icon" />
                            <p className="contactsubtitle">M84, M block market, Greater Kailash 2, New Delhi</p>
                        </div>
                    </div>
                    <div className="legalInfo">
                        <p className="legaltitle">Legal</p>
                        <p className="legalsubtitle">Privacy Policy</p>
                        <p className="legalsubtitle">Terms & Services</p>
                        <p className="legalsubtitle">Terms of Use</p>
                        <p className="legalsubtitle">Refund Policy</p>
                    </div>
                </div>
                <p className="socialtitle">Keep up with NeXTMGZN</p>
                <div className="socialIcons">
                    <Link href={`https://www.instagram.com/nextmgzn/?igsh=c3hyb3NreGVweDNi&utm_source=qr`} target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                    </Link>
                    <Link href={`https://www.instagram.com/nextmgzn/?igsh=c3hyb3NreGVweDNi&utm_source=qr`} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
});
Contact.displayName = 'Contact Us';
export default Contact;
