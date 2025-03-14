import { useEffect, useState } from "react";

interface Command {
    [key: string]: string;
}

const useKeyListener = () => {
    const commands: Command = {
        help: `Welcome to the developer console! \n Type "help" for a list of commands.`,
        about: "About me",
        skills: "My skills",
    };

    const [inputs, setInputs] = useState<string[]>([""]); 
    const [responses, setResponses] = useState<string[]>([]); 

    useEffect(() => {
        const pressEnter = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                setInputs((prev) => [...prev, ""]); 

                const lastCommand = inputs[inputs.length - 1];
                 
                if (commands[lastCommand]) {
                    setResponses((prev) => [...prev, commands[lastCommand]]);
                } else {
                    setResponses((prev) => [...prev, "TypeError: No such command found"]);
                }
            }
        };

        document.addEventListener("keydown", pressEnter);
        return () => {
            document.removeEventListener("keydown", pressEnter);
        };
    }, [inputs]); 

    return { inputs, setInputs, responses };
};

export default useKeyListener;
