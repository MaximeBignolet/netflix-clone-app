import type { MovieById } from "~/Types/MovieById";

export const useMovieByIdStore = defineStore("movieByIdStore", {
  state: () => ({
    movie: null as MovieById | null, // movie is a single instance of MovieById or null
  }),
  actions: {
    async fetchData(id: number | null) {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
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
          this.movie = json;
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
