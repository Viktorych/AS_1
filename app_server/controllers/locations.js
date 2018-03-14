module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Система оперативного учета',
        pageHeader: {
            title: 'Система оперативного учета.',
            stripline: 'Поиск запчастей'
        },
        sidebar: "Пример интерфейса",
        locations: [{
            name: 'Объект учета 1',
            address: 'Склад 1',
            rating: 5,
            facilities: ['Электрика', 'Двигатели', ''],
            distance: '1 шт.'
        }, {
            name: 'Объект учета 2',
            address: 'Склад 2',
            rating: 5,
            facilities: ['Гидравлика', 'гидростанция', ''],
            distance: '1 шт.'
        }, {
            name: 'Kабель',
            address: 'Склад 1',
            rating: 2,
            facilities: ['Электрика', 'Кабели', ''],
            distance: '100 м.'
        }]
    })
};
module.exports.locationInfo = function (req, res) {
    res.render('location-info', {title: 'О местоположении'})
};
module.exports.addReview = function (req, res) {
    res.render('location-review-form', {title: 'Добавить местоположение'})
};