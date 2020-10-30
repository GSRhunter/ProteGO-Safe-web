import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Button, Layout } from '../../../../components';
import * as Styled from './Explainer.styled';

const Explainer = ({ t, carouselRef, index, items, onClick, settings }) => {
  return (
    <Layout hideBackButton isGovFooter fullHeight noPadding>
      {index < 1 ? (
        <Styled.Title>{t('explainer_text1')}</Styled.Title>
      ) : (
        <Styled.Title>
          {t('explainer_text2')}
          <br />
          {t('explainer_text3')}
        </Styled.Title>
      )}
      <Styled.SliderWrapper>
        <Slider ref={carouselRef} {...settings}>
          {items}
        </Slider>
      </Styled.SliderWrapper>

      <Styled.ButtonWrapper>
        <Button onClick={onClick} label={t('button_next')} />
      </Styled.ButtonWrapper>
    </Layout>
  );
};

Explainer.propTypes = {
  // eslint-disable-next-line
  carouselRef: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line
  settings: PropTypes.object.isRequired
};

export default withTranslation()(Explainer);
