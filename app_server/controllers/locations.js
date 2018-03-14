module.exports.homelist= function (req,res) {
    res.render('locations-list',{title :'ДОМ'})
};
module.exports.locationInfo= function (req,res) {
    res.render('location-info',{title :'О местоположении'})
};
module.exports.addReview= function (req,res) {
    res.render('location-review-form',{title :'Добавить местоположение'})
};