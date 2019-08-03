
    var model = {
            cats : [{
                name : 'Frank',
                count : 0,
                img : 'image/black-cat'
            },{
                name : 'Lili',
                count : 0,
                img : 'image/black-cat'
            },{
                name : 'Pituca',
                count : 0,
                img : 'image/black-cat'
            },{
                name : 'Sam',
                count : 0,
                img : 'image/black-cat'
            },{
                name : 'Elias',
                count : 0,
                img : 'image/black-cat'
            }
        ]
        

    };

    var octopus = {
        init: function(){

            listView.init();
        },

        getCats: function() {
            return model.cats;
        }

    };

    var listView = {
        init : function () {
            listView.render();
        },

        render : function() {
            var cats = octopus.getCats();        
            var ul = document.querySelector(".list");

            for (let i= 0; i < cats.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = cats[i].name;
                ul.appendChild(li);

                //eventlistener stuff
                li.addEventListener('click', function() {
                    console.log("hola");
                });
            }
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
