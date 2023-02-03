import Image from "next/image"


export default function Freegifts() {
  return (
    <div>

<div className=" bg-white">
          <div className="text-center ">
            <h1 className="animate-bounce mt-8 text-xl font-bold tracking-tight text-[#10b981] sm:text-2xl">
            Febuary Special
            Order today a 90-day or 180-day supply and get 2 FREE gifts! 
            While supplies last!
            </h1>
            </div>
</div>

<div className="container mx-auto sm:px-6 lg:px-8  ">

    <div className="mt-16 grid grid-cols-1 px-10 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg ">
                <div className="h-full w-full object-cover object-center max-w-sm max-h-xs" >

                <img 
                  src="/renew-you-cover.jpg"
                  alt="renew book."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-4 text-xl text-slate-800 font-semibold">
              Gift 1 - 20 Amazing and delicious detox tea recipes using everyday ingredients!
              </p>
              </div>
            </div>
            <div>
              <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                <img
                  src="/1-day-detox-cover.jpg"
                  alt="Front zipper pouch with included key ring."
                  className="h-full w-full object-cover object-center max-w-sm max-h-xs"
                />
              </div>
              <p className="mt-4 mb-4 text-xl text-slate-800 font-semibold">
              Gift 2 - Discover simple methods to instantly relive stress and calm down your mind!
              </p>
            </div>
          </div>
    </div>
    </div>
  )
}
