import React from 'react'
import styles from "./styles/Sidebar.module.css"

import Profile from '../Card/Profile'
import { NavLink } from '../Typography'

export default function Siderbar({ isActive = false, navlinks = [], handleClose = () => { } }) {
    return (
        <aside className={`${styles.Siderbar} ${isActive ? styles.active : ""}`}>
            <Profile />
            <div className={styles.linksContainer}>
                {navlinks.map((item, index) => {
                    return <NavLink
                        key={'sidebar-navlink-' + index}
                        text={item}
                        active={index === 0}
                        classes='text-nowrap'
                    />
                })}

            </div>
        </aside>
    )
}
