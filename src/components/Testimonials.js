import Image from 'next/image'
import Link from 'next/link'

export default function Testimonials() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-12 px-6 lg:pt-1 lg:pb-24 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
          <div>
            <h2
              data-aos='fade-up'
              className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
            >
              They love us! And so will you ❤️ !
            </h2>
            <p
              data-aos='fade-up'
              className='mt-3 max-w-3xl text-lg text-gray-500'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue.
            </p>
            <div className='mt-8 sm:flex'>
              <div data-aos='fade-right' className='rounded-md shadow'>
              
              </div>
              <div data-aos='fade-left' className='mt-3 sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200'
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div data-aos='slide-left' className='mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-20 lg:grid-cols-2'>
            <Link
              href={'https://www.imaginefmcg.com/'}
              className='col-span-1 flex justify-center transparent py-8 px-8 hover:scale-150 transition-all'
            >
              <Image
                height={100}
                width={100}
                unoptimized
                className='max-h-12 w-auto object-contain sm:object-cover'
                src='/img/logofinal.png'
                alt='Workcation'
              />
            </Link>
            <Link
              href={'https://www.yallasana.com/'}
              className='col-span-1 flex justify-center bg-transparent py-8 px-8 hover:scale-150 transition-all'
            >
              <Image
                height={400}
                width={400}
                unoptimized
                className='h-24 w-auto object-cover'
                src='/img/imagineScreenshot.jpeg'
                alt='Workcation'
              />
            </Link>
            <Link
              href={'https://www.yallasana.com/'}
              className='col-span-1 flex justify-center bg-transparent py-8 px-8 hover:scale-150 transition-all'
            >
              <Image
                height={400}
                width={400}
                unoptimized
                className='h-24 w-auto object-cover'
                src='/img/YALLA.png'
                alt='Workcation'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
