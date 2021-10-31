$(function () {
    document.getElementById("input").addEventListener("change", function (e) {
        let files = document.getElementById("input").files;

        // console.log(files);

        let file_names = "";
        let selected_files = files.length;
        let total_bytes = 0;

        for (let i = 0; i < files.length; i++) {
            let f = files[i];
            file_names += f.name;
            if (i != files.length - 1) {
                file_names += ", ";
            }

            total_bytes += f.size;
        }
        total_mib = (total_bytes / 1024) / 1024;

        // console.log(file_names);
        // console.log(selected_files);
        // console.log(total_bytes);
        // console.log(total_mib);

        $("#file-names").html(file_names);
        $("#selected-files").html(selected_files.toString());
        $("#total-size").html(roundToThree(total_mib) + " MiB (" + total_bytes + " bytes)");
    });

    function roundToThree(num) {
        return +(Math.round(num + "e+3") + "e-3");
    }
})