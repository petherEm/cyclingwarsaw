import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Video } from '../types';

import axios from "axios";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[]
}

const Home = ({ videos }: IProps ) => {
  console.log(videos)
  return (
    <div className="flex flex-col gap-10 videos h-full">
      <Head>
        <title>Rowerowy Raj Pro</title>
        <meta
          name="description"
          content="Cycling blog for Warsaw Cycling Team"
        />
      </Head>

      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        ))
      ): ( <NoResults text={'No Videos'} /> )}

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
