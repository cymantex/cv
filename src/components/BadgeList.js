import React from "react";

export const BadgeList = ({items, ...props}) => (
    <div className="cv-badge-list" {...props}>
        {items.map((item, i) => <span key={i}>{item}</span>)}
    </div>
);