type Texte = {
    title: string;
    description: string;
};
const textes: Texte[] = [
    {
        title: "Détails du train (mission, destination, numéro)",
        description: "Pour savoir où vous allez",
    },
    {
        title: "Affichage de l’affluence en temps réel",
        description: "Pour savoir où se positionner",
    },
    {
        title: "Affichage des perturbations en cours",
        description: "N’ayez pas un train de retard !",
    },
    {
        title: "Liste interactive des arrêts",
        description: "Naviguez entre les gares !",
    },
];
export const Characteristics = () => (
    <div className={"characteristics"}>
        {textes.map(({ title, description }, index) => (
            <>
                <GreenBar text={title} />
                <BlueBar text={description} />

                {index !== textes.length - 1 && <Spacer />}
            </>
        ))}
    </div>
);
const Spacer = () => <div style={{ height: "2rem" }} />;
const BlueBar = ({ text }: BarProps) => (
    <div>
        <h3 className={"blueBarText barText"}>{text}</h3>
    </div>
);
type BarProps = {
    text: string;
};
const GreenBar = ({ text }: BarProps) => (
    <div>
        <h3 className={"greenBarText barText"}>{text}</h3>
    </div>
);
