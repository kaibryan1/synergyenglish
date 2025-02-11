// import styles from "./AccordianItem.module.scss";

// import { useState, useEffect, useRef } from "react";

// // Animations
// import { setInitialState, revealText, hideText } from "./AccordianAnimation";

// export default function AccordianItem({ accordian }) {
//   const bodyTextRef = useRef(null);
//   const accordianItemRef = useRef(null);
//   const [isExpand, setIsExpand] = useState(false);

//   useEffect(() => {
//     if (!bodyTextRef.current) return;
//     setInitialState(bodyTextRef.current);
//   }, []);

//   const handleClick = () => {
//     isExpand
//       ? hideText(bodyTextRef.current, accordianItemRef.current)
//       : revealText(bodyTextRef.current, accordianItemRef.current);
//     setIsExpand((prev) => !prev);
//   };
//   return (
//     <button
//       ref={accordianItemRef}
//       className={styles.accordian__item}
//       onClick={handleClick}
//     >
//       <div className={styles.accordian__header}>
//         <h4 className="title">{accordian.title}</h4>
//         <div className={styles.accordian__navBtn}>
//           {!isExpand ? (
//             <span className={styles.accordian__navBtn__open}>
//               <svg
//                 width="16"
//                 height="17"
//                 viewBox="0 0 16 17"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g clipPath="url(#clip0_86_102)">
//                   <path
//                     d="M8 3.83335L8 13.1667"
//                     stroke="black"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M3.3335 8.49998L12.6668 8.49998"
//                     stroke="black"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_86_102">
//                     <rect
//                       width="16"
//                       height="16"
//                       fill="white"
//                       transform="translate(0 0.5)"
//                     />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </span>
//           ) : (
//             <span className={styles.accordian__navBtn__minus}>
//               <svg
//                 width="16"
//                 height="17"
//                 viewBox="0 0 16 17"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g clipPath="url(#clip0_85_130)">
//                   <path
//                     d="M3.3335 8.5H12.6668"
//                     stroke="black"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_85_130">
//                     <rect
//                       width="16"
//                       height="16"
//                       fill="white"
//                       transform="translate(0 0.5)"
//                     />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </span>
//           )}
//         </div>
//       </div>
//       <div className={styles.accordian__body}>
//         <p ref={bodyTextRef}>{accordian.body}</p>
//       </div>
//     </button>
//   );
// }
