import Top from "../top"
import Noworlearn from "../noworlearn"
import Image from "next/image"
import ThreeBottles from "/public/3-bottles.png"
import Logo from "/public/logo.png"
import Approved from "/public/approved.png"
import Link from "next/link"
import NewGifts from "/public/newgifts.jpg"

const Alpilean = (
  <Link
    href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#10b981] hover:text-[#68e745]"
  >
    Alpilean
  </Link>
);

export default function salePage() {
  return (
    <>
    <Top/>
    <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-4 ">
              <div className=" sm:mb-4 sm:flex sm:justify-center">
              <a href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi">

                <Image
                  src={Logo}
                  width={500}
                  height={500}
                  alt="logo"
                />
                </a>
              </div>
            </div>
          </div>

<div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-semibold leading-8 tracking-tight text-[#10b981]">60-Day Money Back Guarantee! </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to lose weight the natural way? The {Alpilean} way.         </p>
          <p className="mt-6 text-xl leading-8 text-slate-800">
          The {Alpilean}-Ice hack combination is a unique approach to weight loss that targets your core body temperature. The goal is to help your body metabolize and process at a faster rate, leading to improved weight loss results. According to the official {Alpilean} website, the formula is expertly crafted with six key ingredients, each chosen for its thermogenic properties. These ingredients work together to increase your body's internal heat, kickstarting your metabolism and helping you reach your weight loss goals. So, if you're looking for a new and innovative approach to weight loss, give the {Alpilean}-Ice hack combination a try!
          </p>
          <Noworlearn />
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-2 sm:py-2 lg:py-2 ">
              <div className=" sm:mb-2 sm:flex sm:justify-center">
                <a href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi">
                <Image
                  src={NewGifts}
                  width={500}
                  height={500}
                  alt="Gifts"
                  />
                  </a>
              </div>
            </div>
          </div>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-2 sm:py-2 lg:py-2 ">
              <div className=" sm:mb-2 sm:flex sm:justify-center">
              
              <a href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi">

                <Image
                  src={Approved}
                  width={500}
                  height={500}
                  alt="Approved"
                  />
                  </a>
              </div>
            </div>
          </div>
          
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-8 ">
              <div className=" sm:mb-4 sm:flex sm:justify-center">
              <a href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi">

                <Image
                  src={ThreeBottles}
                  width={400}
                  height={400}
                  alt="3-bottles"
                />
</a>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-4 ">
              <div className=" sm:mb-4 sm:flex sm:justify-center">
              <a href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi">

                <Image
                  src={Logo}
                  width={500}
                  height={500}
                  alt="3-bottles"
                />
                </a>
              </div>
            </div>
          </div>
              </div>
                     <p className="mt-6 text-xl leading-8 text-slate-800">
                     Our all-natural formula {Alpilean}, made in the USA with the highest standards, {Alpilean} will boost your metabolism and drive weight loss results. Say goodbye to synthetic solutions and hello to a natural, ingredient-driven approach. Try {Alpilean} today!
          </p>
          <Noworlearn />
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-2 sm:py-2 lg:py-2 ">
              <div className=" sm:mb-2 sm:flex sm:justify-center">
              <a href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi">

                <Image
                  src={Approved}
                  width={500}
                  height={500}
                  alt="Approved"
                />
                </a>
              </div>
            </div>
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
