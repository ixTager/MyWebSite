import CmdText from '../entities/Console';
import '../shared/styles/Console.scss';

export default function Console() {
    return (
        <div className='console'>
            <div className="cmd">
                <div className='cmd-top'>
                    <p>client@linux-web: /tmp/portfolio</p>

                    <div className='cmd-nav'>
                        <p>File</p>
                        <p>Edit</p>
                        <p>View</p>
                        <p>Search</p>
                        <p>Terminal</p>
                        <p>Help</p>
                    </div>
                </div>
                <div className='cmd-btm'>
                    <CmdText />
                </div>
            </div>
        </div>
    );
}
