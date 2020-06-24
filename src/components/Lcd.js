import React from 'react'
import './css/Lcd.scss'

export default function Lcd(props) {
  return (
    <div className={props.className}>
      <div className='display-background'>{props.backgroundText}
        <div id='time-left' className='display-foreground'>{props.children}</div>
      </div>
    </div>
  )
}
