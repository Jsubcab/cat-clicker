
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
        current: null,
        adminButton: null
        

    };

    var octopus = {
        init: function(){
            model.current = model.cats[0];

            listView.init();
            catView.init();
            adminPanel.init();
            savedInfo.init();
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
        },

        getAdminPanelButton: function() {
            return model.adminButton;
        },

        setAdminPanelButton: function(choice) {
            model.adminButton = choice;
        }

    };

    var adminPanel = {
        init: function() {
            this.button = document.querySelector(".panelButton");
            this.nameBox = document.getElementById("form-name");
            this.image = document.getElementById("form-image");
            this.clicks = document.getElementById("form-clicks");
            this.panel = octopus.getAdminPanelButton();
            var visible = document.querySelector(".form");

            this.button.addEventListener('click', function() {
                if (this.panel) {
                    octopus.setAdminPanelButton(false);
                    visible.style.display = "none";
                    
                } else {
                    octopus.setAdminPanelButton(true);
                    visible.style.display = "block";
                   
                }
                    
            });
            this.render();
        },

        render: function() {
            var catSelected = octopus.getCurrentCat();
            this.nameBox.value = catSelected.name;
            this.image.value = catSelected.img;
            this.clicks.value = catSelected.count;

        }


    };

    var savedInfo = {
        init: function() {
            this.save = document.querySelector("#form-save");
            this.cancel = document.querySelector("#form-cancel");
            this.nameBox = document.getElementById("form-name");
            this.image = document.getElementById("form-image");
            this.clicks = document.getElementById("form-clicks");

            this.render();
        },
        render : function() {
            this.save.addEventListener('click', function() {

            });

            this.cancel.addEventListener('click', function() {
                this.nameBox.value = "";
                this.clicks.value = "";
                this.image.value = "";
            });
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
                        adminPanel.render();
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
                adminPanel.render();
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
