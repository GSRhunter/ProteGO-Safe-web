import React from 'react';
import { withTranslation } from 'react-i18next';

import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Container, Content, View } from '../../theme/grid';
import { List, ListItem, Paragraph } from '../../theme/typography';
import { Title } from './HowItWorks.styled';

const HowItWorks = ({ t }) => {
  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Title>{t('how_it_works_text1')}</Title>
          <Paragraph>
            <strong>{t('how_it_works_text2')}</strong>
            {t('how_it_works_text3')}
          </Paragraph>
          <Paragraph>{t('how_it_works_text4')}</Paragraph>
          <Paragraph>{t('how_it_works_text5')}</Paragraph>
          <Paragraph>{t('how_it_works_text6')}</Paragraph>
          <List>
            <ListItem>
              <strong>{t('how_it_works_text7')}</strong>
              {t('how_it_works_text8')}
            </ListItem>
            <ListItem>
              <strong>{t('how_it_works_text9')}</strong>
              {t('how_it_works_text10')}
            </ListItem>
            <ListItem>
              <strong>{t('how_it_works_text11')}</strong>
              {t('how_it_works_text12')}
            </ListItem>
            <ListItem>
              <strong>{t('how_it_works_text13')}</strong>
              {t('how_it_works_text14')}
            </ListItem>
            <ListItem>
              <strong>{t('how_it_works_text15')}</strong>
              {t('how_it_works_text16')}
            </ListItem>
          </List>
          <Paragraph>
            <strong>{t('how_it_works_text17')}</strong>
          </Paragraph>
          <Paragraph>{t('how_it_works_text18')}</Paragraph>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default withTranslation()(HowItWorks);
