$(document).ready(function() {
    $('#load-metas').on("click", function() {
        $.ajax({
            url: "../../ajax_metas.html",
            success: function (data) {
                $('#metas-list').append(data);
            },
            dataType: 'html'
        });

        $(this).hide();
    });
});