/**
 * タブ要素作成
 */
function UiTab(id, parent) {
    if (parent == null) {
        this.parent = document.body;
    } else {
        this.parent = document.getElementById(parent);
    }
    if (typeof id == "object") {
        for (var i in id) {
            var div = document.createElement("div");
            div.setAttribute("id", id[i]);

            //tab0以外は非表示
            if (i > 0) {
                div.setAttribute("style", "display:none;");
            }

            this.parent.appendChild(div);

        }
    } else {
        var div = document.createElement("div");
        div.setAttribute("id", id);
        this.parent.appendChild(div);
    }
}

/**
 * panel要素作成
 */
function UiPanel(id, parent) {
    if (parent == null) {
        this.parent = document.body;
    } else {
        this.parent = document.getElementById(parent);
    }
    if (typeof id == "object") {
        for (var i in id) {
            var section = document.createElement("section");
            section.setAttribute("id", id[i]);
            section.setAttribute("class", "panel");
            this.parent.appendChild(section);
        }
    } else {
        var section = document.createElement("section");
        section.setAttribute("id", id);
        section.setAttribute("class", "panel");
        this.parent.appendChild(section);
    }
}

/**
 * 汎用要素作成
 */
function UiElement(element, parent, attr, inner) {
    if (parent == null) {
        this.parent = document.body;
    } else {
        this.parent = document.getElementById(parent);
    }

    if (typeof element == "object") {
        for (var e in element) {
            var el = document.createElement(element[e]);
            for (var a in attr) {
                el.setAttribute(a, attr[a]);
            }
            if (inner) {
                el.innerHTML = inner;
            }
        }
        this.parent.appendChild(el);
    } else {
        var el = document.createElement(element);
        for (var a in attr) {
            el.setAttribute(a, attr[a]);
        }
        if (inner) {
            el.innerHTML = inner;
        }
        this.parent.appendChild(el);
    }
}

/**
 * クラスリスト
 */
function output_classlist(id) {
    cl = document.getElementById(id);
    if (cl == null) return;
    var dl = document.createElement("dl");
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    var select = document.createElement("select");
    dt.innerHTML = "クラス";
    select.setAttribute("name", "cb_cls");
    select.setAttribute("id", "cb_cls");
    select.setAttribute("class", "onupdate");
    dd.appendChild(select);
    dl.appendChild(dt);
    dl.appendChild(dd);
    cl.appendChild(dl);

    for (var i = 0; i < CLASS_LIST.length; i++) {
        var option_add = document.createElement("option");
        option_add.setAttribute("value", CLASS_LIST[i]); // option ⇒ option_add
        option_add.innerHTML = CLASS_LIST2[i]; // option ⇒ option_add
        select.appendChild(option_add);
    }

    ui.selector["cb_cls"] = new UiPart("cb_cls");
    
}

/**
 * レベルリスト
 */
function output_levellist(id) {
    cl = document.getElementById(id);
    if (cl == null) return;
    var dl = document.createElement("dl");
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    var select = document.createElement("select");
    dt.innerHTML = "レベル";
    select.setAttribute("name", "cb_lev");
    select.setAttribute("id", "cb_lev");
    select.setAttribute("class", "onupdate");
    dd.appendChild(select);
    dl.appendChild(dt);
    dl.appendChild(dd);
    cl.appendChild(dl);
    for (var i = 1; i < MAXLV; i++) {
        if(i==1 || i>=50){
            var option_add = document.createElement("option");
            option_add.setAttribute("value", i); // option ⇒ option_add
            option_add.innerHTML = i; // option ⇒ option_add
            select.appendChild(option_add);
        }

    }
    ui.selector["cb_lev"] = new UiPart("cb_lev");
}

/**
 * カウントリスト   
 */
function option_count(id,selected,min,max){
    var cl = document.getElementById(id);
    if (cl == null) return;
    if(min == null)min = 0;
    if(max == null)max = 10;

    for (var i = min; i < max; i++) {
        var option_add = document.createElement("option");
        if(selected == i){
            option_add.setAttribute("selected", "selected"); // option ⇒ option_add
        }
        option_add.setAttribute("value", i); // option ⇒ option_add
        option_add.innerHTML = i; // option ⇒ option_add
        cl.appendChild(option_add);
    }   
}

