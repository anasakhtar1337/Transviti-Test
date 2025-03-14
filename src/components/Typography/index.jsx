'use client';
import styles from "./index.module.css"

export const Header = ({ text = 'Header', fontFamily = "bold", classes = '' }) => {
    return (
        <h1 className={`${styles.Header} ff-${fontFamily} ${classes}`}>{text}</h1>
    )
}

export const Title = ({ text = 'Title', fontFamily = "bold", classes = '', style = {} }) => {
    return (
        <h1 className={`${styles.Title} ff-${fontFamily} ${classes}`} style={style}>{text}</h1>
    )
}


export const SubHeader = ({ text = 'SubHeader', fontFamily = "bold", classes = '' }) => {
    return (
        <h2 className={`${styles.SubHeader} ff-${fontFamily} ${classes}`}>{text}</h2>
    )
}

export const SubTitle = ({ text = 'SubTitle', fontFamily = "semibold", classes = '' }) => {
    return (
        <h2 className={`${styles.SubTitle} ff-${fontFamily} ${classes}`}>{text}</h2>
    )
}

export const SubTitleLight = ({ text = 'SubTitleLight', fontFamily = "light", classes = '' }) => {
    return (
        <h2 className={`${styles.SubTitleLight} ff-${fontFamily} ${classes}`}>{text}</h2>
    )
}


export const TitleDescription = ({ text = 'TitleDescription', fontFamily = "light", classes = '' }) => {
    return (
        <p className={`${styles.TitleDescription} ff-${fontFamily} ${classes}`}>{text}</p>
    )
}

export const Description = ({ text = 'Description', fontFamily = "light", classes = '' }) => {
    return (
        <p className={`${styles.Description}  ff-${fontFamily} ${classes}`}>{text}</p>
    )
}


export const SubDescription = ({ text = 'SubDescription', fontFamily = "semilight", classes = '' }) => {
    return (
        <p className={`${styles.SubDescription}  ff-${fontFamily} ${classes}`}>{text}</p>
    )
}

export const Label = ({ text = 'Label', fontFamily = "bold", classes = '' }) => {
    return (
        <p className={`${styles.Label}  ff-${fontFamily} ${classes}`}>{text}</p>
    )
}


export const Button = ({ text = '', fontFamily = "semilight", classes = '', onClick = () => { } }) => {
    return (
        <button type="button" onClick={onClick} className={`${styles.Button} ff-${fontFamily} ${classes}`}> {text}</button >
    )
}

export const Anchor = ({ text = 'Anchor', fontFamily = "light", classes = '' }) => {
    return (
        <a className={`${styles.Anchor}  ff-${fontFamily} ${classes}`}>{text}</a>
    )
}

export const NavLink = ({ text = 'NavLink', fontFamily = "semilight", active = false, classes = '' }) => {
    return (
        <a className={`${styles.NavLink}  ff-${fontFamily} ${active ? styles.active : ""} ${classes}`}>{text}</a>
    )
}