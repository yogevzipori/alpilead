import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "No Stimulants",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Non-Habit Forming",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Natural formula",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function Info() {
  return (
    <div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 ">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <feature.icon
                  className="h-5 w-5 flex-none text-[#0f766e]"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
                <p className="mt-6">
                  <a
                    href={feature.href}
                    className="text-base font-semibold leading-7 text-[#0f766e]"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-xl font-semibold tracking-tight text-[#10b981]">
              6 Key Ingredients, 1 Powerful Formula Each of our key ingredients
              has been chosen for their unique fat-burning properties.
            </h2>

            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              From drumstick tree leaf (moringa) to turmeric root, ginger root,
              African mango seed, citrus bioflavonoids, and golden algae
              (fucoxanthin), our formula packs a punch!{" "}
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="#"
                className="rounded-md bg-[#0f766e] px-3.5 py-1.5 text-base font-semibold leading-7 text-[#f8fafc] shadow-sm hover:bg-[#10b981] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Buy now
              </a>
              <a
                href="#"
                className="text-base font-semibold leading-7 text-[#f8fafc]"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
