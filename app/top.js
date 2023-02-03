import React from 'react'

export default function Top() {
  return (
    <div>
    <div className="relative bg-[#0f766e]">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:px-16 sm:text-center">
              <p className="font-medium text-[#f8fafc] ">
                <span className="md:hidden">Alpilean is FDA-approved and manufactured in United States!</span>
                <span className="hidden md:inline">Alpilean is manufactured in an FDA-approved and GMP-certified facility in the United States</span>
                <span className="block sm:ml-2 sm:inline-block">
                  <a href="#" className="font-bold text-white underline hover:text-[#10b981]">
                    Order now
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </span>
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
              {/* <button
                type="button"
                className="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button> */}
            </div>
          </div>
        </div></div>
  )
}
