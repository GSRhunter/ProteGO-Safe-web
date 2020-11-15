import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { Paragraph } from '../../theme/typography';

const handleType = type => {
  switch (type) {
    case 'dialog':
      return '30px 40px 20px 40px';
    case 'inner-content':
      return '30px 20px 20px';
    case 'normal':
      return '30px 40px';
    default:
      return '30px 40px';
  }
};

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 999;
  padding-top: 60px;
  padding-bottom: 70px;
  overflow-y: auto;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${Color.darkGray};
  opacity: 0.5;
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 34px);
  height: auto;
  max-width: 420px;
  margin: 0 auto;
  padding: ${({ type }) => handleType(type)};

  grid-area: wrapper;
  align-self: center;
  background-color: ${Color.white};
  box-shadow: 5px 5px 15px #00000026;
  border-radius: 4px;
  z-index: 2;
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  color: ${Color.black};
`;

export const Text = styled(Paragraph)`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 0 !important;
`;

export const Footer = styled.div`
  width: 100%;
  margin: 30px 0 0;
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Description = styled.div`
  display: block;
  width: 100%;
  margin-top: 12px;
  overflow-x: hidden;
`;
