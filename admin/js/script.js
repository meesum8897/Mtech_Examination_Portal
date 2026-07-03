$(document).ready(function () {

    /* =====================================
       PROFILE DROPDOWN
    ===================================== */

    $("#profileToggle").click(function (e) {

        e.stopPropagation();

        $("#profileMenu").slideToggle(200);

    });

    $(document).click(function () {

        $("#profileMenu").slideUp(200);

    });

    /* =====================================
       ADD STUDENT MODAL
    ===================================== */

    $("#addStudentBtn").click(function () {

        $("#studentModal").css("display", "flex");

        $(".modal-header h3").text("Add Student");

        $("#studentModal input").val("");
        $("#studentModal select").prop("selectedIndex", 0);

    });

    /* =====================================
       EDIT STUDENT MODAL
    ===================================== */

    $(".editStudentBtn").click(function () {

        $("#studentModal").css("display", "flex");

        $(".modal-header h3").text("Edit Student");

        // Demo Data

        let row = $(this).closest("tr");

        let studentId = row.find("td:eq(0)").text();
        let fullName = row.find("td:eq(1)").text();
        let fatherName = row.find("td:eq(2)").text();
        let batch = row.find("td:eq(3)").text();

        let fields = $("#studentModal input");

        $(fields[0]).val(studentId);
        $(fields[1]).val(batch);
        $(fields[2]).val(fullName);
        $(fields[3]).val(fatherName);

    });

    /* =====================================
       CLOSE MODAL
    ===================================== */

    $(".closeModal").click(function () {

        $(".modal").fadeOut(200);

    });

    $(".modal").click(function (e) {

        if ($(e.target).hasClass("modal")) {

            $(this).fadeOut(200);

        }

    });

    /* =====================================
       DELETE MODAL
    ===================================== */

    $(".deleteStudentBtn").click(function () {

        let row = $(this).closest("tr");

        $("#deleteModal")
            .css("display", "flex")
            .data("row", row);

    });

    $("#deleteModal .btn-danger").click(function () {

        let row = $("#deleteModal").data("row");

        row.fadeOut(300, function () {

            $(this).remove();

        });

        $("#deleteModal").fadeOut(200);

        showToast("Student deleted successfully", "danger");

    });

    /* =====================================
       SAVE STUDENT
    ===================================== */

    $(".modal-footer .btn-primary").click(function () {

        let valid = validateStudentForm();

        if (!valid) return;

        showToast("Student saved successfully", "success");

        $("#studentModal").fadeOut(200);

    });

    /* =====================================
       SEARCH DEMO
    ===================================== */

    $(".filter-actions .btn-primary").click(function () {

        let keyword = $(".filter-grid input")
            .val()
            .toLowerCase();

        $(".admin-table tbody tr").each(function () {

            let rowText = $(this).text().toLowerCase();

            if (rowText.indexOf(keyword) > -1) {

                $(this).show();

            } else {

                $(this).hide();

            }

        });

    });

    /* =====================================
       RESET FILTERS
    ===================================== */

    $(".filter-actions .btn-light").click(function () {

        $(".filter-grid input").val("");

        $(".filter-grid select")
            .prop("selectedIndex", 0);

        $(".admin-table tbody tr").show();

    });

    /* =====================================
       PAGINATION DEMO
    ===================================== */

    $(".pagination button").click(function () {

        $(".pagination button")
            .removeClass("active");

        $(this).addClass("active");

    });

    /* =====================================
       FORM VALIDATION
    ===================================== */

    function validateStudentForm() {

        let studentId =
            $("#studentModal input:eq(0)").val();

        let batchCode =
            $("#studentModal input:eq(1)").val();

        let fullName =
            $("#studentModal input:eq(2)").val();

        let fatherName =
            $("#studentModal input:eq(3)").val();

        if (studentId.trim() === "") {

            alert("Student ID is required");
            return false;
        }

        if (batchCode.trim() === "") {

            alert("Batch Code is required");
            return false;
        }

        if (fullName.trim() === "") {

            alert("Full Name is required");
            return false;
        }

        if (fatherName.trim() === "") {

            alert("Father Name is required");
            return false;
        }

        return true;
    }

    /* =====================================
       TOAST NOTIFICATION
    ===================================== */

    function showToast(message, type) {

        let bgColor =
            type === "danger"
                ? "#ef4444"
                : "#22c55e";

        let toast = $(`
            <div class="custom-toast">
                ${message}
            </div>
        `);

        $("body").append(toast);

        toast.css({
            position: "fixed",
            top: "25px",
            right: "25px",
            background: bgColor,
            color: "#fff",
            padding: "14px 20px",
            borderRadius: "10px",
            zIndex: "99999",
            display: "none",
            fontWeight: "500",
            boxShadow: "0 10px 25px rgba(0,0,0,.15)"
        });

        toast.fadeIn(300);

        setTimeout(function () {

            toast.fadeOut(300, function () {

                $(this).remove();

            });

        }, 2500);
    }

});

