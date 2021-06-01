import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "width": "",
        "min-width": ""
    },
    "index": {
        "width": "",
        "min-width": ""
    },
    "about": {
        "width": "",
        "min-width": ""
    },
    "who-we-need": {
        "width": "",
        "min-width": ""
    },
    "order": {
        "width": "",
        "min-width": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
