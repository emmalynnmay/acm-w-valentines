import HTMLFlipBook from 'react-pageflip';

import EmmaMay from './pages/EmmaMay';
import Example from './pages/Example';

function Book() {
    return (<>
        <HTMLFlipBook width={300} height={500} className="book">
            <div className="demoPage"><EmmaMay/></div>
            <div className="demoPage"><Example/></div>
            <div className="demoPage"><EmmaMay/></div>
            <div className="demoPage"><Example/></div>
        </HTMLFlipBook>
    </>);
}

export default Book