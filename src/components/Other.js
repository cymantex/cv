import React from "react";
import {SectionTitle} from "./SectionTitle";
import {Sidebar} from "./Sidebar";

export const Other = () => (
    <section id="cv-other">
        <SectionTitle text="Other information"/>
        <Sidebar date="9/2009 - Present"/>
        <div>
            <h3>Chess Coach</h3>
            <p>Teaching juniors in my local chess club about advanced chess topics.</p>
        </div>
        <Sidebar title="Drivers licence"/>
        <div className="align-center">
            <p>I have a driver's licence and access to a personal car</p>
        </div>
        <Sidebar title="Languages"/>
        <div className="align-center">
            <p>I can speak Swedish and English fluently.</p>
        </div>
    </section>
);