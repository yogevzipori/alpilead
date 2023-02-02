import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import Top from '../top'
import Noworlearn from '../noworlearn'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function Page4() {
  return (
    <div>
        <Top/>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#10b981]">A unique blend of 6 key natural ingredients.</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#0f766e] sm:text-4xl">
          Ignite your metabolism, raise your inner body temperature, and see real results with Alpilean.
          </p>
<br/>
<br/>

          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-2 px-3 text-base leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              FDA-approved and GMP-certified facility in the United States of America.{' '}
                <a href="#" className="font-semibold text-[#10b981]">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Orded now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

          <p className="mt-6 text-lg leading-8 text-slate-800">
          Elevate your weight loss journey with Alpilean - the natural choice for a healthier, happier you. This all-natural formula sets a new standard in weight loss, engineered for success with the latest technology and equipment. The 6 potent natural ingredients - drumstick tree leaf, turmeric root, ginger root, African mango seed, citrus bioflavonoids, and golden algae - are sourced from trusted sources to deliver maximum results. Embrace a smarter and safer approach to weight loss with Alpilean - the all-natural formula that's engineered for success.
          </p>
        </div>
        <div>
            <Noworlearn />
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-[#0f766e]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-base font-semibold leading-7 text-[#0f766e]">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

<div>

<div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-[#0f766e]">
        Alpilean has been scientifically proven to boost metabolism and speed up weight loss results.          <br /> </h2>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">

        Say goodbye to bland and ineffective weight loss supplements and hello to a smarter, safer solution.</h2>       
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="rounded-md bg-[#0f766e] px-3.5 py-1.5 text-base font-semibold leading-7 text-[#f8fafc] shadow-sm hover:bg-[#10b981] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Buy now
          </a>
          <a href="#" className="text-base font-semibold leading-7 text-[#f8fafc]">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    </div>

<div>
<div className="bg-[#10b981]">
<div className="mx-auto max-w-7xl py-4 px-6 sm:py-12 lg:px-8 lg:py-18">
  <div className="mx-auto max-w-4xl text-center">
    <h2 className="text-xl font-medium tracking-tight text-[#f8fafc] sm:text-2xl">
    6 Key Ingredients, 1 Powerful Formula
Each of our key ingredients has been chosen for their unique fat-burning properties. From drumstick tree leaf (moringa) to turmeric root, ginger root, African mango seed, citrus bioflavonoids, and golden algae (fucoxanthin), our formula packs a punch!

    </h2>
    <p className="mt-3 text-2xl font-bold text-slate-100 sm:mt-4">
    Safe, Effective, and Made in the USA.    </p>
  </div>
  <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
    <div className="flex flex-col">
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-[#f8fafc]">Pepperoni</dt>
      <dd className="order-1 text-5xl font-bold tracking-tight text-[#f8fafc]">100%</dd>
    </div>
    <div className="mt-10 flex flex-col sm:mt-0">
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-[#f8fafc]">Delivery</dt>
      <dd className="order-1 text-5xl font-bold tracking-tight text-[#f8fafc]">24/7</dd>
    </div>
    <div className="mt-10 flex flex-col sm:mt-0">
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-[#f8fafc]">Calories</dt>
      <dd className="order-1 text-5xl font-bold tracking-tight text-[#f8fafc]">100k+</dd>
    </div>
  </dl>
</div>
</div>
</div>
<div className="my-10">
<div className="mx-auto max-w-7xl py-10 px-8 sm:py-14 lg:px-6 lg:py-18">

<p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
Say hello to a smarter and safer approach to weight loss with Alpilean. Made in the USA using the latest technology and equipment, this formula is manufactured in an FDA-approved and GMP-certified facility, ensuring the highest standards in quality and safety. Alpilean's unique blend of natural ingredients, including drumstick tree leaf, turmeric root, ginger root, African mango seed, citrus bioflavonoids, and golden algae, are sourced from trusted sources, ensuring you get only the best for your weight loss journey. Take control of your health and unleash the power of nature with Alpilean.          </p>


<div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#0f766e] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-[#10b981] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>

</div>
<Top/>
</div>
</div>
</div>
  )
}
