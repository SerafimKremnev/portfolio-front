import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css'
import cn from 'classnames'

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode
}

const P = ({children, className, ...props}:PProps) => {
    return (
        <p {...props} className={cn(styles.p, className)}>
            {children}
        </p>
    );
};

export default P;