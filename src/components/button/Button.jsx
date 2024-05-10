'use client'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; // Импортируем стили

const Button = ({
  title = '+380 00 000 00 00',
  width = '228px',
  color,
  background,
  backgroundHover,
  boxShadow,
  boxShadowHover,
  onClick,
  className,
  style,
  ...restProps
}) => {
  const buttonClass = [styles.button, className].filter(Boolean).join(' ');

  const [isHovered, setIsHovered] = React.useState(false);

  const hoverStyle = isHovered
    ? { background: backgroundHover, boxShadow: boxShadowHover }
    : {};

  const baseStyle = {
    color,
    background,
    boxShadow, // Добавляем первоначальный boxShadow
    width,
    ...style,
    transition: 'all 0.3s ease', // Обеспечиваем плавный переход
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      type="button"
      className={buttonClass}
      style={{ ...baseStyle, ...hoverStyle }} // Применяем стили с учетом hover
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.string.isRequired,
  backgroundHover: PropTypes.string.isRequired,
  boxShadow: PropTypes.string.isRequired, // Новое свойство
  boxShadowHover: PropTypes.string.isRequired, // Новое свойство
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;


