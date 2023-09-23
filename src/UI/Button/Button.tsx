import styles from './Button.module.css'

import { ButtonProps } from './Button.type';

const Button = ({text, style}: ButtonProps) => {
  return (
    <button className={`${styles[style]}`}>
     {text}
    </button>
  );
};

export default Button;
