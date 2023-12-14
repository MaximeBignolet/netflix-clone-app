import type { ShowsByName } from "~/Types/TvShowsByName";

export const useTvShowByNameStore = defineStore("tvShowsByNameStore", {
  state: () => ({
    shows: [] as ShowsByName[] , // movie is a single instance of MovieById or null
  }),
  actions: {
    async fetchData(name: string) {
      try {
        const encodedName = encodeURIComponent(name);
        const url = `https://api.themoviedb.org/3/search/tv?query=${encodedName}&include_adult=false&language=en-US&page=1`;
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
          this.shows = json.results;          
        } else {
          throw new Error('Erreur de réponse de l\'API');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    },
  },
});
