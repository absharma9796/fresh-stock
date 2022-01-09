import { Button } from '@components/reusable/Button'
import DarkModeButton from '@components/reusable/DarkModeButton'
import AppLogo from '@components/reusable/icons/AppLogo'
import Spinner from '@components/reusable/Spinner/Spinner'
import logger from '@utils/logger'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const { theme, setTheme } = useTheme();

  const router = useRouter();

  const [loadingStart, setloadingStart] = useState(false);
  const [loadingUsername, setloadingUsername] = useState(true);

  const [fsName, setfsName] = useState("");

  const handleStart = async () => {
    setloadingStart(true);
    window.localStorage.setItem("fs-name", fsName);
    setTimeout(() => {setloadingStart(false);router.push("/shop");}, 1000);
  }
  
  useEffect(() => {

    const initializeApp = async () => {
      const lastTheme = localStorage.getItem('theme');
      setTheme(lastTheme);
      const userName = window.localStorage.getItem("fs-name");
      logger.info("localStorage", userName);
      if(userName) {
        setfsName(userName);
        setTimeout(() => handleStart(), 0);
        return;
      }
      setloadingUsername(false);
    }
    initializeApp();
    return () => {}

  }, [theme]);

  return (
    <div
      className='overflow-x-hidden flex flex-col items-center bg-l-background dark:bg-d-background'
    >
      <Head>
        <title>Fresh Stock</title>
        <meta name="description" content="Your online fashion store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative flex w-full max-w-7xl items-center focus-within:w-screen h-16 px-10">
        <div className="absolute right-0">
          <DarkModeButton />
        </div>
      </header>
      <main 
        className={"w-screen grid place-items-center"}
        style={{
          height: 'calc(100vh - 64px)',
        }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            className='my-5'
            animate={{
              opacity: [0, 1],
              translateY: [0, -50]
            }}
          >
            <AppLogo 
              fontSize="3.5rem"
            />
          </motion.div>
          {
            loadingUsername ?
            <Spinner 
              size="32px"
              className='text-l-primary'
            />
              :
            <motion.div 
              animate={{
                opacity: [0, 1],
                translateY: [0, -25],
                transition: {
                  delay: 0.75,
                }
              }}
              className='flex flex-col items-center'
            >
              <div className="flex flex-col">
                <label htmlFor="fs-name" className='text-center text-lg font-medium text-slate-600 dark:text-slate-500'>
                  Welcome Shopper. Please enter your name
                </label>
                <input 
                  id="fs-name"
                  name="name"
                  value={fsName}
                  onChange={(e) => setfsName(e.target.value)}
                  className="my-5 bg-white px-10 py-4 text-center text-2xl text-l-primaryDark rounded outline-none focus-within:ring-2 focus-within:ring-l-primary selection:bg-l-primaryLight dark:selection:bg-l-primaryDark"
                  placeholder='Your name goes here'
                />
              </div>
              <div className="flex">
                <Button
                  sizeVariant='medium'
                  loading={loadingStart}
                  disabled={loadingStart || !fsName.length}
                  onClick={handleStart}
                >
                  {loadingStart ? "Getting Ready" :"Start Shopping"}
                </Button>
              </div>
            </motion.div>
          }
        </div>
      </main>
      <footer className={styles.footer + " w-full bg-slate-900 text-white"}>
        <span className='text-base'>
          Made with ❤️ by <a href="https://github.com/absharma9796">Abhishek</a>
        </span>
      </footer>
    </div>
  )
}

export default Home;
