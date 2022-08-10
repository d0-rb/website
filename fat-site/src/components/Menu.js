import React, { useEffect, useState } from 'react'
import '../styles/Menu.scss';

let startDB = true;
const OPEN_TO_CLASS = {
  closed: 'fade-out',
  half: 'fade-in',
  open: 'show-menu',
  closing: 'close-menu',  // special case for when the menu is being closed from being fully open
}

export default function Menu({ setScroll, open, setOpen }) {
  const [menuClass, setMenuClass] = useState('invisible')
  useEffect(() => {
    if (startDB) {
      startDB = false
      return
    }

    if (open === 'closed' && menuClass === OPEN_TO_CLASS.open) {
      setMenuClass(OPEN_TO_CLASS.closing)
    } else {
      setMenuClass(OPEN_TO_CLASS[open])
    }
  }, [open])

  return (
    <div
      key={menuClass}
      id="menu"
      className={menuClass}
    >

    </div>
    )
  }