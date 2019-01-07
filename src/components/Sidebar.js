import React from "react";

export const Sidebar = ({date, title, children, props}) => (
    <div className="cv-sidebar" {...props}>
        {title && (<h4>{title}</h4>)}
        {date && (<h4 className="cv-date">{date}</h4>)}
        {children}
    </div>
);