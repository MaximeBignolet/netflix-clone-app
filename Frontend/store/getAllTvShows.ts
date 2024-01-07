import type { ApiResponseTvShows } from "~/Types/TvShows";

export const useTvShowsStore = defineStore("tvShowsStore", {
  state: () => ({
    tvShows: null as ApiResponseTvShows | null, 
  }),
  actions: {
    async fetchData() {
      try {
        const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2IxYzRkNjhhNTEzMzZiYmM3Y2QwNzk5MmFkYTI2NCIsInN1YiI6IjYzOTVhNmE5YTBmMWEyMDBhMDk4N2FiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_reeKFsR8pDE5IIl_bkmYt11NX4kG37FjHFIn9s4vA",
          },
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const json = await response.json();
          this.tvShows = json;
           // Assign the fetched data to movie
        } else {
          throw new Error('Erreur de réponse de l\'API');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    },
  },
});
