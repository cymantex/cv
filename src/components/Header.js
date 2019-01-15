import React from "react";

export const Header = (props) => (
    <header id="cv-header" {...props}>
        <img src="/images/profile.jpg" alt="profile" width={150} height={150}/>
        <div id="cv-role">
            <h2>Simon Eriksson</h2>
            <h3>Full stack developer</h3>
            <p>
                Freelancing full stack developer specializing in React.js and Node.js.
                Currently looking for web development related opportunities starting after
                I finish my computer science education in June 2019.
            </p>
        </div>
        <div id="cv-contact-details">
            <p><a
                href="https://www.freelancer.com/u/smnrkssn"
                target="_blank"
                rel="noopener noreferrer">freelancer.com/u/smnrkssn</a></p>
            <p><a
                href="https://www.smnrkssn-portfolio.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer">smnrkssn-portfolio.herokuapp.com</a></p>
            <p><a href="mailto:smnrkssn@hotmail.se">smnrkssn@hotmail.se</a></p>
            <p>0730872471</p>
            <p>Lärkvägen 18, 90354, Umeå</p>
        </div>
    </header>
);