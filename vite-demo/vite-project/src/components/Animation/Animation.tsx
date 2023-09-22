import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animation.css';

export const Animation = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className="transition-group">
            <button onClick={() => setVisible(!visible)}>Toggle</button>
            <TransitionGroup>
                {visible &&
                    <CSSTransition timeout={1000} classNames="box"><div>Hej</div></CSSTransition>
                }
            </TransitionGroup>
        </div>
    )

}