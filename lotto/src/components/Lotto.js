import { useState } from "react";

const Lotto = () => {
    const [lottos, setLottos] = useState([]);

    const numbers = Array.from({ length: 45 }, (_, i) => i + 1);

    const generateLotto = () => {
        // TODO ::: IMPROVE SHUFFLE & SELECTION
        const shuffled = [...numbers]
            .sort(() => 0.5 - Math.random())
            .slice(0, 7);

        const bonus = shuffled[6];

        const result = shuffled.slice(0, 6).sort((a, b) => {
            return a - b;
        });

        setLottos([...result, bonus]);
    };

    return (
        <>
            <h1>Lotto</h1>
            <div className="lotto-container">
                <h2>
                    {lottos.map((n, index) => {
                        return (
                            <>
                                <a>{index === 6 ? `:::` : ``}</a>
                                <div
                                    className={
                                        "circle " +
                                        (1 <= n && n <= 10
                                            ? "yellow"
                                            : 11 <= n && n <= 20
                                            ? "blue"
                                            : 21 <= n && n <= 30
                                            ? "red"
                                            : 31 <= n && n <= 40
                                            ? "black"
                                            : 41 <= n && n <= 45
                                            ? "green"
                                            : "")
                                    }
                                    key={index}
                                >
                                    {n}
                                </div>
                            </>
                        );
                    })}
                </h2>
            </div>
            <button className="button-17" onClick={generateLotto}>
                Generate
            </button>
        </>
    );
};

export default Lotto;
