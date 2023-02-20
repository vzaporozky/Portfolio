import React from "react";
// import myImage from "../../files/80975876.png"

const Contacts = () => {
    return (
        <div className="contacts-container">
            <h1>Contacts</h1>
            <div className="contacts">
                <div className="contact_img">
                    <img src="./images/80975876.png" alt="img" className="contact_image"/>
                    <h2>Vladyslav Zaporozkyi</h2>
                </div>
                <ul className="contact_list">
                    <li>Mobile : +380 50 571 7150</li>
                    <li>E-mail: <a href="mailto:zaporozhskiy2002@gmail.com">zaporozhskiy2002@gmail.com</a></li>
                    <li>Skype: live:.cid.f919366b40899b5f</li>
                    <li>Telegram: <a href="https://telegram.me/vzaporozky"> @vzaporozky</a></li>
                    <li>GitHub: <a href="https://github.com/vzaporozky">vzaporozky</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts;