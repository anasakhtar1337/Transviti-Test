'use client'
import React, { useState } from 'react'

import styles from "./styles/Navbar.module.css"
import Image from 'next/image'
import { Button, NavLink } from '../Typography';
import Search from '../Custom/Search';
import Siderbar from './Siderbar';

export default function Navbar() {
    const [sideBarActive, setSidebarActive] = useState(false)
    const navlinks = ['Find Jobs', 'Top Companies', 'Job Tracker', 'My Calender', 'Documents', 'Messages', 'Notifications'];

    const handleHamburgerClick = () => {
        setSidebarActive(prev => !prev)
    }
    const handleSidebarClose = () => {
        setSidebarActive(false)
    }

    return (
        <nav className={styles.Navbar}>
            {sideBarActive ? <div className={styles.overlay} onClick={handleSidebarClose}></div> : ""}
            <Siderbar navlinks={navlinks} isActive={sideBarActive} handleClose={setSidebarActive} />
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <span className={styles.drawer} onClick={handleHamburgerClick}>
                        <Image
                            className={styles.hamburger}
                            src="/icons/hamburger.svg"
                            alt="Hamburger Icon"
                            width={22}
                            height={22}
                            priority
                        />
                    </span>
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
                        classes={`${styles.resumeButton} text-nowrap`}
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
