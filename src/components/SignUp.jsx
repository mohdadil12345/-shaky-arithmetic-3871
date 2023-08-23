import { Button, FormControl, FormLabel, Input, Link } from '@chakra-ui/react';
import React, { useState } from 'react';

function SignUp() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [username, setusername] = useState("")

 
  const user_fun = (e)=> {
    setusername(e.target.value)
  }
  const email_fun = (e)=> {
    setemail(e.target.value)
  }
  const pass_fun = (e)=> {
    setpassword(e.target.value)
  }

  const signup_form = (e)=> {
    e.preventDefault()
    console.log(username, email, password)
    let obj = {
      username : username,
      email : email,
      password : password
    }
    // console.log(obj)
    let userdata = JSON.parse(localStorage.getItem("signup_data"))

    if(userdata){
      userdata.push(obj)
      localStorage.setItem("signup_data", JSON.stringify(userdata))

    }else{
       localStorage.setItem("signup_data", JSON.stringify([obj]))
    }

  }

  return (
    <div>
      <form onSubmit={e => signup_form(e)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" name="username" onChange={e => user_fun(e)} />
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" onChange={e => email_fun(e)} />
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" onChange={e => pass_fun(e)} />
          <Button type="submit">Submit</Button>
         <Link href='/login'>Already Have an Account</Link>
        </FormControl>
      </form>
    </div>
  );
}

export default SignUp;
