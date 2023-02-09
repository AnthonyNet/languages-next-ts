interface Movies {
    id: number;
    title: string;
    year: number;
    rating: number;
    genres: string[];

}

export const moviesData:Movies[] = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        year: 1994,
        rating: 9.2,
        genres: ['Crime', 'Drama']
    }, 
    {
        id: 2,
        title: 'The Godfather',
        year: 1972,
        rating: 9.2,
        genres: ['Crime', 'Drama']
    },
    {
        id: 3,
        title: 'The Godfather: Part II',
        year: 1974,
        rating: 9.0,
        genres: ['Crime', 'Drama']
    },
    {
        id: 4,
        title: 'The Dark Knight',
        year: 2008,
        rating: 9.0,
        genres: ['Action', 'Crime', 'Drama', 'Thriller']
    }
];

