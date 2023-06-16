import Image from "next/image";
import clsx from "clsx";
import styles from "./compo.module.css"
import Link from "next/link";

function Compo() {

    const details=[

        {
            id: 1,
            src:"/images/newsapp.jpg",
            heading:"E Akhbaar",
            info: "An Android news app that shows trending news by some famous channels",
            link:"https://play.google.com/store/apps/details?id=com.ag.e_akhbaar"
        },
        {
            id: 2,
            src:"/images/portfolio.png",
            heading:"My Portfolio Website",
            info:"A Website that gives details about myself ",
            link:""
        },
        {
            id: 3,
            src:"/images/logo.jpg",
            heading:"Scratch and win",
            info:"An Android Game to try your luck and win cash",
            link:"https://play.google.com/store/apps/details?id=com.ag.scratchwinrealcash"
        },
        {
            id: 4,
            src:"/images/tourlogo.jpg",
            heading:"My Tourist Guide App (Team Work)",
            info:"Gives information about some of the cities of Gujarat",
            link:"https://github.com/anshulgheewala/MyTouristGuideApp/tree/main"
        },

    ]
        
    
    return(
        
        <div className={styles.maindiv}>

            {details.map((x)=>

                <Link href={x.link} className="flex justify-center items-center h-fit w-fit">

<div className={styles.divbox} key={x.id} id="group">
                <div className="w-full rounded-full">
                    <Image src={x.src} height={1000} width={1000} className={styles.image}></Image>
                </div>

                <div className={styles.text_container}>
                    <h1 className={styles.heading}>{x.heading}</h1>
                    <p className={styles.info}>{x.info}</p>
                </div>
            </div>
            </Link>
             )}
               

        </div>
           

    )
    
}
export default Compo;