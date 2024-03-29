import Image from "next/image";

import { CustomFilter, Hero, SearchBar } from "@/components";
import { FetchAllPets } from '@/utils'
import PetCard from "@/components/PetCard";

export default async function Home() {
  const allPets = await FetchAllPets();

  const isDataEmpty = !Array.isArray(allPets) || allPets.length < 1 || !allPets;

  // console.log(allPets);

  return (
    <main className="overflow-hidden">
      <Hero />


      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Pet Catalogue</h1>
          <p>Explore out Pets you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="Breeds" />
            <CustomFilter title="Age" />
          </div>
        </div>
        <div className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">


          <PetCard
            title="Shoes!"
            imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            description="If a dog chews shoes whose shoes does he choose?"
          />

          <PetCard
            title="Shoes!"
            imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            description="If a dog chews shoes whose shoes does he choose?"
          />

          <PetCard
            title="Shoes!"
            imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            description="If a dog chews shoes whose shoes does he choose?"
          />

          <PetCard
            title="Shoes!"
            imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            description="If a dog chews shoes whose shoes does he choose?"
          />
        </div>

      </div>
    </main>
  );
}
