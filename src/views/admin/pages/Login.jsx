import { useState } from "react";
import {authAdmin} from '../../../shared/utils/api/auth'

function Login() {
  const [credentials, setCredentials] = useState({
    user: "",
    password: ""
});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await authAdmin(credentials)
    console.log(result)
    if(result.error){
      alert("CREDENCIALES INVALIDAS")
    }else{
      localStorage.setItem("authResult", JSON.stringify(result));
      window.location.assign("/admin/")
    }
  };

  return (
    <div className="container-form">

      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <img src="/logo-esfe.png" alt="" />
        <div className="form-input-material">
          <input
            type="text"
            name="user"
            id="username"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
            value={credentials.user}
            onChange={handleInputChange}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-input-material">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
            value={credentials.password}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn btn-primary btn-ghost">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
