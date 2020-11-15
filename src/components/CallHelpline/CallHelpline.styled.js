import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import { ReactComponent as ContactIcon } from '../../assets/img/icons/icon-contact.svg';

const resolveDefaultColor = defaultColor => ({ color }) =>
  color || defaultColor;

export const Button = styled.a`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  max-width: 384px;
  margin-top: 24px;
  padding: 12px 18px 9px;
  border-radius: 4px;
  background-color: ${Color.white};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.65);
  cursor: pointer;
  z-index: 98;
  @media screen and (max-width: 370px) {
    padding: 10px 14px;
  }
  &.small {
    position: fixed;
    right: 15px;
    bottom: 60px;
    bottom: calc(60px + constant(safe-area-inset-bottom));
    bottom: calc(60px + env(safe-area-inset-bottom));
    justify-content: center;
    width: 66px;
    height: 66px;
    padding: 16px;
    border-radius: 50%;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.75);
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 78px);
  font-size: 16px;
  line-height: 1.4;
  font-weight: ${FontWeight.Bold};
  color: ${resolveDefaultColor(Color.lightBlack)};
  @media screen and (max-width: 370px) {
    width: calc(100% - 56px);
  }
  img {
    position: absolute;
    top: 50%;
    right: 0;
    height: 14px;
    width: 14px;
    margin-top: -7px;
  }
`;

export const Icon = styled(ContactIcon)`
  display: flex;
  width: 46px;
  height: 46px;
  margin-right: 28px;
  @media screen and (max-width: 370px) {
    width: 36px;
    height: 36px;
    margin-right: 20px;
  }
  &.small {
    width: 36px;
    height: 36px;
    margin-right: 0;
  }
`;

export const ArrowRight = styled.span`
  position: absolute;
  top: 50%;
  right: -6px;
  height: 12px;
  width: 12px;
  margin-top: -8px;
  z-index: 10;
  > svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
