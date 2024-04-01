import React from "react";

type HeaderProps = {
    title?: string
}

const Header = (props: HeaderProps) => {
    const {title = 'Groceries'} = props
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

export default Header