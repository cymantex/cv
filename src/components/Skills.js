import React from "react";
import {Sidebar} from "./Sidebar";
import {BadgeList} from "./BadgeList";
import {SectionTitle} from "./SectionTitle";

export const Skills = (props) => (
    <section id="cv-skills" {...props}>
        <SectionTitle text="Notable developer skills"/>
        <Sidebar title="Frontend"/>
        <BadgeList items={[
            "Javascript", "React.js", "Next.js", "jQuery", "HTML", "CSS", "SCSS", "LESS",
            "PostCSS", "Bootstrap", "Semantic UI", "Material UI", "REST", "WebSocket"
        ]}/>
        <Sidebar title="Backend"/>
        <BadgeList items={[
            "Node.js", "Express.js", "PHP", "Wordpress", "Laravel", "Java Spring", "SQL",
            "MongoDB", "Mongoose", "SQL", "Sequelize", "GraphQL"
        ]}/>
        <Sidebar title="Mobile"/>
        <BadgeList items={["React Native", "Expo", "Native Android"]}/>
        <Sidebar title="Testing"/>
        <BadgeList items={[
            "Jest", "Enzyme", "Mocha", "Jasmine", "PHPUnit", "JUnit", "Espresso"
        ]}/>
        <Sidebar title="Other"/>
        <BadgeList items={[
            "Git", "Web3", "Socket.io", "Firebase", "Shell scripting", "Gulp", "Webpack",
            "C", "Java", "Npm", "Maven", "Composer"
        ]}/>
    </section>
);