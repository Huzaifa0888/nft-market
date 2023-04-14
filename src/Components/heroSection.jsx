import React from 'react'

function HeroSection() {
  return (
    <>
      <div className="bg-[#121117] h-full w-full   ">
        <section className="py-10 sm:py-16 lg:pt-[110px] lg:pb-[110px] ">
          <div className="px-4 mx-auto max-w-[1150px] sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-white leading-none lg:text-[60px]">
                  Awesome IT Services for Your Business
                </h1>

                <p className="mt-8 text-base text-gray-700 sm:text-xl">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <button className="bg-[#121117] border-white border rounded-full py-4  text-white px-8 text-[1.1rem]">
                    Learn More
                  </button>
                  <button className="bg-[#121117] border-white border rounded-full py-4  text-white px-8 text-[1.1rem]">
                    Learn More
                  </button>
                </div>
              </div>

              <div>
                <img className="w-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection
