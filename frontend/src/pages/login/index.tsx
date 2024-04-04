import React from "react";
import { Link } from "react-router-dom";
import KeyIcon from "../../icons/key";
import AtIcon from "../../icons/at";
import useLogIn from "../../hooks/use-log-in";

interface LoginProps {}

interface UserData {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = () => {
  const { logIn } = useLogIn();
  const [userData, setUserData] = React.useState<UserData>({
    username: "",
    password: "",
  });

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await logIn(userData);
  };

  return (
    <section className="flex-1 flex items-center justify-center">
      <form onSubmit={handleLogIn} className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body gap-4">
          <h2 className="card-title">Login</h2>
          <p>Enter your username and password</p>

          <div className="form-control gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <AtIcon className="w-4 h-4 opacity-70" />
              <input
                type="text"
                className="grow"
                placeholder="Username"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <KeyIcon className="w-4 h-4 opacity-70" />
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </label>
          </div>

          <div className="card-actions items-center justify-center flex-col">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>

            <Link
              to="/signup"
              className="link link-primary text-xs text-center"
            >
              Ready to join us? Sign up now 🎉
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
