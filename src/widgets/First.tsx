import Console from "./Console";
import Navigation from "../shared/UI/Navigation";
import '../shared/styles/FirstBlock.scss';
import FCReduced from "../features/Reduced";

export default function First() {
    const { reduced, reduceFunc } = FCReduced(); 

    return (
        <div className="first-block">
            {reduced ? (
                <div>
                    <Navigation reduced={reduced} />
                    <div className="first-text">
                        <p>Frontend-developer</p>
                        <p>Hi</p>
                        <p>My name is Dmitriy and I’m Frontend-developer</p>
                    </div>
                    <Console reduced={reduced} reduceFunc={reduceFunc} /> 
                </div>
            ) : (
                <Console reduced={reduced} reduceFunc={reduceFunc} />
            )}
        </div>
    );
}
