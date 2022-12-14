import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";


const photos = [
  {
    id: 1,
    src: '/img/balaton/1.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 2,
    src: '/img/balaton/2.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 3,
    src: '/img/balaton/3.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 4,
    src: '/img/balaton/4.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 5,
    src: '/img/balaton/5.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 6,
    src: '/img/balaton/6.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 7,
    src: '/img/balaton/7.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 8,
    src: '/img/balaton/8.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 9,
    src: '/img/balaton/9.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 10,
    src: '/img/balaton/10.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 11,
    src: '/img/balaton/11.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 12,
    src: '/img/balaton/12.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 13,
    src: '/img/balaton/13.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 14,
    src: '/img/balaton/14.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 15,
    src: '/img/balaton/15.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 16,
    src: '/img/balaton/16.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 17,
    src: '/img/balaton/17.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 18,
    src: '/img/balaton/18.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 19,
    src: '/img/balaton/19.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 20,
    src: '/img/balaton/20.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 21,
    src: '/img/balaton/21.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 22,
    src: '/img/balaton/22.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 23,
    src: '/img/balaton/23.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 24,
    src: '/img/balaton/24.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 25,
    src: '/img/balaton/25.jpeg',
    legend: 'Widok z okna'
  }

]


const Balaton = () => {
  return (
    <div className="max-w-4xl md:p-14 p-4">
      <h1 className="text-6xl font-bold mb-10">Balaton West to East</h1>

      <div className="bg-slate-100 md:p-8">
        <p className="font-semibold">
          
          Tym razem zdecydowali??my objecha?? pi??kny Balaton w stron?? zachodni??,
          startuj??c zn??w z Balatonfured na po??udniu jeziora. Przed nami 3 dni
          pi??knej pogody i ok 220km trasy.
        </p>
        <br />
        <p>Akurat ten nasz wyjazd ma dedykowan?? stron?? www - <a href="https://balaton.vercel.app/" target="_blank" rel="noreferrer" className="bg-blue-200 font-bold">Zapraszamy</a></p>

        <br />
        <p>
          ??cie??ka w ok???? jeziora jest nam dobrze znana. W maju 2019 objechali??my
          ca??e jezioro zaczynaj??c w kierunku wschodnim. W tym roku pojechali??my
          w kierunku zachodnim docieraj??c do Heviz, gdzie skorzystali??my ze
          s??ynnych term. Nast??pnego dnia jechali??my p????nocn?? cz????ci?? jeziora
          docieraj??c do p????wyspu Tichany. Tym razem podj??li??my si?? wjazdu na
          szczyt p????wyspu. 1 dzie?? - 73km, 2000kcal 2 dzie?? - 84km, 2550kcal 3
          dzie?? - 72km, 1900kcal
        </p>
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

export default Balaton;
