import { useState, useRef } from "react";
import styles from './contactMe.module.scss';

const ContactMe = () => {
    const [emailCopied, setEmailCopied] = useState(false);
    const emailRef = useRef(null);


    const email = 'teste@gmail.com';



    return (
        <div className={styles.ContactMeSection}>
            <div className={styles.container}>
                <div className={styles.NewsLetterIcon}>

                    <h2>Me mande um email</h2>
                    <div className={styles.emailCopy}>
                        <span>{email}</span>
                        <button onClick={() => {
                            navigator.clipboard.writeText(email)

                        }}>Copiar Email</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;