import React, {Fragment} from "react";

export const SectionTitle = ({text, ...props}) => (
    <Fragment>
        <div className="cv-spacer"/>
        <h2 className="cv-section-title" {...props}>{text}</h2>
    </Fragment>
);