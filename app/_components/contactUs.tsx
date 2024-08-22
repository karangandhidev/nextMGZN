import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
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
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const { firstName, lastName, email, phoneNumber, message } = formData;
        if (!firstName || !lastName || !email || !phoneNumber || !message) {
            toast.warning('Please fill in all fields.', { position: 'top-center' });
            return false;
        }
        if (!validateEmail(email)) {
            toast.warning('Please enter a valid email address.', { position: 'top-center' });
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
        <div className="contactContainer">
            <h1 className="header">Contact Us</h1>
            <p className="subheader">Any questions or remarks? Just write us a message!</p>
            <div className="contactWrapper">
                <div className="infoSection">
                    <p className="title">Contact Information</p>
                    <p className="subtitle">Let&apos;s Grow your business together</p>
                    <div className="contactInfo">
                        <div className="contactItem" onClick={() => window.location.href = 'tel:+918018695050'}>
                            <Phone className="icon" />
                            <p>+91 80186 95050</p>
                        </div>
                        <div className="contactItem">
                            <a href="mailto:contact@themagazinestudios.com" target="_blank" rel="noopener noreferrer">
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
                                    required
                                />
                            </div>
                            <div className="formControl">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
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
                                    required
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
                                    required
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
                                required
                            />
                        </div>
                        <button type="submit" className="submitButton">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