$(document).ready(function () {

    /* ======================================
       ADD TEACHER MODAL
    ====================================== */

    $("#openTeacherModal").click(function () {

        $("#teacherModal").fadeIn(200);

    });

    $(".close-modal").click(function () {

        $(".modal").fadeOut(200);

    });

    $(window).click(function (e) {

        if ($(e.target).hasClass("modal")) {

            $(".modal").fadeOut(200);

        }

    });


    /* ======================================
       RESET PASSWORD
    ====================================== */

    $(document).on("click", ".reset-btn", function () {

        let teacherName = $(this)
            .closest("tr")
            .find("td:eq(1)")
            .text();

        if (
            confirm(
                "Reset password for " +
                teacherName +
                " ?"
            )
        ) {

            alert(
                "Password reset successfully."
            );

        }

    });

    /* ======================================
       SEARCH DEMO
    ====================================== */

    $(".filter-card .btn-primary").click(function () {

        let value = $(".filter-card input")
            .val()
            .toLowerCase();

        $(".custom-table tbody tr").filter(function () {

            $(this).toggle(

                $(this)
                .text()
                .toLowerCase()
                .indexOf(value) > -1

            );

        });

    });

    /* ======================================
       RESET FILTERS
    ====================================== */

    $(".filter-card .btn-dark").click(function () {

        $(".filter-card input").val("");

        $(".filter-card select").prop(
            "selectedIndex",
            0
        );

        $(".custom-table tbody tr").show();

    });

    /* ======================================
       PAGINATION DEMO
    ====================================== */

    $(".pagination button").click(function () {

        $(".pagination button")
            .removeClass("active");

        $(this).addClass("active");

    });

    /* ======================================
       SAVE TEACHER
    ====================================== */

    $(".modal-footer .btn-primary").click(function () {

        let isValid = true;

        $("#teacherModal .form-control").each(function () {

            if ($(this).val().trim() === "") {

                $(this).css(
                    "border-color",
                    "#ef4444"
                );

                isValid = false;

            } else {

                $(this).css(
                    "border-color",
                    "#d1d5db"
                );

            }

        });

        if (!isValid) {

            alert(
                "Please fill all required fields."
            );

            return;

        }

        alert(
            "Teacher saved successfully."
        );

        $("#teacherModal").fadeOut();

        $("#teacherModal input").val("");

    });

    /* ======================================
       ENTER KEY SEARCH
    ====================================== */

    $(".filter-card input").keypress(function (e) {

        if (e.which === 13) {

            $(".filter-card .btn-primary").click();

        }

    });

});

$(document).ready(function(){


    $("#openCourseModal").click(function(){

        $("#courseModal").fadeIn();

    });

    $(".close-modal").click(function(){

        $(".modal").fadeOut();

    });

    $(".view-btn").click(function(){

        $("#viewCourseModal").fadeIn();

    });

    $(window).click(function(e){

        if($(e.target).hasClass("modal")){

            $(".modal").fadeOut();

        }

    });

});

$(document).on('submit', '.delete-course-form', function (e) {

    e.preventDefault();

    let form = this;

    Swal.fire({

        title: 'Are you sure?',

        text: "This course will be permanently deleted.",

        icon: 'warning',

        showCancelButton: true,

        confirmButtonColor: '#d33',

        cancelButtonColor: '#6c757d',

        confirmButtonText: 'Yes, Delete',

        cancelButtonText: 'Cancel'

    }).then((result) => {

        if (result.isConfirmed) {

            form.submit();

        }

    });

});

//view courses jquery
$(document).on('click', '.view-btn', function () {

    let id = $(this).data('id');

    $.get('/admin/courses/' + id + '/view', function (course) {

        $('#view_course_code').text(course.course_code);

        $('#view_course_name').text(course.course_name);

        $('#view_duration').text(course.duration);

        $('#view_type').text(course.type);

        $('#view_students').text(course.students_count ?? 0);

        $('#view_teachers').text(course.teachers_count ?? 0);

        $('#view_status').text(course.is_active == 1 ? 'Active' : 'Inactive');

        $('#viewCourseModal').fadeIn();

    });

});






