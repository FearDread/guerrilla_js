/* --------------------------------------- *
* Guerrilla UI                             *
* @author: Garrett Haptonstall (FearDread) *
* @module: Demo Site Module                * 
* ---------------------------------------- */
$.GUI().create('App', function(G) {
    console.log('Demo app :: ', G);

    G.on('navclick', function(args) {
        console.log('navclick args = ', args);
    });

    function bind() {

        G.query('.navbar-top').click(showPage);
    }

    function initView() {
        var user, view;

        user = new G.Model({
            id: 1,
            firstName: 'Duke',
            lastName: 'Hazard'
        });

        view = new G.View();
        // view.setModel(user);

        console.log('model = ', user);
        console.log('view = ', view);

        bind();
    }

    function showPage(event) {
        var page, href, target;

        event.preventDefault();

        target = event.target;

        page = G.query(target);

        if (page && page.is('a')) {

            href = page.attr('href').split('#')[1];
        }

        console.log('href = ' + href);
        G.fire('navclick', {page:href});
    }

    return {
        load: function(opts) {
            initView();
        },
        unload: function() {
            G.cleanup();
        }
    };
}).start('App');