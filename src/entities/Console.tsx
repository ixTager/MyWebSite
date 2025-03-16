import useKeyListener from "../features/KeyListener";

const CmdText = () => {
    const { inputs, setInputs, responses } = useKeyListener();

    const handleChange = (index: number, value: string) => {
        setInputs((prev) => prev.map((input, i) => (i === index ? value : input)));
    };

    return (
        <>
            {inputs.map((input, index) => (
                <div key={index}>
                    <label>
                        <span style={{"color" : "#97E247"}}>
                            client@linux-web
                        </span>
                        : 
                        <span style={{"color" : "#8D95D4"}}>
                            /tmp/portfolio
                        </span>
                        $
                        <input
                        type="text"
                        value={input}
                        onChange={(e) => handleChange(index, e.target.value)}
                        autoFocus
                    />

                    </label>
                    {responses[index] && 
                    <p id="resp">
                        {responses[index]}
                    </p>}

                </div>
            ))}
        </>
    );
};

export default CmdText;
