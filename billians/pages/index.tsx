import { NextPage } from "next";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const onValid = () => {
    const success: HTMLElement | null = document.querySelector("#success");
    if (success) {
      success.innerText = `Hello, Mr ${watch("username")}`;
    }
  };
  const onInvalid = () => {};
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <main>
        <div>
          Name:
          <input
            {...register("username", {
              required: "Please write down your username",
            })}
            type="text"
          />
          {errors.username?.message}
        </div>
        <div>
          Email:
          <input
            {...register("email", {
              required: "Please write down your email",
              pattern: {
                message: "Only @naver emails allowed",
                value: /[a-zA-Z0-9]+@naver.com/gi,
              },
            })}
            type="email"
            placeholder="Only @naver.com"
          />
          {errors.email?.message}
        </div>
        <div>
          Password:
          <input
            {...register("password", {
              required: "Please write down your password",
              minLength: {
                message: "Password has to be more than 10 chars",
                value: 10,
              },
            })}
            type="password"
            placeholder="Min 10 Characters"
          />
          {errors.password?.message}
        </div>
      </main>
      <button>Log in</button>
      <div id="success">{isValid && "All Check is valid"}</div>
    </form>
  );
};

export default Home;
