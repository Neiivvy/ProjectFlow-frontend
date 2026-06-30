import Header from '@/components/Header'
import React from 'react'

const PublicLayout = ({children}) => {
  return (
    <>
    <Header />
    <div>{children}</div>
    </>
 )
}

export default PublicLayout