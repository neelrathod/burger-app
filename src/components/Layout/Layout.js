import React from 'react';
import Aux from '../../hoc/aux';

const layOut = (props) => (
    <Aux>
        <div>toolbar</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layOut;