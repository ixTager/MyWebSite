import '../styles/Navigation.scss';

interface Nav {
    reduced: boolean;
}
const Navigation: React.FC<Nav> = ({ reduced }) =>  {
    return (
        <>
            {reduced ?
            (
            <div className="navig">
                <span>Home</span>
                <span>Skills</span>
                <span>About</span>
                <span>Projects</span>
                <span>Contact</span>
            </div>
            )
            :
            (
                <></>
            )}
        
        </>
    )
};

export default Navigation;
