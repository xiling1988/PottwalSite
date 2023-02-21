import { CheckIcon } from '@heroicons/react/24/outline'

const customizable = [
  'Use one of our customizable Templates',
  'Overlay your brand look and feel',
  'Dedicated specialist support',
  'Launch facilitation',
  'Post launch aftercare',
]
const bespokePlus = [
  'Let us do it all for you',
  'Bespoke Web Design by our own UI-UX Designers',
  'Bespoke Web/App development',
  'Backend development for your website/application',
  'Add functionality, authentication, online shop, payments, blog, gallery, and more...',
  'Custom CMS and Admin Dashboard',
  'Deployment to your domain',
]
const bespoke = [
  'Your Website, Your Way!',
  'Web app design workshop',
  'Creation of custom sitemap and Wireframing',
  'Holistic Approach',
  'Frontend & Backend development',
  'Additional required functionality (e.g. Authentication, Blog, Online Store, Payments...)',
  'Custom CMS and Admin Dashboard',
  'Dedicated specialist support',
  'Launch facilitation',
  'Post launch aftercare',
]

export default function Tiers() {
  return (
    <div className='bg-gray-900'>
      <div className='px-6 pt-12 lg:px-8 lg:pt-20'>
        <div className='text-center'>
          <h2 className='text-xl font-semibold leading-6 text-gray-300'>
            Pricing
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
            The right tool for you, whoever you are, whatever you need.
          </p>
          <p className='mx-auto mt-3 max-w-4xl text-xl text-gray-300 sm:mt-5 sm:text-2xl'>
            Whether you have your own designs or ideas or are completely
            clueless, we can help you bring your business under the eyes of your
          </p>
        </div>
      </div>

      <div className='mt-16 bg-white pb-12 lg:mt-20 lg:pb-20'>
        <div className='relative z-0'>
          <div className='absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3' />
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='relative lg:grid lg:grid-cols-7'>
              <div className='mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none'>
                <div
                  data-aos='slide-right'
                  data-aos-delay='50'
                  data-aos-duration='800'
                  data-aos-easing='ease-in-out'
                  data-aos-mirror='true'
                  data-aos-once='true'
                  className='flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg'
                >
                  <div className='flex flex-1 flex-col'>
                    <div className='bg-white px-6 py-10'>
                      <div>
                        <h3
                          className='text-center text-3xl font-medium text-gray-900'
                          id='tier-hobby'
                        >
                          Startup
                        </h3>
                        <div className='mt-4 flex items-center justify-center'>
                          <h2 className='text-xl text-center'>
                            Customizable Website
                          </h2>
                        </div>
                        <p></p>
                      </div>
                    </div>
                    <div className='flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10'>
                      <ul role='list' className='space-y-4'>
                        {customizable.map((feature) => (
                          <li key={feature} className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <CheckIcon
                                className='h-6 w-6 flex-shrink-0 text-green-500'
                                aria-hidden='true'
                              />
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className='mt-8'>
                        <div className='rounded-lg shadow-md'>
                          <a
                            href='#contact'
                            className='block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50'
                            aria-describedby='tier-hobby'
                          >
                            Request a Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos='slide-up'
                data-aos-delay='50'
                data-aos-duration='800'
                data-aos-easing='ease-in-out'
                data-aos-mirror='false'
                data-aos-once='true'
                className='mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none'
              >
                <div className='relative z-10 rounded-lg shadow-xl'>
                  <div
                    className='pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600'
                    aria-hidden='true'
                  />
                  <div className='absolute inset-x-0 top-0 translate-y-px transform'>
                    <div className='flex -translate-y-1/2 transform justify-center'>
                      <span className='inline-flex rounded-full bg-indigo-600 px-4 py-1 text-base font-semibold text-white'>
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className='rounded-t-lg bg-white px-6 pt-12 pb-10'>
                    <div>
                      <h3
                        className='text-center text-4xl font-semibold tracking-tight text-gray-900 sm:-mx-6'
                        id='tier-growth'
                      >
                        Growth
                      </h3>
                      <div className='mt-4 flex items-center justify-center'>
                        <h2 className='text-xl'>Bespoke Web Application</h2>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10'>
                    <ul role='list' className='space-y-4'>
                      {bespoke.map((feature) => (
                        <li key={feature} className='flex items-start'>
                          <div className='flex-shrink-0'>
                            <CheckIcon
                              className='h-6 w-6 flex-shrink-0 text-green-500'
                              aria-hidden='true'
                            />
                          </div>
                          <p className='ml-3 text-base font-medium text-gray-500'>
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className='mt-20 pt-32'>
                      <div className='rounded-lg shadow-md'>
                        <a
                          href='#contact'
                          className='block w-full rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-indigo-700'
                          aria-describedby='tier-growth'
                        >
                          Request a Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos='slide-left'
                data-aos-delay='50'
                data-aos-duration='800'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
                data-aos-once='true'
                className='mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none'
              >
                <div className='flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg'>
                  <div className='flex flex-1 flex-col'>
                    <div className='bg-white px-6 py-10'>
                      <div>
                        <h3
                          className='text-center text-xl font-medium text-gray-900'
                          id='tier-scale'
                        >
                          Growth +
                        </h3>
                        <div className='mt-4 flex items-center justify-center'>
                          <h2 className='text-xl text-center'>
                            Bespoke Web Application + UI/UX Design
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10'>
                      <ul role='list' className='space-y-4'>
                        {bespokePlus.map((feature) => (
                          <li key={feature} className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <CheckIcon
                                className='h-6 w-6 flex-shrink-0 text-green-500'
                                aria-hidden='true'
                              />
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className='mt-8'>
                        <div className='rounded-lg shadow-md'>
                          <a
                            href='#contact'
                            className='block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50'
                            aria-describedby='tier-scale'
                          >
                            Request a Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
