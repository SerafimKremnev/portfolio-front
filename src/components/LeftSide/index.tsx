import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css'

interface LeftSideProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const P = ({...props}:LeftSideProps) => {
    return (
        <div {...props} className={styles.side}>

        </div>
    );
};

export default P;