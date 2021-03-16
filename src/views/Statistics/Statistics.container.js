import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Statistics from './Statistics';
import {
  getExistsDetailsStatistics,
  getStatisticsSummary,
  getSubscribedDistrictsData,
  getUpdateDate,
  getVoivodeshipsData
} from '../../store/selectors/statistics';
import { fetchDetailsStatistics } from '../../store/actions/statistics';
import useNavigation from '../../hooks/useNavigation';
import { statisticHeadersLabelData, statisticTabData } from './statistics.constants';

const StatisticsContainer = () => {
  const dispatch = useDispatch();
  const { getParam } = useNavigation();

  const type = getParam('type');

  const existsDetailsStatistics = useSelector(getExistsDetailsStatistics);
  const voivodeships = useSelector(getVoivodeshipsData).map(
    ({
      id,
      name,
      details: {
        newCases,
        newDeaths,
        newDeathsWithoutComorbidities,
        newDeathsWithComorbidities,
        newRecovered,
        newTests,
        newUndesirableReaction,
        newVaccinations,
        totalVaccinationsDose1,
        totalVaccinationsDose2,
        totalVaccinations
      }
    }) => ({
      id,
      name,
      newCases,
      newDeaths,
      newDeathsWithoutComorbidities,
      newDeathsWithComorbidities,
      newRecovered,
      newTests,
      newUndesirableReaction,
      newVaccinations,
      totalVaccinationsDose1,
      totalVaccinationsDose2,
      totalVaccinations
    })
  );
  const summary = useSelector(getStatisticsSummary);
  const districts = useSelector(getSubscribedDistrictsData).map(
    ({
      id,
      name,
      newCases,
      newDeaths,
      newDeathsWithoutComorbidities,
      newDeathsWithComorbidities,
      newRecovered,
      newTests,
      newUndesirableReaction,
      newVaccinations,
      totalVaccinationsDose1,
      totalVaccinationsDose2,
      totalVaccinations
    }) => ({
      id,
      name,
      newCases,
      newDeaths,
      newDeathsWithoutComorbidities,
      newDeathsWithComorbidities,
      newRecovered,
      newTests,
      newUndesirableReaction,
      newVaccinations,
      totalVaccinationsDose1,
      totalVaccinationsDose2,
      totalVaccinations
    })
  );
  const updated = useSelector(getUpdateDate);

  const lastUpdate = moment(updated).format('DD.MM.YYYY');

  useEffect(() => {
    dispatch(fetchDetailsStatistics());
  }, [dispatch]);

  return (
    <Statistics
      districts={districts}
      existsDetailsStatistics={existsDetailsStatistics}
      headerLabel={statisticHeadersLabelData[type]}
      lastUpdate={lastUpdate}
      summary={summary}
      tabsData={statisticTabData[type]}
      voivodeships={voivodeships}
    />
  );
};

export default StatisticsContainer;
