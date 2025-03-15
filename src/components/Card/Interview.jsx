import React from 'react'

import styles from "./styles/Interview.module.css"
import { Button, Description, SubDescription } from '../Typography'
import Image from 'next/image'

export default function Interview({ classes }) {
    return (
        <div className={`${styles.Interview} ${classes}`}>
            <div className={styles.logo}>
                <Image
                    src="/temp-media/figma.png"
                    alt="Figma Logo"
                    className={styles.image}
                    width={35}
                    height={35}
                />

            </div>
            <div className={'w-100 d-flex flex-xl-row flex-lg-column flex-row justify-content-between gap-1'}>
                <div className={styles.info}>
                    <Description
                        text='UI UX Designer'
                        fontFamily='bold'
                        classes='lc-1'
                    />
                    <SubDescription
                        text='Figma'
                        classes='lc-1 my-1'
                    />
                    <SubDescription
                        text='16 Feb | 13:45 | Remote'
                        classes='lc-2'
                    />
                </div>
                <div className={`${styles.actions} d-flex flex-row align-items-center gap-1`}>
                    <Button
                        text="Accepted"
                        classes={`${styles.action} ${styles.success}`}
                    />
                    <Button
                        text="Deny"
                        classes={styles.action}
                    />
                </div>

            </div>

        </div>
    )
}
