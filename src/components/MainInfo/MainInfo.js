import React from "react";
import './MainInfo.css'
import {MainButton} from "../MainButton/MainButton";

export const MainInfo = ({ text }) => (
    <aside className="info-section">
        <div className={'infoTextContainer'}>
          <p className={'infoDate'}>July 31, 2023 at 6:30 pm</p>
          <p className={'pix infoCryptName'}>CRYPTOFOX</p>
          <p className={'infoPlace'}>Dubai | Atlantis | The Palm</p>
          <p className={'infoContent'}>
            Everything about blockchain through the eyes of the world's leading crypto companies and entrepreneurs
          </p>
        </div>
        <div className={'buttonContainer'}>
            <MainButton text='Get Tickets' />
        </div>

    </aside>
)