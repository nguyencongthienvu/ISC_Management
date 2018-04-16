$(document).ready(function () {

    // ------------------------------------------------------- //
    // Custom Scrollbar
    // ------------------------------------------------------ //

    if ($(window).outerWidth() > 992) {
      $("nav.side-navbar").mCustomScrollbar({
          scrollInertia: 200
      });
    }

    // Main Template Color
    var brandPrimary = '#33b35a';

    // ------------------------------------------------------- //
    // Side Navbar Functionality
    // ------------------------------------------------------ //
    $('#toggle-btn').on('click', function (e) {
      e.preventDefault();
      if ($(window).outerWidth() > 1194) {
        $('nav.side-navbar').toggleClass('shrink');
        $('.page').toggleClass('active');
      } else {
        $('nav.side-navbar').toggleClass('show-sm');
        $('.page').toggleClass('active-sm');
      }
    });


    // ------------------------------------------------------- //
    // Login  form validation
    // ------------------------------------------------------ //
    $('#login-form').validate({
      messages: {
        loginUsername: 'please enter your username',
        loginPassword: 'please enter your password'
      }
    });

    // ------------------------------------------------------- //
    // Register form validation
    // ------------------------------------------------------ //
    $('#register-form').validate({
      messages: {
        registerUsername: 'please enter your first name',
        registerEmail: 'please enter a vaild Email Address',
        registerPassword: 'please enter your password'
      }
    });

    // ------------------------------------------------------- //
    // Material Inputs
    // ------------------------------------------------------ //

    var materialInputs = $('input.input-material');

    // activate labels for prefilled values
    materialInputs.filter(function () {
        return $(this).val() !== "";
    }).siblings('.label-material').addClass('active');

    // move label on focus
    materialInputs.on('focus', function () {
        $(this).siblings('.label-material').addClass('active');
    });

    // remove/keep label on blur
    materialInputs.on('blur', function () {
        $(this).siblings('.label-material').removeClass('active');

        if ($(this).val() !== '') {
            $(this).siblings('.label-material').addClass('active');
        } else {
            $(this).siblings('.label-material').removeClass('active');
        }
    });

    // ------------------------------------------------------- //
    // Jquery Progress Circle
    // ------------------------------------------------------ //
    var progress_circle = $("#progress-circle").gmpc({
        color: brandPrimary,
        line_width: 5,
        percent: 80
    });
    progress_circle.gmpc('animate', 80, 3000);

    // ------------------------------------------------------- //
    // External links to new window
    // ------------------------------------------------------ //

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, {
                expires: 365,
                path: document.URL.substr(0, document.URL.lastIndexOf('/'))
            });

        }

        return false;
    });
    // ------------------------------------------------------ //
    // Datatable subjects
    // ------------------------------------------------------ //
    $("#subject-table").DataTable({
      "columnDefs": [
        {
          "orderable": false,
          "targets": [0,6]
        }
      ],
      "order": [[ 1, 'asc' ]],
      language: {
        "sProcessing":   "Đang xử lý...",
        "sLengthMenu":   "Xem _MENU_ mục",
        "sZeroRecords":  "Không tìm thấy dòng nào phù hợp",
        "sInfo":         "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
        "sInfoEmpty":    "Đang xem 0 đến 0 trong tổng số 0 mục",
        "sInfoFiltered": "(được lọc từ _MAX_ mục)",
        "sInfoPostFix":  "",
        "sSearch":       "Tìm:",
        "sUrl":          "",
        "oPaginate": {
            "sFirst":    "Đầu",
            "sPrevious": "Trước",
            "sNext":     "Tiếp",
            "sLast":     "Cuối"
        }
      },
      aLengthMenu: [
        [10,25,50,100,-1],
        [10,25,50,100,"All"]
      ]
    });

    //-----------------------------------------------------------//
    //Datatable Khoa Hoc
    //----------------------------------------------------------//
    $("#dataTable").dataTable( {
      "columnDefs": [
        {
          "orderable": false,
          "targets": [0,6]
        }
      ],
      "order": [[ 1, 'asc' ]],
      language:{
        "sProcessing":   "Đang xử lý...",
        "sLengthMenu":   "Xem _MENU_ mục",
        "sZeroRecords":  "Không tìm thấy dòng nào phù hợp",
        "sInfo":         "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
        "sInfoEmpty":    "Đang xem 0 đến 0 trong tổng số 0 mục",
        "sInfoFiltered": "(được lọc từ _MAX_ mục)",
        "sInfoPostFix":  "",
        "sSearch":       "Tìm:",
        "sUrl":          "",
        "oPaginate": {
          "sFirst":    "Đầu",
          "sPrevious": "Trước",
          "sNext":     "Tiếp",
          "sLast":     "Cuối"
        }
      },
      aLengthMenu: [
        [10,25,50,100,-1],
        [10,25,50,100,"All"]
      ]
    });
    //----------------------------------------------------------//
    //none exit when click outside modal
    $('.addintakes').click(function(){
      $('#addintakes').modal({backdrop: 'static'})
    });
    //-----------------------------------------------------------//
    //Datatable Rooms
    //----------------------------------------------------------//
    $("#rooms").dataTable( {
        "columnDefs": [
          {
            "orderable": false,
            "targets": [0,5]
          }
        ],
        "order": [[ 1, 'asc' ]],
        language:{
          "sProcessing":   "Đang xử lý...",
          "sLengthMenu":   "Xem _MENU_ mục",
          "sZeroRecords":  "Không tìm thấy dòng nào phù hợp",
          "sInfo":         "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
          "sInfoEmpty":    "Đang xem 0 đến 0 trong tổng số 0 mục",
          "sInfoFiltered": "(được lọc từ _MAX_ mục)",
          "sInfoPostFix":  "",
          "sSearch":       "Tìm:",
          "sUrl":          "",
          "oPaginate": {
            "sFirst":    "Đầu",
            "sPrevious": "Trước",
            "sNext":     "Tiếp",
            "sLast":     "Cuối"
          }
        },
        aLengthMenu: [
          [10,25,50,100,-1],
          [10,25,50,100,"All"]
        ]
      });
    //----------------------------------------------------------//
    //none exit when click outside modal
    $('.room').click(function(){
      $('#exampleModalCenter').modal({backdrop: 'static'})
    });
    //DataTable chuyen nganh
    //-------------------------------------//
    $("#major-table").dataTable( {
      "columnDefs": [
        {
          "orderable": false,
          "targets": [0,4]
        }
      ],
      "order": [[ 1, 'asc' ]],
      language:{
        "sProcessing":   "Đang xử lý...",
        "sLengthMenu":   "Xem _MENU_ mục",
        "sZeroRecords":  "Không tìm thấy dòng nào phù hợp",
        "sInfo":         "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
        "sInfoEmpty":    "Đang xem 0 đến 0 trong tổng số 0 mục",
        "sInfoFiltered": "(được lọc từ _MAX_ mục)",
        "sInfoPostFix":  "",
        "sSearch":       "Tìm:",
        "sUrl":          "",
        "oPaginate": {
          "sFirst":    "Đầu",
          "sPrevious": "Trước",
          "sNext":     "Tiếp",
          "sLast":     "Cuối"
        }
      },
      aLengthMenu: [
        [10,25,50,100,-1],
        [10,25,50,100,"All"]
      ]
    });
    //----------------------------------------------------------//
    //none exit when click outside modal
    $('.add-major').click(function(){
      $('#add-major').modal({backdrop: 'static'})
    });
    //------------------------------------------------------//
    //date range picker Khoa Hoc
    //-------------------------------------------------------//


      // $('input[name="ngayketthuc"]').daterangepicker({
      //   singleDatePicker: true,
      //   showDropdowns: true
      // });
    //------------------------------------------------//
    //Select2 Tinh Trang Khoa Hoc
    //-----------------------------------------------//
      $('#stt').select2({
        placeholder: "--Chọn Trạng Thái--"
     
      }); 

})

