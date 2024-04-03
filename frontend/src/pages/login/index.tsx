import React from "react";
import KeyIcon from "../../icons/key";
import AtIcon from "../../icons/at";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
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

          <div className="card-actions items-center justify-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <a href="/signup">
              <button className="btn btn-secondary">Sign Up</button>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