/**武器リスト */

function UIWepon(elem){
    this.cb_elem = new UiPart(elem);
}
function  UiArmor(id){
    cl = document.getElementById(id);
    if (cl == null) return;
    var old = ui.selector["armor"];
    ui.selector["armor"] = [];
    for(var i=2;i<EQ_LIST.length;i++){
        var eqid = "equip_" + i; 
        var dl = document.createElement("dl");
        var dt = document.createElement("dd");
        dt.innerHTML = EQ_LIST[i];
        dl.appendChild(dt);
        var dd = document.createElement("dd");
        var select = document.createElement("select");
        select.setAttribute("name", eqid + "_enchant");
        select.setAttribute("id", eqid + "_enchant");
        select.setAttribute("class", "onupdate");
        dd.appendChild(select);
        dl.appendChild(dd);
        
        var dd = document.createElement("dd");
        var select = document.createElement("select");
        select.setAttribute("name", eqid);
        select.setAttribute("id", eqid);
        select.setAttribute("class", "onupdate");
        dd.appendChild(select);
        dl.appendChild(dd);
        cl.appendChild(dl);
        if(old != null){
 
            var old_ecnthant =  old[i]["enchant"].get_value();
        }
        
       // option_count(eqid + "_enchant",old_ecnthant,0,10);
        ui.selector["armor"][i] = [];
        ui.selector["armor"][i]["enchant"] = new UiSelect(eqid + "_enchant");
        ui.selector["armor"][i]["enchant"].set_option(0,10,old_ecnthant);
        ui.selector["armor"][i]["equip"] = new UiEquip(eqid);

    }
}

/**
 * ステータステーブル
 */
function UiStatuslist(id){
    cl = document.getElementById(id);
    if (cl == null) return;
    var ST = [[],[],[],[]];
    var param = ["str", "dex", "int", "con","wis","cha"];
    this.st = [];
    for(i in param){
 
        var dl = document.createElement("dl");
        var dt = document.createElement("dt");
        
        var pid = param[i];
        dt.innerHTML = pid;
        dl.appendChild(dt);
        var dd = document.createElement("dd");
        dd.setAttribute("id","sum_"+pid);
        dl.appendChild(dd);
        /*
        var dd = document.createElement("dd");
        dd.setAttribute("id","minus_"+pid);
        dl.appendChild(dd);
        var dd = document.createElement("dd");
        dd.setAttribute("id","plus_"+pid);
        dl.appendChild(dd);
        */
        var dd = document.createElement("dd");
        dd.setAttribute("id","base_"+pid);
        dl.appendChild(dd);   
        var dd = document.createElement("dd");
        dd.setAttribute("id","lv_"+pid);
        dl.appendChild(dd);  
        
        var select = document.createElement('select');
        select.setAttribute('id', 'lv_st_' + pid);
        select.setAttribute('class', 'onupdate');
        dd.appendChild(select); 

        var dd = document.createElement("dd");
        dd.setAttribute("id","rem_"+pid);
        dl.appendChild(dd);  
        var select = document.createElement('select');
        select.setAttribute('id', 'rem_st_' + pid);
        select.setAttribute('class', 'onupdate');
        dd.appendChild(select); 
        cl.appendChild(dl);
        ST[0][i] = new UiPart("base_"+pid);
        ST[1][i] = new UiSelect("rem_st_"+pid);
        ST[2][i] = new UiSelect("lv_st_"+pid);
        ST[3][i] = new UiPart("sum_"+pid);
    }
    this.st = ST;
    var dl = document.createElement("dl");
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    dt.innerHTML = "残り";
    dd.setAttribute("id","lab_rem"); 
    dl.appendChild(dt);
    dl.appendChild(dd);  
    cl.appendChild(dl);
    ui.selector["st"] = ST;

    ui.selector["lab_rem"] = new UiPart("lab_rem");
    
}
UiStatuslist.prototype.update = function(){
    for (var i = 0; i < ST_LIST.length; i++) {
        _ST[REM][i]   = parseInt(this.st[REM][i].get_value());
        _ST[LEVEL][i] = parseInt(this.st[LEVEL][i].get_value());
        if(isNaN(_ST[LEVEL][i]))_ST[LEVEL][i]=0;
        if(isNaN(_ST[REM][i]))_ST[REM][i]=0;
    }
    

}

