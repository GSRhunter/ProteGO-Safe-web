import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from '../../../RiskTest/RiskTest.styled';
import { BordersButtonWithArrow } from '../../../../components/BordersButtonWithArrow';
import useTriage from '../../../../hooks/useTriage';

const MakeDailyButton = () => {
  const history = useHistory();
  const { isExposure = false } = useTriage();
  const goToDailyData = () => {
    history.push('/daily-data');
  };

  return (
    isExposure && (
      <BordersButtonWithArrow
        onClick={goToDailyData}
        text="Zmierz temperaturę"
        description="Zapisz ją w Dzienniku Zdrowia aplikacji"
        icon={<Icon />}
      />
    )
  );
};

export default MakeDailyButton;
