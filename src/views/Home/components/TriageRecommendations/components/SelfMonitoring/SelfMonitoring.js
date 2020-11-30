import React from 'react';
import { withTranslation } from 'react-i18next';
import { Collapse, T } from '../../../../../../components';

const SelfMonitoring = ({ t }) => (
  <>
    <Collapse title={t('self_monitoring_text10')}>
      <p>{t('self_monitoring_text1')}</p>
    </Collapse>
    <Collapse title={t('self_monitoring_text11')}>
      <p>
        <T i18nKey="self_monitoring_text2" />
      </p>
    </Collapse>
    <Collapse title={t('self_monitoring_text13')}>
      <p>{t('self_monitoring_text4')}</p>
    </Collapse>
    <Collapse title={t('self_monitoring_text14')}>
      <p>{t('self_monitoring_text5')}</p>
    </Collapse>
    <Collapse title={t('self_monitoring_text15')}>
      <p>{t('self_monitoring_text6')}</p>
    </Collapse>
    <Collapse title={t('self_monitoring_text16')}>
      <p>{t('self_monitoring_text7')}</p>
    </Collapse>
    <Collapse title={t('self_monitoring_text17')}>
      <p>{t('self_monitoring_text8')}</p>
      <p>{t('self_monitoring_text9')}</p>
    </Collapse>
  </>
);

export default withTranslation()(SelfMonitoring);
