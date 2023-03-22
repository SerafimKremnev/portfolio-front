import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css'
import LeftSide from "@/components/LeftSide";
import Line from "@/components/HLine";

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}

const P = ({children, ...props}:ContainerProps) => {
    return (
        <div {...props} className={styles.container}>
            <LeftSide/>
            <main className={styles.main}>
                <Line className={styles.line1}/>
                <Line className={styles.line2}/>
                <Line className={styles.line3}/>
                <Line className={styles.line4}/>
                <Line className={styles.line5}/>
                {children}
            </main>
        </div>
    );
};

export default P;