import styles from "./skills2.module.css";
function Skills2() {


    return(

        <div className={styles.md}>

            <div className={styles.div2}>

                    {/* outer */}
                <div className={styles.outer}> 

                        {/* inner */}
                    <div className={styles.inner}>
                        {/* number */}
                        <div className={styles.num}>
                            <h1>HTML</h1>
                            <p>65%</p>

                        </div>
                    </div>

                </div>


                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle className={styles.circle}cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>








            </div>



        </div>







    )
    
}
export default Skills2;