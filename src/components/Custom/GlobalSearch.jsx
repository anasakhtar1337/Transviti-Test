import React from 'react'

import styles from "./styles/GlobalSearch.module.css"
import Input from '../Form/Input'
import Select from '../Form/Select'
import countryList from 'react-select-country-list';
import { Button } from '../Typography';
import Image from 'next/image';

export default function GlobalSearch({ classes }) {
    const options = countryList().getData();
    const job_type = [
        { label: 'Full Time', value: 'full_time' },
        { label: 'Part Time', value: 'part_time' },
        { label: 'Freelance', value: 'freelance' },
        { label: 'Contract', value: 'contract' },
        { label: 'Temporary', value: 'temporary' },
        { label: 'Internship', value: 'internship' },
        { label: 'Remote', value: 'remote' }
    ];

    return (
        <div className={`${styles.GlobalSearch} ${classes} d-flex flex-xl-row flex-lg-column flex-md-row flex-column`}>
            <Input
                type='text'
                placeholder="Job Title, Company or Keywords"
                classes={styles.Input}
            />
            <div className='w-100 d-flex flex-md-row flex-column align-items-center gap-2'>
                <div className='w-100 d-flex flex-row align-items-center'>
                    <Select
                        placeholder='Select Location'
                        options={options}
                        classes='w-100'
                    />
                    <Select
                        placeholder='Job Type'
                        options={job_type}
                        classes='w-100'
                    />
                </div>

                <Button
                    text={
                        <span className='d-flex flex-row justify-content-center align-items-center gap-2'>
                            <Image
                                src="/icons/search-white.svg"
                                alt="Search Icon"
                                className={styles.icon}
                                width={20}
                                height={20}
                                color='white'
                            />
                            <span>Search</span>
                        </span>
                    }
                    classes={styles.search}

                />
            </div>
        </div>
    )
}
