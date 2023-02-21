import Head from 'next/head'
import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function Hero() {
  return (
    <div className='bg-white'>
      <div className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20'>
        <div className='mx-auto max-w-7xl pt-10 pb-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-32 lg:px-8'>
          <div className='px-6 lg:px-0 lg:pt-4'>
            <div className='mx-auto max-w-2xl'>
              <div className='max-w-lg'>
                {/* <Image
                width={100}
                height={100}
                unoptimized
                  className='h-32 w-32'
                  src='/img/pottwal_logo.png'
                  alt='Your Company'
                /> */}
                {/* <div className='mt-24 sm:mt-32 lg:mt-16'>
                  <a href='#' className='inline-flex space-x-6'>
                    <span className='rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10'>
                      What's new
                    </span>
                    <span className='inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600'>
                      <span>Just shipped v0.1.0</span>
                      <ChevronRightIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </a>
                </div> */}
                <div className='mt-10 sm:mt-1 flex justify-center space-x-10'>
          <Image src={'/img/pottwal_logo.png'} height='150' width={150} />
        </div>
                <h1 className='mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                  The website your business dreams of
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  You deserve a website that reflects the hard work you put in. At Pottwal, we listen to and understand your needs and free you from building a website yourself, so that you can focus on what matters to you the most. 
                </p>
                <div className='mt-10 flex items-center gap-x-6'>
                  <a
                    href='#contact'
                    className='rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Get in touch
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
            <div
              className='absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36'
              aria-hidden='true'
            />
            <div className='shadow-lg md:rounded-3xl'>
              <div className='bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]'>
                <div
                  className='absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36'
                  aria-hidden='true'
                />
                <div className='relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0'>
                  <div className='mx-auto max-w-2xl md:mx-0 md:max-w-none'>
                    <div className='w-screen overflow-hidden rounded-tl-xl bg-gray-900'>
                      <div className='flex bg-gray-800/40 ring-1 ring-white/5'>
                        <div className='-mb-px flex text-sm font-medium leading-6 text-gray-400'>
                          <div className='border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white'>
                            NotificationSetting.jsx
                          </div>
                          <div className='border-r border-gray-600/10 py-2 px-4'>
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <div className='px-6 pt-6 text-white font-cascadia-mono pb-14'>
                        <p>
                          import <span>{`{`}</span>
                          <span className='text-sky-300'> useState </span>
                          <span>
                            {`}`} from{' '}
                            <span className='text-emerald-300'>'react'</span>
                          </span>{' '}
                        </p>
                        <p>
                          import <span>{`{`}</span>
                          <span className='text-sky-300'> Switch </span>
                          <span>
                            {`}`} from{' '}
                            <span className='text-emerald-300'>
                              '@headlessui/react'
                            </span>
                          </span>{' '}
                        </p>
                        <p>
                          <br />
                        </p>
                        <p className='text-blue-600'>
                          const{' '}
                          <span className='text-orange-400'>My-Dream-Web-App</span>
                          <span className='text-yellow-200'>()  {`${' => {'}`}</span>
                        </p>
                        <br />
                        <div className='ml-6'>
                          <p>
                            const <span>[</span>
                            <span className='text-sky-300'>
                              {' '}
                              enabled, setEnabled{' '}
                            </span>
                            <span>]</span> = useState(true)
                          </p>
                          <p>
                            const <span>[</span>
                            <span className='text-sky-300'>
                              {' '}
                              users, setUsers{' '}
                            </span>
                            <span>]</span>= useState(
                            <span className='text-sky-300'>
                              'All your clients'
                            </span>
                            )
                          </p>
                          <br />
                          <p>return ( </p>
                          <div className='ml-5'>
                          <p className='text-red-700'>
                              <span>{'<GoodBrandImage '}</span>
                              <span className='text-yellow-300'>{`for={`}</span>
                              <span className='text-sky-300'> users </span>
                              <span className='text-yellow-300'>{`}`}</span>
                              {' />'}
                            </p>
                            <p className='text-red-700'>
                              <span>{'<Excellent-Interaction '}</span>
                              <span className='text-yellow-300'>{`with={`}</span>
                              <span className='text-sky-300'> users </span>
                              <span className='text-yellow-300'>{`}`}</span>
                              {' />'}
                            </p>
                            <p className='text-red-700'>
                              {'<HappyCustomers />'}
                            </p>
                            
                          </div>

                          <p>)</p>
                        </div>
                        <p>{'};'}</p>
                        <br />
                          <p className='text-blue-600'>
                          export default function{' '}
                          <span className='text-orange-400'>MyDreamWebApp</span>
                          <span className='text-yellow-200'>() {`${'{'}`}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl'
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>
    </div>
  )
}
