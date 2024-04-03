import React from "react";
import { Link } from "react-router-dom";
import KeyIcon from "../../icons/key";
import AtIcon from "../../icons/at";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <section className="flex-1 flex items-center justify-center">
      <form action="" className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body gap-4">
          <h2 className="card-title">Login</h2>
          <p>Enter your username and password</p>

          <div className="form-control gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <AtIcon className="w-4 h-4 opacity-70" />
              <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <KeyIcon className="w-4 h-4 opacity-70" />
              <input type="password" className="grow" placeholder="Password" />
            </label>
          </div>

          <div className="card-actions items-center justify-center flex-col">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>

            <Link to="/signup" className="link link-primary text-xs text-center">
              Ready to join us? Sign up now 🎉
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
