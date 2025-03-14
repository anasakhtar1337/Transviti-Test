'use client'
import React from 'react'

import "./styles/Select.css"

import ReactSelect from 'react-select';

export default function Select({ classes = '', placeholder = '', options = [] }) {
    return (
        <ReactSelect
            className={`Select ff-semilight ${classes}`}
            placeholder={placeholder}
            options={options}
        />
    )
}
