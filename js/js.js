
    var model = {
        init: function() {
            model : [{
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
        },

        getCats : function() {
            return this.init.model;
        }
    };

    var octopus = {
        init: function(){
            model.init();
            listView.init();

            this.getCats;
        },

        getCats : function() {
            model.getCats();
        }
    };

    var listView = {
        init : function () {
            listView.render();
        },

        render : function() {
            document.createElement("div");

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
