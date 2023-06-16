
import Compo from "../compo";
import styles from "./proj.module.css"


function Projects() {

    return(


        <section id="projects" style={{scrollBehavior:"smooth"}}>


        <div className={styles.mdiv}>


            <div>
                <h1 className={styles.projects}>Projects</h1>
            </div>

            <div>
                <h1 className={styles.done}>What I Have Done So Far?</h1>
            </div>

            <div className={styles.comp_container}>
                <Compo></Compo>
            </div>

           
            
          
        </div>

</section>

    )
    
}
export default Projects;