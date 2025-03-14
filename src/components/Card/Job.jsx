import React from 'react'

import styles from "./styles/Job.module.css"

import { Button, Description, Label, SubDescription, TitleDescription } from '../Typography'

import Image from 'next/image'

export default function Job() {
    return (
        <div className={`${styles.JobCard} d-flex flex-column`}>
            <div className='d-flex flex-column gap-2'>
                <Label
                    text='Promoted'
                    classes='mb-1'
                />
                <div className='d-flex flex-row gap-2'>
                    <div>
                        <Image
                            src='/temp/company.png'
                            alt="Company Logo"
                            width={45}
                            height={43}
                        />

                    </div>
                    <div>
                        <TitleDescription
                            text='UI/UX Designer'
                            classes='lc-1'
                        />
                        <Description
                            text='Teams'
                            classes='mt-1'
                        />
                    </div>
                </div>
            </div>
            <div>
                <SubDescription
                    text={
                        <span className='d-flex align-items-center lc-1'>
                            <span className='d-flex me-2'>
                                <Image
                                    src={'/icons/location.svg'}
                                    alt="Location Icon"
                                    width={13}
                                    height={13}
                                />
                            </span>
                            Seattle, USA (Remote)
                        </span>
                    }

                />
                <SubDescription
                    text={
                        <span className='d-flex align-items-center mt-2'>
                            <span className='d-flex me-2'>
                                <Image
                                    src={'/icons/clock.svg'}
                                    alt="Clock Icon"
                                    width={13}
                                    height={13}
                                />
                            </span>
                            1 day ago | <span className='ms-1 color-primary'>22 applicants</span>
                        </span>
                    }

                />
            </div>

            <div className='d-flex flex-row justify-content-between mt-2 gap-4'>
                <Button
                    text='Apply Now'
                    classes='w-100'
                />
                <button className={styles.saveButton}>
                    <Image
                        src={'/icons/bookmark.svg'}
                        alt="Bookmark Icon"
                        width={18}
                        height={23}
                    />
                </button>

            </div>

        </div>
    )
}
