'use strict';

riot.tag2('future', '<div class="single-widget"> <h2 style="font-family: \'Roboto Condensed\', sans-serif">Σταδιοδρομία</h2> <hr> <button class="button button-default center" id="stratigakis" data-text="Οδηγός σταδιοδρομίας" onclick="{redirect}" type="submit"><span>Οδηγός σταδιοδρομίας</span></button> </div>', '', '', function (opts) {
        var tag = this;
        tag.redirect = redirect;

        function redirect(e) {
                e.preventDefault();
                window.location = 'http://odigos.stadiodromia.gr/login.aspx?cid=c2d4c275-145a-4173-842d-946fa49d4781';
        }
});