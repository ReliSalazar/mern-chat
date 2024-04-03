import React from "react";
import Sidebar from "./sidebar";
import Chat from "./chat";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="flex-1 flex items-center justify-center p-4">
      <article className="card w-full max-w-3xl h-full bg-base-300 shadow-xl p-2 grid grid-cols-3 divide-x divide-primary">
        <Sidebar />
        <Chat />
      </article>
    </section>
  );
};

export default Home;
