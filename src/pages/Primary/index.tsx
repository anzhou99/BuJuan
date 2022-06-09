import anime from 'animejs';
import { useRef } from 'react';
import './index.css';

const Primary = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef<HTMLButtonElement>(null);
  const expressionRef = useRef<HTMLSpanElement>(null);

  const faceBtnMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const mouseCoords = mainRef.current?.getBoundingClientRect();
    const mouseX = e.pageX - mainRef.current!.offsetLeft;
    const mouseY = e.pageY - mainRef.current!.offsetTop;

    anime({
      targets: faceRef.current,
      translateX: ((mouseX - mouseCoords!.width / 2) / mouseCoords!.width) * 30,
      translateY: ((mouseY - mouseCoords!.height / 2) / mouseCoords!.width) * 30,
      duration: 0.3,
      easing: 'easeOutQuad',
    });
    anime({
      targets: expressionRef.current,
      translateX: ((mouseX - mouseCoords!.width / 2) / mouseCoords!.width) * 25,
      translateY: ((mouseY - mouseCoords!.height / 2) / mouseCoords!.width) * 25,
      duration: 0.3,
      easing: 'easeOutQuad',
    });
  };

  const faceBtnMouseEnter = () => {
    anime({
      targets: faceRef.current,
      scale: 0.975,
      duration: 0.3,
    });
  };

  const faceBtnMouseLeave = () => {
    anime({
      targets: faceRef.current,
      translateX: 0,
      translateY: 0,
      scale: 1,
      duration: 0.3,
      easing: 'easeOutQuad',
    });
    anime({
      targets: expressionRef.current,
      translateX: 0,
      translateY: 0,
      scale: 1,
      duration: 0.3,
      easing: 'easeOutQuad',
    });
  };

  return (
    <div ref={mainRef} className="title-panel flex-center w-size h-size" data-tauri-drag-region>
      <button
        ref={faceRef}
        className="face-button inline-block relative align-middle border-0 outline-none cursor-pointer w-size h-size bg-my-face rounded-full shadow-[inset_2px_-4px_18px_#fd9744] group "
        onMouseMove={(e) => faceBtnMouseMove(e)}
        onMouseEnter={() => faceBtnMouseEnter()}
        onMouseLeave={() => faceBtnMouseLeave()}
      >
        <span
          ref={expressionRef}
          className="face-container relative block w-[40px] h-[20px] m-auto"
        >
          <span className="eye left-0"></span>
          <span className="eye left-8 "></span>
          <span className="mouth"></span>
        </span>
      </button>
    </div>
  );
};

export default Primary;
