import affluence from "../../assets/Affluence.png";
import { Characteristics } from "../Description.tsx";

export const SecondPart = () => (
    <div className={'secondPartWrapper center'}>
        <div className={'secondPart'}>
            <div className={"affluence-container"}>
                <img src={affluence} alt="Affluence" />
            </div>
            <Characteristics />
        </div>
    </div>
)