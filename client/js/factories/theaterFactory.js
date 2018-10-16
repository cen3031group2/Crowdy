angular.module('crowdy').factory('Theaters', function() {
  var theaters = {
    entries : [
      {
        "id" : 0,
        "name" : "Regal Royal Park Stadium 16",
        "address" : "3702 W Newberry Rd",
        "company" : "Regal Cinemas" ,
        "crowdy_lvl_public" : 75,
        "crowdy_lvl_employee" : 85,
        "movies" : []
      }
    ]
    return theaters.entries;
  };
};
