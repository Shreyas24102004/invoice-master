import React from 'react'
import ContactDetail from './ContactDetail'
import InvoiceNo from './InvoiceNo'

export default function UserDetail() {
  return (
    <div className='flex justify-between ...'>
        <ContactDetail/>
        <InvoiceNo/>
    </div>
  )
}
