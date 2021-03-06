import React from 'react';
import Aux from '../../hoc/aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <div>toolbar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;