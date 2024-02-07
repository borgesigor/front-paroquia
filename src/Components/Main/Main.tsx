import * as stylex from '@stylexjs/stylex'
import { ReactNode } from 'react';

interface Props{
  children: ReactNode,
  headerMargin?: boolean
}

export function MainComponent(props: Props) {
  return ( 
    <>
      <div {...stylex.props(main.default, props.headerMargin && main.headerMargin)} >
        {props.children}
      </div>
    </>
  );
}

const main = stylex.create({
  default: {
    display: 'flex',
    flexDirection: 'column',
    gap: {
      default: '5rem',
      '@media (max-width: 1100px)': '5rem'
    }
  },
  headerMargin: {
    position: 'relative',
    top: '7rem'
  }
})