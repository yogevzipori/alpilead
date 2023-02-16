import Top from "../top"
import Noworlearn from "../noworlearn"
import Image from "next/image"
import ThreeBottles from "/public/3-bottles.png"
import Logo from "/public/logo.png"
import Approved from "/public/approved.png"

export default function salePage() {
  return (
    <>
    <Top/>
    <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-4 ">
              <div className=" sm:mb-4 sm:flex sm:justify-center">
                <Image
                  src={Logo}
                  width={500}
                  height={500}
                  alt="3-bottles"
                />
              </div>
            </div>
          </div>

<div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-semibold leading-8 tracking-tight text-[#10b981]">60-Day Money Back Guarantee! </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to lose weight the natural way? The Alpilean way.         </p>
          <p className="mt-6 text-xl leading-8 text-slate-800">
          Alpilean is here to help! Our all-natural formula, made in the USA with the highest standards, will boost your metabolism and drive weight loss results. Say goodbye to synthetic solutions and hello to a natural, ingredient-driven approach. Try Alpilean today!
          </p>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-2 sm:py-2 lg:py-2 ">
              <div className=" sm:mb-2 sm:flex sm:justify-center">
                <Image
                  src={Approved}
                  width={500}
                  height={500}
                  alt="Approved"
                />
              </div>
            </div>
          </div>
          
          <Noworlearn />
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-8 ">
              <div className=" sm:mb-4 sm:flex sm:justify-center">
                <Image
                  src={ThreeBottles}
                  width={400}
                  height={400}
                  alt="3-bottles"
                />
              </div>
            </div>
          </div>
        </div>
    </div>

<Top/>
</div>
</>
  )
}
