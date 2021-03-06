(function() {

    // model
    function Model(view) {

        this.openModal = function(modal, images) {
            view.showModal(modal, images);
        };

        this.closeModal = function(modal) {
            view.hideModal(modal);
        };
    }


    // view
    function View() {

        this.showModal = function(modal, images) {

            modal.classList.remove('closed');

            var imgContent = document.querySelector('.modal_img_container');
            imgContent.setAttribute("style", "background-image: url(" + images + ");background-repeat: no-repeat; background-size: cover;");

        };

        this.hideModal = function(modal) {
            modal.classList.add('closed');
        };
    }


    // controller
    function Controller(model) {
        var modal;

        this.handlerControllerOpen = function(target) {

            var target = event.target;
            var id = target.getAttribute('data-id');
            modal = document.getElementById(id);
            var images = target.getAttribute('data-img');
            model.openModal(modal, images);
        };

        this.handlerControllerClose = function() {
            model.closeModal(modal);
        };

        var btncloseModal = document.querySelectorAll(' .close_btn-modal'); //коллекция кнопок закрыть
        Array.from(btncloseModal).forEach(btn => btn.addEventListener('click', this.handlerControllerClose));
        var btncloseModal2 = document.querySelectorAll(' #closeModal'); //коллекция кнопок закрыть
        Array.from(btncloseModal2).forEach(btn => btn.addEventListener('click', this.handlerControllerClose));

        var linksSchedule = document.querySelector('.service').getElementsByTagName('a'); //коллекция links
        Array.from(linksSchedule).forEach(link => link.addEventListener('click', this.handlerControllerOpen));

        var linksImg = document.querySelector('.ourworks-container').getElementsByTagName('a'); //коллекция links
        Array.from(linksImg).forEach(linkImg => linkImg.addEventListener('click', this.handlerControllerOpen)); //переводим к массиву и для каждого link вешаем событие click

        var linksInst = document.querySelector('.instagram-container').getElementsByTagName('a'); //коллекция links
        Array.from(linksInst).forEach(linkInst => linkInst.addEventListener('click', this.handlerControllerOpen)); //переводим к массиву и для каждого link вешаем событие click
    }

    var view = new View();
    var model = new Model(view);
    var controller = new Controller(model);


}());