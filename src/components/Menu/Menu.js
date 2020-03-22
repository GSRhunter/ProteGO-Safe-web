import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserIcon from '../../assets/img/icons/user-white.svg';
import './Menu.scss';
import useMenuContext from '../../hooks/useMenuContext';

const Menu = ({ items, userName }) => {
  const { visible, startHiding } = useMenuContext();
  const handleClose = () => startHiding();

  const renderItems = items.map(item => {
    const { bottom, bold, disable, icon, path, slug, title } = item;

    const isBottom = bottom ? 'bottom' : '';
    const isBold = bold ? 'text-bold' : '';
    const isDisable = disable ? 'disable' : '';

    return (
      <li className={`menu__item ${isBottom} ${isDisable}`} key={slug}>
        <Link
          className={`menu__item__link ${isBold} ${isDisable}`}
          onClick={handleClose}
          to={path}
        >
          <img className="menu__item__icon" src={icon} alt={title} />
          {title}
        </Link>
      </li>
    );
  });

  return (
    <>
      {visible && <div className="menu__overlay" onClick={handleClose} />}
      <div className="menu menu__wrapper">
        <div className="menu__user">
          <img src={UserIcon} alt="Użytkownik" />
          <p>{userName}</p>
        </div>
        <ul className="menu__items">{renderItems}</ul>
      </div>
    </>
  );
};

Menu.defaultProps = {
  items: [],
  userName: undefined
};

Menu.propTypes = {
  items: PropTypes.array,
  userName: PropTypes.string
};

export default Menu;
