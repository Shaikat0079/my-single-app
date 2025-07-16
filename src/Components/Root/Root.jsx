import React from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router'

export const Root = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
