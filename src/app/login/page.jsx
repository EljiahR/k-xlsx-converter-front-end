import styles from '@/styles/Login.module.css'

const Login = () => {
  return (
    <div id="login-page">
      <h2>Admin Login</h2>
      <form id="login-form" class={styles["form"]}>
        <label for="username">Username: <input type="text" id="username" /></label>
        <label for="password">Password: <input type="password" id="password" /></label>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login