UiStatuslist.prototype.sum = function(param){
    var ret = 0;
    if(_ST[param][0] == undefined)return 0;
    for (var i = 0; i < ST_LIST.length; i++) {
        ret += _ST[param][i];
    }
    return ret;

}
UiStatuslist.prototype.rem = function(level,rem){
    if(level < 90){
        var maxpoint = 45;
    }else{
        var maxpoint = 50;
    }
    for (var i = 0; i < ST_LIST.length; i++) {
        var remmax = rem + _ST[REM][i];
        if(remmax>20)remmax=20;
        var _max = remmax + _ST[BASE][i] + _ST[LEVEL][i] + _ST[ELIXIR][i];
        if(maxpoint < _max)remmax = maxpoint - _ST[BASE][i] - _ST[LEVEL][i] - _ST[ELIXIR][i];
        this.st[REM][i].set_option(0,remmax,_ST[REM][i]);  
    }
}

UiStatuslist.prototype.level = function(level){

    if(level < 90){
        var maxpoint = 45;
    }else{
        var maxpoint = 50;
    }
    if(level > 50){
        var point = level - 50;
    }else{
        var point = 0;
    }
    
    for (var i = 0; i < ST_LIST.length; i++) {
        var _status = _ST[BASE][i] + _ST[REM][i] + _ST[ELIXIR][i];
        var rempoint = maxpoint - _status;
        var usepoint = this.sum(LEVEL) - _ST[LEVEL][i];
        if(point - usepoint < rempoint)rempoint = point - usepoint;

        this.st[LEVEL][i].set_option(0,rempoint,_ST[LEVEL][i]);

    }

}
function output_levelbonus_html() {
    //levelbonusテーブル    
    var table = document.getElementById("bonustable");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.innerHTML = "ST";
    tr.appendChild(th);
    for (var i = 51; i < MAXLV; i++) {
        var th = document.createElement("th");
        th.innerHTML = i;
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for (var s = 0; s < ST_LIST.length; s++) {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        stlow = ST_LIST[s].toLowerCase();
        th.innerHTML = stlow;
        tr.appendChild(th);
        for (var i = 51; i < MAXLV; i++) {
            var td = document.createElement("td");
            var input = document.createElement('input');
            input.setAttribute('type', 'radio');
            input.setAttribute('id', 'lv' + i + "_" + stlow);
            input.setAttribute('name', 'lv' + i);
            input.setAttribute('value', ST_LIST[s]);
            input.setAttribute('class', 'onupdate input_' + stlow);
            var label = document.createElement('label');
            label.htmlFor = 'lv' + i + "_" + stlow;
            td.appendChild(input);
            td.appendChild(label);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    ui.selector["lev"] = new Uitable("bonustable");

}

function output_elixir_thml() {
    var section = document.getElementById("elixirbonus");
    ui.selector["cb_elixir"] = [];
    ui.selector["cb_elixir_level"] = [];
    for (var s = 0; s < 5; s++) {
        var dl = document.createElement("dl");
        var dt = document.createElement("dt");
        var dd = document.createElement("dd");
        var select = document.createElement('select');
        select.setAttribute('id', 'elixir_st' + s);
        select.setAttribute('class', 'onupdate');
        var option = document.createElement('option');
        option.setAttribute('value', "");
        option.innerHTML = "-";
        select.appendChild(option);
        for (var i = 0; i < ST_LIST.length; i++) {
            var option = document.createElement('option');
            option.setAttribute('value', ST_LIST[i]);
            option.innerHTML = ST_LIST[i];
            select.appendChild(option);
        }
        dt.appendChild(select);
        dl.appendChild(dt);
        var select = document.createElement('select');
        select.setAttribute('id', 'elixir_lv' + s);
        select.setAttribute('class', 'onupdate');
        for (var i = 50; i < MAXLV; i++) {
            var option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerHTML = i;
            select.appendChild(option);
        }
        dd.appendChild(select);
        dl.appendChild(dd);
        section.appendChild(dl);

        ui.selector["cb_elixir"][s] = new UiPart("elixir_st"+s);
        ui.selector["cb_elixir_level"][s] = new UiPart("elixir_lv"+s);
    }


}