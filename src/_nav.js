import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/login',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Filters',
  },
  {
    component: CNavGroup,
    name: 'Car Condition',
    to: '/dashboard',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'New car',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Old car',
        to: '/dashboard',
      }
    ],
  },

  {
    component: CNavGroup,
    name: 'Brand Name',
    to: '/dashboard',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'BMW',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Ferrari',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Mercedez',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Hyundai',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Nissan',
        to: '/dashboard',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Car model',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '3-Series',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Carrera',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'G-TR',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Macan',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'N-Series',
        to: '/dashboard',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Choose year',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '2023',
        to: '/dashboard',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: '2022',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: '2021',
        to: '/dashboard',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Choose milieage',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '5000 Miles',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: '4000 Miles',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: '3000 Miles',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: '2000 Miles',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: '1000 Miles',
        to: '/dashboard',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Price Range',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '$1000 - $5000',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: '$5000 - $10000',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: '$15000 - $20000',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: '$20000 - $25000',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: '$25000 - $30000',
        to: '/dashboard',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Body Type',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sedan',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Compact',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Coupe',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Wagon',
        to: '/dashboard',
      },
    ],
  },
]

export default _nav
