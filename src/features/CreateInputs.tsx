import { useState } from "react";

export default function CreateInputs(){
    const [inputs, setInputs] = useState<string[]>([]);

    const addInput = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter'){
            setInputs((prev)=>[...prev, ""]);
        }
    }
    return {addInput};
}