import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css'
import cn from 'classnames'

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}

const Skill = ({children, className, ...props}:PProps) => {
    return (
        <p {...props} className={cn(styles.skill, className)}>
            {children}
        </p>
    );
};

export default Skill;