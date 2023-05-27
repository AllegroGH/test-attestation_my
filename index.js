import _ from 'lodash';

const parse = (content) => {
  const result = content
    .trim()
    .split('\n')
    .map((el) => el.split(','))
    .slice(1);
  return result;
};

const getCities = (data) => _.union(data.map((el) => el[7])).sort();

const getMinMaxHumidity = (data) => {
  const humidityArray = data.map((el) => el[3]).sort();
  return [humidityArray[0], humidityArray[humidityArray.length - 1]];
};

const getMaxTemperature = (data) => {
  const maxTempString = _.sortBy(data, 1)[data.length - 1];
  return [maxTempString[0], maxTempString[7]];
};

const getHotestCity = (data, cities) => {
  const averageCitysTemps = cities.map((city) => {
    // prettier-ignore
    const cityTemps = data
      .filter((el) => el[7] === city)
      .map((el) => (Number(el[1]) + Number(el[2])) / 2);
    const averageCityTemp = cityTemps.reduce((acc, temp) => acc + temp, 0) / cityTemps.length;
    return [city, averageCityTemp];
  });
  return _.sortBy(averageCitysTemps, 1)[averageCitysTemps.length - 1][0];
};

export default function solution(content) {
  // BEGIN

  const data = parse(content);
  console.log(`Count: ${data.length}`);

  const cities = getCities(data);
  console.log(`Cities: ${cities.join(', ')}`);

  const [minHumidity, maxHumidity] = getMinMaxHumidity(data);
  console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`);

  const [maxTempDate, maxTempCity] = getMaxTemperature(data);
  console.log(`HottestDay: ${maxTempDate} ${maxTempCity}`);

  const hottestCity = getHotestCity(data, cities);
  console.log(`HottestCity: ${hottestCity}`);

  // END
}
