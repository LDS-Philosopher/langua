import React from 'react'
import injectSheet from 'react-jss'
import type Classes from 'react-jss'

const styles = {
  notice: {
    fontStyle: 'italic'
  }
}

type props = {
  classes: Classes,
  children: string
}

const Notice = (props: props) => (
  <p className={props.classes.notice}>
    {props.children}
  </p>
)

export default injectSheet(styles)(Notice)
