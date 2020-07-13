import React from 'react'
import Icon from '@mdi/react';
import { mdiLanguageTypescript } from '@mdi/js'; 
import { DiJsBadge, DiNodejsSmall, DiReact, DiAngularSimple, DiIonic } from 'react-icons/di'

export default [
  {
    id: 1,
    icon: <DiJsBadge />,
    title: 'Javascript',
    text: ``,
  },
  {
    id: 2,
    icon: <DiNodejsSmall />,
    title: 'NodeJS',
    text: ``,
  },
  {
    id: 3,
    icon: <DiReact />,
    title: 'ReactJS',
    text: ``,
  },
  {
    id: 4,
    icon: <Icon path={mdiLanguageTypescript} size={'66px'}/>,
    title: 'Typescript',
    text: ``,
  },
  {
    id: 5,
    icon: <DiAngularSimple />,
    title: 'Angular',
    text: ``,
  },
  {
    id: 6,
    icon: <DiIonic />,
    title: 'Ionic',
    text: ``,
  },
]
