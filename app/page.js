"use client"

import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Info from './info'
import Top from './top'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
    
<div>
<Top />
<div className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Boost your weight loss process.
            <br />
            Start using Alpilean today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-700">
          Transform Your Weight Loss Journey with Alpilean!
Say goodbye to bland, unproven weight loss supplements and hello to a dynamic solution that's powered by nature! Alpilean is the all-natural fat-burning formula that will ignite your metabolism and help you see results like never before. Alpilean is manufactured in an FDA-approved and GMP-certified facility in the United States of America using the latest technology and equipment.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#0f766e] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-[#10b981] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Order Now
            </a>
            <a href="#" className="text-base font-semibold leading-7 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      </div>
  <Info />
<Top/>
    </div>
 


  )
}
