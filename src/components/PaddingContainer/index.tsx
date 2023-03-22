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
        </div>
    );
};

export default P;