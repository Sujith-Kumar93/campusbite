
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../actions/userActions';
// import Error from '../components/Error';
// import Loading from '../components/Loading';
// import Success from '../components/Success';

// export default function Registerscreen() {
//   const [name, setname] = useState('');
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const [cpassword, setcpassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const registerstate = useSelector(state => state.registerUserReducer);
//   const { error, loading, success } = registerstate;

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (password.length > 0) {
//       validatePassword(password);
//     }
//   }, [password]);

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

//     if (!passwordRegex.test(password)) {
//       setPasswordError('Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase');
//     } else {
//       setPasswordError('');
//     }
//   };

//   function register() {
//     if (password !== cpassword) {
//       alert('Password not matched');
//     } else if (passwordError) {
//       alert(passwordError);
//     } else {
//       const user = {
//         name,
//         email,
//         password,
//       };
//       console.log(user);
//       dispatch(registerUser(user));
//     }
//   }

//   return (
//     <div>
//       <div className='row justify-content-center mt-5'>
//         <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded' style={{ textAlign: 'left' }}>

//           {loading && <Loading />}
//           {success && <Success success='User Registered Successfully' />}
//           {error && <Error error='Email already registered' />}

//           <h2 className='text-center mt-2' style={{ fontSize: '35px' }}>Register</h2>
//           <div>
//             <input required type='text' placeholder='name' className='form-control' value={name} onChange={(e) => { setname(e.target.value) }} />
//             <input required type='text' placeholder='email' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
//             <input required type='password' placeholder='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
//             {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
//             <input required type='password' placeholder='confirm password' className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
//             <button onClick={register} className='btn mt-3 mb-3'> REGISTER </button>
//             <br />

//             <a style={{ color: 'black' }} href='/login'>Click here to Login</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function Registerscreen() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const registerstate = useSelector(state => state.registerUserReducer);
  const { error, loading, success } = registerstate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (password.length > 0) {
      validatePassword(password);
    }
    if (email.length > 0) {
      validateEmail(email);
    }
  }, [password, email]);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase');
    } else {
      setPasswordError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^1601\d{8}$/;

    if (!emailRegex.test(email)) {
      setEmailError('Roll number must be 12 digits starting with 1601');
    } else {
      setEmailError('');
    }
  };

  function register() {
    if (password !== cpassword) {
      alert('Password not matched');
    } else if (passwordError) {
      alert(passwordError);
    } else if (emailError) {
      alert(emailError);
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded' style={{ textAlign: 'left' }}>

          {loading && <Loading />}
          {success && <Success success='User Registered Successfully, please Login' />}
          {error && <Error error='Email already registered' />}

          <h2 className='text-center mt-2' style={{ fontSize: '35px' }}>Register</h2>
          <div>
            <input required type='text' placeholder='name' className='form-control' value={name} onChange={(e) => { setname(e.target.value) }} />
            <input required type='text' placeholder='roll number' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            <input required type='password' placeholder='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            <input required type='password' placeholder='confirm password' className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
            <button onClick={register} className='btn mt-3 mb-3'> REGISTER </button>
            <br />

            <a style={{ color: 'black' }} href='/login'>Click here to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
