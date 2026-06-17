'use client';

import React, { useState, useEffect } from 'react';
import styles from './CharacterScene.module.css';

export const CharacterScene = () => {
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const thoughts = [
    "Are you looking to Digitalize your business?",
    "You are at the right place. 🚀"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setThoughtIndex(prev => (prev === 0 ? 1 : 0));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sceneWrapper}>
      {/* Thought bubble */}
      <div className={styles.thoughtBubble} key={thoughtIndex}>
        <p className={styles.thoughtText}>{thoughts[thoughtIndex]}</p>
        <div className={styles.tailDot1}></div>
        <div className={styles.tailDot2}></div>
        <div className={styles.tailDot3}></div>
      </div>

      {/* SVG Character */}
      <svg
        viewBox="0 0 400 500"
        width="360"
        height="450"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.characterSvg}
      >
        {/* Background blob */}
        <ellipse cx="200" cy="290" rx="180" ry="190" fill="#f5ebe6" />
        <path d="M80,180 Q30,250 60,350 Q90,430 200,440 Q310,450 350,360 Q390,270 350,180 Q310,100 200,110 Q90,120 80,180Z" fill="#f5ebe6"/>

        {/* === BODY === */}
        {/* Shorts / Lower body - mustard yellow */}
        <rect x="140" y="330" width="120" height="90" rx="12" fill="#e8b84b"/>
        {/* Shorts leg left */}
        <rect x="140" y="370" width="55" height="55" rx="8" fill="#e8b84b"/>
        {/* Shorts leg right */}
        <rect x="205" y="370" width="55" height="55" rx="8" fill="#e8b84b"/>
        {/* Shorts center seam */}
        <line x1="200" y1="375" x2="200" y2="415" stroke="#d4a030" strokeWidth="2"/>
        {/* Shorts pocket detail */}
        <rect x="155" y="355" width="30" height="2" rx="1" fill="#d4a030" opacity="0.5"/>

        {/* T-shirt body - red */}
        <rect x="130" y="240" width="140" height="110" rx="18" fill="#c44b4b"/>
        {/* Shirt overlap to cover shorts gap */}
        <rect x="130" y="320" width="140" height="30" rx="0" fill="#c44b4b"/>
        {/* Shirt crease/shadow detail */}
        <path d="M175,285 Q195,310 175,335" stroke="#a83a3a" strokeWidth="2" fill="none" opacity="0.5"/>

        {/* === ARMS === */}
        {/* RIGHT ARM (viewer's left) - raised waving arm */}
        {/* Sleeve */}
        <g className={styles.wavingArm}>
          <path d="M130,245 Q90,240 80,210 Q72,185 95,175 Q115,168 125,200 Q130,225 130,245Z" fill="#c44b4b"/>
          {/* Upper arm skin */}
          <rect x="72" y="165" width="30" height="65" rx="15" fill="#f5c5a3" transform="rotate(-15, 87, 197)"/>
          {/* Forearm */}
          <rect x="68" y="118" width="28" height="60" rx="14" fill="#f5c5a3" transform="rotate(10, 82, 148)"/>
          {/* Hand - open palm waving */}
          <ellipse cx="74" cy="108" rx="16" ry="13" fill="#f5c5a3"/>
          {/* Fingers */}
          <rect x="62" y="88" width="8" height="20" rx="4" fill="#f5c5a3"/>
          <rect x="72" y="84" width="8" height="24" rx="4" fill="#f5c5a3"/>
          <rect x="82" y="86" width="8" height="22" rx="4" fill="#f5c5a3"/>
          <rect x="91" y="90" width="7" height="18" rx="3.5" fill="#f5c5a3"/>
          {/* Thumb */}
          <rect x="52" y="100" width="13" height="7" rx="3.5" fill="#f5c5a3" transform="rotate(-30,58,103)"/>
        </g>

        {/* LEFT ARM (viewer's right) - on hip */}
        {/* Sleeve */}
        <path d="M270,245 Q310,240 318,215 Q325,193 305,182 Q285,172 275,205 Q270,225 270,245Z" fill="#c44b4b"/>
        {/* Arm skin */}
        <rect x="296" y="175" width="30" height="70" rx="15" fill="#f5c5a3" transform="rotate(20, 311, 210)"/>
        {/* Forearm going to hip */}
        <path d="M308,230 Q325,255 315,280 Q308,295 295,295" stroke="#f5c5a3" strokeWidth="26" strokeLinecap="round" fill="none"/>

        {/* === NECK === */}
        <rect x="185" y="200" width="30" height="42" rx="10" fill="#f5c5a3"/>
        {/* Collar */}
        <path d="M165,245 Q200,260 235,245" stroke="#e8b84b" strokeWidth="8" fill="none" strokeLinecap="round"/>

        {/* === HEAD === */}
        {/* Hair back */}
        <ellipse cx="200" cy="155" rx="58" ry="62" fill="#4a2520"/>

        {/* Ears */}
        <ellipse cx="145" cy="178" rx="11" ry="14" fill="#f5c5a3"/>
        <ellipse cx="255" cy="178" rx="11" ry="14" fill="#f5c5a3"/>
        {/* Inner ear */}
        <ellipse cx="145" cy="178" rx="6" ry="9" fill="#e8aa88"/>
        <ellipse cx="255" cy="178" rx="6" ry="9" fill="#e8aa88"/>

        {/* Face / Head */}
        <ellipse cx="200" cy="178" rx="52" ry="58" fill="#f5c5a3"/>

        {/* Hair front - side swept style */}
        <path d="M148,138 Q160,100 200,105 Q240,108 252,138 Q240,118 200,120 Q168,122 148,138Z" fill="#4a2520"/>
        {/* Hair side sweep to the left */}
        <path d="M148,138 Q140,125 148,110 Q155,98 165,105 Q152,115 155,132Z" fill="#4a2520"/>
        {/* Hair top swoop */}
        <path d="M165,105 Q190,90 215,100 Q200,95 190,108Z" fill="#5a3025"/>

        {/* === FACE FEATURES === */}
        {/* Eyebrows */}
        <path d="M175,158 Q183,153 191,157" stroke="#4a2520" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M209,157 Q217,153 225,158" stroke="#4a2520" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        {/* Eyes */}
        <ellipse cx="183" cy="168" rx="6" ry="7" fill="#4a2520"/>
        <ellipse cx="217" cy="168" rx="6" ry="7" fill="#4a2520"/>
        {/* Eye highlights */}
        <circle cx="186" cy="165" r="2" fill="white"/>
        <circle cx="220" cy="165" r="2" fill="white"/>

        {/* Nose */}
        <path d="M198,178 Q200,183 202,178" stroke="#e8aa88" strokeWidth="2" fill="none" strokeLinecap="round"/>

        {/* Rosy cheeks */}
        <ellipse cx="168" cy="182" rx="13" ry="8" fill="#f0a0a0" opacity="0.5"/>
        <ellipse cx="232" cy="182" rx="13" ry="8" fill="#f0a0a0" opacity="0.5"/>

        {/* Smile */}
        <path d="M186,192 Q200,202 214,192" stroke="#c06050" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      </svg>

      {/* Ground shadow */}
      <div className={styles.shadow}></div>
    </div>
  );
};
