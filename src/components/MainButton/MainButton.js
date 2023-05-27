import React from "react";
import './MainButton.css'

export const MainButton = ({ text }) => (
    <button className={'mainButton'}>
        { text }
    </button>
)