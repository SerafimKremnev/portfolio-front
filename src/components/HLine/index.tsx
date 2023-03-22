import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css'
import LeftSide from "@/components/LeftSide";
import cn from "classnames";

interface LineProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

const P = ({className, ...props}:LineProps) => {
    return (
        <div className={cn(styles.line, className)}>
        </div>
    );
};

export default P;