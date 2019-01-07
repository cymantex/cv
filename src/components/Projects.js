import React from "react";
import {Sidebar} from "./Sidebar";
import {SectionTitle} from "./SectionTitle";

export const Projects = () => (
    <section id="cv-projects">
        <SectionTitle text="Recent projects"/>
        <Sidebar date="8/2016 - 11/2016"/>
        <div>
            <h3>Ethereum Subscriptions</h3>
            <p>
                A page where suppliers can create subscriptions which users then can subscribe
                to with help of ethereum smart contracts.
            </p>
        </div>
        <Sidebar date="6/2016 - 7/2016"/>
        <div>
            <h3>Keeping track of extra widgets</h3>
            <p>
                A project where I implemented an interface supporting natural language queries
                and speech recognition to communicate with a MySQL database.
            </p>
        </div>
        <Sidebar date="6/2016 - 8/2016"/>
        <div>
            <h3>CryptoTrade</h3>
            <p>A web app similar to a stock market for crypto currencies.</p>
        </div>
        <Sidebar date="3/2016 - 5/2016"/>
        <div>
            <h3>Pilot test management</h3>
            <p>
                A project where I worked in a small team while coordinating with over 50 other
                developers working simultaneously on the same project. My team had the
                responsibility of implementing functionality for managing test results.
            </p>
        </div>
    </section>
);