$(document).ready(function () {
  $("#cedula").keyup(function () {
    let cedula = $("#cedula").val();
    $.ajax({
      type: "POST",
      url: "buscarclientes.php",
      data: { cedula },
      success: function (res) {
        let tabla = ``;
        let datos = JSON.parse(res);
        datos.forEach((dato) => {
            tabla+=`
            <tr>
                <td>`+dato[1]+`</td>
                <td>`+dato[2]+`</td>
                <td>`+dato[3]+`</td>
                <td>`+dato[4]+`</td>
            </tr>`;
        });
        $("#tbodylist").html(tabla);
      },
    });
    return false;
  });
});
