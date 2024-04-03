import React from "react";
import UserIcon from "../../icons/user";
import KeyIcon from "../../icons/key";
import AtIcon from "../../icons/at";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <section className="flex-1 flex items-center justify-center">
      <form action="" className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body gap-4">
          <h2 className="card-title">Sign Up</h2>
          <p></p>

          <div className="form-control gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <UserIcon className="w-4 h-4 opacity-70" />
              <input type="text" className="grow" placeholder="Full Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <AtIcon className="w-4 h-4 opacity-70" />
              <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <KeyIcon className="w-4 h-4 opacity-70" />
              <input type="password" className="grow" placeholder="Password" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <KeyIcon className="w-4 h-4 opacity-70" />
              <input type="password" className="grow" placeholder="Confirm Password" />
            </label>
          </div>

          <div className="card-actions items-center justify-center">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
