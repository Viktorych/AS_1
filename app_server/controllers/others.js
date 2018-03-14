/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'Система оперативного учета',
        content: 'Система оперативного учета запасных частей и материалов.\n' +
        'Основной функционал:\n' +
        'База данных объектов учета с определенными свойствами и событиями.',
        pageHeader:{
            title:'Система оперативного учета.',
            stripline:'О программе'
        }
    });
};