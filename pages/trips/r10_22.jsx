import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";


const photos = [
  {
    id: 1,
    src: '/img/r10/1.jpeg'
  },
  {
    id: 2,
    src: '/img/r10/2.webp'
  },
  
]




const R10 = () => {
  return (
    <div className="max-w-4xl md:p-14 p-4 mb-20">
      <h1 className="text-6xl font-bold mb-10">R10, Pomorskie 7.10 - 10.10</h1>
      <h1 className="text-4xl font-bold mb-10">Wstępny plan - wyjazd jeszcze nie potwierdzony</h1>

      <div className="bg-slate-100 md:p-8">
        <p className="">
          Na zakończenie sezonu planujemy zobaczyć najpiękniejszy kawałek słynnej trasy R10 (wzdłuż lini brzegowej Bałtyku)
        </p>

        <br />

        <br />
        <div className="flex flex-col md:flex-row lg:flex-row gap-x-4">
          <a href="https://goo.gl/maps/jAtke2sHzk8kmxXF7" target="_blank">
            <img src="/img/r10/trasar10.png" className="w-80" alt="" />
          </a>
          {/* <div>
            <h1 className="text-2xl font-bold">Piątek</h1>
            <p>
              <span className="font-semibold">13-18:</span> Dojazd, rozgrzanie
              nóg
            </p>
            <p>
              <span className="font-semibold">19-22:</span> Restauracja Carska,
              przejazd busem
            </p>
            <h1 className="text-2xl font-bold">Sobota</h1>
            <p>
              <span className="font-semibold">8-9:</span> Śniadanie w Karczmie
              Osocznika
            </p>
            <p>
              <span className="font-semibold">10:</span> Wyjazd do Siemianówki
              (przez Pogorzelce)
            </p>
            <p>
              <span className="font-semibold">13:</span> Lunch w Narewce
            </p>
            <p>Powrót do Bud</p>
            <p>
              <span className="font-semibold">19:</span> Ognisko
            </p>
            <h1 className="text-2xl font-bold">Niedziela</h1>
            <p>
              <span className="font-semibold">8-9:</span> Śniadanie
            </p>
            <p>
              <span className="font-semibold"></span> Powrót
            </p>
          </div> */}
        </div>
      </div>

      <Carousel
        dynamicHeight={true}
        dynamicWidth={true}
        className="bg-indigo-200"
        showThumbs={false}
        autoPlay={true}
      >
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image src={photo.src} width={1200} height={800} objectFit="cover" />
            
          </div>
        ))}
      </Carousel>


    </div>
  );
};

export default R10;
