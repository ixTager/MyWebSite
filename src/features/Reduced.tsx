import { useState } from "react";

export default function FCReduced(){
    const [reduced, setReduced] = useState<boolean>(false);

    const reduceFunc = () =>{
        setReduced(!reduced);
    }
    return {reduced, reduceFunc};
}