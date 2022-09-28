import { NextPage } from "next";
import { useForm } from "react-hook-form";
import SocialLogin from "./components/socialLogin";

const Home: NextPage = () => {
  return (
    <main>
      <h1>Welcome {username}!!</h1>
      <p>Your email is: {email}</p>

      <SocialLogin />
    </main>
  );
};

export default Home;
