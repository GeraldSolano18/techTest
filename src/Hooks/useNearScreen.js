// import { useEffect, useState, useRef } 
// from "react"
// export function useNearScreen() {
//   const [show, setShow] = useState(false) //No se muestra por defecto
  
  
//   const element = useRef(null)
//   useEffect(() => {
//     const observer = new window.IntersectionObserver(function (entries) {
//       console.log(entries)
//       const { isIntersecting } = entries[0]
//       if (isIntersecting) {
//         setShow(true)
//         observer.disconnect()
//       }
//     })
//     observer.observe(element.current)
//   }, [element])


//   return [show, element]
// }
