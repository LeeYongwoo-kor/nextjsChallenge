import { NextPage } from "next";
import SocialLogin from "./components/socialLogin";

const Enter: NextPage = () => {
  return (
    <main>
      <h1>Create Account</h1>
      <form>
        <div>
          <span>
            Name: <input type="text" />
          </span>
          <span>
            Email: <input type="text" />
          </span>
        </div>
        <div>
          <button>Create Account</button>
        </div>
      </form>
      <h1>Welcome {username}!!</h1>
      <p>Your email is: {email}</p>

      <SocialLogin />
    </main>
  );
};

export default Enter;
