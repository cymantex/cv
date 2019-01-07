import React from "react";
import {SectionTitle} from "./SectionTitle";
import {Sidebar} from "./Sidebar";

export const Other = () => (
    <section id="cv-other">
        <SectionTitle text="Other information"/>
        <Sidebar date="9/2019 - Present"/>
        <div>
            <h3>Chess Coach</h3>
            <p>Teaching juniors in my local chess club about advanced chess topics.</p>
        </div>
        <Sidebar title="Drivers licence"/>
        <div>
            <p>I have a driver's licence and access to a personal car</p>
        </div>
        <Sidebar title="Languages"/>
        <div>
            <p>I can speak Swedish and English fluently.</p>
        </div>
    </section>
);