import React from "react";

/* Susucre syntaxique : {toggleHandler} ici fait référence à props de la constante Toggle */
const ToggleButton = ({toggleHandler}) => <button onClick={toggleHandler}>Change Theme</button>;

export default ToggleButton;