import Skills2 from "../skils2";
import styles from "./skills.module.css"
import Image from "next/image";
function Skills() {


    return (

        <section id="skills" style={{scrollBehavior:"smooth"}}>


        <div className={styles.maindiv}>



            <span className={styles.skilltag}>Skills</span>
            <h1 className={styles.capable}>What I am Capable of?</h1>


            <div className={styles.img_container}>

                <Image src={"/images/html5.svg"} height={100} width={100} className={styles.imagetag}></Image>
                <Image src={"/images/css3.svg"} height={100} width={100} className={styles.imagetag}></Image>
                <Image src={"/images/tailwind-css.svg"} height={100} width={100} className={styles.imagetag}></Image>
                <Image src={"/images/nextjs.svg"} height={100} width={100}className={styles.imagetag}></Image>
                <Image src={"/images/java.svg"} height={100} width={100} className={styles.imagetag}></Image>
                <Image src={"/images/android.svg"} height={100} width={100} className={styles.imagetag}></Image>

            </div>

            {/* <div className="h-auto w-full flex flex-col justify-center items-center m-4 space-y-12">
                <div className="flex flex-row space-x-48">
                <Skills2></Skills2>
                <Skills2></Skills2>
                <Skills2></Skills2>
                </div>
                <div className="flex flex-row space-x-48">
                <Skills2></Skills2>
                <Skills2></Skills2>
                <Skills2></Skills2>
                </div>
               
                
            </div> */}
            

        </div>

        </section>








    )




}
export default Skills;