import CmdText from '../entities/Console';
import '../shared/styles/Console.scss';
import { AnimatePresence, motion } from 'motion/react';
import UIConsole from '../shared/UI/Console';

interface Console{
    reduced: boolean;
    reduceFunc: () => void;
}

const Console: React.FC<Console> = ({reduced, reduceFunc }) => { 
    return (
        <AnimatePresence>
            {reduced ? 
            (
            <motion.div
                animate={{ maxWidth:"45vw", marginLeft: "auto", height:'25vh', 
                    paddingRight: "2.188rem" , overflow:"hidden",borderRadius:"30px",
                    }}
                transition={{ duration: 0.7 }}
                className='cmd'
            >
                <UIConsole reduceFunc={reduceFunc} />
                <div
                className='cmd-btm'
                >
                    <CmdText />
                </div>  
            </motion.div>) 
            :
            (
            <motion.div transition={{ duration: 0.7 }} initial={{ height: '100%' }} className='cmd'>
                <UIConsole reduceFunc={reduceFunc} />
                <div className='cmd-btm'>
                    <CmdText />
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    );
}
export default Console;