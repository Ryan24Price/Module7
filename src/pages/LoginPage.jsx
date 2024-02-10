import LoginForm from "../components/LoginForm";
import { UserProvider } from "../Context/UserContext";

function LoginPage() {
    return (
      <div className="LoginPage">
        <UserProvider>
        <LoginForm />
        </UserProvider>
      </div>
    );
  }
  
  export default LoginPage;
  