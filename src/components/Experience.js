import React from "react";
import {Sidebar} from "./Sidebar";
import {SectionTitle} from "./SectionTitle";

export const Experience = (props) => (
    <section id="cv-experience" {...props}>
        <SectionTitle text="Work experience"/>
        <Sidebar date="11/2016 - Present"/>
        <div>
            <h3>Self-employed</h3>
            <p>Web Development Freelancer</p>
        </div>
        <Sidebar date="4/2015 - 3/2016"/>
        <div>
            <h3>Svensk Markservice AB</h3>
            <p>Lawn care</p>
        </div>
        <Sidebar date="4/2016 - 8/2016"/>
        <div>
            <h3>BDX</h3>
            <p>Lawn care</p>
        </div>
    </section>
);