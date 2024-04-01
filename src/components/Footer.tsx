import React from 'react'

type FooterProps = {
    itemsLength: number
}

const Footer = ({itemsLength}: FooterProps) => {

  const today = new Date();
  return (
    <footer>
        <p>Your list has {itemsLength} {itemsLength === 1? "item" : "items"}.</p>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer