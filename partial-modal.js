$((function () {
    var url;
    var target;

    $('body').append(`
            <div class="modal fade" id="partial-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel"></h4>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer">
                    
                </div>
                </div>
            </div>
            </div>`);

    //Delete Action
    $(".partial-modal").on('click', (e) => {
        e.preventDefault();

        target = e.target;
        var Id = $(target).data('id');
        var controller = $(target).data('controller');
        var action = $(target).data('action');
        var parameterName = $(target).data('parameter-name');
        var formTitle = $(target).data('form-title');

        url = "/" + controller + "/" + action + "?"+parameterName+"=" + Id;

        console.log(url);

        callServer(url,formTitle);
    });

    function callServer(url,formTitle) {
        $.get(url)
            .done((result) => {
                $("#myModalLabel").html(formTitle);
                $(".modal-body").html(result);
                $("#partial-modal").modal('show');
            })
            .fail((error) => {
                console.log("error occured");
            });
    }

}()));
