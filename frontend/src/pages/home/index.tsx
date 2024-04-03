import React from "react";
import Sidebar from "./sidebar";
import Chat from "./chat";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="flex-1 flex items-center justify-center p-4">
      <article className="card w-full max-w-3xl sm:h-[450px] md:h-[550px] bg-base-300 shadow-xl p-2 flex-row divide-x divide-neutral">
        <Sidebar />
        <Chat />
      </article>
    </section>
  );
};

export default Home;
