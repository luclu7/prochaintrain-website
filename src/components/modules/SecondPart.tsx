import affluence from "../../assets/Affluence.png";
import { Characteristics } from "../Description.tsx";

export const SecondPart = () => (
    <div className={'secondPartWrapper center'}>
        <div className={'secondPart'}>
            <img src={affluence} alt="Affluence" />
            <Characteristics />
        </div>
    </div>
)