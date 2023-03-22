import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css'
import LeftSide from "@/components/LeftSide";
import cn from "classnames";

interface HTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
    tag?: 'h2' | 'h1',
    children: ReactNode
}

const HTag = ({tag='h2', children, className, ...props}:HTagProps) => {
    if(tag==='h2') {
        return <h2 className={cn(styles.h, className)}>{children}</h2>
    } else {
        return <h1 className={cn(styles.h, className)}>{children}</h1>
    }
};

export default HTag;