/**
 * UI周り作成
 */
var uidata = [];
var calc = new Calculator();

function Uibasic(id) {

    this.initialize = function () {
        this.selector = document.getElementById(id);
    }

    this.get_value = function () {
        tagname = this.selector.tagName;
        id = this.selector.getAttribute("id");
        switch (tagname) {
            case "INPUT":
                break;
            case "SELECT":
                this.value = this.selector.value;
                break;
            default:
                this.value = this.selector.innerHTML;
                break;
        }
        return this.value;
    }

    this.put_value = function (val) {
        if (val == null) {
            val = this.value;
        }
        this.value = val;
        tagname = this.selector.tagName;

        switch (tagname) {
            case "INPUT":
                break;
            case "SELECT":
                this.selector.value = val;
                break;
            default:
                this.selector.innerHTML = val;
                break;
        }
        return this.value;
    }
    this.initialize();
}






var UiPart = function (id) {
    Uibasic.call(this, id);

}

var UiEquip = function(id){
    Uibasic.call(this, id);
    this.eqtype_id   = id.replace("equip_","");
    this.eqtype_name = EQ_LIST[this.eqtype_id]; 
    this.enchantname = function(){
        return this.eqtype_id + "_enchant";
    }
    this.get_data = function(){
        var v = this.get_value();

        lists = EQ_JSON[this.eqtype_name];
        for(l in lists){
            if(lists[l].name == v){
                return lists[l];
            }
        }

    }
}

var Uitable = function (id) {
    this.count = [];
    this.size = 0;
    this.isOverflow = [];

    this.get_table = function (level) {
        this.size = level;

        this.reset_table(level);
        this.field = [];

        for (var i = 51; i < MAXLV; i++) {
            var input = document.getElementsByName("lv" + i);
            for (var r = 0; r < input.length; r++) {
                if (input[r].checked) {
                    this.field[i] = input[r].value;
                    break;
                }
            }
        }


    }
    this.reset_table = function (lv) {

        for (var i = 51; i < MAXLV; i++) {

            var input = document.getElementsByName("lv" + i);
            for (var r = 0; r < input.length; r++) {
                if (i > lv) {
                    input[r].checked = false;
                    input[r].disabled = "true";
                } else {
                    input[r].disabled = "";
                }

            }



        }
    }

    this.get_table(0);
}

function Ui() {
    this.selector = [];

    this.init = function () {
        this.loadEquip();
        //mem.clear();
        //mem.load_from_mem(cb_eq_ch.getSelectedIndex());
        //calc.update();

    }

    this.loadEquip = function(){
        var cb_cls = this.selector["cb_cls"].get_value();
 
       
        for(i in this.selector["armor"] ){
            var lists = EQ_JSON[EQ_LIST[i]];
            var eq =  this.selector["armor"][i]["equip"].selector;
            var selected = this.selector["armor"][i]["equip"].get_value();
            eq.innerHTML = "";
            for(l in lists){
                var re = new RegExp("(ALL|"+cb_cls+")");

                if(lists[l]["装備"].match(re)){
                    var option_add = document.createElement("option");
                    if(selected ==  lists[l]["name"]){
                        option_add.setAttribute("selected","selected");
                    }
                    option_add.setAttribute("value", lists[l]["name"]); // option ⇒ option_add
                    option_add.innerHTML = lists[l]["name"]; // option ⇒ option_add
                    eq.appendChild(option_add);
                    //eqlist.push(lists[l]);
                }
            }
           // console.log(eqlist);
        }
    }
}
var ui = new Ui();



window.onload = function () {
    UiTab(["tab_statuseqiup", "tab_levelelixir"]);
    UiPanel(["character", "status", "eqiup"], "tab_statuseqiup");
    output_classlist("character");
    output_levellist("character");
    output_statuslist("status");

    UiPanel(["levelbonus", "elixirbonus"], "tab_levelelixir");
    UiElement("table", "levelbonus", {
        "id": "bonustable"
    });
    UiElement("h2", "elixirbonus", [], "エリクサー");

    output_levelbonus_html();
    output_elixir_thml();

    calc.rem_reset();

    if (is_test == false) {

        var jsons = {};
        for (var i in EQ_LIST) {


            jsons[EQ_LIST[i]] = [];
            var dir = "./Q/" + EQ_LIST[i];
            var files = fs.readdirSync(dir);
            files.forEach(function (file) {
                var path = dir + '/' + file;
                var json = JSON.parse(fs.readFileSync(path, 'utf8'));
                jsons[EQ_LIST[i]].push(json);
            });


        }

        var savejson = JSON.stringify(jsons, null, " ");
        var save_script = "var equipjson = " + savejson + ";";
        fs.writeFileSync('js/equip.js', save_script);
    }else{
        jsons = equipjson;
    }
    EQ_JSON = jsons;


   UiArmor("eqiup");
    

    console.log(ui);
    var onupdates = document.getElementsByClassName('onupdate');
    for (i = 0; i < onupdates.length; i++) {
        onupdates[i].addEventListener("change", update_ui, false);

    }

    update_ui();
}


function update_ui() {
    console.log(calc);
    //set_uidata(this);
    ui.loadEquip();
    calc.update();

}