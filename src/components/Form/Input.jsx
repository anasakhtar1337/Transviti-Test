import React from 'react'

import styles from "./styles/Input.module.css";

export default function Input({
    classes = '',
    type = '',
    placeholder = ''
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`${styles.Input} ${classes} ff-light`}
        />
    )
}
