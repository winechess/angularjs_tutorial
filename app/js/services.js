app.factory('TopFilms', function() {
    var imdb = {};
    imdb.films = [
        {title: 'Побег из Шоушенка', year: '1994', rating: 9.2, place: 1},
        {title: 'Крестный отец', year: '1972', rating: 9.2, place: 2},
        {title: 'Крестный отец 2', year: '1974', rating: 9.0, place: 3},
        {title: 'Темный рыцарь', year: '1998', rating: 8.9, place: 4},
        {title: 'Криминальное чтиво', year: '1994', rating: 8.9, place: 5},
        {title: 'Хороший, плохой, злой', year: '1966', rating: 8.9, place: 6},
        {title: 'Список Шиндлера', year: '1993', rating: 8.9, place: 7},
        {title: '12 рaзгневанных мужчин', year: '1957', rating: 8.9, place: 8},
        {title: 'Властелин колец: Возвращение короля', year: '2003', rating: 8.9, place: 9},
        {title: 'Бойцовский клуб ', year: '1999', rating: 8.8, place: 10}
    ];
    return imdb;
});