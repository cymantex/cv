import React from "react";
import {Sidebar} from "./Sidebar";
import {SectionTitle} from "./SectionTitle";

export const Education = (props) => (
    <section id="cv-education" {...props}>
        <SectionTitle text="Education"/>
        <Sidebar date="9/2016 - 6/2019"/>
        <div>
            <h3>Bachelors degree in Computer Science</h3>
            <p>Umeå university</p>
        </div>
    </section>
);