import React from 'react'
import styles from "./styles/Profile.module.css"

import Image from 'next/image'

import { SubDescription, Title, TitleDescription } from '../Typography'

export default function Profile() {
    const expertise = ['Senior Product Designer', 'UI/UX Designer', 'Graphic Designer', 'Web Developer', 'Full Stack Developer', 'Senior Product Designer']

    return (
        <div className={styles.Profile}>
            <div className={styles.profileImage}>
                <Image
                    src="/temp-media/profile2.png"
                    alt="User Image"
                    width={90}
                    height={90}
                    className={styles.image}
                />
            </div>
            <Title
                text="Albert Flores"
            />
            <TitleDescription
                text={expertise.join(' | ')}
                classes="lc-2 title-color lh-sm w-75"
            />
            <SubDescription
                text="Clinton, Maryland"
            />
        </div>
    )
}
