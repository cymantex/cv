import React from "react";
import {Header} from "./components/Header";
import {Education} from "./components/Education";
import {Experience} from "./components/Experience";
import {Skills} from "./components/Skills";
import {Other} from "./components/Other";

export const Cv = () => (
    <main id="cv">
        <Header/>
        <Education/>
        <Experience/>
        <Skills/>
        <Other/>
    </main>
);