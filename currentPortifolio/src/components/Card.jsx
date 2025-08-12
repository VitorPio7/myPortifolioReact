import style from "./css/card.module.css";
import { color, motion } from "motion/react";
export default function Card(){
    return (
      
        <div className={style.general}>
          <img src="eu.jpg" alt="my picture" width="108px" />
          <h1>
            Fullstack Developer | Building High-Performance Web Applications
          </h1>
          <p>
            With expertise across the entire development lifecycle, I build and
            optimize scalable applications that solve real-world problems and
            deliver an exceptional user experience.
          </p>
          <div className={style.buttons}>
            <div className={style.buttonContainer}>
              <motion.button
                className={style.socialMedia}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.8 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Linkedin
              </motion.button>
            </div>
            <div className={style.buttonContainer}>
              <motion.button
                className={style.socialMedia}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.8 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Github
              </motion.button>
            </div>
          </div>
        </div>
    );
}