import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css'
import cn from 'classnames'
import P from "@/components/P";

interface CaseProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string,
    time: string,
    year: string,
    index: number,
    flex?: boolean
}

const Case = ({name, flex=false, index, time, year, className, ...props}:CaseProps) => {
    return (
        <div className={styles.case}>
            <P className={styles.p}>0{index}.</P>
            <P className={styles.name}>{name}</P>
            <p className={styles.year}>{year}</p>
            <div className={styles.time}>
                <p>Время реализации</p>
                <p>—</p>
                <p>{time}</p>
            </div>
        </div>
    );
};

export default Case;