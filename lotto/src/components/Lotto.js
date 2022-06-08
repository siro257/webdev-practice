import { useState } from "react";

const Lotto = () => {
    const [lottos, setLottos] = useState([]);

    const numbers = Array.from({ length: 45 }, (_, i) => i + 1);

    const generateLotto = () => {
        for (var i = numbers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = tmp;
        }

        const shuffled = numbers.slice(0, 7);

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
