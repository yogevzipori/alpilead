import { CameraIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import SaraPic from "/public/sara.png";
const Alpilean = (
  <Link
    href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-900"
  >
    Alpilean
  </Link>
);

export default function Blog1() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-[#10b981]">
             
              Customer Feedback
            </h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Meet Sara
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
               
                  
                  <div className="aspect-w-5 aspect-h-6 lg:aspect-none rounded-lg object-cover object-center shadow-lg">
              <Image 
                    src={SaraPic}
                    alt="Sara"
                    width={500}
                    height={500}
                   />
                 
                   </div>
                   
                {/* <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption> */}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
                My Weight Loss Journey with {Alpilean} - The All-Natural
                Fat-Burning solution that works and is made in an FDA-approved and GMP-certified facility in the United States. Ladies, have you been
                struggling to lose weight, despite counting every calorie and
                hitting the gym every day? I know how you feel! I was there too,
                but that was before I discovered Alpilean. This amazing product
                has completely transformed my weight loss journey and I want to
                share my story with you!
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-slate-600 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                I'm a busy mom of three, and with a demanding career, it's hard
                to find the time to prioritize my own health. I was tired of
                yo-yo dieting and feeling frustrated with my lack of progress,
                so I decided to try something different. That's when I came
                across {Alpilean}, the all-natural fat-burning formula that's
                made in the USA with the highest standards. I was skeptical at
                first, but after doing my research and reading the positive
                reviews, I decided to give it a try. And I'm so glad I did! The
                results have been nothing short of amazing. I've lost 32 lbs,
                and it's all thanks to {Alpilean}.
              </p>
              <p>
                The secret behind {Alpilean} is its proprietary blend of 6
                exotic ingredients, including drumstick tree leaf, turmeric
                root, ginger root, African mango seed, citrus bioflavonoids, and
                golden algae. These ingredients work together to target your
                internal body temperature, boosting metabolism and driving
                weight loss results. And the best part? It's completely natural
                and safe!
              </p>
              <p>
                I started taking {Alpilean} as directed and noticed a difference
                in just a few weeks. My metabolism was revved up, and I had more
                energy throughout the day. The weight started to melt away, and
                I was amazed by how fast and easy it was. And even more
                surprising? I didn't have to make any major changes to my
                lifestyle. I was still eating the same foods and not exercising
                as much as I should have, but I was still losing weight! I
                couldn't believe it! <br />
                {Alpilean} has been a lifesaver for me. Not only have I lost the
                weight, but I feel so much better physically and mentally. I
                have more confidence, and I'm no longer held back by my weight.
                I can wear the clothes I want, and I feel amazing!
              </p>

              <p>
                Ladies, if you're over 40 and ready to take control of your
                weight loss journey, I highly recommend giving Alpilean a try.
                With a 60-day money-back guarantee, you have nothing to lose.
                And with 10M+ satisfied users, you can trust that this product
                works! Order your bottle of {Alpilean} today, and get ready to
                transform your weight loss journey! You'll be amazed by the
                results, just like I was!
              </p>
              <h3>Link to Alpilean
              <Link
    href="https://948ba5s7okug9xa0zds8iwwkfm.hop.clickbank.net/?tid=lpmalpi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-900"
  >
    Click Here
  </Link>
              </h3>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
