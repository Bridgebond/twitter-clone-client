import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

export default function Home({ trendingResults, followResults }) {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  // If the user id not authenticated with moralis (then this component would be rerendered)
  // if (condition) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Home | Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />

        {isOpen && <Modal />}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
  //   (res) => res.json()
  // );

  const trendingResults = null;

  // const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
  //   (res) => res.json()
  // );

  const followResults = null;

  return {
    props: {
      trendingResults,
      followResults,
    },
  };
}
