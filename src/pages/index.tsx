import { type NextPage } from "next";
import Head from "next/head";

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Metrium App</title>
        <meta name="description" content="Metrium app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-10 flex h-screen flex-col font-sans ">
        <nav className="navbar">
          <div className="navbar-start">
            <h2 className="text-xl font-bold text-primary">Metrium</h2>
          </div>
          <div className="navbar-end gap-2">
            <button className="btn-ghost btn rounded-full text-sm font-medium capitalize text-secondary">
              Support
            </button>
            <button className="btn-ghost btn rounded-full text-sm font-medium capitalize text-secondary">
              Language
            </button>
            <button className="btn-outline btn rounded-full text-sm font-medium capitalize text-secondary">
              List your property
            </button>
            <button className="btn-ghost btn-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Home;
