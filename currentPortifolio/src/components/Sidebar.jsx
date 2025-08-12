import styles from './css/sidebar.module.css';
import { AnimatePresence, motion } from "motion/react";

export default function SideBar({data,children}){
    return (
      <AnimatePresence>
        <motion.nav className={styles.sidebar}
         key="box"
         initial={{opacity:0, scale:0}}
         animate={{opacity:1,scale:1}}
         exit={{opacity:0, scale:0}}
        >
          {children}
          <ul>
            {data.map((el, index) => {
              return (
                <motion.li
                  key={index}
                  href=""
                  whileHover={{ scale: 1.09 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href={"#" + el}>{el}</a>
                </motion.li>
              );
            })}
          </ul>
          <motion.button whileHover={{ scale: 1.09 }} whileTap={{ scale: 0.8 }}>
            Contact
          </motion.button>
        </motion.nav>
      </AnimatePresence>
    );
}