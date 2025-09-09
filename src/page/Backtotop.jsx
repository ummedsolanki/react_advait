import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledWrapper visible={visible}>
      <button className="button" onClick={scrollToTop}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: ${props => (props.visible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.3s ease, transform 0.3s ease;

  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(7, 134, 114, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition: transform 0.3s ease;
  }

  .svgIcon path {
    fill: white;
  }
.button:hover .svgIcon {
  fill: black;
}
  .button:hover {
    width: 50px;
    border-radius: 50px;
    background-color:rgba(7, 134, 114, 1);
    align-items: center;
  }

  .button:hover .svgIcon {
    // transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: " ";
    color: white;
    font-size: 0px;
    transition: font-size 0.3s ease, opacity 0.3s ease, bottom 0.3s ease;
    opacity: 0;
  }

  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: 15px;
    .button {
      width: 40px;
      height: 40px;
    }
    .button:hover {
      width: 120px;
    }
  }
`;

export default Button;
