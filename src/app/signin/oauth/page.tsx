"use client"

import { getSession, } from 'next-auth/react';
import React, { useEffect } from 'react'
const Test = () => {
  useEffect(() => {
    getSession().then(session => {
      console.log(session)
      // TODO::
      // BE SINGUP CALL
      // Kalo sukses redirect ke "/"
      // Fail redirect ke "signup"
      // document.location.replace("/")
    })
  }, [])
  return (<></>)
}

export default Test;