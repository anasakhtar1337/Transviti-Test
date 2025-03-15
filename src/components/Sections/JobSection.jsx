import React from 'react'

import styles from "./styles/JobSection.module.css"

import { Anchor, SubTitleLight } from '../Typography'
import Job from '../Card/Job'

export default function JobSection({ item_length = 3, title = '', classes = '', is_promoted = true }) {
    return (
        <div className={`${styles.JobSection} ${classes} d-flex flex-column gap-3`}>
            <div className='d-flex flex-row align-items-center gap-4'>
                <SubTitleLight
                    text={title}
                    classes='title-color'
                />
                <Anchor
                    text={'See ' + title}
                />
            </div>
            <div className={styles.listing}>
                {Array(item_length).fill(0)?.map((item, index) => {
                    return <Job key={index} is_promoted={is_promoted} />
                })}
            </div>

        </div>
    )
}
