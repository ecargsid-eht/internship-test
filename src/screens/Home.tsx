import { Container } from '@mui/system'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Form from '../components/Form'

function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  React.useEffect(() => {
    if(location.state?.msg){
      alert(location.state.msg)
      navigate("/",{replace: true})
    }
  },[])
  return (
    <Container maxWidth={"sm"}  >
        <Form/>
    </Container>
  )
}

export default Home