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
       VIEW BUTTON
    ====================================== */

    $(document).on("click", ".view-btn", function () {

        let teacherName = $(this)
            .closest("tr")
            .find("td:eq(1)")
            .text();

        alert("Viewing Teacher: " + teacherName);

    });

    /* ======================================
       EDIT BUTTON
    ====================================== */

    $(document).on("click", ".edit-btn", function () {

        let row = $(this).closest("tr");

        let teacherId = row.find("td:eq(0)").text();
        let teacherName = row.find("td:eq(1)").text();

        $("#teacherModal").fadeIn(200);

        console.log("Edit Teacher", teacherId, teacherName);

    });

    /* ======================================
       DELETE BUTTON
    ====================================== */

    $(document).on("click", ".delete-btn", function () {

        let row = $(this).closest("tr");

        let teacherName = row.find("td:eq(1)").text();

        if (
            confirm(
                "Are you sure you want to delete " +
                teacherName +
                " ?"
            )
        ) {

            row.fadeOut(300, function () {

                $(this).remove();

            });

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