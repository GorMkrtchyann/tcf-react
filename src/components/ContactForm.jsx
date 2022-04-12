import React from "react";

const ContactForm = () => {
    return (
        <section class="contact" id="contact">
            <h1><b>Ձ</b>եր <b>Կ</b>արծիքը <b>Կ</b>ամ <b>Ա</b>ռաջարկությունը</h1>
            <form action="" method="post" id="form">
                <p class="namep">Ձեր Անունը</p>
                <input type="text" id="name">
                <p class="emailp">Ձեր Էլ-Հասեցեն</p>
                <input type="email" name="" id="email" onkeydown="Emailvalidation()" >
                <p class="textp">Ձեր Տեքստը</p>
                <textarea name="" id="message" cols="30" rows="10"></textarea>
                <input class="formbutton" onclick="sendmail()" type="button" value="Ուղարկել">
            </form>
        </section>
    )
}

