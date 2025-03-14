import React from 'react'

import styles from "./styles/JobSection.module.css"

import { Anchor, SubTitleLight } from '../Typography'
import Job from '../Card/Job'

export default function JobSection({ title = '', classes = '' }) {
    return (
        <div className={`${styles.JobSection} ${classes} d-flex flex-column gap-3`}>
            <div className='d-flex flex-row align-items-center gap-4'>
                <SubTitleLight
                    text={title}
                />
                <Anchor
                    text={'See ' + title}
                />
            </div>
            <div className={styles.listing}>
                <Job />
                <Job />
                <Job />

            </div>

        </div>
    )
}
