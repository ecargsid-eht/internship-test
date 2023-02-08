import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TableData from '../components/TableData'

function ApiCall() {
  const [valid,setValid] = React.useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('name') == undefined || localStorage.getItem('phone') === undefined || localStorage.getItem('email') === undefined){
      setValid(false)
      navigate('/',{state:{msg:"Please enter necessary details to proceed."}})
    }
    else{
      setValid(true)
    }
  },[])
  return (
    <>
      {
        valid
        ?
          <Container  maxWidth={"xl"} style={{height:"80vh",width:"100%"}}>
              <TableData/>
          </Container>
        :
        null
      }
    </>
  )
}

export default ApiCall