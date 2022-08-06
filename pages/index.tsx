import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Video } from "../types";

import axios from "axios";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      <Head>
        <title>Rowerowy Raj Pro</title>
        <meta
          name="description"
          content="Cycling blog for Warsaw Cycling Team"
        />
      </Head>
      <div className="mt-8 md:m-24 m-4">
        <p className="text-4xl font-semibold mb-8">Cześć,</p>
        <p className="text-xl">
          Fajnie ze wpadłeś na nasz rowerowy blog. Jesteśmy grupą przyjaciół którzy lubią eksplorować ciekawe miejsca rowerem. Ten blog jest archiwum naszych najlepszych i najdalszych wypadów, zdjęć i filmów. Być moze planując swoją podróz jakiś post albo film Cię zainspiruje.</p>
      </div>

      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"No Videos"} />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
