$$('select').each(function(item) {
    Event.observe(item, 'change', function(e) {
        var el = e.srcElement;
        var val = el.options[el.selectedIndex].innerHTML;
        $$('select').each(function(item) {
            if (item != el) {
                for (var i = 0; i < item.options.length; i++) {
                    if (item.options[i].innerHTML == val) {
                        item.removeChild(item.options[i]);
                    }
                }
            }
        });
    });
});