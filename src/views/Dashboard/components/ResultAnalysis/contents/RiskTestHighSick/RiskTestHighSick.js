import React from 'react';
import { withTranslation } from 'react-i18next';
import { ListStats } from '../../components';
import { Button, T } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './RiskTestHighSick.styled';

const RiskTestHighSick = ({ currentState, dateLastRiskTest, dateRiskMonitoring, isInfected, onClick, t }) => (
  <Styled.RiskTestHighSick>
    <ListStats isInfected={isInfected} dateRiskMonitoring={dateRiskMonitoring} dateLastRiskTest={dateLastRiskTest} />

    <Styled.Text>
      <T i18nKey="result_analysis_text_23" variables={{ date: dateLastRiskTest, currentState: t(currentState) }} />
    </Styled.Text>

    <Styled.ButtonWrapper>
      <Button onClick={onClick} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_24" />
      </Button>
    </Styled.ButtonWrapper>
  </Styled.RiskTestHighSick>
);

export default withTranslation()(RiskTestHighSick);