//--------------Edit Btn for Course ----------------------
$(document).on('click', '.edit-btn', function () {

    let id = $(this).data('id');

    $.ajax({
        url: '/admin/courses/' + id + '/edit',
        method: 'GET',
        dataType: 'json',

        success: function (course) {

            $('#editCourseModal #course_code').val(course.course_code);
            $('#editCourseModal #course_name').val(course.course_name);
            $('#editCourseModal #duration').val(course.duration);
            $('#editCourseModal #type').val(course.type);
            $('#editCourseModal #description').val(course.description);
            $('#editCourseModal #is_active').val(course.is_active);

            $('#editCourseModal #courseForm').attr('action', '/admin/courses/' + id);

            $('#editCourseModal #courseForm').find('input[name="_method"]').remove();

            $('#editCourseModal #courseForm').append(
                '<input type="hidden" name="_method" value="PUT">'
            );

            $('#editCourseModal #courseModalTitle').text('Edit Course');
            $('#editCourseModal #courseSubmitBtn').text('Update Course');

            $('#editCourseModal').fadeIn();

        },

        error: function (xhr) {
            console.log(xhr.responseText);
        }

    });

});

//####### STUDENT WORK ############
//###################################

   $(document).ready(function () {

    /* =========================
       ADD BATCH MODAL
    ========================= */

    $("#openBatchModal").click(function () {

        $("#batchModal").fadeIn(200);

    });


    /* =========================
       VIEW BATCH MODAL
    ========================= */

    $(document).on("click", ".view-btn", function () {

        $("#viewBatchModal").fadeIn(200);

    });


    /* =========================
       STUDENTS MODAL
    ========================= */

    $(document).on("click", ".student-btn", function () {

        $("#studentsModal").fadeIn(200);

    });


    /* =========================
       CLOSE BUTTONS
    ========================= */

    $(".close-modal").click(function () {

        $(".modal").fadeOut(200);

    });


    /* =========================
       CLICK OUTSIDE MODAL
    ========================= */

    $(window).click(function (e) {

        if ($(e.target).hasClass("modal")) {

            $(".modal").fadeOut(200);

        }

    });


    /* =========================
       DELETE DEMO
    ========================= */
/* 
    $(document).on("click", ".delete-btn", function () {

        let confirmDelete = confirm(
            "Are you sure you want to delete this batch?"
        );

        if (confirmDelete) {

            $(this)
                .closest("tr")
                .fadeOut(300);

        }

    });
 */

    /* =========================
       EDIT DEMO
    ========================= */

    $(document).on("click", ".edit-btn", function () {

        $("#batchModal").fadeIn(200);

    });


    /* =========================
       SAVE BATCH DEMO
    ========================= */

    $("#saveBatchBtn").click(function () {

        alert("Batch saved successfully.");

        $("#batchModal").fadeOut(200);

    });

});

//############ VIEW TEACHER MODAL ###################
//###################################################

$(document).on('click', '.view-btn', function () {

    let id = $(this).data('id');

    $.ajax({

        url: '/admin/teachers/' + id,

        type: 'GET',

        dataType: 'json',

        success: function (teacher) {

            $('#view_teacher_code').text(teacher.teacher_code);
            $('#view_teacher_name').text(teacher.teacher_name);
            $('#view_father_name').text(teacher.father_name);
            $('#view_cnic').text(teacher.cnic);
            $('#view_mobile').text(teacher.mobile);
            $('#view_email').text(teacher.email ?? '-');
            $('#view_gender').text(teacher.gender);
            $('#view_qualification').text(teacher.qualification ?? '-');
            $('#view_designation').text(teacher.designation ?? '-');
            $('#view_experience').text(teacher.experience + ' Years');
            $('#view_joining_date').text(teacher.joining_date);
            $('#view_salary').text('Rs. ' + teacher.salary);
            $('#view_address').text(teacher.address ?? '-');
            $('#view_remarks').text(teacher.remarks ?? '-');

            $('#view_status').html(
                teacher.is_active == 1
                    ? '<span class="badge-success">Active</span>'
                    : '<span class="badge-danger">Inactive</span>'
            );

            $('#viewTeacherModal').fadeIn();

        }

    });

});


//############# EDIT TEACHER MODAL ###############

$(document).on('click', '.edit-btn', function () {

    let id = $(this).data('id');

    $.get('/admin/teachers/' + id + '/edit', function (teacher) {

        $('#edit_teacher_code').val(teacher.teacher_code);
        $('#edit_teacher_name').val(teacher.teacher_name);
        $('#edit_father_name').val(teacher.father_name);
        $('#edit_cnic').val(teacher.cnic);
        $('#edit_mobile').val(teacher.mobile);
        $('#edit_email').val(teacher.email);
        $('#edit_gender').val(teacher.gender);
        $('#edit_qualification').val(teacher.qualification);
        $('#edit_designation').val(teacher.designation);
        $('#edit_experience').val(teacher.experience);
        $('#edit_joining_date').val(teacher.joining_date);
        $('#edit_salary').val(teacher.salary);
        $('#edit_address').val(teacher.address);
        $('#edit_remarks').val(teacher.remarks);
        $('#edit_is_active').val(teacher.is_active);

        $('#editTeacherForm').attr(
            'action',
            '/admin/teachers/' + teacher.id
        );

        $('#editTeacherModal').fadeIn();

    });

});