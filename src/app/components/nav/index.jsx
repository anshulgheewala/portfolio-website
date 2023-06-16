'use client'
import Link from "next/link";
import styles from "./navbar.module.css"
import React from "react";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";




function Navbar() {

    return (
        <div className="flex h-fit w-auto
        
        
        ">
            {/* blue-600 mt-1 */}
            <div className={styles.main}>


                <div className=" h-16 w-auto flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg"  className={styles.logo} viewBox="0 0 200 50" fill="white">
  <text x="40%" y="50%" dominant-baseline="middle" text-anchor="middle"  font-family="Arial, sans-serif">Anshul.in</text>
</svg>

                </div>

                <div className="flex flex-1 justify-end">


                    <div className={styles.container}>



                        <input type="checkbox" className={styles.cb} id="checkbox" onChange={resp} />
                        <label htmlFor={"checkbox"} className={styles.label}>
                            &#9776;
                        </label>
                    </div>


                    <ul className={styles.list_container} id="listcont">

                        <li>
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                offset={-20}
                                className={styles.list_item}
                                activeClass={styles.active}
                            >Home</ScrollLink>
                        </li>


                        <li>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-100}
                                className={styles.list_item}
                                activeClass={styles.active}
                            >About</ScrollLink>
                        </li>


                        <li>
                            <ScrollLink
                                to="skills"
                                smooth={true}
                                duration={500}
                                offset={-100}
                                className={styles.list_item}
                                activeClass={styles.active}
                            >Skills</ScrollLink>
                        </li>

                        <li>
                            <ScrollLink
                                to="projects"
                                smooth={true}
                                duration={500}
                                offset={0}
                                className={styles.list_item}
                                activeClass={styles.active}
                            >Projects</ScrollLink>
                        </li>

                        <li>
                            <ScrollLink
                                to="exp"
                                smooth={true}
                                duration={500}
                                offset={-100}
                                className={styles.list_item}
                                activeClass={styles.active}
                            >Experience</ScrollLink>
                        </li>

                        <li>
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                className={styles.list_item}
                                activeClass={styles.active}
                            >Contact</ScrollLink>
                        </li>



                        {/* <Link href="#home" scroll={false} ><li>Home</li></Link>
                    <Link href="#about" scroll={false} ><li>About</li></Link>
                    <Link href="#skills" scroll={false} ><li>Skills</li></Link>
                    <Link href="#projects" scroll={false} ><li>Projects</li></Link>
                    <Link href="#exp" scroll={false}><li>Experience</li></Link>
                    <Link href="#contact" scroll={false}><li>Contact</li></Link> */}




                    </ul>
                </div>










            </div>

        </div>
    );

    // function resp() {
    //     var x = document.getElementById('listcont');

    //     if (document.getElementById('checkbox').checked) {
    //         // x.className={styles.cb};



    //         x.className = " block relative w-1/2 h-screen bg-blue-300  flex flex-col transition-opacity duration-700 p-8 shadow-3xl "
    //         document.body.style.overflow = "hidden";


    //         document.body.addEventListener("click", function (event) {
    //             // Check if the clicked element is outside the hamburger menu
    //             if (event) {
    //                 // Close the hamburger menu
    //                 document.getElementById("checkbox").checked = false;

    //                 if (document.getElementById("checkbox").checked) {
    //                      x.className = " block relative w-1/2 h-screen bg-blue-300  flex flex-col transition-opacity duration-700 p-8 shadow-3xl "
    //                     document.body.style.overflow = "hidden";
                    
    //                 }
    //                 else{
    //                     x.className = "hidden"
    //                     document.body.style.overflow = "auto";
    //                 }


                   

                    

    //             }
    //         });



















    //     }



    //     //     if ( x.className===" block relative w-1/2 h-screen bg-blue-300  flex flex-col transition-opacity duration-700 p-8 shadow-3xl ") {
    //     //         showmenu=true;

    //     //         window.addEventListener('click',()=>{

    //     //             showmenu=false;
    //     //             x.className='hidden' 
    //     //    })

    //     else {
    //         x.className = "hidden"
    //         document.body.style.overflow = "auto";

    //     }

    //     document.body.addEventListener("click", function (event) {
    //         // Check if the clicked element is outside the hamburger menu
    //         if (event) {
    //             // Close the hamburger menu
    //             document.getElementById("checkbox").checked = false;
    //         }
    //     });


    function resp() {
        var y=document.getElementById('label');
        var x = document.getElementById('listcont');
       
      
        if (document.getElementById('checkbox').checked) {
          x.className = styles.drawer;
          document.body.style.overflow = "hidden";
        
        
         
          
        } else {
          x.className = "hidden";
          document.body.style.overflow = "auto";
         
        }

        

        
      
        document.body.addEventListener("click", function (event) {
          // Check if the clicked element is outside the hamburger menu
          if (event && !event.target.closest("#checkbox")) {
            document.getElementById("checkbox").checked = false;
            x.className = styles.list_container;
            document.body.style.overflow = "auto";
          }
          
        });

        
      }
      
    
    












    }





export default Navbar;