import FCConsole from "../features/KeyListener";
import Input from "./Input";

export default function Output(){
    const {response} = FCConsole();

    return(
        <>
            {response &&
            (
                <div>
                    {response}
                    <Input />
                </div>
            )}
        </>
    );
}