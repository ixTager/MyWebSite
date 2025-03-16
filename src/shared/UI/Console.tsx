interface Reduce{
    reduceFunc : () => void;
}   
export default function UIConsole({reduceFunc} : Reduce){
    return(
        <>
            <div className='cmd-top'>
                    <div className='cmd-top-btn'>
                        <p>client@linux-web: /tmp/portfolio</p>
                        <button
                        type='submit'
                        onClick={reduceFunc}></button>
                    </div>
                    <div className='cmd-nav'>
                        <p>File</p>
                        <p>Edit</p>
                        <p>View</p>
                        <p>Search</p>
                        <p>Terminal</p>
                        <p>Help</p>
                    </div>
            </div>
        </>
    );
}