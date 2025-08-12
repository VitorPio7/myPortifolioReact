import styles from './css/header.module.css'
import { motion } from "motion/react";

export default function Header({data}){
  return (
    <header className={styles.headerBox}>
     <img src="logo.png" width="80px" />
      {data?.map((el, index) => {
        return (
          <motion.a
            key={index}
            href=""
            whileHover={{ scale: 1.09 }}
            whileTap={{ scale: 0.8 }}
          >
            <p>{el}</p>
          </motion.a>
        );
      })}
      <motion.button 
         whileHover={{ scale: 1.09 }} 
         whileTap={{ scale: 0.8 }}>
        Contact Creator
      </motion.button>
    </header>
  );
}