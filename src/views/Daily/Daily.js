import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { daysDetailsPropType } from '../../utils/calendar';
import { Button, Layout, T } from '../../components';
import {
  DiaryHistory,
  DiaryLabel,
  DiaryListItem,
  Diarylist,
  NotebookIcon,
  Title
} from './Daily.styled';

import arrowRight from '../../assets/img/icons/angle-right.svg';

const Daily = ({ t, goToHistory, onFill, today, previousDays }) => {
  const renderDairyDays = previousDays.map(_obj => (
    <DiaryListItem
      key={_obj.timestamp}
      onClick={() => goToHistory(_obj.timestamp)}
    >
      <span>
        {t('daily_text6')}
        <br />
        {_obj.dayWeek}&nbsp;({_obj.day}&nbsp;r.)
      </span>

      <img src={arrowRight} alt="arrow" />
    </DiaryListItem>
  ));

  return (
    <Layout isNavigation>
      <Title>
        <T i18nKey="daily_text1" />
      </Title>
      <Button onClick={onFill} type="border" icon={<NotebookIcon />}>
        <T i18nKey="daily_text3" variables={{ date: today }} />
      </Button>
      <DiaryHistory>
        <DiaryLabel>{t('daily_text5')}</DiaryLabel>
        <Diarylist>{renderDairyDays}</Diarylist>
      </DiaryHistory>
    </Layout>
  );
};

Daily.propTypes = {
  goToHistory: PropTypes.func.isRequired,
  onFill: PropTypes.func.isRequired,
  today: PropTypes.string.isRequired,
  previousDays: daysDetailsPropType
};

export default withTranslation()(Daily);
