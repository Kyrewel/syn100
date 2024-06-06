import styles from './Contact.module.css'; // Import as a module

// nameInput = document.getElementById('name');
// nameLabel = document.getElementById('nameLabel');
// inquiryInput = document.getElementById('inquiry');
// inquiryLabel = document.getElementById('inquiryLabel');
// emailInput = document.getElementById('email');
// emailLabel = document.getElementById('emailLabel');
// backBtn = document.getElementById('containerBack');

// // Enter Name
// nameInput.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter' && !e.shiftKey) {
//         e.preventDefault();
//         // remove name stuff
//         nameInput.style.transition = "opacity .5s";
//         nameInput.style.opacity = "0";
//         nameLabel.style.transition = "opacity .5s";
//         nameLabel.style.opacity = "0";

//         // add in inquiry stuff
//         inquiryInput.style.display = 'block';
//         backBtn.style.display = 'block';
//         inquiryLabel.style.display = 'block';
//         inquiryInput.style.opacity = "0";
//         inquiryLabel.style.opacity = "0";
//         backBtn.style.opacity = "0";
//         inquiryLabel.innerHTML = "Hi " + nameInput.value + "! What is your inquiry?";

//         setTimeout(function () {
//             // name stuff
//             nameInput.style.display = 'none';
//             nameLabel.style.display = 'none';

//             // inquiry stuff
//             inquiryInput.style.transition = "opacity .5s";
//             inquiryInput.style.opacity = "1";
//             backBtn.style.transition = "opacity .5s";
//             backBtn.style.opacity = "1";
//             inquiryLabel.style.transition = "opacity .5s";
//             inquiryLabel.style.opacity = "1";
//             inquiryInput.focus();
//         }, 700);
//     }
// });

// // Enter Inquiry
// inquiryInput.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter' && !e.shiftKey) {
//         e.preventDefault();
//         // remove inquiry stuff
//         inquiryInput.style.transition = "opacity .4s";
//         inquiryInput.style.opacity = "0";
//         inquiryLabel.style.transition = "opacity .4s";
//         inquiryLabel.style.opacity = "0";
//         backBtn.style.transition = "opacity .4s";
//         backBtn.style.opacity = "0";

//         setTimeout(function () {
//             // inquiry stuff
//             inquiryInput.style.display = 'none';
//             inquiryLabel.style.display = 'none';
//             backBtn.style.display = 'none';

//             // add email stuff
//             emailInput.style.opacity = "0";
//             emailLabel.style.opacity = "0";
//             backBtn.style.opacity = "0";

//             // add email stuff
//             emailInput.style.display = 'block';
//             emailLabel.style.display = 'block';
//             backBtn.style.display = 'block';


//             setTimeout(function () {
//                 document.getElementById('backBtn').innerHTML = "Back to inquiry";
//                 emailInput.style.transition = "opacity .5s";
//                 emailInput.style.opacity = "1";
//                 emailLabel.style.transition = "opacity .5s";
//                 emailLabel.style.opacity = "1";
//                 backBtn.style.transition = "opacity .5s";
//                 backBtn.style.opacity = "1";
//                 emailInput.focus();
//             }, 500)
//         }, 300);

//     }
// });

// Enter Email

// backBtn
// backBtn.addEventListener('click', function () {
//     if (document.getElementById('backBtn').innerHTML == "Back to name") {
//         // remove inquiry stuff
//         inquiryInput.style.transition = "opacity .5s";
//         inquiryInput.style.opacity = "0";
//         backBtn.style.transition = "opacity .5s";
//         backBtn.style.opacity = "0";
//         inquiryLabel.style.transition = "opacity .5s";
//         inquiryLabel.style.opacity = "0";

//         setTimeout(function () {
//             // inquiry stuff
//             inquiryInput.style.display = 'none';
//             inquiryLabel.style.display = 'none';
//             backBtn.style.display = 'none';

//             // name stuff
//             nameInput.style.display = 'block';
//             nameLabel.style.display = 'block';

