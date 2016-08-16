

$(document).ready(function() {
    $('.sticky-element').waypoint('sticky');

    $.fn.max = function(selector) {
        return Math.max.apply(null, this.map(function(index, el) { return selector.apply(el); }).get() );
    }
    var set_matched_columns = function(){
        $('.matched-column').height('')
        $('.matched-column').height(function () {
            var maxHeight = $(this).closest('.matched-column-container').find('.matched-column')
                .max( function () {
                    return $(this).height();
                });
            return maxHeight;
        })
    }
    set_matched_columns()
    $(window).bind("resize", set_matched_columns)

    $('.navbar a').each(function(){
        if ($(this).attr('href')  ===  window.location.pathname) {
            $(this).closest('li').addClass('active');
        }
    })
})


