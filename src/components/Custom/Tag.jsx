import React from 'react'

import styles from './styles/Tag.module.css'

export default function Tag({ value = '' }) {
    return (
        Array.isArray(value) ?
            <ul className={styles.TagListing}>
                {value?.map(item => {
                    return <li
                        key={item?.toLowerCase().replace(' ', '-')}
                        className={styles.Tag}
                    >
                        {item}
                    </li>
                })}
            </ul > :
            <li className={styles.Tag} >
            </li >
    )
}
