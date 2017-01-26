$("#books").click(function (e) {
    if ((e.target.textContent != 'Name') && (e.target.textContent != 'Desc') && (e.target.textContent != 'Price')) return;
    sortGrid(e.target.cellIndex, e.target.textContent);
});

function sortGrid(colNum, text) {
    var grid = document.getElementById('books');
    var tbody = grid.getElementsByTagName('tbody')[0];
    var type;
    // Составить массив из TR
    var rowsArray = [].slice.call(tbody.rows);

    // определить функцию сравнения, в зависимости от типа
    var compare;

    if (text == 'Price') type = 'number';
    else type = 'string';

    switch (type) {
        case 'number':
            compare = function (rowB, rowA) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }

    // сортировать
    rowsArray.sort(compare);

    // Убрать tbody из большого DOM документа для лучшей производительности
    grid.removeChild(tbody);

    // добавить результат в нужном порядке в TBODY
    // они автоматически будут убраны со старых мест и вставлены в правильном порядке
    for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
    }

    grid.appendChild(tbody);

    $("td:last-child").each(function () {
        var num = $(this).text();

        if ($.isNumeric(num)) {
            <!--Поля где цена больше 1000 покрасить зеленым.-->
            if (num >= 1000)
                $(this).css('color', 'green');
            <!--Поля где цена больше 500 но меньше 1000 покрасить желтым.-->
            else if (num >= 500)
                $(this).css('color', 'yellow');
            <!--Поля где цена меньше 500 покрасить красным.-->
            else if (num < 500)
                $(this).css('color', 'red');
        }
    });
}

var b_count = 0;
$("button.btn-action:first").click(function (e) {
        if (!b_count) {
            $(this).before($("div.red"))
            b_count++;
            return;
        }
        $("div:last").remove();
    }
);

jQuery("li:first:not(li.no)", jQuery("ul:has(li.qwerty)")).css('color', 'pink');
jQuery("h3:not(h3.abc)").addClass('green');

setInterval((function () {
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    $("div.pavlenko:lt(3)").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    ;
}), 3000);

$("button.btn-action:contains(5)").click(function (e) {
        $("li:even", $("ul")).each(function () {
            // $("li:even").each(function () {
            $(this).append(' ' + $(this).index());
        });
        $("li:odd", $("ul")).remove();
    }
);
