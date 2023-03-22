import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css'
import Image from "next/image";
import me from './me.png'
import set from './set.svg'
interface LeftSideProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const P = ({...props}:LeftSideProps) => {
    return (
        <div {...props} className={styles.side}>
            <div className={styles.wrapper}>
            <div className={styles.logo}>
                <Image className={styles.me} src={me} alt={''}/>
                <Image className={styles.set} src={set} alt={''}/>
            </div>
            <div>Pixel Perfect — Invariably</div>
            </div>
        </div>
    );
};

export default P;