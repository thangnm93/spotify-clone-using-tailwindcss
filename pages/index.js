import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Main from "../components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify Clone using TailwindCSS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className="flex">
          <div className="h-screen bg-black w-1/4">
            <Navbar />
          </div>
          <div className="w-3/4">
            <Main />
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  );
}
