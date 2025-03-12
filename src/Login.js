import './Login.css';

function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Portal S4RAS</h2>

        <form action="/login" method="POST">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required></input>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required></input>
          <button type="submit">Login</button>
        </form>

        <p className="forgot-password"><a href="#">Lupa Password?</a></p>
      </div>
    </div>
  )
}

export default Login;