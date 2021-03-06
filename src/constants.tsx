export const Constants = {
    id: "churning-canada-search",
    name: "Churning Canada Search",
    analyticsProfile: "UA-221369952-1",
    host: "churningsearch.ca",
    author: "drlau",
    subreddit: "churningcanada",
    useBeta: false, // beta not providing reliable data currently and ids are not the same as prod
}

export const SearchRange = {
    "1d": { "name": "1 Day", "beta": 1 },
    "7d": { "name": "1 Week", "beta": 7 },
    "31d": { "name": "1 Month", "beta": 31 },
    "90d": { "name": "3 Months", "beta": 90 },
    "182d": { "name": "6 Months", "beta": 182 },
    "1y": { "name": "1 Year", "beta": 366 },
    "2y": { "name": "2 Years", "beta": 732 }
}