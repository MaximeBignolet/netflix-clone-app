import  type{ ApiResponse } from "~/Types/Movie";
export const useMovieApiStore = defineStore("movieApiStore", {
  state: () => ({
    data: null as ApiResponse | null,
  }),
  actions: {
    async fetchData() {
      try {
        const url =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2IxYzRkNjhhNTEzMzZiYmM3Y2QwNzk5MmFkYTI2NCIsInN1YiI6IjYzOTVhNmE5YTBmMWEyMDBhMDk4N2FiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_reeKFsR8pDE5IIl_bkmYt11NX4kG37FjHFIn9s4vA",
          },
        };
        await fetch(url, options)
          .then((res) => res.json())
          .then((json) => this.data = json)
          .catch((err) => console.error("error:" + err));
      } catch (error) {
        console.log(error);
      }
    },
  },
});
