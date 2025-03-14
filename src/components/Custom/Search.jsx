import React from 'react'

import styles from "./styles/Search.module.css"
import Image from 'next/image'

export default function Search({ classes = '' }) {
    return (
        <div className={`${styles.Search} ${classes}`}>
            <Image
                src={'/icons/search.svg'}
                alt='Search Icon'
                width={17}
                height={17}
                className={styles.prefixIcon}
            />
            <input
                type='text'
                placeholder='Search'
                className={styles.Input}
            />
        </div>
    )
}
