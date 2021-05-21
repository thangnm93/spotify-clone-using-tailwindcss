import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Main from "../components/main";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <Head>
        <title>Spotify Clone using TailwindCSS - Web Player</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className="flex">
          <div className="h-screen bg-black w-1/5">
            <Navbar />
          </div>
          <div className="w-4/5">
            <Main />
          </div>
          <Footer />
        </div>
      </Layout>
    </RecoilRoot>
  );
}
