'use client';

import { useState } from 'react'
import { Description } from '../Typography'
import styles from "./styles/Accordian.module.css"
import Image from 'next/image';

export default function Accordian({
    title = '',
    description = '',
    classes = '',
    defaultActive = false,
    children
}) {
    const [active, setActive] = useState(defaultActive)

    const handleClick = () => {
        setActive(prev => !prev)
    }
    return (
        <div className={`${styles.Accordian} ${classes} p-3`}>
            <div className={` d-flex flex-row justify-content-between gap-3`}>
                <div className='d-flex flex-column gap-1'>
                    <Description
                        fontFamily='bold'
                        text={title}
                    />
                    <Description
                        text={description}
                    />
                </div>
                <div className='d-flex align-items-center me-2'>
                    <span className={`${styles.icon} ${active ? styles.active : ""}`} onClick={handleClick}>
                        <Image
                            src="/icons/arrow.svg"
                            alt="Accordian Arrow"
                            width={15}
                            height={15}
                        />
                    </span>
                </div>
            </div>
            <div className={`${styles.content} ${active ? styles.active : ""}  `}>
                {children}
            </div>
        </div>
    )
}
