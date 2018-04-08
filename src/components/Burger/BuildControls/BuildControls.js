import React from 'react';
import classes from './BuildControl.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                label={ctrl.label}
                key={ctrl.label}
                added={() => { props.addIngredient(ctrl.type) }}
                removed={() => { props.removeIngredient(ctrl.type) }}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.isOrdered}
        >ORDER NOW</button>
    </div>
);

export default buildControls;