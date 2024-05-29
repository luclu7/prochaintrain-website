import { AppStoreLogo } from "../AppStoreLogo.tsx";

export const Footer = () => (
    <div className="wrapper">
        <div className="footer center">
            <div className={'contact'}>
                <h3>
                    Contactez-moi !
                </h3>
                <p>✉️ me <span>@</span> luclu7.fr</p>
            </div>

            <div className={"copyleftText"}>
                <AppStoreLogo />
                <p>
                    <span className="copyleft">&copy;</span> Lucie Delestre
                </p>
            </div>

        </div>
    </div>
)