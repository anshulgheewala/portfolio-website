import Image from "next/image";
import styles from "./experience.module.css"
import Link from "next/link";
function Experience() {


   


    const exp = [
        {
            id: 1,
            place: "Intern At The Special Character (virtual mode)",
            show:"/images/tsc_internship_certificate.jpg"
        },
        {
            id: 2,
            place: "Intern At The Oasis Infobyte (virtual mode)",
            show:"/images/oasis.jpg"
        },
    ]

    return (

        <section id="exp" style={{scrollBehavior:"smooth"}}>

        <div className={styles.md}>

            <div className={styles.exp}>Experience</div>
            <div className={styles.where}>Where I have Worked?</div>



            {exp.map((x) => (

                <Link href={x.show}>

                <div className={styles.container1}>




                      <div className={styles.container2}>


                        <Image src={"/images/certificate.svg"} height={100} width={100} className={styles.image}></Image>

                        <p className={styles.place}>{x.place}</p>


                        <span className={styles.arrow}>&#x27A4;</span>



                    </div>

                    <hr className={styles.line} />

                </div>

                </Link>





            ))}

        </div>
        </section>

    )

}

export default Experience;