
    var model = {
            cats : [{
                name : 'Frank',
                count : 0,
                img : 'image/22252709_010df3379e_z.jpg'
            },{
                name : 'Lili',
                count : 0,
                img : 'image/434164568_fea0ad4013_z.jpg'
            },{
                name : 'Pituca',
                count : 0,
                img : 'image/1413379559_412a540d29_z.jpg'
            },{
                name : 'Sam',
                count : 0,
                img : 'image/4154543904_6e2428c421_z.jpg'
            },{
                name : 'Elias',
                count : 0,
                img : 'image/9648464288_2516b35537_z.jpg'
            }
        ],
        current: null
        

    };

    var octopus = {
        init: function(){
            model.current = model.cats[0];

            listView.init();
            catView.init();
        },

        getCats: function() {
            return model.cats;
        },

        setCurrentCat: function(cat) {
            model.current = cat;
        },

        getCurrentCat: function() {
            return model.current;
        },

        increaseClick: function() {
            model.current.count++;
            catView.render();
        },

        getImgCat: function() {
            return model.current.img;
        }

    };

    var listView = {
        init : function () {
            
            this.ul = document.querySelector(".list");

            this.render();
        },

        render : function() {
            var li, cat;
            var cats = octopus.getCats();        
            this.ul.innerHTML = '';

            for (let i= 0; i < cats.length; i++) {
                cat = cats[i];
                li = document.createElement("li");
                li.textContent = cat.name;
                

                //eventlistener stuff
                li.addEventListener('click', (function(catCopy) {
                    return function() {
                        octopus.setCurrentCat(catCopy);
                        catView.render();
                    };
                })(cat));
                this.ul.appendChild(li);
            }
        }
    };

    var catView = {
        init : function() {
            this.baseCat = document.querySelector(".cat-show");
            this.catName = document.querySelector(".cat-name");
            this.catCount = document.querySelector(".cat-count");
            this.catImg = document.getElementById("cat-img");
            

            this.catImg.addEventListener('click',function(){
                octopus.increaseClick();
            });


            this.render();
        },

        render: function() {
            var catSelected = octopus.getCurrentCat();
            this.catCount.textContent = catSelected.count;
            this.catName.textContent = catSelected.name;
            this.catImg.src = catSelected.img;
        
            
        }
    };

    octopus.init();
