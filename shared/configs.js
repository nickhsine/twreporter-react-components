export const categoryConfigs = [
  {
    text: '人權．社會',
    name: 'humanRightsAndSociety',
    path: 'human_rights_and_society',
  },
  {
    text: '環境．教育',
    name: 'environmentAndEducation',
    path: 'environment_and_education',
  },
  {
    text: '政治．經濟',
    name: 'politicsAndEconomy',
    path: 'politics_and_economy',
  },
  {
    text: '文化．藝術',
    name: 'cultureAndArt',
    path: 'culture_and_art',
  },
  {
    text: '生活．醫療',
    name: 'livingAndMedicalCare',
    path: 'living_and_medical_care',
  },
  {
    text: '國際．兩岸',
    name: 'international',
    path: 'international',
  },
]

/* Contains the set value  */
export const breakpoints = {
  medium: {
    min: 768,
  },
  large: {
    min: 1024,
  },
  xlarge: {
    min: 1440,
  },
}

export const pageThemes = {
  bright: 'BRIGHT',
  dark: 'DARK',
}

export const searchConfigs = {
  path: 'search',
}

export const linkPrefix = {
  article: '/a/',
  interactiveArticle: '/i/',
  categories: '/categories/',
  tag: '/tag/',
  topic: '/topic/',
  topics: '/topics/',
  author: '/author/',
  authors: '/authors',
}

export const channelConfigs = {
  review: {
    text: '觀點',
    type: 'link',
    prefix: linkPrefix.categories,
    path: 'reviews',
  },
  // Wait for implement
  // topic: {
  //   text: '專題',
  //   type: 'link',
  //   prefix: '',
  //   path: '',
  // },
  photography: {
    text: '攝影',
    type: 'link',
    prefix: '/',
    path: 'photography',
  },
  infographic: {
    text: '多媒體',
    type: 'link',
    prefix: linkPrefix.categories,
    path: 'infographic',
  },
  categories: {
    text: '分類',
    type: 'submenu',
    prefix: linkPrefix.categories,
  },
}

export const channels = ['review', 'photography', 'infographic', 'categories']
