import Link from "next/link";
import styles from "./contact.module.css"
import Image from "next/image";
function Contact () {

    return(

        <section id="contact">
        <div className={styles.container}>


           <div className={styles.maindiv}>
           <div>
                <h1 className={styles.contact}>Contact</h1>
            </div>

            <div>
                <h1 className={styles.touch}>Get in touch</h1>
            </div>
             <div>
                <p className={styles.email}>agdev2905@gmail.com</p>
             </div>
             <div className={styles.img_container}>

             <Link href="https://instagram.com/anshulgheewala75?igshid=ZDc4ODBmNjlmNQ==">
                <Image src={"/images/instagram.svg"} height={40} width={40} className={styles.image}></Image>
             </Link>


             <Link href={"https://www.linkedin.com/in/anshul-gheewala-66b261235"}>
             <Image src={"/images/linkedin.svg"} height={40} width={40} className={styles.image}></Image>
             </Link>
                
             </div>

             <div>
                <p className={styles.copyright}>Copyright <span>	&#169; </span> 2023. Designed and Developed By Anshul Gheewala | All Rights Reserved</p>
             </div>
           </div>



    </div>

    </section>
    )
    
}
export default Contact;