
import { motion } from "framer-motion"; // 導入 framer-motion 庫的 motion 組件

import { useState } from 'react'; // 導入 React 函數庫

const Test = () => {

  const [open, setOpen] = useState(false)

  const variants = {
    visible: (i) => ({ opacity: 1, x: 100, transition: { delay: i * 0.3 } }),
    hidden: { opacity: 0 }
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className='course'> {/* 創建一個包含 CSS 類名 'course' 的 div 元素 */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Test; // 導出 Test 組件
