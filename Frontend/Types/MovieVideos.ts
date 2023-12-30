export interface MovieVideos {
   id: number,
   results: [
    {
        iso_639_1: string,
        iso_3166_1: string,
        name: string,
        key: string,
        site: string,
        size: number,
        type: string,
        official: boolean,
        pbulished_at: string | Date,
        id: string
    }
   ]
}
