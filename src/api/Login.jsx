import React,{useRef,useState,useEffect} from 'react'

function Login() {
    const userRef=useRef()
    const errorRef=useRef()
    const[user,setUser]=useState('')
    const[pwd,setPwd]=useState('')
    const[error,setError]=useState('')
    const[success,setSuccess]=useState(false)
    useEffect(()=>{
        userRef.current.focus()
    },[])
    useEffect(()=>{
        setError('')
    },[user,pwd])
    const handleSubmit=async(event)=>{
        event.preventDefault()
        setUser('')
        setPwd('')
        setSuccess(true)
    }
  return (
    <div className='login'>
        {success?(
            <section>
                <h1>You Logged In</h1>
                <p><a href='http://localhost:3000/'>GoBack</a></p>
            </section>
        ):(
            <section>
                <p ref={errorRef} className={error? "error":"offscreen"} aria-live="assertive">{error}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">UserName:</label>
                    <input type="text" id='username' ref={userRef} autoComplete='off' onChange={(event)=> setUser(event.target.value)}
                    value={user}
                    required /> <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' onChange={(event)=> setPwd(event.target.value)}
                    value={pwd}
                    required /> <br />
                    <button type='submit'>SignIn</button>
                </form>
                <p>Need an Account?<br />
                <span className='line'>
                    <a href="http://localhost:3000/">SignUp</a>
                    </span>
                    </p>
            </section>
        )}
    </div>
  )
}

export default Login