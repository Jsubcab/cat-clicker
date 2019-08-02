
    var model = {
            cats : [{
                name : 'Frank',
                count : 0
            },{
                name : 'Lili',
                count : 0
            },{
                name : 'Pituca',
                count : 0
            },{
                name : 'Sam',
                count : 0
            },{
                name : 'Elias',
                count : 0
            }
        ]
        ,

        getCats() {
            return model.cats.forEach();
            }

    };

    var octopus = {
        init: function(){

            listView.init();
        }

    };

    var listView = {
        init : function () {
            listView.render();
        },

        render : function() {
            model.cats.forEach(
                function(cat) {
                     console.log(cat.name);
                }
            );

        }
    };

    var catView = {
        init : function() {
            catView.render();
        },

        render: function() {

        }
    }

    octopus.init();
