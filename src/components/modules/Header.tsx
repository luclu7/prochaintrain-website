import logo from "../../assets/logo.png";
import { AppStoreLogo } from "../AppStoreLogo.tsx";
import trainsList from "../../assets/trainsList.png";

export const Header = () => (
    <div className="wrapper">
        <div className="header center">
            <div className="rightPart">
                <div className="title">
                    <img className="logo" src={logo} alt="Logo" />
                    <h1>ProchainTrain</h1>
                </div>
                <div className={"subtext"}>
                    <h2>Les horaires de train,<br />
                        <span className={"subSubText"}>facilement et rapidement</span></h2>
                </div>
                <AppStoreLogo />
            </div>
            <div className={"trains-list-container"}>
                <img src={trainsList} alt="Trains List" />
            </div>
        </div>
    </div>
)