import React from 'react';

const Contact = () => {
    return (
        <article>

            <section className="section__contact">
                <h1>Contatto</h1>
                <h2>E-mail:ciucia@sumachu.com</h2>
                <h2>Tel: +39 36582-4567</h2>

                <span className="footer__socials">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" ><img src="assets/iconfblack.png" alt="social Face"/></a>

                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" ><img src="assets/icoyoublack.png" alt="social Tube"/></a>
                </span>

                <form action="">
                    <div className="form__input-group">
                        <label for="uEmail"></label>
                        <input className="input" type="email" name="" id="uEmail" size="40" maxlength="50" placeholder="Scrivi qui la tua e-mail*"/>
                    </div>
                        <div className="form__input-group">
                            <label for="uText"></label>
                            <textarea className="input" name="" id="uText" cols="30" rows="10" placeholder="Scrivi qui il tuo messagio*"></textarea>
                        </div>
                        <div className="form__input-group">
                            <button className="btn" type="submit">Invia</button>
                        </div>
                </form>
    
            </section>
   
        </article>
    );
};

export default Contact;