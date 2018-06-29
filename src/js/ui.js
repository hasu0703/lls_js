/**
 * UI周り作成
 */
var uidata = [];
var calc = new Calculator();
console.log(calc);

function Uibasic(id) {

    this.initialize(id);
}
Uibasic.prototype.initialize = function(id) {

    this.selector = document.getElementById(id);
}

Uibasic.prototype.get_value = function() {
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

Uibasic.prototype.put_value = function(val) {
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







function UiPart(id) {
    Uibasic.call(this, id);
}
UiPart.prototype = new Uibasic();

function UiSelect(id) {
    Uibasic.call(this, id);
}
UiSelect.prototype = new Uibasic();
UiSelect.prototype.set_option = function(min, max, selected) {
    if (min == null) min = 0;
    if (max == null) max = 10;
    this.selector.innerHTML = "";
    for (var i = min; i <= max; i++) {
        var option_add = document.createElement("option");
        if (selected == i) {
            option_add.setAttribute("selected", "selected"); // option ⇒ option_add
        }
        option_add.setAttribute("value", i); // option ⇒ option_add
        option_add.innerHTML = i; // option ⇒ option_add

        this.selector.appendChild(option_add);
    }
}

function UiEquip(id) {

    Uibasic.call(this, id);
    this.eqtype_id = id.replace("equip_", "");
    this.eqtype_name = EQ_LIST[this.eqtype_id];

}
UiEquip.prototype = new Uibasic();
UiEquip.prototype.enchantname = function() {
    return this.eqtype_id + "_enchant";
}
UiEquip.prototype.get_data = function() {
    var v = this.get_value();

    lists = EQ_JSON[this.eqtype_name];
    for (l in lists) {
        if (lists[l].name == v) {
            return lists[l];
        }
    }

}


function Uitable(id) {
    this.count = [];
    this.size = 0;
    this.isOverflow = [];
    this.get_table(0);
}
Uitable.prototype.get_table = function(level) {
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
Uitable.prototype.reset_table = function(lv) {
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


function Ui() {
    this.selector = [];
}
Ui.prototype.init = function() {
    this.loadEquip();
    //mem.clear();
    //mem.load_from_mem(cb_eq_ch.getSelectedIndex());
    //calc.update();

}

Ui.prototype.loadEquip = function() {
    var cb_cls = this.selector["cb_cls"].get_value();


    for (i in this.selector["armor"]) {
        var lists = EQ_JSON[EQ_LIST[i]];
        var eq = this.selector["armor"][i]["equip"].selector;
        var selected = this.selector["armor"][i]["equip"].get_value();
        eq.innerHTML = "";
        for (l in lists) {
            var re = new RegExp("(ALL|" + cb_cls + ")");

            if (lists[l]["装備"].match(re)) {
                var option_add = document.createElement("option");
                if (selected == lists[l]["name"]) {
                    option_add.setAttribute("selected", "selected");
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

var ui = new Ui();



window.onload = function() {
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
        var en_jsons = {};
        for (var i in EQ_LIST) {
            en_jsons[EQ_LIST[i]] = [];
            var dir = "./data/enchanted/" + EQ_LIST[i];
            var files = fs.readdirSync(dir);
            files.forEach(function(file) {
                var path = dir + '/' + file;
                var enchantedjson = JSON.parse(fs.readFileSync(path, 'utf8'));                
                //en_jsons[EQ_LIST[i]].push(enchantedjson);
                en_jsons[EQ_LIST[i]][enchantedjson["name"]] = enchantedjson;
            });
        }

        var jsons = {};
        for (var i in EQ_LIST) {
            jsons[EQ_LIST[i]] = [];
            var dir = "./data/equip/" + EQ_LIST[i];
            var files = fs.readdirSync(dir);
            files.forEach(function(file) {
                var path = dir + '/' + file;
                var json = JSON.parse(fs.readFileSync(path, 'utf8'));
                switch (json["type"]) {
                    case "リング":
                        json["enchanted"] = enchanted["ring"];
                    case "ベルト":
                        json["enchanted"] = enchanted["belt"];
                        break;
                    case "アミュレット":
                    case "イヤリング":
                        json["enchanted"] = enchanted["amulet"];
                    default:
                }
                if(en_jsons[EQ_LIST[i]][json["name"]] != null){

                    json["enchanted"] = en_jsons[EQ_LIST[i]][json["name"]];
                }
                
                jsons[EQ_LIST[i]].push(json);
            });
     

        }
        //console.log(jsons);

        var savejson = JSON.stringify(jsons, null, " ");
        var save_script = "var equipjson = " + savejson + ";";
        fs.writeFileSync('js/equip.js', save_script);
    } else {
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
    console.log("st");
    var a = "function(){console.log('ok')}";     
    var b = Function.call(this ,"return "+a);
    console.log(b);
    b();
    //set_uidata(this);
    ui.loadEquip();
    calc.update();

}