//             setTimeout(function () {
//                 // add in name stuff
//                 nameInput.style.transition = "opacity .5s";
//                 nameInput.style.opacity = "1";
//                 nameLabel.style.transition = "opacity .5s";
//                 nameLabel.style.opacity = "1";
//                 nameInput.focus();
//             }, 300)
//         }, 500);
//     } else {
//         // remove email stuff
//         emailInput.style.transition = "opacity .5s";
//         emailInput.style.opacity = "0";
//         backBtn.style.transition = "opacity .5s";
//         backBtn.style.opacity = "0";
//         emailLabel.style.transition = "opacity .5s";
//         emailLabel.style.opacity = "0";

//         setTimeout(function () {
//             // email stuff
//             emailInput.style.display = 'none';
//             emailLabel.style.display = 'none';
//             backBtn.style.display = 'none';

//             document.getElementById('backBtn').innerHTML = "Back to name";

//             // inquiry stuff
//             inquiryInput.style.display = 'block';
//             inquiryLabel.style.display = 'block';
//             backBtn.style.display = 'block';

//             setTimeout(function () {
//                 // add in inquiry stuff
//                 inquiryInput.style.transition = "opacity .5s";
//                 inquiryInput.style.opacity = "1";
//                 inquiryLabel.style.transition = "opacity .5s";
//                 inquiryLabel.style.opacity = ".5";
//                 backBtn.style.transition = "opacity .5s";
//                 backBtn.style.opacity = ".5";

//                 inquiryInput.focus();
//             }, 300)
//         }, 500);
//     }
// });

function Contact() {
    return (
        <div className={styles.contactContainer}>
            <head>
                <title>Contact</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                {/* <link rel="stylesheet" type="text/css" href="contact.css" /> */}
            </head>
            <body>
                <header>
                    <a href="/">
                        <img src="Designer.jpeg" alt="Home" />
                    </a>
                </header>
                <main>
                    <section>
                        <form>
                            <label id="nameLabel" htmlFor="name">What is your name?</label>
                            <textarea className="input" id="name" name="name" placeholder="Type your name here..." autoFocus></textarea>
                            <label id="inquiryLabel" htmlFor="inquiry" style={{ display: 'none' }}>What would you like to ask me?</label>
                            <label id="emailLabel" htmlFor="email" style={{ display: 'none' }}>What is your email?</label>
                            <div id="containerBack" style={{ display: 'none' }}>
                                <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="triangles">
                                        <g id="darkGroup">
                                            <path id="dark2" d="M35.5286 54.3213C33.1613 52.3237 33.1613 48.6763 35.5286 46.6787L71.5255 16.3038C74.7764 13.5606 79.75 15.8715 79.75 20.1251V80.8749C79.75 85.1285 74.7764 87.4394 71.5255 84.6962L35.5286 54.3213Z" fillOpacity="0.75" />
                                            <path id="dark1" d="M15.5286 54.3213C13.1613 52.3237 13.1613 48.6763 15.5286 46.6787L51.5255 16.3038C54.7764 13.5606 59.75 15.8715 59.75 20.1251L59.75 80.8749C59.75 85.1285 54.7764 87.4394 51.5255 84.6962L15.5286 54.3213Z" fillOpacity="0.75" />
                                        </g>
                                        <g id="lightGroup">
                                            <path id="light1" d="M35.5286 54.3213C33.1613 52.3237 33.1613 48.6763 35.5286 46.6787L71.5255 16.3038C74.7764 13.5606 79.75 15.8715 79.75 20.1251V80.8749C79.75 85.1285 74.7764 87.4394 71.5255 84.6962L35.5286 54.3213Z" fill="#D1C9C9" fillOpacity="0.75" />
                                        </g>
                                    </g>
                                </svg>
                                <button type="button" id="backBtn">Back to name</button>
                            </div>
                            <textarea className="input" id="inquiry" name="inquiry" placeholder="Type your inquiry here..." style={{ display: 'none' }}></textarea>
                            <textarea className="input" id="email" name="email" placeholder="example@gmail.com" style={{ display: 'none' }}></textarea>
                            <input type="submit" value="Submit" style={{ display: 'none' }} />
                        </form>
                    </section>
                </main>
            </body>
        </div>
    );
}

export default Contact;
