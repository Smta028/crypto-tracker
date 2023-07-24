import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";

function MainComponent() {
    return (
        <div className="flex-info">
            <div className="left-Component">
                <motion.h1 className="track-crypto-heading"
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5}}
                >Track Crypto</motion.h1>
                <motion.h1 className="real-time-heading"
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5,delay:0.5}}
                >Real Time.</motion.h1>
                <motion.p className="info-text"
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5,delay:0.75}}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</motion.p>

                <motion.div className="btn-flex"
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5,delay:1.5}}
                >
                    <Button text={"Dashboard"} />
                    <Button text={"Share"} outlined={true} />

                </motion.div>

            </div>
            <div className="phone-Container">
                <img src={gradient} className="gradient-img"  />
                <motion.img src={iphone} className="iphone-img" 
                initial={{ y:-10 }}
                animate={{ y:10 }}
                transition={{
                    type:"smooth",
                    repeatType:"mirror",
                    duration:2,
                    repeat:Infinity,
                }}
                />
                
   

            </div>
        </div>
    )
}

export default MainComponent;