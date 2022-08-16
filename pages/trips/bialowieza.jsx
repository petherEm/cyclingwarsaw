import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";


const photos = [
  {
    id: 1,
    src: '/img/bialowieza/1.jpg'
  },
  {
    id: 2,
    src: '/img/bialowieza/2.jpg'
  },
  {
    id: 3,
    src: '/img/bialowieza/3.jpg'
  },
  {
    id: 4,
    src: '/img/bialowieza/4.jpg'
  },
]




const Bialowieza = () => {
  return (
    <div className="max-w-4xl md:p-14 p-4 mb-20">
      <h1 className="text-6xl font-bold mb-10">Bialowieża 30.09 - 2.10</h1>
      <h1 className="text-4xl font-bold mb-10">Plan wyjazdu</h1>

      <div className="bg-slate-100 md:p-8">
        <p className="">
          Tradycyjnie jak co roku, Pan Konrad zorganizował rowerowy wypad do
          "Białej". Zakwaterowanie równiez tradycyjnie w Sioło Budy. Tradycyjna
          jest tez nalewka w karczmie osocznika i kolacja w "Carskiej".
        </p>

        <br />

        <br />
        <div className="flex flex-col md:flex-row lg:flex-row gap-x-4">
          <a href="https://goo.gl/maps/Fp4BBmCbGudu7TTb6" target="_blank">
            <img src="/img/bialowieza/trasa22.png" className="w-80" alt="" />
          </a>
          <div>
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
          </div>
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

export default Bialowieza;
