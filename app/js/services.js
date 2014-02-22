app.factory('TopFilms', function() {
    var imdb = {};
    imdb.films = [
        {title: 'Побег из Шоушенка', year: '1994', rating: 9.2, place: 1, genres: [ 'Crime','Drama' ]},
        {title: 'Крестный отец', year: '1972', rating: 9.2, place: 2, genres: ['Crime','Drama']},
        {title: 'Крестный отец 2', year: '1974', rating: 9.0, place: 3, genres: ['Crime','Drama']},
        {title: 'Темный рыцарь', year: '1998', rating: 8.9, place: 4, genres: ['Action','Crime','Drama']},
        {title: 'Криминальное чтиво', year: '1994', rating: 8.9, place: 5, genres: ['Crime','Drama','Thriller']},
        {title: 'Хороший, плохой, злой', year: '1966', rating: 8.9, place: 6, genres: ['Adventure','Western']},
        {title: 'Список Шиндлера', year: '1993', rating: 8.9, place: 7, genres: ['Biography'.'Drama','History']},
        {title: '12 рaзгневанных мужчин', year: '1957', rating: 8.9, place: 8, genres: ['Drama']},
        {title: 'Властелин колец: Возвращение короля', year: '2003', rating: 8.9, place: 9, genres: ['Action','Adventure','Fantasy']},
        {title: 'Бойцовский клуб ', year: '1999', rating: 8.8, place: 10, genres: ['Drama']}
    ];
    return imdb;
});