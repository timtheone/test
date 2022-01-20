const tvShows = [
  {
    title: "Planet Earth II",
    score: 9.5,
    year: 2016,
    numRatings: 5000,
  },
  {
    title: "Planet Earth",
    score: 9.4,
    year: 2006,
    numRatings: 5000,
  },
  {
    title: "Breaking Bad",
    score: 9.4,
    year: 2008,
    numRatings: 6000,
  },
  {
    title: "Band Of Brothers",
    score: 9.4,
    year: 2001,
    numRatings: 4900,
  },
  {
    title: "Chernobyl",
    score: 9.3,
    year: 2019,
    numRatings: 4900,
  },
  {
    title: "Jingle All The Way",
    score: 7.1,
    year: 1996,
    numRatings: 5000,
  },
  {
    title: "The Wire",
    score: 9.3,
    year: 2002,
    numRatings: 6000,
  },
];

function findHighestRated(array) {
  return array.reduce((acc, value) => {
    if (value.score < acc.score) {
      return acc;
    } else if (value.score === acc.score) {
      return value.numRatings < acc.numRatings ? acc : value;
    } else {
      return value;
    }
  });
}

const highestRatedTvShow = findHighestRated(tvShows);

const secondHighestRatedTvShow = findHighestRated(
  tvShows.filter((show) => {
      /* 
        ideally i would need a unique identifier (id) to reliably filter this,
        but in this case title can serve as this identifier.
      */
    if (show.title !== highestRatedTvShow.title) {
      return show;
    }
  })
);

console.log("Highest rated tv-show is", highestRatedTvShow.title);
console.log("Second highest rated tv-show is", secondHighestRatedTvShow.title);
