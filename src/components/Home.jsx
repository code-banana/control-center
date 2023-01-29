import React from 'react'
import Navbar from './Navbar'
import TrackThumb from '../assets/track-thumb.png';
function Home() {
  return (
    <div>
      <Navbar/>
      <br/>
      <h6 class="mb-6 mx-10 my-10 text-3xl font-extrabold leading-none tracking-tight text-black md:text-3xl lg:text-3xl dark:text-white">
            Hello <mark class="px-1 text-white bg-indigo-600 rounded dark:bg-indigo-500">World!</mark></h6>
      <div class="container my-10 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="/track">
                    <img alt="Placeholder" class="block object-cover h-80 w-full" src={TrackThumb}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="mb-4 text-3xl font-extrabold text-center lg:mb-6 lg:text-4xl no-underline hover:underline text-black" href="/track">
                        C10k
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/01/23
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                    <p alt="Placeholder" class="block rounded-full dark">🍌</p>
                        <p class="ml-2 text-sm font-bold">
                        Team Banana
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="/track">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>

        </div>

       
        

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                <img alt="Placeholder" class="block object-cover h-80 w-full" src={TrackThumb}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                    <a class="mb-4 text-3xl font-extrabold text-center lg:mb-6 lg:text-4xl no-underline hover:underline text-black" href="#">
                            Coming Soon!
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        --/--/--
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="">
                        <p alt="Placeholder" class="block rounded-full dark">🍌</p>
                        <p class="ml-2 text-sm font-bold">
                            Team Banana
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>

        </div>

    </div>
</div>
    </div>
  )
}

export default Home