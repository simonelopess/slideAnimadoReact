import React from 'react';
import styles from '../Slide.module.css';


const Slide = ({slides}) => {

  const [active, setActive] = React.useState(0); //slide posição inicial
  const [position, setPosition] = React.useState(0); //posição do slide após animação
  const contentRef = React.useRef(); //criação de referencia para pegar o tamanho do container

  React.useEffect(()=>{
    const {width} = contentRef.current.getBoundingClientRect()
    setPosition(-(width * active))
  }, [active])

  function slidePrev(){
    if(active > 0 ){
      setActive(active-1)
    }
  };
  function slideNext(){
    if(active <slides.length - 1){
      setActive(active+1)
    }
  };



  return(
    <section className={styles.container}>
      <div ref={contentRef} className={styles.content} style={{transform: `translateX(${position}px)`}}>
       {slides.map(slide => 
        <div key={slide.id} className={styles.item}>{slide.text}</div>
       )}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
   </section>)
}

export default Slide;