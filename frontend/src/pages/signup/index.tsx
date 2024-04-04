import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../icons/user";
import KeyIcon from "../../icons/key";
import AtIcon from "../../icons/at";
import useSignUp from "../../hooks/use-sign-up";

interface SignUpProps {}

interface UserData {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC<SignUpProps> = () => {
  const { loading, signUp } = useSignUp();
  const [userData, setUserData] = React.useState<UserData>({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(userData);
  };

  return (
    <section className="flex-1 flex items-center justify-center">
      <form onSubmit={handleSignUp} className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body gap-4">
          <h2 className="card-title">Sign Up</h2>
          <p></p>

          <div className="form-control gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <UserIcon className="w-4 h-4 opacity-70" />
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                value={userData.fullName}
                onChange={(e) =>
                  setUserData({ ...userData, fullName: e.target.value })
                }
              />
            </label>
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
            <label className="input input-bordered flex items-center gap-2">
              <KeyIcon className="w-4 h-4 opacity-70" />
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
                value={userData.confirmPassword}
                onChange={(e) =>
                  setUserData({ ...userData, confirmPassword: e.target.value })
                }
              />
            </label>
          </div>

          <div className="card-actions items-center justify-center flex-col">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
            >
              {loading && <span className="loading loading-spinner w-4 h-4" />}
              Sign Up
            </button>

            <Link to="/login" className="link link-primary text-xs text-center">
              Already have an account? Log In 🔑
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
