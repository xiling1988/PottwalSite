import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Landing Pages',
    description:
      'Have an attractive business front. Let customers learn about what you stand for and what you can do for them',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Online Store',
    description:
      'Got something to sell? Avoid heavy commisions and sell directly to your customers, while receiving direct feedback on how to make your products better.',
    icon: LockClosedIcon,
  },
  {
    name: 'Engage with your customers with blog posts',
    description:
      "Got something to say? Let everyone hear about it! Create shareable blog post that provide value to your customers and make them fall in love with your mission. Or automate your  customer emails to engage with them when you've got news to share",
    icon: ArrowPathIcon,
  },
  {
    name: 'Keep everyone posted.',
    description:
      'Let people know about your latest activities and products. Automate your customer emails',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div className='bg-poligrid bg-cover py-24 sm:py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div data-aos='flip-up' className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>
            Deploy faster
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Everything you need for your Business Sucess
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Tell us what you need, and we'll make it happen! There's an ocean of
            opportunities for your business that Pottwal can avail to you.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div
                data-aos='fade-up'
                key={feature.name}
                className='relative pl-16'
              >
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
