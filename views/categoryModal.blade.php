<div id="categoryModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Add Category</h4>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="Enter new category..." class="form-control">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn darkgray" style="color: white;" data-dismiss="modal">Add Category</button>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  $('#categoryModal').on('hidden.bs.modal', function (e) {
    $(this).find("input").val('').end()
  });
</script>
