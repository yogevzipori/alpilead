"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Top from "../top";
import Image from "next/image";
import ThreeBottles from "/public/3-bottles.png";
import FullProduct from "/public/full-product.png";
import Freegifts from "../freegifts";
import Noworlearn from "../noworlearn";

export default function Page2() {
  return (
    <div>
      <div>
        <Top />

        <div className=" bg-white">
          <div className="text-center ">
            <h1 className="text-2xl font-semibold tracking-tight text-[#0f766e] sm:text-4xl mx-auto max-w-2xl py-8 sm:py-12 lg:py-12">
              Alpilean is made in the USA at an FDA-approved, GMP-certified
              facility.
              <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-2xl">
               100% Stisfaction Guaranteed and 60-Day Money Back Guarantee. Yes 60 days!
              </p>
            </h1>
          </div>
          <div></div>

          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-8 ">
              <div className=" sm:mb-4 sm:flex sm:justify-center">
                <Image
                  src={FullProduct}
                  width={400}
                  height={400}
                  alt="bottles"
                />
              </div>
            </div>
          </div>

          <p className="mt-4 text-base tracking-wide font-medium sm:text-lg leading-8 text-slate-800 mx-auto  max-w-5xl px-10 lg:px-8">
            Transform your weight loss journey with Alpilean - the all-natural
            fat-burning formula that packs a punch. Combining the power of
            drumstick tree leaf (moringa), turmeric root, ginger root, African
            mango seed, citrus bioflavonoids, and golden algae (fucoxanthin).{" "}
            <br />
            Alpilean is scientifically proven to boost your metabolism and ramp
            up your inner body temperature, leading to faster weight loss
            results. Say goodbye to synthetic solutions and hello to a natural,
            ingredient-driven approach with Alpilean.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi"
              className="rounded-md bg-[#0f766e] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-[#10b981] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Buy now!
            </a>
            <a
              href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl font-semibold leading-8 tracking-tight text-[#10b981]">
              Limited Supply
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Say hello to a smarter and safer approach to weight loss with
              Alpilean.{" "}
            </p>
            <p className="mt-4 text-base tracking-wide font-medium sm:text-lg leading-8 text-slate-800 mx-auto  max-w-5xl px-10 lg:px-8">
              Unleash the power of nature with our 6 key natural ingredients,
              each chosen for their fat-burning properties. From drumstick tree
              leaf (moringa), known for boosting your metabolism, to turmeric
              root, with its anti-inflammatory properties, to ginger root, that
              ramps up your inner body temperature, Alpilean has got you
              covered. <br /> And let's not forget about African mango seed,
              rich in fiber and antioxidants, citrus bioflavonoids, for their
              fat-burning benefits, and golden algae (fucoxanthin), that
              supercharges your metabolism.
            </p>
          </div>

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
          <div>
            <p className="mt-4 text-base tracking-wide font-medium sm:text-lg leading-8 text-slate-800 mx-auto  max-w-5xl px-10 lg:px-8">
              Alpilean is also manufactured in an FDA-approved and GMP-certified
              facility in the United States of America <br /> using the latest
              technology and equipment to ensure the highest standards. This
              formula contains only the highest quality natural ingredients
              sourced from trusted sources. 
            </p>
            <Noworlearn />
          </div>
        </div>
      </div>

      <Freegifts />
      <Noworlearn />
      <Top />
    </div>
  );
}
