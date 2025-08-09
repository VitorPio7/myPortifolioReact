import styles from './css/sidebar.module.css';
import { motion } from "motion/react";

export default function SideBar({data,children}){
    return (
      <div>
        <motion.nav
          className={styles.sidebar}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration:0.4,
            scale:{type:"spring", visualDuration: 0.4, bounce: 0.3
            }}}
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
      </div>
    );
}