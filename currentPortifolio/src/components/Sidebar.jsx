import styles from './css/sidebar.module.css';
import { motion } from "motion/react";

export default function SideBar({data,children}){
    return (
      <div>
        <nav className={styles.sidebar}>
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
        </nav>
      </div>
    );
}