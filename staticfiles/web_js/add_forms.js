$(document).ready(function(){
    function updateElementIndex(el, prefix, ndx){
        var id_regex = new RegExp('('+prefix+'-\\d+-)');
        var replacement = prefix + '-' + ndx + '-';
        //<label for="id_form-0-nick">
        if ($(el).attr("for")) $(el).attr("for",
                                          $(el).attr("for").replace(id_regex, replacement));

        //<input id="id_sleeve" name="sleeve" step="any" type="number" value="0" required="">
        if (el.id) el.id = el.id.replace(id_regex, replacement);
        if (el.name) el.name = el.name.replace(id_regex, replacement);

    }

    function deleteForm(btn, prefix) {
        var formCount = parseInt($('#id_' + prefix + '-TOTAL_FORMS').val());
        if (formCount > 1){
            $(btn).parents('.item').remove();
            var forms = $('.item'); // GET All the forms.
            $('#id_' + prefix + '-TOTAL_FORMS').val(forms.length);
            var i = 0;
            for (formCount = forms.length; i < formCount; i++){
                $(forms.get(i)).children().children().each(function () { // 한 필드 접근
                    if ($(this).attr('type') === 'text'){updateElementIndex(this, prefix, i);}
                });
            }
        }
        else {
            alert("한 폼 이상은 있어야지!")
        }
    }

    function addForm(btn, prefix) {
        var formCount = parseInt($('#id_'+ prefix + '-TOTAL_FORMS').val()); // total_form id의 value 값 구함

        if (formCount < 4){
            //첫번째 formset에서 복사ㅏ
            var row = $(".item:first").clone(false).get(0) //처음거 가져오기
            $(row).removeAttr('id').hide().insertAfter(".item:last").slideDown(300);

            //필요없는거 지우기
//            $(".errorlist", row).remove();
//            $(row).children().removeClass("error");

            $(row).children().children().each(function(){
                updateElementIndex(this, prefix, formCount);
                $(this).val("");
            });

            $(row).find(".delete").click(function(){
                return deleteForm(this, prefix);
            });

            $("#id_" + prefix + "-TOTAL_FORMS").val(formCount + 1);

        }else{
            alert("이미 많이 만들었잖아!!!");
        }
        return false;
    }

    $("#add").click(function(){
        return addForm(this, "form");
    });

    $(".delete").click(function(){
        return deleteForm(this, "form");
    });
})
