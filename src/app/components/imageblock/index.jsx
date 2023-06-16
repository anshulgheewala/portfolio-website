'use client'
import React from 'react';
import Image from 'next/image';
import Typewriter from "typewriter-effect";
import styles from "./imageblock.module.css"
import Link from 'next/link';


function Imageblock() {


   




    return (    
        <section id='home'>

        <div className={styles.maindiv}>
        <div className="w-full h-auto flex flex-row  text-white font-bold p-auto items-center">
            <div className='flex flex-row w-full'>

                <div className={styles.textdiv}>
                    <h1 className={styles.nameline}>Hello, I am <span className={styles.name}>&nbsp; Anshul Gheewala,</span></h1>
                    <h3 className={styles.line}>I Am A Passionate</h3>

                    <h1 className={styles.typer}>
                        <Typewriter options={{
                            strings: [
                                "Android Developer.",
                                "Web Developer.",
                                "Nextjs Developer.",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 70,
                        }}>

                        </Typewriter></h1>
                </div>
            </div>

            <Image src={'/images/img.png'} height={10000} width={10000} className={styles.image}></Image>

            
        </div>


       <div className={styles.buttondiv}>
        <button className='bg-transparent border-2 text-white p-4 rounded-lg font-semibold  hover:translate-x-0 hover:-translate-y-2 hover:ease-in-out duration-300 w-40' onClick={Alert}>Download CV</button>
         <Link href={"https://github.com/anshulgheewala"} className='bg-blue-600  text-white font-semibold rounded-lg hover:translate-x-0 hover:-translate-y-2 hover:ease-in-out duration-300 w-40 h-fit' ><button className='p-5 h-auto w-full'> Visit GitHub </button></Link>
       </div>




        </div>

        </section>


        




    )



}
function Alert() {
    alert("Sorry Currently UnAvailable");
  }
export default Imageblock;