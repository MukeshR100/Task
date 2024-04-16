import ImgFilePath from './ImgFilePath';

const upComingEventsData = [
  {
    id: '1',
    day: '24',
    month: 'May',
    time: '02:00 PM',
    team1: 'Punjab Kings 2’nd 11',
    team2: 'Royal Challenger Banglore 3rd 11',
    team1Url: ImgFilePath.image.PunjabLogo,
    team2Url: ImgFilePath.image.RCBLogo,
    location: '0.3 M away',
  },
  {
    id: '2',
    day: '16',
    month: 'Apr',
    time: '03:00 PM',
    team1: 'Royal Challenger Banglore 3rd 11',
    team2: 'Chennai Super Kings 3rd 11',
    team1Url: ImgFilePath.image.PunjabLogo,
    team2Url: ImgFilePath.image.RCBLogo,
    location: '0.2 M away',
  },
  {
    id: '3',
    day: '24',
    month: 'May',
    time: '02:00 PM',
    team1: 'Punjab Kings 2’nd 11',
    team2: 'Royal Challenger Banglore 3rd 11',
    team1Url: ImgFilePath.image.PunjabLogo,
    team2Url: ImgFilePath.image.RCBLogo,
    location: '0.3 M away',
  },
];

const liveScoreData = [
  {
    id: '1',
    team1: `RCB'1`,
    team2: `WH'1`,
    team1Run: '164/13',
    team2Run: '121/14',
    team1Runrate: '20.0',
    team2Runrate: '7.4',
    team1Url: ImgFilePath.image.LTLogo1,
    team2Url: ImgFilePath.image.LTLogo2,
    color: '#2648D1',
  },
  {
    id: '2',
    team1: `RCB'1`,
    team2: `WH'1`,
    team1Run: '164/13',
    team2Run: '121/14',
    team1Runrate: '20.0',
    team2Runrate: '7.4',
    team1Url: ImgFilePath.image.LTLogo1,
    team2Url: ImgFilePath.image.LTLogo2,
    color: '#D1266E',
  },
];

const placeToEatData = [
  {
    id: '1',
    hotelName: 'Aroma Mocha',
    location: '0.5 M away',
    placeUrl: ImgFilePath.image.Hotel1,
  },
  {
    id: '2',
    hotelName: 'Grill & Chill',
    location: '0.5 M away',
    placeUrl: ImgFilePath.image.Hotel2,
  },
  {
    id: '3',
    hotelName: 'Aroma Mocha',
    location: '0.5 M away',
    placeUrl: ImgFilePath.image.Hotel3,
  },
];

const moreActionsData = [
  {
    id: '1',
    action: 'Request',
    team1Url1: ImgFilePath.image.LTLogo1,
    teamUrl2: ImgFilePath.image.LTLogo2,
    team1: 'DB Club',
    team2: 'Sunny club',
  },
  {
    id: '2',
    action: 'Payments',
    team1: '12.44',
    team2: '234.21',
    team1Status: 'Due',
    team2Status: 'Paid',
  },
];

const StaticData = {
  upComingEventsData: upComingEventsData,
  liveScoreData: liveScoreData,
  placeToEatData: placeToEatData,
  moreActionsData: moreActionsData
};

export default StaticData;
