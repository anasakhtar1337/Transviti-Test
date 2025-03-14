import React from 'react'

import styles from "./styles/Navbar.module.css"
import Image from 'next/image'
import { Button, NavLink } from '../Typography';
import Search from '../Custom/Search';

export default function Navbar() {
    const navlinks = ['Find Jobs', 'Top Companies', 'Job Tracker', 'My Calender', 'Documents', 'Messages', 'Notifications'];
    return (
        <nav className={styles.Navbar}>
            <div className={styles.content}>

                <div className={styles.logoContainer}>
                    <Image
                        className={styles.logo}
                        src="/logo.svg"
                        alt="Transviti logo"
                        width={41}
                        height={38}
                        priority
                    />
                </div>
                <ul className={styles.navlinks}>
                    {navlinks.map((item, index) => {
                        return <NavLink
                            key={'navlink-' + index}
                            text={item}
                            active={index === 0}
                            classes='text-nowrap'
                        />
                    })}

                </ul>
                <div className={styles.crumpsContainer}>
                    <Search classes={styles.searchBar} />
                    <Button
                        text='Resume Builder'
                        classes='text-nowrap'
                    />
                    <button className={styles.profileIcon}>
                        <Image
                            src={"/temp/profile.jpeg"}
                            alt='Navbar Profile Icon'
                            className={styles.profileImage}
                            width={42}
                            height={42}
                        />
                    </button>
                </div>
            </div>
        </nav >
    )
}
