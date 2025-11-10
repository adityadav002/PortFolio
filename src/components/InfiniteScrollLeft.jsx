import React from 'react'
import '../styles/Skills.css'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


function InfiniteScroll() {
  return (
    <>
    <div className="carousel">
        <div className="group">
            <div className="card"><FaReact /></div>
            <div className="card"><FaNode /></div>
            <div className="card"><FaHtml5 /></div>
            <div className="card"><FaCss3Alt /></div>
            <div className="card"><FaJs /></div>
            <div className="card"><FaDocker /></div>
            <div className="card"><FaPython /></div>
        </div>

        <div aria-hidden className="group">
            <div className="card"><FaReact /></div>
            <div className="card"><FaNode /></div>
            <div className="card"><FaHtml5 /></div>
            <div className="card"><FaCss3Alt /></div>
            <div className="card"><FaJs /></div>
            <div className="card"><FaDocker /></div>
            <div className="card"><FaPython /></div>
        </div>
    </div>
    </>
  )
}

export default InfiniteScroll