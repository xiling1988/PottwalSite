import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

// import { Container } from '@/components/Container'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
      >
        <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
        <span className='ml-4'>{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        d='M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z'
      />
    </svg>
  )
}

export default function About() {
  return (
    <div className=''>
      <Head>
        <title>About - Pottwal Solutions</title>
        <meta
          name='description'
          content='Pottwal Solutions: Tailored Web Solutions for Your Business'
        />
      </Head>
      <Layout>
        <div className='mt-16 pb-12 mx-20 sm:mt-32'>
          <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
            <div className='lg:pl-20'>
              <div className='max-w-xs px-2.5 lg:max-w-none'>
                <Image
                  height={800}
                  width={800}
                  src='/img/hansPortrait.jpeg'
                  alt='Hans Schilling'
                  sizes='(min-width: 1024px) 32rem, 20rem'
                  className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
                />
                <Image
                  height={200}
                  width={800}
                  src='/img/hansWork.jpeg'
                  alt='Hans Schilling'
                  sizes='(min-width: 1024px) 32rem, 20rem'
                  className='-rotate-3 aspect-video mt-12 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
                />
              </div>
            </div>
            <div className='lg:order-first lg:row-span-2'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl'>
                About Pottwal Solutions: Tailored Web Solutions for Your
                Business
              </h1>
              <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
                <p>
                  Welcome to Pottwal Solutions - a web developer company that's
                  committed to delivering high-quality solutions to our clients.
                  At Pottwal Solutions, we pride ourselves on our team of
                  talented developers who are passionate about creating
                  innovative web solutions that are tailored to our clients'
                  needs.
                </p>
                <p>
                  The name Pottwal Solutions is inspired by the sperm whale, one
                  of the most fascinating creatures in the world. Sperm whales
                  are known for their intelligence, adaptability, and ability to
                  communicate effectively with each other. Similarly, at Pottwal
                  Solutions, we bring these same qualities to our work. We are
                  intelligent problem-solvers who are always willing to adapt to
                  new challenges and work collaboratively to deliver the best
                  solutions possible.
                </p>
                <p>
                  Our mission at Pottwal Solutions is to create websites and web
                  applications that not only meet our clients' needs but exceed
                  their expectations. We believe that every business is unique
                  and deserves a tailored solution that is specific to their
                  needs. That's why we take the time to listen to our clients,
                  understand their business, and develop solutions that are
                  customized to their specific needs.
                </p>
                <p>
                  Our team of skilled developers are experts in various
                  programming languages, content management systems, and web
                  technologies. We work with the latest technologies and tools
                  to ensure that we create modern, responsive, and user-friendly
                  websites and applications that stand out from the crowd.
                </p>
                <p>
                  At Pottwal Solutions, we believe in transparency, honesty, and
                  open communication. We value our clients' trust, and we strive
                  to earn it by keeping them informed throughout the entire
                  development process. We take pride in delivering projects on
                  time and within budget, and we ensure that our clients are
                  completely satisfied with our work before we consider the
                  project complete.
                </p>
                <p>
                  We're passionate about creating tailored web solutions that
                  meet the unique needs of our clients. If you're looking for a
                  web developer who can help take your business to the next
                  level, get in touch with us today for a personalized quote.
                </p>
              </div>
            </div>
            <div className='lg:pl-20'>
              <ul role='list'></ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
