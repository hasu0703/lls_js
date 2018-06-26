
//キャラクターのデータ
var BASE = 0;
var REM = 1;
var LEVEL = 2;
var ENCHANT = 3;
var ELIXIR = 4;

var D_SHORT = 0;
var H_SHORT = 1;
var C_SHORT = 2;

var D_LONG = 0;
var H_LONG = 1;
var C_LONG = 2;
var AC = 3;
var ER = 4;

var HP = 0;
var HPR = 1;
var HP_POT = 2;

var D_MAGIC = 0;
var H_MAGIC = 1;
var C_MAGIC = 2;
var MB = 3;
var RED_MP = 4;

var MP = 0;
var MPR = 1;
var MP_POT = 2;

var MR = 3;

var _ST = [];
for (i = 0; i < 5; i++) {
    _ST[i] = [];
}
var _C = [];
for (i = 0; i < 5; i++) {
    _C[i] = [];
    for (j = 0; j < ST_LIST.length; j++) {
        _C[i][j] = [];
    }
}
var rem_data = [];
var st_data = [];
for (i = 0; i < CLASS_LIST.length; i++) {
    st_data[i] = [
        [],
        []
    ];
}



st_data[P][BASE][STR] = 13;
st_data[P][BASE][DEX] = 9;
st_data[P][BASE][CON] = 11;
st_data[P][BASE][INT] = 9;
st_data[P][BASE][WIS] = 11;
st_data[P][BASE][CHA] = 13;
st_data[P][REM][STR] = 7;
st_data[P][REM][DEX] = 9;
st_data[P][REM][CON] = 9;
st_data[P][REM][INT] = 9;
st_data[P][REM][WIS] = 9;
st_data[P][REM][CHA] = 7;
rem_data[P] = 9;

st_data[K][BASE][STR] = 16;
st_data[K][BASE][DEX] = 12;
st_data[K][BASE][CON] = 16;
st_data[K][BASE][INT] = 8;
st_data[K][BASE][WIS] = 9;
st_data[K][BASE][CHA] = 10;
st_data[K][REM][STR] = 4;
st_data[K][REM][DEX] = 4;
st_data[K][REM][CON] = 4;
st_data[K][REM][INT] = 4;
st_data[K][REM][WIS] = 4;
st_data[K][REM][CHA] = 4;
rem_data[K] = 4;

st_data[E][BASE][STR] = 10;
st_data[E][BASE][DEX] = 12;
st_data[E][BASE][CON] = 12;
st_data[E][BASE][INT] = 12;
st_data[E][BASE][WIS] = 12;
st_data[E][BASE][CHA] = 9;
st_data[E][REM][STR] = 8;
st_data[E][REM][DEX] = 8;
st_data[E][REM][CON] = 8;
st_data[E][REM][INT] = 8;
st_data[E][REM][WIS] = 8;
st_data[E][REM][CHA] = 8;
rem_data[E] = 8;

st_data[W][BASE][STR] = 8;
st_data[W][BASE][DEX] = 7;
st_data[W][BASE][CON] = 12;
st_data[W][BASE][INT] = 14;
st_data[W][BASE][WIS] = 14;
st_data[W][BASE][CHA] = 8;
st_data[W][REM][STR] = 12;
st_data[W][REM][DEX] = 12;
st_data[W][REM][CON] = 8;
st_data[W][REM][INT] = 6;
st_data[W][REM][WIS] = 6;
st_data[W][REM][CHA] = 12;
rem_data[W] = 12;

st_data[D][BASE][STR] = 15;
st_data[D][BASE][DEX] = 12;
st_data[D][BASE][CON] = 12;
st_data[D][BASE][INT] = 11;
st_data[D][BASE][WIS] = 10;
st_data[D][BASE][CHA] = 8;
st_data[D][REM][STR] = 5;
st_data[D][REM][DEX] = 7;
st_data[D][REM][CON] = 7;
st_data[D][REM][INT] = 7;
st_data[D][REM][WIS] = 7;
st_data[D][REM][CHA] = 7;
rem_data[D] = 7;

st_data[R][BASE][STR] = 13;
st_data[R][BASE][DEX] = 11;
st_data[R][BASE][CON] = 14;
st_data[R][BASE][INT] = 10;
st_data[R][BASE][WIS] = 10;
st_data[R][BASE][CHA] = 8;
st_data[R][REM][STR] = 7;
st_data[R][REM][DEX] = 9;
st_data[R][REM][CON] = 6;
st_data[R][REM][INT] = 9;
st_data[R][REM][WIS] = 9;
st_data[R][REM][CHA] = 9;
rem_data[R] = 9;

st_data[I][BASE][STR] = 9;
st_data[I][BASE][DEX] = 10;
st_data[I][BASE][CON] = 12;
st_data[I][BASE][INT] = 12;
st_data[I][BASE][WIS] = 14;
st_data[I][BASE][CHA] = 8;
st_data[I][REM][STR] = 10;
st_data[I][REM][DEX] = 10;
st_data[I][REM][CON] = 8;
st_data[I][REM][INT] = 8;
st_data[I][REM][WIS] = 6;
st_data[I][REM][CHA] = 10;
rem_data[I] = 10;

st_data[F][BASE][STR] = 16;
st_data[F][BASE][DEX] = 13;
st_data[F][BASE][CON] = 16;
st_data[F][BASE][INT] = 10;
st_data[F][BASE][WIS] = 7;
st_data[F][BASE][CHA] = 9;
st_data[F][REM][STR] = 4;
st_data[F][REM][DEX] = 4;
st_data[F][REM][CON] = 4;
st_data[F][REM][INT] = 4;
st_data[F][REM][WIS] = 4;
st_data[F][REM][CHA] = 4;
rem_data[F] = 4;


//ステータスボーナス
_C[D_SHORT][STR][P] = 30;
_C[D_SHORT][STR][K] = 10;
_C[D_SHORT][STR][E] = 30;
_C[D_SHORT][STR][W] = 40;
_C[D_SHORT][STR][D] = 10;
_C[D_SHORT][STR][R] = 10;
_C[D_SHORT][STR][I] = 10;
_C[D_SHORT][STR][F] = 10;

_C[H_SHORT][STR][P] = 4;
_C[H_SHORT][STR][K] = 3;
_C[H_SHORT][STR][E] = 5;
_C[H_SHORT][STR][W] = 6;
_C[H_SHORT][STR][D] = 3;
_C[H_SHORT][STR][R] = 4;
_C[H_SHORT][STR][I] = 5;
_C[H_SHORT][STR][F] = 3;

_C[C_SHORT][STR][P] = 20;
_C[C_SHORT][STR][K] = 20;
_C[C_SHORT][STR][E] = 24;
_C[C_SHORT][STR][W] = 30;
_C[C_SHORT][STR][D] = 10;
_C[C_SHORT][STR][R] = 20;
_C[C_SHORT][STR][I] = 30;
_C[C_SHORT][STR][F] = 20;

_C[D_LONG][DEX][P] = 40;
_C[D_LONG][DEX][K] = 40;
_C[D_LONG][DEX][E] = 10;
_C[D_LONG][DEX][W] = 80;
_C[D_LONG][DEX][D] = 20;
_C[D_LONG][DEX][R] = 40;
_C[D_LONG][DEX][I] = 80;
_C[D_LONG][DEX][F] = 40;

_C[H_LONG][DEX][P] = 6;
_C[H_LONG][DEX][K] = 6;
_C[H_LONG][DEX][E] = 3;
_C[H_LONG][DEX][W] = 8;
_C[H_LONG][DEX][D] = 4;
_C[H_LONG][DEX][R] = 7;
_C[H_LONG][DEX][I] = 8;
_C[H_LONG][DEX][F] = 6;

_C[C_LONG][DEX][P] = 30;
_C[C_LONG][DEX][K] = 40;
_C[C_LONG][DEX][E] = 16;
_C[C_LONG][DEX][W] = 50;
_C[C_LONG][DEX][D] = 20;
_C[C_LONG][DEX][R] = 40;
_C[C_LONG][DEX][I] = 50;
_C[C_LONG][DEX][F] = 40;

_C[ER][DEX][P] = 6;
_C[ER][DEX][K] = 4;
_C[ER][DEX][E] = 6;
_C[ER][DEX][W] = 10;
_C[ER][DEX][D] = 4;
_C[ER][DEX][R] = 5;
_C[ER][DEX][I] = 9;
_C[ER][DEX][F] = 4;

_C[D_MAGIC][INT][P] = 40;
_C[D_MAGIC][INT][K] = 40;
_C[D_MAGIC][INT][E] = 30;
_C[D_MAGIC][INT][W] = 10;
_C[D_MAGIC][INT][D] = 40;
_C[D_MAGIC][INT][R] = 40;
_C[D_MAGIC][INT][I] = 25;
_C[D_MAGIC][INT][F] = 40;

_C[H_MAGIC][INT][P] = 20;
_C[H_MAGIC][INT][K] = 100;
_C[H_MAGIC][INT][E] = 16;
_C[H_MAGIC][INT][W] = 8;
_C[H_MAGIC][INT][D] = 24;
_C[H_MAGIC][INT][R] = 18;
_C[H_MAGIC][INT][I] = 12;
_C[H_MAGIC][INT][F] = 100;

_C[C_MAGIC][INT][P] = 80;
_C[C_MAGIC][INT][K] = 100;
_C[C_MAGIC][INT][E] = 30;
_C[C_MAGIC][INT][W] = 2;
_C[C_MAGIC][INT][D] = 30;
_C[C_MAGIC][INT][R] = 70;
_C[C_MAGIC][INT][I] = 20;
_C[C_MAGIC][INT][F] = 100;

_C[MB][INT][P] = 0;
_C[MB][INT][K] = 0;
_C[MB][INT][E] = 0;
_C[MB][INT][W] = 1;
_C[MB][INT][D] = 0;
_C[MB][INT][R] = 0;
_C[MB][INT][I] = 1;
_C[MB][INT][F] = 0;

_C[HP][CON][P] = 11;
_C[HP][CON][K] = 16;
_C[HP][CON][E] = 9;
_C[HP][CON][W] = 6;
_C[HP][CON][D] = 10;
_C[HP][CON][R] = 12;
_C[HP][CON][I] = 8;
_C[HP][CON][F] = 16;

_C[MR][WIS][P] = 10;
_C[MR][WIS][K] = 0;
_C[MR][WIS][E] = 25;
_C[MR][WIS][W] = 15;
_C[MR][WIS][D] = 10;
_C[MR][WIS][R] = 18;
_C[MR][WIS][I] = 20;
_C[MR][WIS][F] = 0;

/**
 * キャラクタークラス
 */
function Calculator() {
    var a = 10;
    this.red_mp;
    this.red_mp2 = 0;

    this.level = 1;
    this._rem = 0;


    this.base_dmg_short;
    this.base_dmg_long;
    this.base_dmg_magic;
    this.base_hit_short;
    this.base_hit_long;
    this.base_hit_magic;
    this.hit_short;
    this.hit_long;
    this.hit_magic;

    this.dmg_buki_ele1 = [];
    this.dmg_buki_ele2 = [];

    this.mb;
    this.sp;
    this.ml;
    this.int_beta;

    this.dmg_element1;
    this.dmg_element2;

    this.cri_short;
    this.cri_long;
    this.cri_magic;

    this.dmg_short;
    this.dmg_long;
    this.dmg_magic;

    this.dmg_small;
    this.dmg_big;
    this.dmg_cursed;
    this.dmg_undead;

    this.buki = new Buki();
    this.buki2 = new Buki();

    this.base_ac;
    this.equip_ac;
    this.base_er;
    this.buff = new BUFF();
    this.md_dmg = false;
    this.equip_pattern = 0;
    this.ac;
    this.dg;
    this.enemy_hit_rate;
    this.cbdmg;
    this.hp;
    this.mp;
    this.mr;
    this.cls = "P";


    this.res_ele = [];
    this.res_ail = [];

    this.cons_mp;

    /*
   DecimalFormat format_dmg = new DecimalFormat("#0.0");
   DecimalFormat format_rate = new DecimalFormat("#0.0%");
   DecimalFormat format_rate_2 = new DecimalFormat("#0.00");
   DecimalFormat format_speed = new DecimalFormat("##0.0");
*/

    this.bougu = [];
    for (i = 0; i < EQ_LIST.length - 2; i++) {
        this.bougu[i] = new Bougu();
    }



    //Morph polymorph = new Morph();
    this.acc = 1.0;
    // 一段加速(ヘイスト、GP
    this.acc_1 = 1.3333;
    // 二段加速(BP、ブラッドラスト、イビル
    this.acc_2 = 1.3333;
    // 二段加速(ワッフル
    this.acc_ew = 1.1547;
    // 三段加速(ドラゴンブラッド、酒
    this.acc_3 = 1.125;
    this.key_delay = 0.1815;

    this.db_rate = 0.3333;
    this.ef_rate = 0.4000;
    this.bs_rate = 0.3333;




}

Calculator.prototype.initialize = function () {
    //this.rem_reset();
}

Calculator.prototype.update = function () {
    if (this.cls != ui.selector["cb_cls"].get_value()) {
        this.cls = ui.selector["cb_cls"].get_value();
        this.rem_reset();

        /*
                    ui.cb_magic.removeAllItems();
        ui.cb_magic.addItem("");
        ui.cb_magic.setSelectedIndex(0);

        if (cls == E) {
            ui.cb_magic.addItem("トリプルアロー");
            ui.cb_magic.addItem("サンバースト");
            ui.cb_magic.addItem("コーンオブコールド");
            ui.cb_magic.addItem("イラプション");
            ui.cb_magic.addItem("コールライトニング");
        }
        if (cls == R) {
            ui.cb_magic.addItem("フォースレイヤー");
        }
        if (cls == W) {
            ui.cb_magic.addItem("サンバースト");
            ui.cb_magic.addItem("コーンオブコールド");
            ui.cb_magic.addItem("イラプション");
            ui.cb_magic.addItem("コールライトニング");
        }
        */
    }
    /*
    level = ui.cb_lev.getSelectedIndex() + 1;
    ui.lev.level = level;
    */

    this.level = ui.selector["cb_lev"].get_value();

    for (i = 0; i < 6; i++) {
        _ST[LEVEL][i] = 0;
        _ST[ELIXIR][i] = 0;
    }
    for (i = 0; i < 5; i++) {
        var st = ST_LIST.indexOf(ui.selector["cb_elixir"][i].get_value());
        if (st >= 0) {
            if (ui.selector["cb_elixir_level"][i].get_value() <= this.level) {
                _ST[ELIXIR][st]++;
            }
        }
    }

    ui.selector["lev"].get_table(this.level);
    for (i = 51; i < ui.selector["lev"].size; i++) {
        var st = ST_LIST.indexOf(ui.selector["lev"].field[i]);

        if (st >= 0) {
            if (_ST[BASE][st] + _ST[REM][st] + _ST[LEVEL][st] +
                _ST[ELIXIR][st] < 45) {
                if (i <= level) {
                    _ST[LEVEL][st]++;
                }
                ui.selector["lev"].isOverflow[i] = false;
            } else if (i <= level) {
                ui.selector["lev"].isOverflow[i] = true;
            }

        }
    }

    ui.selector["lev"].get_table(this.level);
    //   ui.lev.repaint();


    /*武器属性？
            for (int i = 0; i < ELEM_LIST.length; i++) {
            dmg_buki_ele1[i] = 0;
        }
        if (ui.cb_elem_1.getSelectedIndex() > 0) {

            int x = (ui.cb_elem_1.getSelectedIndex() - 1) % 5;
            int e = (ui.cb_elem_1.getSelectedIndex() - 1) / 5;
            int d[] = {1, 3, 5, 7, 9};
            dmg_buki_ele1[e] = d[x];
        }
        if (ui.cb_elem_2.getSelectedIndex() > 0) {
            for (int i = 0; i < ELEM_LIST.length; i++) {
                dmg_buki_ele2[i] = 0;
            }

            int x = (ui.cb_elem_2.getSelectedIndex() - 1) % 5;
            int e = (ui.cb_elem_2.getSelectedIndex() - 1) / 5;
            int d[] = {1, 3, 5, 7, 9};
            dmg_buki_ele2[e] = d[x];
        }*/

    buff = new BUFF();

    for (var b = 0; b < this.bougu.length; b++) {

        var eq = ui.selector["armor"][b + 2]["equip"].get_data();
        var en = ui.selector["armor"][b + 2]["enchant"].get_value();
        if (this.bougu[b]["name"] != eq["name"] || this.bougu[b].enchant != en) {
            if (this.bougu[b]["name"] != eq["name"]) {

                eq["changeitem"] = true;
            }
            if (this.bougu[b].enchant != en) {
                eq["enchant"] = en;
            }
            eq["en"] = ui.selector["armor"][b + 2]["enchant"];

            this.bougu[b].load(eq);
            
        }


        buff.effect += this.bougu[b].op.effect;
        buff.effect += this.bougu[b].op2.effect;
        buff.PVP += this.bougu[b].op.PVP + this.bougu[b].op2.PVP;

    }




    /////////////////////////////////







    /////////////////////////////////

    for (var i = 0; i < 6; i++) {
        // buff.ST[i] += buki.op.ST[i] + buki2.op.ST[i];
        for (var b = 0; b < this.bougu.length; b++) {
            buff.ST[i] += this.bougu[b].op.ST[i] + this.bougu[b].op2.ST[i];
        }
        _ST[ENCHANT][i] = buff.ST[i];
    }


    var str = _ST[BASE][STR] + _ST[REM][STR] + _ST[LEVEL][STR] +
        _ST[ENCHANT][STR] + _ST[ELIXIR][STR];
    var pure_str = _ST[BASE][STR] + _ST[REM][STR] +
        _ST[LEVEL][STR] + _ST[ELIXIR][STR];

    var dex = _ST[BASE][DEX] + _ST[REM][DEX] + _ST[LEVEL][DEX] +
        _ST[ENCHANT][DEX] + _ST[ELIXIR][DEX];
    var pure_dex = _ST[BASE][DEX] + _ST[REM][DEX] +
        _ST[LEVEL][DEX] + _ST[ELIXIR][DEX];

    var _int = _ST[BASE][INT] + _ST[REM][INT] + _ST[LEVEL][INT] +
        _ST[ENCHANT][INT] + _ST[ELIXIR][INT];
    var pure_int = _ST[BASE][INT] + _ST[REM][INT] +
        _ST[LEVEL][INT] + _ST[ELIXIR][INT];
    console.log(_ST);
    console.log(dex);
}


Calculator.prototype.rem_reset = function () {
    var clsnum = CLASS_LIST.indexOf(this.cls);


    this._rem = rem_data[clsnum];
    if (ui.selector["lab_rem"] != null) {
        ui.selector["lab_rem"].put_value(this._rem);
    }

    for (var i = 0; i < ST_LIST.length; i++) {
        _ST[REM][i] = 0;
        ui.selector["st"][REM][i].put_value(0);
        _ST[BASE][i] = st_data[clsnum][BASE][i];
        ui.selector["st"][BASE][i].put_value(st_data[clsnum][BASE][i]);
    }

}

/*
public class Calculator implements Common {







    {


    }





    void update() {






        buff = new Buff();



        if (bougu[0].name.equals("エルヴンシールド")) {
            if (cls == E) {
                buff.MR += 5;
            }
        }

        // セット効果
        int set1 = 0, set2 = 0, set3 = 0;// 王家セット
        int set4 = 0, set5 = 0, set6 = 0;// 浄化セット
        int set7 = 0, set8 = 0;// 極寒、アイスクイーンセット
        int set9 = 0;// 修練者セット
        int set10 = 0, set11 = 0, set12 = 0;//釣りセット
        int set13 = 0;//軍王セット
        int set14 = 0;//DKセット

        for (Bougu bougu1 : bougu) {
            if (bougu1.name.equals("デスナイトヘルム")
                    || bougu1.name.equals("デスナイトグローブ")
                    || bougu1.name.equals("デスナイトアーマー")
                    || bougu1.name.equals("デスナイトブーツ")) {
                set14++;
            }

            if (bougu1.name.equals("魔霊軍王のローブ")
                    || bougu1.name.equals("冥法軍王のマント")
                    || bougu1.name.equals("暗殺軍王のグローブ")
                    || bougu1.name.equals("魔獣軍王のブーツ")) {
                set13++;
            }

            if (bougu1.name.equals("シャイニングイアリング")) {
                set10++;
                set11++;
                set12++;
            }
            if (bougu1.name.equals("レッドムーンネックレス")) {
                set10 += 2;
            }
            if (bougu1.name.equals("ホワイトムーンネックレス")) {
                set11 += 2;
            }
            if (bougu1.name.equals("ブラックムーンネックレス")) {
                set12 += 2;
            }

            if (bougu1.name.equals("王家のイアリング")) {
                set1++;
                set2++;
                set3++;
            }
            if (bougu1.name.equals("浄化のイアリング")) {
                set4++;
                set5++;
                set6++;
            }
            if (bougu1.name.equals("王家の猛きアミュレット")) {
                set1 += 2;
            }
            if (bougu1.name.equals("王家の賢きアミュレット")) {
                set2 += 2;
            }
            if (bougu1.name.equals("王家の強きアミュレット")) {
                set3 += 2;
            }
            if (bougu1.name.equals("青呪のアミュレット")) {
                set4 += 2;
            }
            if (bougu1.name.equals("赤呪のアミュレット")) {
                set5 += 2;
            }
            if (bougu1.name.equals("緑呪のアミュレット")) {
                set6 += 2;
            }
            if (bougu1.name.contains("極寒")) {
                set7++;
            }
            if (bougu1.name.contains("アイスクイーン")) {
                set8++;
            }
            if (bougu1.name.contains("修練者")) {
                set9++;
            }
        }

        if (set10 >= 3) {
            buff.DMG_SHORT += 2;
            buff.DMG_LONG += 2;
            buff.HIT_SHORT += 2;
            buff.HIT_LONG += 2;
        }
        if (set11 >= 3) {
            buff.MP += 33;
            buff.MPR += 2;
            buff.SP++;
        }
        if (set12 >= 3) {
            buff.HP += 55;
            buff.HPR += 5;
        }

        if (set1 >= 3) {
            buff.DMG_SHORT += 2;
            buff.DMG_LONG += 2;
            buff.HIT_SHORT += 2;
            buff.HIT_LONG += 2;
        }
        if (set2 >= 3) {
            buff.MP += 33;
            buff.MPR += 2;
            buff.SP++;
        }
        if (set3 >= 3) {
            buff.HP += 55;
            buff.MR += 4;
            buff.HPR += 5;
        }
        if (set4 >= 3) {
            buff.ST[INT] += 2;
            buff.ST[WIS] -= 2;
        }
        if (set5 >= 3) {
            buff.ST[STR] += 2;
            buff.ST[CON] -= 2;
        }
        if (set6 >= 3) {
            buff.ST[DEX] += 2;
            buff.ST[CHA] -= 2;
        }
        if (set7 == 3) {
            buff.AC -= 5;
            buff.ST[CON] += 3;
            buff.HP += 100;
            buff.HPR += 8;
            buff.MPR += 4;
            buff.MR += 15;
            buff.element_resist[WATER] += 20;
        }
        if (set8 == 3) {
            buff.AC -= 5;
            buff.ST[STR] += 2;
            buff.ST[CHA] += 2;
            buff.HP += 100;
            buff.MPR += 4;
            buff.element_resist[WATER] += 20;
        }
        if (set9 == 3) {
            buff.HPR += 4;
            buff.MPR += 1;
        }

        if (set13 == 4) {
            buff.HP += 30;
            buff.HPR += 10;
            buff.MP += 30;
            buff.MPR += 10;
            buff.ST[CHA] += 3;
        }

        if (set14 == 4) {
            buff.AC -= 10;
            buff.ST[STR] += 2;
            buff.DMG_SHORT += 2;
         //  下記メソッド実行のたびに追加ボーナスが累積される模様（本来＋2個で追加ボーナスが3倍になる）
         //   ui.cb_morph_level.setSelectedItem("80");
         //   ui.cb_morph_type.setSelectedItem("近/遠特化");
        }

        if (ui.cb_buff[ITEM_WIZP].isSelected()) {
            if (cls == W || cls == I) {
                buff.SP += 2;
                buff.MPR += 2;
            } else {
                ui.cb_buff[ITEM_WIZP].setSelected(false);
            }
        }

        // マジックドール
        if (ui.cb_buff[ITEM_MD].isSelected()) {
            switch (ui.cb_buff_group[ITEM_MD].getSelectedIndex()) {
                case 0:
                    buff.effect += "特殊攻撃(クラスタシアン/ウェアウルフ),";
                    break;
                case 1:
                    buff.r_weight += 0.2;
                    break;
                case 2:
                    buff.effect += "MP回復 +15,";
                    break;
                case 3:
                    buff.effect += "MP回復 +15,";
                    break;
                case 4:
                    buff.DR += 1;
                    break;
                case 5:
                    buff.effect += "特殊攻撃(クラスタシアン/ウェアウルフ),";
                case 6:
                    buff.AC -= 3;
                    buff.ailment[FREEZE] += 7;
                    break;
                case 7:
                    buff.DMG_LONG++;
                    buff.HIT_LONG++;
                    break;
                case 8:
                    buff.effect += "HP回復 +40,";
                    break;
                case 9:
                    buff.effect += "回避,";
                    break;
                case 10:
                    buff.DMG_SHORT += 2;
                    buff.DMG_LONG += 2;
                    buff.MPR += 2;
                    break;
                case 11:
                    buff.MPR += 4;
                    break;
                case 17:// ブルート
                    buff.r_weight += 0.02;
                case 16:
                    buff.r_weight += 0.02;
                case 15:
                    buff.r_weight += 0.02;
                    buff.DMG_SHORT++;
                case 14:
                    buff.r_weight += 0.02;
                case 13:
                    buff.r_weight += 0.02;
                    buff.HPR += 15;
                case 12:
                    buff.r_weight += 0.10;
                    ui.cb_buff[ACC1].setSelected(true);
                    break;
                case 23:// ジャイアント
                    buff.r_weight += 0.10;
                    buff.AC--;
                    buff.MR += 5;
                    buff.effect += "ダメージ軽減 +20,ヴァンパイアリックタッチ,";
                    break;
                case 22:
                    buff.r_weight += 0.10;
                    buff.AC--;
                    buff.MR += 5;
                    buff.effect += "ダメージ軽減 +17,";
                    break;
                case 21:
                    buff.r_weight += 0.10;
                    buff.AC--;
                    buff.MR += 5;
                    buff.effect += "ダメージ軽減 +14,";
                    break;
                case 20:
                    buff.r_weight += 0.10;
                    buff.AC--;
                    buff.effect += "ダメージ軽減 +11,";
                    break;
                case 19:
                    buff.r_weight += 0.10;
                    buff.AC--;
                    buff.effect += "ダメージ軽減 +8,";
                    break;
                case 18:
                    buff.r_weight += 0.10;
                    buff.effect += "ダメージ軽減 +5,";
                    break;
                case 24:
                    buff.DMG_SHORT += 1;
                    break;
                case 25:
                    buff.DMG_SHORT += 1;
                    buff.DMG_LONG += 1;
                    break;
                case 26:
                    buff.DMG_SHORT += 1;
                    buff.DMG_LONG += 1;
                    buff.SP += 1;
                    break;
                case 27:
                    buff.DMG_SHORT += 2;
                    buff.DMG_LONG += 2;
                    buff.SP += 1;
                    buff.effect += "特殊攻撃(パック/パオ),";
                    break;

                case 28:
                    buff.AC -= 2;
                    buff.DR += 2;
                    buff.SP += 2;
                    buff.HP += 40;
                    buff.effect += "MP回復 +16,";
                    break;
            }
        }

        if (ui.cb_buff[ITEM_MD_OP].isSelected()) {
            switch (ui.cb_buff_group[ITEM_MD_OP].getSelectedIndex()) {
                case 0:
                    buff.AC -= 2;
                    break;
                case 1:
                    buff.AC -= 4;
                    break;
                case 2:
                    buff.AC -= 5;
                    buff.DR += 2;
                    break;
                case 3:
                    buff.AC -= 1;
                    buff.MR += 1;
                    break;
                case 4:
                    buff.AC -= 3;
                    buff.MR += 5;
                    break;
                case 5:
                    buff.AC -= 5;
                    buff.MR += 10;
                    break;
                case 6:
                    buff.MPR += 1;
                    break;
                case 7:
                    buff.MPR += 3;
                    break;
                case 8:
                    buff.MPR += 7;
                    break;
                case 9:
                    buff.effect += "MP回復 +1,";
                    break;
                case 10:
                    buff.effect += "MP回復 +3,";
                    break;
                case 11:
                    buff.effect += "MP回復 +7,";
                    break;
                case 12:
                    buff.HP += 10;
                    buff.MP += 10;
                    break;
                case 13:
                    buff.HP += 35;
                    buff.MP += 35;
                    break;
                case 14:
                    buff.HP += 60;
                    buff.MP += 60;
                    break;
                case 15:
                    buff.HIT_SHORT += 1;
                    buff.HIT_LONG += 1;
                    break;
                case 16:
                    buff.HIT_SHORT += 2;
                    buff.HIT_LONG += 2;
                    break;
                case 17:
                    buff.HIT_SHORT += 4;
                    buff.HIT_LONG += 4;
                    break;
            }
        }

        ui.cb_buff[ITEM_MD2].setToolTipText("   ");
        if (ui.cb_buff[ITEM_MD2].isSelected()) {
            switch ((String) ui.cb_buff_group[ITEM_MD2].getSelectedItem()) {
                case "カカシ":
                    buff.HP += 50;
                    ui.cb_buff[ITEM_MD2].setToolTipText("最大HP+50");
                    break;
                case "スノーマン":
                    buff.DMG_SHORT += 1;
                    buff.HIT_SHORT += 1;
                    ui.cb_buff[ITEM_MD2].setToolTipText("近距離ダメージ+1 近距離命中+1");
                    break;
                case "マーメイド":
                    ui.cb_buff[ITEM_MD2].setToolTipText("経験値増加+3%");
                    break;
                case "ラヴァゴーレム":
                    buff.DMG_SHORT += 1;
                    buff.DR += 1;
                    ui.cb_buff[ITEM_MD2].setToolTipText("近距離ダメージ+1 ダメージ軽減+1");
                    break;
                case "ジャイアント":
                    buff.DR += 1;
                    ui.cb_buff[ITEM_MD2].setToolTipText("経験値増加+10% ダメージ軽減+1");
                    break;
                case "ブラックエルダー":
                    buff.effect += "MP回復 +15,";
                    buff.effect += "コールライトニング,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("64秒毎にMPが15回復 魔法発動(コールライトニング)");
                    break;
                case "サキュバスクイーン":
                    buff.effect += "MP回復 +15,";
                    buff.SP += 1;
                    ui.cb_buff[ITEM_MD2].setToolTipText("SP+1 64秒毎にMPが15回復");
                    break;
                case "ドレイク":
                    buff.DMG_LONG += 2;
                    buff.effect += "MP回復 +6,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("遠距離ダメージ+2 64秒毎にMPが6回復");
                    break;
                case "キングバグベアー":
                    buff.ailment[STUN] += 8;
                    buff.effect += "MP回復 +10,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("スタン耐性+8 64秒毎にMPが10回復");
                    break;
                case "ダイアゴーレム":
                    buff.DR += 2;
                    ui.cb_buff[ITEM_MD2].setToolTipText("ダメージ軽減+2");
                    break;
                case "サイクロプス":
                    buff.AC -= 1;
                    buff.DMG_SHORT += 6;
                    buff.DMG_LONG += 6;
                    buff.SP += 4;
                    buff.effect += "アースジェイル,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("AC-1 近距離ダメージ+6 遠距離ダメージ+6 SP+4 魔法発動(アースジェイル)");
                    break;
                case "ナイトバルド":
                    buff.AC -= 2;
                    buff.DMG_SHORT += 4;
                    buff.HIT_SHORT += 2;
                    buff.DR += 2;
                    buff.HP += 120;
                    buff.effect += "MP回復 +8,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("AC-2 最大HP+120 近距離ダメージ+4 近距離命中+2 ダメージ軽減+2 64秒毎にMPが8回復");
                    break;
                case "シアー":
                    buff.AC -= 2;
                    buff.DMG_LONG += 4;
                    buff.HIT_LONG += 2;
                    buff.DR += 2;
                    buff.HP += 80;
                    buff.effect += "MP回復 +12,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("AC-2 最大HP+80 遠距離ダメージ+4 遠距離命中+2 ダメージ軽減+2 64秒毎にMPが12回復");
                    break;
                case "デスナイト":
                    buff.AC -= 2;
                    buff.DMG_SHORT += 8;
                    buff.DMG_LONG += 8;
                    buff.SP += 5;
                    buff.effect += "ヘルファイアー,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("AC-2 近距離ダメージ+8 遠距離ダメージ+8 SP+5 魔法発動(ヘルファイア)");
                    break;
                case "デーモン":
                    buff.AC -= 4;
                    buff.DMG_SHORT += 6;
                    buff.HIT_SHORT += 4;
                    buff.DR += 4;
                    buff.HP += 120;
                    buff.effect += "MP回復 +8,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("AC-4 最大HP+120 近距離ダメージ+6 近距離命中+4 ダメージ軽減+4 64秒毎にMPが8回復");
                    break;
                case "覚醒パオ":
                    buff.AC -= 4;
                    buff.SP += 3;
                    buff.DR += 4;
                    buff.HP += 40;
                    buff.effect += "MP回復 +16,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("AC-4 最大HP+40 SP+3ダメージ軽減+4 64秒毎にMPが16回復");
                    break;
                case "マミーロード":
                    buff.AC -= 4;
                    buff.DMG_LONG += 6;
                    buff.HIT_LONG += 4;
                    buff.DR += 4;
                    buff.HP += 80;
                    buff.effect += "MP回復 +12,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("AC-4 最大HP+80 遠距離ダメージ+6 遠距離命中+4 ダメージ軽減+4 64秒毎にMPが12回復");
                    break;
                case "アイリス":
                    buff.DMG_SHORT += 2;
                    buff.HIT_SHORT += 2;
                    buff.DR += 3;
                    buff.effect += "フォースレイヤーダメージ+10,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("近距離ダメージ+2 近距離命中+2 ダメージ軽減+3 フォースレイヤー追加ダメージ+10");
                    break;
                case "バンパイア":
                    buff.HP += 80;
                    buff.AC -= 2;
                    buff.DMG_SHORT += 2;
                    buff.HIT_SHORT += 2;
                    buff.DR += 2;
                    buff.effect += "タイタン系列発動区間+5%,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("AC-2 最大HP+80 近距離ダメージ+2 近距離命中+2 ダメージ軽減+2 タイタン系技術の発動HP区間が5%増加");
                    break;
                case "バランカ":
                    buff.HP += 120;
                    buff.DMG_SHORT += 6;
                    buff.HIT_SHORT += 6;
                    buff.DR += 2;
                    buff.effect += "MP回復 +12,";
                    buff.effect += "破壊的中+10,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("最大HP+120 近距離ダメージ+6 近距離命中+6 ダメージ軽減+2 破壊的中+10 64秒毎にMPが12回復");
                    break;
                case "アイスクイーン":
                    buff.HP += 80;
                    buff.SP += 1;
                    buff.DMG_LONG += 4;
                    buff.HIT_LONG += 8;
                    buff.DR += 2;
                    buff.effect += "攻撃時一定確率で魔法発動,";
                    ui.cb_buff[ITEM_MD2].setToolTipText("最大HP+80 遠距離ダメージ+4 遠距離命中+8 ダメージ軽減+2 魔法発動");
                    break;
            }
        }

        // 課金POT
        if (ui.cb_buff[ITEM_SEA].isSelected()) {
            switch (ui.cb_buff_group[ITEM_SEA].getSelectedIndex()) {
                case 0:
                    buff.DMG_SHORT += 3;
                    buff.DMG_LONG += 3;
                    buff.HIT_SHORT += 3;
                    buff.HIT_LONG += 3;
                    buff.SP += 3;
                case 1:
                    buff.DMG_SHORT += 2;
                    buff.DMG_LONG += 2;
                    buff.HIT_SHORT += 2;
                    buff.HIT_LONG += 2;
                    break;
                case 2:
                    buff.SP += 3;
                    break;
                case 3:
                    buff.ST[STR] += 2;
                    break;
                case 4:
                    buff.ST[DEX] += 2;
                    break;
                case 5:
                    buff.ST[CON] += 2;
                    break;
                case 6:
                    buff.ST[INT] += 2;
                    break;
                case 7:
                    buff.ST[WIS] += 2;
                    break;
            }
        }
        if (ui.cb_buff[ITEM_BREEZE].isSelected()) {
            switch (ui.cb_buff_group[ITEM_BREEZE].getSelectedIndex()) {
                case 0:
                    buff.HPR += 10;
                    break;
                case 1:
                    buff.MPR += 10;
                    break;
                case 2:
                    buff.HP += 120;
                    break;
                case 3:
                    buff.MP += 80;
                    break;
                case 4:
                    buff.MR += 10;
                    break;
                case 5:
                    buff.MP += 60;
                    buff.MPR += 4;
                    break;
                case 6:
                    buff.HP += 100;
                    buff.HPR += 8;
                    break;
            }
        }

        // 料理
        if (ui.cb_buff[ITEM_COOKING].isSelected()) {
            switch (ui.cb_buff_group[ITEM_COOKING].getSelectedIndex()) {
                case 3:
                    buff.DR += 5;
                    buff.SP += 2;
                    buff.DMG_LONG += 2;
                    buff.HIT_LONG += 2;
                    buff.DMG_SHORT += 2;
                    buff.HIT_SHORT += 2;
                    buff.HPR += 3;
                    buff.MPR += 4;
                    buff.MR += 15;
                    buff.element_resist[FIRE] += 10;
                    buff.element_resist[WIND] += 10;
                    buff.element_resist[EARTH] += 10;
                    buff.element_resist[WATER] += 10;
                    break;
                case 2:
                    buff.DR += 2;
                    buff.SP += 2;
                    buff.MPR += 3;
                    buff.HPR += 2;
                    buff.MR += 10;
                    buff.element_resist[FIRE] += 10;
                    buff.element_resist[WATER] += 10;
                    buff.element_resist[WIND] += 10;
                    buff.element_resist[EARTH] += 10;
                    break;
                case 1:
                    buff.DR += 2;
                    buff.DMG_LONG += 2;
                    buff.HIT_LONG += 1;
                    buff.HPR += 2;
                    buff.MPR += 2;
                    buff.MR += 10;
                    buff.element_resist[FIRE] += 10;
                    buff.element_resist[WATER] += 10;
                    buff.element_resist[WIND] += 10;
                    buff.element_resist[EARTH] += 10;
                    break;
                case 0:
                    buff.DR += 2;
                    buff.DMG_SHORT += 2;
                    buff.HIT_SHORT += 1;
                    buff.HPR += 2;
                    buff.MPR += 2;
                    buff.MR += 10;
                    buff.element_resist[FIRE] += 10;
                    buff.element_resist[WATER] += 10;
                    buff.element_resist[WIND] += 10;
                    buff.element_resist[EARTH] += 10;
                    break;

            }
        }
        if (ui.cb_buff[ITEM_DESSERT].isSelected()) {
            switch (ui.cb_buff_group[ITEM_DESSERT].getSelectedIndex()) {
                case 0:
                    buff.DR += 2;
                    break;
                case 1:
                    buff.DR += 5;
                    break;
                case 2:
                    buff.DR += 3;
                    break;
                case 3:
                    buff.DR += 5;
                    break;
            }
        }

//        if (ui.cb_buff[DRAGON].isSelected()) {
//            switch (ui.cb_buff_group[DRAGON].getSelectedIndex()) {
//                case 0:
//                    buff.HP += 100;
//                    buff.MP += 50;
//                    buff.HPR += 3;
//                    buff.MPR += 3;
//                    buff.d_short += 1;
//                    buff.d_long += 1;
//                    buff.HIT_CLOSE += 5;
//                    buff.element_resisit[EARTH] += 30;
//                    buff.element_coefficient[EARTH] += (int) (30 / 3.125);
//                    ui.cb_buff[W_DW].setSelected(true);
//                    break;
//                case 1:
//                    buff.HP += 100;
//                    buff.MP += 50;
//                    buff.HPR += 3;
//                    buff.MPR += 3;
//                    buff.d_short += 1;
//                    buff.d_long += 1;
//                    buff.HIT_CLOSE += 5;
//                    buff.element_resisit[WATER] += 30;
//                    buff.element_coefficient[WATER] += (int) (30 / 3.125);
//                    ui.cb_buff[W_DW].setSelected(true);
//                    break;
//                case 2:
//                    buff.HP += 100;
//                    buff.MP += 50;
//                    buff.HPR += 3;
//                    buff.MPR += 3;
//                    buff.d_short += 1;
//                    buff.d_long += 1;
//                    buff.HIT_CLOSE += 5;
//                    buff.element_resisit[WIND] += 30;
//                    buff.element_coefficient[WIND] += (int) (30 / 3.125);
//                    ui.cb_buff[W_DW].setSelected(true);
//
//            }
//        }
        if (ui.cb_buff[KOMA].isSelected()) {
            switch (ui.cb_buff_group[KOMA].getSelectedIndex()) {
                case 0:
                    buff.ST[STR] += 5;
                    buff.ST[DEX] += 5;
                    buff.ST[CON] += 1;
                    buff.HIT_SHORT += 3;
                    buff.AC -= 3;
                    break;
                case 1:
                    buff.ST[STR] += 5;
                    buff.ST[DEX] += 5;
                    buff.ST[CON] += 3;
                    buff.HIT_SHORT += 5;
                    buff.AC -= 8;
                    buff.SP += 1;
            }
        }

        cons_mp = 0;

        if (ui.cb_buff[K_RA].isSelected()) {
            if (level >= 50 && cls == K) {
                buff.DR += (level - 50) / 5 + 1;
                if (ui.cb_buff[K_RA].getForeground().equals(Color.BLUE)) {
                    cons_mp += (7.0 * (1.0 - red_mp * 0.01) - red_mp2) / 3;
                }

            } else {
                ui.cb_buff[K_RA].setSelected(false);
            }
        }

        if (ui.cb_buff[K_SC].isSelected()) {
            if (level >= 50 && cls == K) {
                buff.ER += 15;
                if (ui.cb_buff[K_SC].getForeground().equals(Color.BLUE)) {
                    cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 3;
                }
            } else {
                ui.cb_buff[K_SC].setSelected(false);
            }
        }
        if (ui.cb_buff[K_CB].isSelected()) {
            if (level >= 50 && cls == K
                    && buki.type.equals("両手剣")) {
                if (ui.cb_buff[K_CB].getForeground().equals(Color.BLUE)) {
                    cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 1;
                }
                // CB効果未実装
            } else {
                ui.cb_buff[K_CB].setSelected(false);
            }
        }
        if (ui.cb_buff[K_BA].isSelected()) {
            if (level >= 60 && cls == K) {
                buff.HIT_SHORT += 6;
                if (ui.cb_buff[K_BA].getForeground().equals(Color.BLUE)) {
                    cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 1;
                }
            } else {
                ui.cb_buff[K_BA].setSelected(false);
            }
        }
        // レジストマジック
        if (ui.cb_buff[E_RM].isSelected()) {
            if (cls == E) {
                buff.MR += 10;
                if (ui.cb_buff[E_RM].getForeground().equals(Color.BLUE)) {
                    cons_mp += (5.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
                }
            } else {
                ui.cb_buff[E_RM].setSelected(false);
            }
        }
        // レジストエレメント
        if (ui.cb_buff[E_RE].isSelected()) {
            if (cls == E) {
                buff.element_resist[FIRE] += 10;
                buff.element_resist[WATER] += 10;
                buff.element_resist[WIND] += 10;
                buff.element_resist[EARTH] += 10;
                if (ui.cb_buff[E_RE].getForeground().equals(Color.BLUE)) {
                    cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
                }
            } else {
                ui.cb_buff[E_RE].setSelected(false);
            }
        }
        // クリアーマインド
        if (ui.cb_buff[E_CM].isSelected()) {
            if (cls == E) {
                buff.ST[WIS] += 3;
                if (ui.cb_buff[E_CM].getForeground().equals(Color.BLUE)) {
                    cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
                }
            } else {
                ui.cb_buff[E_CM].setSelected(false);
            }
        }
        if (ui.cb_buff[E_BW].isSelected()) {
            if (cls == E) {
                buff.ELEM_DMG_SHORT[FIRE] += 6;
                buff.HIT_SHORT += 6;
                if (ui.cb_buff[E_BW].getForeground().equals(Color.BLUE)) {
                    cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                }
            } else {
                ui.cb_buff[E_BW].setSelected(false);
            }
        }
        if (ui.cb_buff[E_FW].isSelected()) {
            if (ui.cb_buff[E_BW].isSelected()) {
                ui.cb_buff[E_FW].setSelected(false);
            } else {
                if (ui.cb_buff[E_FW].getForeground().equals(Color.BLUE)) {
                    cons_mp += (15.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                }
                buff.ELEM_DMG_SHORT[FIRE] += 4;
            }
        }
        // ネイチャーズタッチ
        if (ui.cb_buff[E_NT].isSelected()) {
            if (level > 9) {
                if (level < 24) {
                    buff.HPR += level - 9;
                } else {
                    buff.HPR += 15;
                }
            }
            if (ui.cb_buff[E_NT].getForeground().equals(Color.BLUE)) {
                cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 5;
            }
        }
        if (ui.cb_buff[D_DE].isSelected()) {
            if (cls == D) {
                buff.ER += 18;

                if (ui.cb_buff[D_DE].getForeground().equals(Color.BLUE)) {
                    cons_mp += (15.0 * (1.0 - red_mp * 0.01) - red_mp2) / 3;
                }
            } else {
                ui.cb_buff[D_DE].setSelected(false);
            }
        }
        if (ui.cb_buff[D_SA].isSelected()) {
            if (cls == D) {
                buff.MR += 5;
                if (ui.cb_buff[D_SA].getForeground().equals(Color.BLUE)) {
                    cons_mp += (12.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                }
            } else {
                ui.cb_buff[D_SA].setSelected(false);
            }
        }
        if (ui.cb_buff[E_AP].isSelected()) {
            if (ui.cb_buff[D_DE].isSelected()) {
                ui.cb_buff[E_AP].setSelected(false);
            } else {
                buff.ER += 5;
                if (ui.cb_buff[E_AP].getForeground().equals(Color.BLUE)) {
                    cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                }
            }
        }
        if (ui.cb_buff[E_SS].isSelected()) {
            buff.ELEM_DMG_LONG[WIND] += 6;
            buff.HIT_LONG += 3;
            if (ui.cb_buff[E_SS].getForeground().equals(Color.BLUE)) {
                cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
            }
        }
        if (ui.cb_buff[E_SE].isSelected()) {
            if (ui.cb_buff[E_SS].isSelected()) {
                ui.cb_buff[E_SE].setSelected(false);
            } else {
                buff.ELEM_DMG_LONG[WIND] += 3;
                buff.HIT_LONG += 2;
                if (ui.cb_buff[E_SE].getForeground().equals(Color.BLUE)) {
                    cons_mp += (40.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                }
            }
        }
        if (ui.cb_buff[E_WS].isSelected()) {
            if (ui.cb_buff[E_SS].isSelected()
                    || ui.cb_buff[E_SE].isSelected()) {
                ui.cb_buff[E_WS].setSelected(false);
            } else {
                buff.HIT_LONG += 6;
                if (ui.cb_buff[E_WS].getForeground().equals(Color.BLUE)) {
                    cons_mp += (15.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                }
            }
        }
        if (ui.cb_buff[E_EG].isSelected()) {
            buff.DR += 2;
            if (ui.cb_buff[E_EG].getForeground().equals(Color.BLUE)) {
                cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 10;
            }
        }
        if (ui.cb_buff[W_BSK].isSelected()) {
            buff.DMG_SHORT += 2;
            buff.HIT_SHORT += 8;
            buff.HPR -= 255;
            buff.AC += 10;
            if (ui.cb_buff[W_BSK].getForeground().equals(Color.BLUE)) {
                cons_mp += (40.0 * (1.0 - red_mp * 0.01) - red_mp2) / 5;
            }
        }
        if (ui.cb_buff[W_BA].isSelected()) {
            buff.AC -= 3;
            if (ui.cb_buff[W_BA].getForeground().equals(Color.BLUE)) {
                cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 30;
            }
        }
        if (ui.cb_buff[R_DS].isSelected()) {
            buff.DR += 5;
            if (level >= 80) {
                buff.DR += (int) ((level - 80) / 2) + 1;
            }
        }
        if (ui.cb_buff[R_ANTHARAS].isSelected()) {
            if (ui.cb_buff[R_FAFURION].isSelected()
                    || ui.cb_buff[R_VALAKAS].isSelected()) {
                ui.cb_buff[R_ANTHARAS].setSelected(false);
            } else {
                buff.AC -= 3;
                buff.ailment[HOLD] += 10;
                if (ui.cb_buff[R_ANTHARAS].getForeground().equals(Color.BLUE)) {
                    cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 10;
                }
            }
        }
        if (ui.cb_buff[R_FAFURION].isSelected()) {
            if (ui.cb_buff[R_ANTHARAS].isSelected()
                    || ui.cb_buff[R_VALAKAS].isSelected()) {
                ui.cb_buff[R_FAFURION].setSelected(false);
            } else {
                buff.ailment[FREEZE] += 10;
                if (ui.cb_buff[R_FAFURION].getForeground().equals(Color.BLUE)) {
                    cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 10;
                }
            }
        }
        if (ui.cb_buff[R_VALAKAS].isSelected()) {
            if (ui.cb_buff[R_ANTHARAS].isSelected()
                    || ui.cb_buff[R_FAFURION].isSelected()) {
                ui.cb_buff[R_VALAKAS].setSelected(false);
            } else {
                buff.HIT_SHORT += 5;
                buff.ailment[STUN] += 10;
                if (ui.cb_buff[R_VALAKAS].getForeground().equals(Color.BLUE)) {
                    cons_mp += (50.0 * (1.0 - red_mp * 0.01) - red_mp2) / 10;
                }
            }
        }
        if (ui.cb_buff[I_CON].isSelected()) {
            buff.MPR += 2;
            if (ui.cb_buff[I_CON].getForeground().equals(Color.BLUE)) {
                cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 10;
            }
        }
        if (ui.cb_buff[I_PAT].isSelected()) {
            buff.DR += 2;
            if (ui.cb_buff[I_PAT].getForeground().equals(Color.BLUE)) {
                cons_mp += (25.0 * (1.0 - red_mp * 0.01) - red_mp2) / 10;
            }
        }
        if (ui.cb_buff[I_INS].isSelected()) {
            buff.ST[STR]++;
            buff.ST[DEX]++;
            buff.ST[CON]++;
            buff.ST[INT]++;
            buff.ST[WIS]++;
            if (ui.cb_buff[I_INS].getForeground().equals(Color.BLUE)) {
                cons_mp += (60.0 * (1.0 - red_mp * 0.01) - red_mp2) / 10;
            }
        }
        if (ui.cb_buff[I_IO].isSelected()) {
            buff.DMG_SHORT += 4;
            buff.DMG_LONG += 4;
            buff.HIT_SHORT += 4;
            if (ui.cb_buff[I_IO].getForeground().equals(Color.BLUE)) {
                cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 2;
            }
        }
        if (ui.cb_buff[I_IR].isSelected()) {
            buff.SP += 2;
            if (ui.cb_buff[I_IR].getForeground().equals(Color.BLUE)) {
                cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 2;
            }
        }
        if (ui.cb_buff[I_ID].isSelected()) {
            buff.AC -= 8;
            if (ui.cb_buff[I_ID].getForeground().equals(Color.BLUE)) {
                cons_mp += (40.0 * (1.0 - red_mp * 0.01) - red_mp2) / 2;
            }
        }

        if (ui.cb_buff[CLAY].isSelected()) {
            buff.HP += 100;
            buff.MP += 50;
            buff.HPR += 3;
            buff.MPR += 3;
            buff.DMG_SHORT += 1;
            buff.DMG_LONG += 1;
            buff.HIT_SHORT += 5;
            buff.element_resist[EARTH] += 30;
            ui.cb_buff[UI.W_DW].setSelected(true);
        }

        switch (ui.cb_pattern_l.getSelectedIndex()) {
            case 1:
                buff.ST[STR]++;
                break;
            case 2:
                buff.ST[DEX]++;
                break;
            case 3:
                buff.ST[CON]++;
                break;
            case 4:
                buff.ST[INT]++;
                break;
            case 5:
                buff.ST[WIS]++;
                break;
            case 6:
                buff.ST[CHA]++;
                break;
            case 7:
                buff.ST[STR] += 2;
                break;
            case 8:
                buff.ST[DEX] += 2;
                break;
            case 9:
                buff.ST[INT] += 2;
                break;
            case 10:
                buff.ST[STR]++;
                buff.HP += 80;
                buff.HPR += 5;
                break;
            case 11:
                buff.ST[INT]++;
                buff.MP += 50;
                buff.MPR += 3;
                break;
            case 12:
                buff.ST[STR]++;
                buff.HP += 100;
                buff.DMG_SHORT++;
                buff.HPR += 8;
                break;
            case 13:
                buff.ST[INT]++;
                buff.MP += 70;
                buff.SP++;
                buff.MPR += 5;
                break;
            case 14:
                buff.ST[DEX]++;
                buff.HP += 80;
                buff.MP += 50;
                buff.DMG_LONG++;
                buff.HPR += 5;
                buff.MPR += 3;
                break;
        }
        switch (ui.cb_pattern_r.getSelectedIndex()) {
            case 1:
                buff.HP += 120;
                break;
            case 2:
                buff.MP += 80;
                break;
            case 3:
                buff.AC -= 5;
                break;
            case 4:
                buff.AC -= 9;
                break;
            case 5:
                buff.element_resist[FIRE] += 30;
                break;
            case 6:
                buff.element_resist[WATER] += 30;
                break;
            case 7:
                buff.element_resist[WIND] += 30;
                break;
            case 8:
                buff.element_resist[EARTH] += 30;
                break;
            case 9:
                buff.element_resist[FIRE] += 30;
                buff.element_resist[WATER] += 30;
                buff.element_resist[WIND] += 30;
                buff.element_resist[EARTH] += 30;
                break;
            case 10:
                buff.AC -= 9;
                buff.HP += 120;
                break;
            case 11:
                buff.AC -= 9;
                buff.MP += 80;
                break;
            case 12:
                buff.AC -= 9;
                buff.HP += 80;
                buff.MP += 50;
                break;
            case 13:
                buff.AC -= 3;
                buff.DMG_SHORT += 3;
                buff.DMG_LONG += 3;
                buff.SP += 3;
                buff.MR += 10;
                break;
        }

        //エリクサールーン
        int e = ui.cb_pattern_l2.getSelectedIndex();
        boolean q = false;
        if (e > 0) {
            if (e > 5) {
                e -= 5;
                q = true;
            }
            buff.ST[e - 1]++;

            switch (cls) {
                case P:
                    buff.DR += 3;
                    if (q) {
                        buff.HIT_SHORT += 2;
                    }
                    break;
                case K:
                    buff.HP += 50;
                    if (q) {
                        buff.DMG_SHORT += 1;
                    }
                    break;
                case E:
                    buff.MP += 50;
                    if (q) {
                        buff.DMG_LONG += 1;
                        buff.DMG_SHORT += 1;
                    }
                    break;
                case W:
                    buff.MPR += 3;
                    if (q) {
                        buff.SP += 1;
                    }
                    break;
                case D:
                    buff.AC -= 3;
                    if (q) {
                        buff.MP += 30;
                    }
                    break;
                case R:
                    buff.HIT_SHORT += 3;
                    if (q) {
                        buff.DR += 1;
                    }
                    break;
                case I:
                    buff.r_weight += 0.05;
                    if (q) {
                        buff.HP += 50;
                    }
                    break;
                case F:
                    buff.HP += 50;
                    if (q) {
                        buff.MR += 5;
                    }
                    break;
            }
        }

        //オルターストーン
        if (ui.cb_pattern_r2.getSelectedIndex() >= 6 && ui.cb_pattern_r2.getSelectedIndex() <= 8) {

            ui.cb_alterstone_en.setEnabled(true);
            if (ui.cb_alterstone_en.getSelectedIndex() >= 3) {
                ui.cb_alterstone_op[0].setEnabled(true);
                switch (ui.cb_alterstone_op[0].getSelectedIndex()) {
                    case 1:
                        buff.HIT_SHORT += 2;
                        break;
                    case 2:
                        buff.HIT_LONG += 2;
                        break;
                    case 3:
                        buff.CRI_MAGIC += 1;
                        break;
                    case 4:
                        buff.DMG_LONG += 1;
                        break;
                    case 5:
                        buff.SP += 1;
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        buff.DMG_SHORT += 1;
                        break;
                }
            } else {
                ui.cb_alterstone_op[0].setEnabled(false);
            }
            if (ui.cb_alterstone_en.getSelectedIndex() >= 4) {
                ui.cb_alterstone_op[1].setEnabled(true);
                switch (ui.cb_alterstone_op[1].getSelectedIndex()) {
                    case 1:
                        buff.HIT_SHORT += 2;
                        break;
                    case 2:
                        buff.HIT_LONG += 2;
                        break;
                    case 3:
                        buff.CRI_MAGIC += 1;
                        break;
                    case 4:
                        buff.DMG_LONG += 1;
                        break;
                    case 5:
                        buff.SP += 1;
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        buff.DMG_SHORT += 1;
                        break;
                }
            } else {
                ui.cb_alterstone_op[1].setEnabled(false);
            }
            if (ui.cb_alterstone_en.getSelectedIndex() >= 5) {
                ui.cb_alterstone_op[2].setEnabled(true);
                switch (ui.cb_alterstone_op[2].getSelectedIndex()) {
                    case 1:
                        buff.HIT_SHORT += 2;
                        break;
                    case 2:
                        buff.HIT_LONG += 2;
                        break;
                    case 3:
                        buff.CRI_MAGIC += 1;
                        break;
                    case 4:
                        buff.DMG_LONG += 1;
                        break;
                    case 5:
                        buff.SP += 1;
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        buff.DMG_SHORT += 1;
                        break;
                }
            } else {
                ui.cb_alterstone_op[2].setEnabled(false);
            }
        } else {
            ui.cb_alterstone_en.setEnabled(false);
            ui.cb_alterstone_op[0].setEnabled(false);
            ui.cb_alterstone_op[1].setEnabled(false);
            ui.cb_alterstone_op[2].setEnabled(false);
        }

        switch (ui.cb_pattern_r2.getSelectedIndex()) {
            case 1:
                buff.HPR += 2;
                break;
            case 2:
                buff.MPR++;
                break;
            case 3:
                buff.DMG_SHORT++;
                buff.HIT_SHORT += 2;
                buff.MR += 5;
                break;
            case 4:
                buff.DMG_LONG++;
                buff.HIT_LONG += 2;
                buff.MR += 5;
                break;
            case 5:
                buff.SP++;
                buff.MR += 5;
                break;
            case 6:
                //オルターストーン　勇猛
                switch (ui.cb_alterstone_en.getSelectedIndex()) {
                    case 1:
                        buff.HP += 20;
                        break;
                    case 2:
                        buff.HP += 25;
                        buff.MP += 5;
                        break;
                    case 3:
                        buff.HP += 30;
                        buff.MP += 10;
                        buff.ST[STR] += 1;
                        break;
                    case 4:
                        buff.HP += 40;
                        buff.MP += 20;
                        buff.ST[STR] += 1;
                        buff.HIT_SHORT += 1;
                        break;
                    case 5:
                        buff.HP += 50;
                        buff.MP += 30;
                        buff.ST[STR] += 1;
                        buff.HIT_SHORT += 1;
                        buff.DMG_SHORT += 1;
                        break;
                    case 6:
                        buff.HP += 60;
                        buff.MP += 40;
                        buff.ST[STR] += 1;
                        buff.HIT_SHORT += 1;
                        buff.DMG_SHORT += 1;
                        buff.MR += 5;
                        buff.DR += 1;
                        break;
                }
                break;
            case 7:
                //オルターストーン　魔弾
                switch (ui.cb_alterstone_en.getSelectedIndex()) {
                    case 1:
                        buff.HP += 10;
                        buff.MP += 10;
                        break;
                    case 2:
                        buff.HP += 15;
                        buff.MP += 15;
                        break;
                    case 3:
                        buff.HP += 20;
                        buff.MP += 20;
                        buff.ST[DEX] += 1;
                        break;
                    case 4:
                        buff.HP += 30;
                        buff.MP += 30;
                        buff.ST[DEX] += 1;
                        buff.HIT_LONG += 1;
                        break;
                    case 5:
                        buff.HP += 40;
                        buff.MP += 40;
                        buff.ST[DEX] += 1;
                        buff.HIT_LONG += 1;
                        buff.DMG_LONG += 1;
                        break;
                    case 6:
                        buff.HP += 50;
                        buff.MP += 50;
                        buff.ST[DEX] += 1;
                        buff.HIT_LONG += 1;
                        buff.DMG_LONG += 1;
                        buff.MR += 5;
                        buff.DR += 1;
                        break;
                }
                break;
            case 8:
                //オルターストーン　叡智
                switch (ui.cb_alterstone_en.getSelectedIndex()) {
                    case 1:
                        buff.MP += 20;
                        break;
                    case 2:
                        buff.HP += 5;
                        buff.MP += 25;
                        break;
                    case 3:
                        buff.HP += 10;
                        buff.MP += 30;
                        buff.ST[INT] += 1;
                        break;
                    case 4:
                        buff.HP += 20;
                        buff.MP += 40;
                        buff.ST[INT] += 1;
                        buff.MPR += 1;
                        break;
                    case 5:
                        buff.HP += 30;
                        buff.MP += 50;
                        buff.ST[INT] += 1;
                        buff.MPR += 1;
                        buff.SP += 1;
                        break;
                    case 6:
                        buff.HP += 40;
                        buff.MP += 60;
                        buff.ST[INT] += 1;
                        buff.MPR += 1;
                        buff.SP += 1;
                        buff.MR += 5;
                        buff.DR += 1;
                        break;
                }
                break;
        }

        if (ui.cb_buff[B_STR].isSelected()) {
            switch (ui.cb_buff_group[B_STR].getSelectedIndex()) {
                case 0:
                    buff.ST[STR] += 3;
                    if (ui.cb_buff[B_STR].getForeground().equals(Color.BLUE)) {
                        cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                    }
                    break;
                case 1:
                    buff.ST[STR] += 5;
                    if (ui.cb_buff[B_STR].getForeground().equals(Color.BLUE)) {
                        cons_mp += (50.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
                    }
                    break;
                case 2:
                    buff.ST[STR] += 6;
                    break;
                case 3:
                    buff.ST[STR] += 7;
                    break;
            }
        }
        if (ui.cb_buff[B_DEX].isSelected()) {
            switch (ui.cb_buff_group[B_DEX].getSelectedIndex()) {
                case 0:
                    buff.ST[DEX] += 3;
                    if (ui.cb_buff[B_DEX].getForeground().equals(Color.BLUE)) {
                        cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                    }
                    break;
                case 1:
                    buff.ST[DEX] += 5;
                    if (ui.cb_buff[B_DEX].getForeground().equals(Color.BLUE)) {
                        cons_mp += (50.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
                    }
                    break;
                case 2:
                    buff.ST[DEX] += 6;
                    break;
                case 3:
                    buff.ST[DEX] += 7;
                    break;
            }
        }

        acc = 1.0;

        //装備による強制ヘイスト効果
        if (buki.op.effect.contains("ヘイスト")) {
            ui.cb_buff[ACC1].setSelected(true);
        }
        for (Bougu bougu1 : bougu) {
            if (bougu1.op.effect.contains("ヘイスト")) {
                ui.cb_buff[ACC1].setSelected(true);
                break;
            }
        }

        if (ui.cb_buff[ACC1].isSelected()) {
            if (ui.cb_buff[ACC1].getForeground().equals(Color.BLUE)) {
                cons_mp += (40.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
            }
            acc *= acc_1;
        }
        if (ui.cb_buff[ACC2].isSelected()) {
            switch (ui.cb_buff_group[ACC2].getSelectedIndex()) {
                case 0:
                    acc *= acc_2;
                    if (ui.cb_buff[ACC2].getForeground().equals(Color.BLUE)) {
                        if (cls == E) {
                            cons_mp = (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 8;
                        }
                    }
                    break;
                case 1:
                    acc *= acc_ew;
                    break;
            }
        }
        if (ui.cb_buff[ACC3].isSelected()) {
            acc *= acc_3;
        }
        buki.magic_enchant = 0;
        buki2.magic_enchant = 0;
        if (ui.cb_buff[BUKI].isSelected()) {
            switch (ui.cb_buff_group[BUKI].getSelectedIndex()) {
                case 0:
                    buki.magic_enchant = 1;
                    buki2.magic_enchant = 1;
                    buff.HIT_SHORT += 1;
                    if (ui.cb_buff[BUKI].getForeground().equals(Color.BLUE)) {
                        cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
                    }
                    break;
                case 1:
                    buki.magic_enchant = 2;
                    buki2.magic_enchant = 2;
                    if (ui.cb_buff[BUKI].getForeground().equals(Color.BLUE)) {
                        cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 30;
                    }
                    break;
                case 2:
                    buki.magic_enchant = 2;
                    buki2.magic_enchant = 2;
                    buff.HIT_SHORT += 2;
                    if (ui.cb_buff[BUKI].getForeground().equals(Color.BLUE)) {
                        cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
                    }
                    break;
                case 3:
                    buki.magic_enchant = 5;
                    buki2.magic_enchant = 5;
                    if (ui.cb_buff[BUKI].getForeground().equals(Color.BLUE)) {
                        cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 3;
                    }
                    break;
            }
        }

        if (ui.cb_buff[P_S].isSelected()) {
            buff.AC -= 8;
            if (ui.cb_buff[P_S].getForeground().equals(Color.BLUE)) {
                cons_mp += (25.0 * (1.0 - red_mp * 0.01) - red_mp2) / 10;
            }
        }

        if (ui.cb_buff[P_BA].isSelected()) {
            buff.MR += 10;
            buff.ailment[STUN] += 2;
            buff.ailment[HOLD] += 2;
            buff.ST[STR] += 1;
            buff.ST[DEX] += 1;
            buff.ST[INT] += 1;
        }
        if (ui.cb_buff[P_G].isSelected()) {
            buff.HIT_SHORT += 5;
            buff.DMG_SHORT += 5;
            if (ui.cb_buff[P_G].getForeground().equals(Color.BLUE)) {
                cons_mp += (25.0 * (1.0 - red_mp * 0.01) - red_mp2) / 10;
            }
        }

        if (ui.cb_buff[B_AC].isSelected()) {
            switch (ui.cb_buff_group[B_AC].getSelectedIndex()) {
                case 0://シールド
                    buff.AC += -2;
                    if (ui.cb_buff[B_AC].getForeground().equals(Color.BLUE)) {
                        cons_mp += (8.0 * (1.0 - red_mp * 0.01) - red_mp2) / 30;
                    }
                    break;
                case 1://四季P
                    buff.AC += -5;
                    break;
                case 2://アーススキン
                    buff.AC += -6;
                    if (ui.cb_buff[B_AC].getForeground().equals(Color.BLUE)) {
                        cons_mp += (15.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                    }
                    break;
                case 3://アースブレス
                    buff.AC += -7;
                    break;
                case 4://アイアンスキン
                    buff.AC += -10;
                    if (ui.cb_buff[B_AC].getForeground().equals(Color.BLUE)) {
                        cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
                    }
                    break;
            }

        }

//        if (ui.cb_buff[WAR].isSelected()) {
//            if (ui.cb_buff_group[WAR].getSelectedIndex() == 0) {
//                buff.d_long += 30;
//                buff.d_short += 30;
//            }
//
//            if (ui.cb_buff_group[WAR].getSelectedIndex() == 1) {
//                if (level >= 80) {
//                    buff.HIT_CLOSE += 5;
//                    buff.d_short += 5;
//                    buff.d_long += 5;
//                } else if (level >= 70) {
//                    buff.HIT_CLOSE += 10;
//                    buff.d_short += 8;
//                    buff.d_long += 8;
//                    buff.MR += 3;
//                    buff.AC -= 2;
//                } else if (level >= 60) {
//                    buff.HIT_CLOSE += 25;
//                    buff.d_short += 12;
//                    buff.d_long += 12;
//                    buff.SP += 5;
//                    buff.MR += 5;
//                    buff.AC -= 5;
//                } else if (level >= 52) {
//                    buff.HIT_CLOSE += 40;
//                    buff.d_short += 15;
//                    buff.d_long += 15;
//                    buff.SP += 10;
//                    buff.MR += 10;
//                    buff.AC -= 10;
//                }
//            }
//        }
        ui.cb_buff[VIP].setToolTipText("");
        if (ui.cb_buff[VIP].isSelected()) {
            switch ((String) ui.cb_buff_group[VIP].getSelectedItem()) {
                case "Red":
                    ui.cb_buff[VIP].setToolTipText("HP+120 MP+120 MR+10 AC-5");
                    buff.HP += 120;
                    buff.MP += 120;
                    buff.MR += 10;
                    buff.AC -= 5;
                    break;
                case "Gold":
                    ui.cb_buff[VIP].setToolTipText("HP+150 MP+120 MR+10 AC-5");
                    buff.HP += 150;
                    buff.MP += 120;
                    buff.MR += 10;
                    buff.AC -= 5;
                    break;
                case "Platinum":
                    ui.cb_buff[VIP].setToolTipText("HP+150 MP+150 MR+120 AC-5");
                    buff.HP += 150;
                    buff.MP += 150;
                    buff.MR += 12;
                    buff.AC -= 5;
                    break;
            }
        }

        if (ui.cb_buff[SEC].isSelected()) {
            buff.AC -= 1;
            buff.MR += 2;
            buff.DR += 1;
        }

        if (ui.cb_buff[BS_COIN].isSelected()) {
            buff.HP += 20;
            buff.MP += 13;
            buff.AC -= 2;
            buff.DR += 3;
            buff.ailment[DARKNESS] += 10;
        }

        if (ui.cb_buff[L_HST].isSelected()) {
            switch ((String) ui.cb_buff_group[L_HST].getSelectedItem()) {
                case "1個":
                    ui.cb_buff[L_HST].setToolTipText("AC-1");
                    buff.AC -= 1;
                    break;
                case "2個":
                    ui.cb_buff[L_HST].setToolTipText("AC-2 DR+1");
                    buff.AC -= 2;
                    buff.DR += 1;
                    break;
                case "3個":
                    ui.cb_buff[L_HST].setToolTipText("AC-3 DR+2");
                    buff.AC -= 3;
                    buff.DR += 2;
                    break;
            }
        }

        //重量ペナルティ
        switch (ui.cb_weight.getSelectedIndex()) {
            case 0:
                break;
            case 1:
                buff.HIT_SHORT -= 1;
                buff.HIT_LONG -= 1;
                break;
            case 2:
                buff.HIT_SHORT -= 3;
                buff.HIT_LONG -= 3;
                break;
            case 3:
                buff.HIT_SHORT -= 5;
                buff.HIT_LONG -= 5;
        }

        for (int i = 0; i < 6; i++) {
            buff.ST[i] += buki.op.ST[i] + buki2.op.ST[i];
            for (Bougu bougu1 : bougu) {
                buff.ST[i] += bougu1.op.ST[i] + bougu1.op2.ST[i];
            }
            _ST[ENCHANT][i] = buff.ST[i];
        }

        int str = _ST[BASE][STR] + _ST[REM][STR] + _ST[LEVEL][STR]
                + _ST[ENCHANT][STR] + _ST[ELIXIR][STR];
        int pure_str = _ST[BASE][STR] + _ST[REM][STR]
                + _ST[LEVEL][STR] + _ST[ELIXIR][STR];

        int dex = _ST[BASE][DEX] + _ST[REM][DEX] + _ST[LEVEL][DEX]
                + _ST[ENCHANT][DEX] + _ST[ELIXIR][DEX];
        int pure_dex = _ST[BASE][DEX] + _ST[REM][DEX]
                + _ST[LEVEL][DEX] + _ST[ELIXIR][DEX];

        int _int = _ST[BASE][INT] + _ST[REM][INT] + _ST[LEVEL][INT]
                + _ST[ENCHANT][INT] + _ST[ELIXIR][INT];
        int pure_int = _ST[BASE][INT] + _ST[REM][INT]
                + _ST[LEVEL][INT] + _ST[ELIXIR][INT];

        //追加ダメージ
        base_dmg_short = (int) (str / 2 - 2) + (int) (level / _C[D_SHORT][STR][cls]);
        base_dmg_long = (int) (dex / 3) + (int) (level / _C[D_LONG][DEX][cls]);
        base_dmg_magic = (int) (_int / 5 - 2) + (int) (level / _C[D_MAGIC][INT][cls]);

        base_hit_short = (int) (str * 2 / 3) + level + (int) (level / _C[H_SHORT][STR][cls]);
        base_hit_long = (int) (dex - 10) + level + (int) (level / _C[H_LONG][DEX][cls]);
        base_hit_magic = (int) ((_int - 20) / 3) + (int) (level / _C[H_MAGIC][INT][cls]);

        cri_short = (int) (minasToZero(str - 30) / 10) + (int) (minasToZero(level - 50) / _C[C_SHORT][STR][cls]);
        cri_long = (int) (minasToZero(dex - 30) / 10) + (int) (minasToZero(level - 50) / _C[C_LONG][DEX][cls]);
        cri_magic = (int) (minasToZero(_int - 30) / 10) + (int) (minasToZero(level - 50) / _C[C_MAGIC][INT][cls]);

        red_mp = Math.min(30, (int) (_int * 2 / 3));

        if (pure_str >= 25) {
            base_dmg_short += 1;
            base_hit_short += 1;
        }
        if (pure_str >= 35) {
            base_dmg_short += 1;
            base_hit_short += 1;
        }
        if (pure_str >= 45) {
            base_dmg_short += 3;
            base_hit_short += 3;
            cri_short += 1;
        }

        if (pure_dex >= 25) {
            base_dmg_long += 1;
            base_hit_long += 1;
        }
        if (pure_dex >= 35) {
            base_dmg_long += 1;
            base_hit_long += 1;
        }
        if (pure_dex >= 45) {
            base_dmg_long += 3;
            base_hit_long += 3;
            cri_long += 1;
        }

        if (pure_int >= 25) {
            base_dmg_magic += 1;
            base_hit_magic += 1;
        }
        if (pure_int >= 35) {
            base_dmg_magic += 1;
            base_hit_magic += 1;
        }
        if (pure_int >= 45) {
            base_dmg_magic += 3;
            base_hit_magic += 3;
        }

        dmg_short = base_dmg_short + buff.DMG_SHORT;
        dmg_long = base_dmg_long + buff.DMG_LONG;
        dmg_magic = base_dmg_magic + buff.DMG_MAGIC;
        sp = buff.SP + buki.op.SP + buki2.op.SP;

        hit_magic = base_hit_magic;

        for (Bougu bougu1 : bougu) {
            dmg_short += bougu1.op.DMG_SHORT + bougu1.op2.DMG_SHORT;
            dmg_long += bougu1.op.DMG_LONG + bougu1.op2.DMG_LONG;
            dmg_magic += bougu1.op.DMG_MAGIC + bougu1.op2.DMG_MAGIC;
            sp += bougu1.op.SP + bougu1.op2.SP;
            hit_magic += bougu1.op.HIT_MAGIC + bougu1.op2.HIT_MAGIC;
            cri_short += bougu1.op.CRI_SHORT + bougu1.op2.CRI_SHORT;
            cri_long += bougu1.op.CRI_LONG + bougu1.op2.CRI_LONG;
            cri_magic += bougu1.op.CRI_MAGIC + bougu1.op2.CRI_MAGIC;
        }
        cri_short += buki.op.CRI_SHORT + buki.op2.CRI_SHORT;
        cri_long += buki.op.CRI_LONG + buki.op2.CRI_LONG;
        cri_magic += buki.op.CRI_MAGIC + buki.op2.CRI_MAGIC;

        int st_int = _ST[BASE][INT] + _ST[REM][INT] + _ST[LEVEL][INT]
                + _ST[ENCHANT][INT] + _ST[ELIXIR][INT];

        //スペルパワー更新
        int_beta = sp + st_int;

        //マジックレベル更新
        switch (cls) {
            case P:
                ml = level / 10;
                if (ml > 2) {
                    ml = 2;
                }
                break;
            case K:
                ml = level / 50;
                if (ml > 1) {
                    ml = 1;
                }
                break;
            case E:
                ml = level / 8;
                if (ml > 6) {
                    ml = 6;
                }
                break;
            case W:
                ml = level / 4;
                if (ml > 13) {
                    ml = 13;
                }
                break;
            case D:
                ml = level / 12;
                if (ml > 2) {
                    ml = 2;
                }
                break;
            case R:
                ml = level / 9;
                if (ml > 4) {
                    ml = 4;
                }
                break;
            case I:
                ml = level / 6;
                if (ml > 10) {
                    ml = 10;
                }
                break;
            case F:
                ml = level / 50;
                if (ml > 1) {
                    ml = 1;
                }
                break;
        }

        mb = (int) (st_int / 4) + _C[MB][INT][cls];

        if (buki.type.equals("キーリンク")) {
            dmg_short = 0;
            for (int i = 0; i < 4; i++) {
                buff.ELEM_DMG_SHORT[i] = 0;
            }
        }

        //命中計算
        // STR,DEX,クラス,ベースステータス,レベル
        hit_short = base_hit_short;
        hit_long = base_hit_long;

        double cr = buki.critical_rate;
        double wh = buki.double_hit_rate;
        double we = buki.week_point_exposure;

        if (ui.cb_mag_auto.isSelected()) {
            ui.tf_buki_sp_rate.setEnabled(false);
        } else {
            ui.tf_buki_sp_rate.setEnabled(true);
            switch (buki.type) {
                case "クロウ":
                    cr = Double.parseDouble(ui.tf_buki_sp_rate.getText());
                    break;
                case "デュアルブレード":
                    wh = Double.parseDouble(ui.tf_buki_sp_rate.getText());
                    break;
                case "チェーンソード":
                    we = Double.parseDouble(ui.tf_buki_sp_rate.getText());
                    break;
            }
        }

        // 武器オプション,武器強化数,エンチャント
        hit_short += buki.op.HIT_SHORT + buki.enchant / 2 + buff.HIT_SHORT;
        hit_long += buki.op.HIT_LONG + buki.enchant / 2 + buff.HIT_LONG
                + buff.HIT_SHORT;

        //属性矢
        if (buki.type.equals("ボウ")) {
            if (buki.arrow_name.contains("霊")) {
                switch (buki.arrow_name) {
                    case "火霊のブラックミスリルアロー":
                        buff.ELEM_DMG_LONG[FIRE] += 3;
                        break;
                    case "水霊のブラックミスリルアロー":
                        buff.ELEM_DMG_LONG[WATER] += 3;
                        break;
                    case "風霊のブラックミスリルアロー":
                        buff.ELEM_DMG_LONG[WIND] += 3;
                        break;
                    case "地霊のブラックミスリルアロー":
                        buff.ELEM_DMG_LONG[EARTH] += 3;
                        break;
                }
            }
        }

        for (Bougu bougu1 : bougu) {
            hit_short += bougu1.op.HIT_SHORT + bougu1.op2.HIT_SHORT;
            hit_long += bougu1.op.HIT_LONG + bougu1.op.HIT_SHORT + bougu1.op2.HIT_LONG + bougu1.op2.HIT_SHORT;
        }

        //属性ダメージ
        dmg_short += (int) ((buff.ELEM_DMG_SHORT[FIRE]) * (32.0 - ui.s_target_res[FIRE].getValue() * 32 / 100) / 32.0);
        dmg_long += (int) ((buff.ELEM_DMG_LONG[FIRE]) * (32.0 - ui.s_target_res[FIRE].getValue() * 32 / 100) / 32.0);
        dmg_long += (int) ((buff.ELEM_DMG_LONG[WATER]) * (32.0 - ui.s_target_res[WATER].getValue() * 32 / 100) / 32.0);
        dmg_long += (int) ((buff.ELEM_DMG_LONG[WIND]) * (32.0 - ui.s_target_res[WIND].getValue() * 32 / 100) / 32.0);
        dmg_long += (int) ((buff.ELEM_DMG_LONG[EARTH]) * (32.0 - ui.s_target_res[EARTH].getValue() * 32 / 100) / 32.0);

        dmg_element1 = 0;
        dmg_element2 = 0;

        for (int i = 0; i < ELEM_LIST.length; i++) {
            dmg_element1 += (int) (dmg_buki_ele1[i] * (32.0 - ui.s_target_res[i].getValue() * 32 / 100) / 32.0);
            dmg_element2 += (int) (dmg_buki_ele2[i] * (32.0 - ui.s_target_res[i].getValue() * 32 / 100) / 32.0);
        }

        boolean d_axe = false;
        double speed = 0;
        int buki_id = 0;
        double magic_main = 0;
        double magic_sub = 0;

        if (ui.cb_speed_auto.isSelected()) {

            if (ui.cb_eq[1].getSelectedIndex() > 0) {
                if (ui.cb_morph_level.getSelectedIndex() == 0) {
                    speed = polymorph.getSpeed(level, ui.cb_morph_type.getSelectedIndex(), W_DA);
                } else {
                    int l = Integer.parseInt((String) ui.cb_morph_level.getSelectedItem());
                    speed = polymorph.getSpeed(l, ui.cb_morph_type.getSelectedIndex(), W_DA);
                }
                buki_id = W_DA;
                d_axe = true;
            } else {
                for (int i = 0; i < BUKI_TYPE_LIST.length; i++) {
                    if (buki.type.equals(BUKI_TYPE_LIST[i])) {
                        if (ui.cb_morph_level.getSelectedIndex() == 0) {
                            speed = polymorph.getSpeed(level, ui.cb_morph_type.getSelectedIndex(), i);
                            magic_main = polymorph.getSpeed(level, ui.cb_morph_type.getSelectedIndex(), MAIN);
                            magic_sub = polymorph.getSpeed(level, ui.cb_morph_type.getSelectedIndex(), SUB);
                        } else {
                            int l = Integer.parseInt((String) ui.cb_morph_level.getSelectedItem());
                            speed = polymorph.getSpeed(l, ui.cb_morph_type.getSelectedIndex(), i);
                            magic_main = polymorph.getSpeed(l, ui.cb_morph_type.getSelectedIndex(), MAIN);
                            magic_sub = polymorph.getSpeed(l, ui.cb_morph_type.getSelectedIndex(), SUB);
                        }
                        buki_id = i;
                        break;
                    }
                }
            }
            ui.tf_speed.setText(format_speed.format(speed));
            ui.tf_magic_speed_main.setText(format_speed.format(magic_main));
            ui.tf_magic_speed_sub.setText(format_speed.format(magic_sub));

            ui.tf_speed.setEnabled(false);
            ui.tf_magic_speed_main.setEnabled(false);
            ui.tf_magic_speed_sub.setEnabled(false);
            ui.tf_acc.setEnabled(false);
        } else {
            speed = Double.parseDouble(ui.tf_speed.getText());
            magic_main = Double.parseDouble(ui.tf_magic_speed_main.getText());
            magic_sub = Double.parseDouble(ui.tf_magic_speed_sub.getText());
            ui.tf_speed.setEnabled(true);
            ui.tf_magic_speed_main.setEnabled(true);
            ui.tf_magic_speed_sub.setEnabled(true);
            ui.tf_acc.setEnabled(true);
        }

        double dmg_small_ave;
        double dmg_big_ave;
        double dmg_small_max = 0;
        double dmg_big_max = 0;

        double dmg_small_ave2;
        double dmg_big_ave2;
        double dmg_small_max2;
        double dmg_big_max2;

        dmg_cursed = 0.0;
        dmg_undead = 0.0;

//        ui.sp_sub.setText("");
        if (cls == F
                && ui.cb_eq[1].getSelectedIndex() != 0) {

            dmg_big_ave = (1.0 + buki.big) / 2 + buki.op.DMG_SHORT + buki.op2.DMG_SHORT + buki.enchant + buki.magic_enchant;
            dmg_small_ave = (1.0 + buki.small) / 2 + buki.op.DMG_SHORT + buki.op2.DMG_SHORT + buki.enchant + buki.magic_enchant;

            dmg_big_max = buki.big + buki.op.DMG_SHORT + buki.op2.DMG_SHORT + buki.enchant + buki.magic_enchant;
            dmg_small_max = buki.small + buki.op.DMG_SHORT + buki.op2.DMG_SHORT + buki.enchant + buki.magic_enchant;

            if (buki.material.equals("シルバー")
                    || buki.material.equals("ミスリル")
                    || buki.material.equals("オリハルコン")) {
                dmg_undead += (1.0 + 20.0) / 2.0 / 2.0;
            }
            if (ui.tb_blessed1.isSelected()) {
                dmg_cursed += ((1.0 + 3.0) / 2.0 + 3.0) / 2.0;
            }

            dmg_big_ave2 = (1.0 + buki2.big) / 2 + buki2.op.DMG_SHORT + buki2.op2.DMG_SHORT + buki2.enchant + buki2.magic_enchant;
            dmg_small_ave2 = (1.0 + buki2.small) / 2 + buki2.op.DMG_SHORT + buki2.op2.DMG_SHORT + buki2.enchant + buki2.magic_enchant;

            dmg_big_max2 = buki2.big + buki2.op.DMG_SHORT + buki2.op2.DMG_SHORT + buki2.enchant + buki2.magic_enchant;
            dmg_small_max2 = buki2.small + buki2.op.DMG_SHORT + buki2.op2.DMG_SHORT + buki2.enchant + buki2.magic_enchant;

            if (buki2.material.equals("シルバー")
                    || buki2.material.equals("ミスリル")
                    || buki2.material.equals("オリハルコン")) {
                dmg_undead += (1.0 + 20.0) / 2.0 / 2.0;
            }
            if (ui.tb_blessed2.isSelected()) {
                dmg_cursed += ((1.0 + 3.0) / 2.0 + 3.0) / 2.0;
            }

            dmg_big_ave = (dmg_big_ave + dmg_big_ave2) / 2.0;
            dmg_small_ave = (dmg_small_ave + dmg_small_ave2) / 2.0;

            dmg_big_max = (dmg_big_max + dmg_big_max2) / 2.0;
            dmg_small_max = (dmg_small_max + dmg_small_max2) / 2.0;

        } else {
            switch (buki.type) {
                case "ボウ":
                case "ガントレット":

                    if (ui.cb_sonsyou.isSelected() && !(buki.arrow_name.equals("幸運のアロー") || buki.op.effect.contains("貫通効果"))) {
                        dmg_big_ave = (1.0 + buki.arrow_big) / 4 + buki.op.DMG_LONG + buki.op2.DMG_LONG + buki.enchant;
                        dmg_small_ave = (1.0 + buki.arrow_small) / 4 + buki.op.DMG_LONG + buki.op2.DMG_LONG + buki.enchant;

                        dmg_big_max = buki.arrow_big / 2 + buki.op.DMG_LONG + buki.op2.DMG_LONG + buki.enchant;
                        dmg_small_max = buki.arrow_small / 2 + buki.op.DMG_LONG + buki.op2.DMG_LONG + buki.enchant;

                    } else {
                        dmg_big_ave = (1.0 + buki.arrow_big) / 2 + buki.op.DMG_LONG + buki.op2.DMG_LONG + buki.enchant;
                        dmg_small_ave = (1.0 + buki.arrow_small) / 2 + buki.op.DMG_LONG + buki.op2.DMG_LONG + buki.enchant;

                        dmg_big_max = buki.arrow_big + buki.op.DMG_LONG + buki.op2.DMG_LONG + buki.enchant;
                        dmg_small_max = buki.arrow_small + buki.op.DMG_LONG + buki.op2.DMG_LONG + buki.enchant;
                    }
                    if (buki.arrow_material.equals("シルバー")
                            || buki.arrow_material.equals("ミスリル")
                            || buki.arrow_material.equals("オリハルコン")) {
                        dmg_undead = (1.0 + 20) / 2;
                    }
                    break;
                case "キーリンク":
                    dmg_big_ave = buki.x * (1.0 + buki.y) / 2 + buki.z;
                    dmg_small_ave = buki.x * (1.0 + buki.y) / 2 + buki.z;
                    break;
                default:
                    dmg_big_ave = (1.0 + buki.big) / 2 + buki.op.DMG_SHORT + buki.op2.DMG_SHORT + buki.enchant + buki.magic_enchant;
                    dmg_small_ave = (1.0 + buki.small) / 2 + buki.op.DMG_SHORT + buki.op2.DMG_SHORT + buki.enchant + buki.magic_enchant;

                    dmg_big_max = buki.big + buki.op.DMG_SHORT + buki.op2.DMG_SHORT + buki.enchant + buki.magic_enchant;
                    dmg_small_max = buki.small + buki.op.DMG_SHORT + buki.op2.DMG_SHORT + buki.enchant + buki.magic_enchant;

                    if (buki.material.equals("シルバー")
                            || buki.material.equals("ミスリル")
                            || buki.material.equals("オリハルコン")) {
                        dmg_undead = (1.0 + 20) / 2;
                    } else {
                        dmg_undead = 0;
                    }
                    if (ui.tb_blessed1.isSelected()) {
                        dmg_cursed = (1.0 + 3) / 2 + 3;
                    } else {
                        dmg_cursed = 0;
                    }
                    break;
            }
        }

        //クリティカル処理
        switch (buki.type) {
            case "キーリンク":
                double a = 1 + 3.0 / 32.0 * (int_beta - 12);
                double b;
                if (ui.s_target_mr.getValue() - hit_magic <= 100) {
                    b = 1.0 - 0.01 * ((ui.s_target_mr.getValue() - hit_magic) / 2);
                } else {
                    b = 0.6 - 0.01 * ((ui.s_target_mr.getValue() - hit_magic) / 10);
                }
                dmg_big_ave *= a;
                dmg_big_ave += buki.enchant + base_dmg_magic + buki.op.DMG_MAGIC + buki.op2.DMG_MAGIC;
                dmg_big_ave *= b;
                dmg_small_ave *= a;
                dmg_small_ave += buki.enchant + base_dmg_magic + buki.op.DMG_MAGIC + buki.op2.DMG_MAGIC;
                dmg_small_ave *= b;
                dmg_small_ave *= cri_magic * 0.01 * 1.5 + (1 - cri_magic * 0.01) * 1.0;
                dmg_big_ave -= 0.5;
                dmg_small_ave -= 0.5;
                break;
            case "ボウ":
                dmg_big_ave = (cri_long * 0.01) * dmg_big_max
                        + (1.0 - cri_long * 0.01) * dmg_big_ave;
                dmg_small_ave = (cri_long * 0.01) * dmg_small_max
                        + (1.0 - cri_long * 0.01) * dmg_small_ave;
                break;
            default:
                cri_short += cr * 100;
                if (ui.cb_buff[E_SF].isSelected()) {
                    cri_short = 100;
                    if (ui.cb_buff[E_SF].isSelected()) {
                        if (ui.cb_buff[E_SF].getForeground().equals(Color.BLUE)) {
                            cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 2;
                        }
                    }
                }
                dmg_big_ave = (cri_short * 0.01) * dmg_big_max
                        + (1.0 - cri_short * 0.01) * dmg_big_ave;
                dmg_small_ave = (cri_short * 0.01) * dmg_small_max
                        + (1.0 - cri_short * 0.01) * dmg_small_ave;
                break;
        }

        if (buki.type.equals("デュアルブレード")) {
            if ((buki.name.contains("轟音") || buki.name.contains("咆哮")) && ui.cb_mag_auto.isSelected()) {
                ui.tf_buki_sp_rate.setText(Double.toString(((int) ((wh + buki.enchant * 0.01) * 100)) / 100.0));
                dmg_big_ave *= 2.0 * (wh + buki.enchant * 0.01)
                        + (1.0 - (wh + buki.enchant * 0.01));
                dmg_small_ave *= 2.0 * (wh + buki.enchant * 0.01)
                        + (1.0 - (wh + buki.enchant * 0.01));

                //ダブルヒットに銀特効＋悪魔特効を乗せる
                dmg_undead *= 2.0 * (wh + buki.enchant * 0.01)
                        + (1.0 - (wh + buki.enchant * 0.01));
                dmg_cursed *= 2.0 * (wh + buki.enchant * 0.01)
                        + (1.0 - (wh + buki.enchant * 0.01));

            } else {
                dmg_big_ave *= 2.0 * wh
                        + (1.0 - wh);
                dmg_small_ave *= 2.0 * wh
                        + (1.0 - buki.double_hit_rate);

                //ダブルヒットに銀特効＋悪魔特効を乗せる
                dmg_undead *= 2.0 * wh
                        + (1.0 - wh);
                dmg_cursed *= 2.0 * wh
                        + (1.0 - wh);
            }
        }

        double fs_rate = 1.0;
        double delay;
        double power;

        double magic;
        double drain_small = 0;
        double drain_big = 0;

        double rate;
        double hit;

        if (ui.cb_mag_auto.isSelected()) {
            rate = buki.magic_rate + buki.magic_rate_plus * buki.enchant;

            delay = buki.magic_delay;
            power = buki.magic_power;

            ui.tf_mag_power.setText(format_dmg.format(power));
            ui.tf_mag_delay.setText(format_dmg.format(delay));
            ui.tf_mag_rate.setText(format_rate_2.format(rate));

            ui.tf_mag_power.setEnabled(false);
            ui.tf_mag_delay.setEnabled(false);
            ui.tf_mag_rate.setEnabled(false);

        } else {
            rate = Double.parseDouble(ui.tf_mag_rate.getText());
            delay = Double.parseDouble(ui.tf_mag_delay.getText());
            power = Double.parseDouble(ui.tf_mag_power.getText());

            ui.tf_mag_power.setEnabled(true);
            ui.tf_mag_delay.setEnabled(true);
            ui.tf_mag_rate.setEnabled(true);
        }

        magic = getMagicDamage(buki.magic_name, buki.magic_element, power);

        switch (buki.type) {
            case "ボウ":
            case "ガントレット":
                hit = HitRateCalculator.calc(ui.cb_mode_pc.getSelectedIndex() == 0, hit_long, 10 - ui.cb_target_ac.getSelectedIndex(), ui.cb_target_dg.getSelectedIndex() == 0, ui.cb_target_dg.getSelectedIndex() == 2);
                break;
            case "キーリンク":
                hit = 1.0;
                break;
            default:
                hit = HitRateCalculator.calc(ui.cb_mode_pc.getSelectedIndex() == 0, hit_short, 10 - ui.cb_target_ac.getSelectedIndex(), ui.cb_target_dg.getSelectedIndex() == 0, ui.cb_target_dg.getSelectedIndex() == 2);
                break;
        }

        if (ui.cb_hittyuu.isSelected()) {
            hit = 1.0;
        }

        double mag_dmg_min = 0.0;
        double hit_rate = hit;

//        ui.mp_syouhi.setText("0 /min");
        if (ui.cb_magic.getSelectedItem() != null) {
            double mag_dmg;
            double mag_delay;
            double motion_delay;
            double ta_rate;

            switch ((String) ui.cb_magic.getSelectedItem()) {
                case "サンバースト":
                    double base_delay = 0.5;
                    motion_delay = 60.0 / (magic_sub * acc);
                    mag_delay = key_delay * (int) ((base_delay + motion_delay) / key_delay + 1);
                    hit *= (mag_delay - motion_delay) / mag_delay;
                    mag_dmg = getMagicDamage("サンバースト", "火", 88.0);
                    mag_dmg_min = mag_dmg * 60.0 / mag_delay;
                    if (st_int >= 17) {
//                        ui.mp_syouhi.setText((int) (60.0 / mag_delay) * 15 + " /min");
//                        syouhi_mp = 15;
                    } else {
//                        ui.mp_syouhi.setText((int) (60.0 / mag_delay) * (int) (20 * (1.0 - red_mp / 100.0)) + " /min");
                    }
//                    ui.bc.mag = true;
//                    ui.bc2.mag = true;
                    break;
                case "コーンオブコールド":
                    base_delay = 0.1;
                    motion_delay = 60.0 / (magic_main * acc);
                    mag_delay = key_delay * (int) ((base_delay + motion_delay) / key_delay + 1);
                    hit *= (mag_delay - motion_delay) / mag_delay;
                    mag_dmg = getMagicDamage("コーンオブコールド", "水", 62.0);
                    mag_dmg_min = mag_dmg * 60.0 / mag_delay;
                    if (st_int >= 16) {
//                        ui.mp_syouhi.setText((int) (60.0 / mag_delay) * 14 + " /min");
//                        syouhi_mp = 14;
                    } else {
//                        ui.mp_syouhi.setText((int) (60.0 / mag_delay) * (int) (18 * (1.0 - red_mp / 100.0)) + " /min");
                    }
//                    ui.bc.mag = true;
//                    ui.bc2.mag = true;
                    break;
                case "イラプション":
                    base_delay = 0.1;
                    motion_delay = 60.0 / (magic_main * acc);
                    mag_delay = key_delay * (int) ((base_delay + motion_delay) / key_delay + 1);
                    hit *= (mag_delay - motion_delay) / mag_delay;
                    mag_dmg = getMagicDamage("イラプション", "地", 79.0);
                    mag_dmg_min = mag_dmg * 60.0 / mag_delay;
                    if (st_int >= 17) {
//                        ui.mp_syouhi.setText((int) (60.0 / mag_delay) * 15 + " /min");
//                        syouhi_mp = 15;
                    } else {
//                        ui.mp_syouhi.setText((int) (60.0 / mag_delay) * (int) (20 * (1.0 - red_mp / 100.0)) + " /min");
                    }
                    break;
                case "コールライトニング":
                    base_delay = 0.0;
                    motion_delay = 60.0 / (magic_sub * acc);
                    mag_delay = key_delay * (int) ((base_delay + motion_delay) / key_delay + 1);
                    hit *= (mag_delay - motion_delay) / mag_delay;
                    mag_dmg = getMagicDamage("コールライトニング", "風", 62.5);
                    mag_dmg_min = mag_dmg * 60.0 / mag_delay;
                    if (st_int >= 16) {
//                        ui.mp_syouhi.setText((int) (60.0 / mag_delay) * 14 + " /min");
//                        syouhi_mp = 14;
                    } else {
//                        ui.mp_syouhi.setText((int) (60.0 / mag_delay) * (int) (18 * (1.0 - red_mp / 100.0)) + " /min");
                    }
                    break;
                case "トリプルアロー":
                    if (buki.type.equals("ボウ")) {
                        base_delay = 0.1;
                        motion_delay = 60.0 / (magic_main * acc);
                        mag_delay = key_delay * (int) ((base_delay + motion_delay) / key_delay + 1);
                        ta_rate = (mag_delay - motion_delay) / mag_delay + motion_delay / mag_delay * 3;
//                        ui.mp_syouhi.setText((int) (60.0 / mag_delay) * 15 + " /min");
//                        syouhi_mp = 15;
                        hit *= ta_rate;
                    }
                    break;
            }
        }

        if (d_axe) {
            double T = 60.0 / (acc * speed) * 2;
            delay = (int) (delay / T) * T;
            rate = rate / (1 + delay * hit * rate / T) / 2;

        } else {
            double T = 60.0 / (acc * speed);
            delay = (int) (delay / T) * T;
            rate = rate / (1 + delay * hit * rate / T);
        }

        if (buki.magic_name.equals("HP吸収")) {
            drain_small = ((dmg_small_ave + dmg_element1) / 8 + 1) - 0.5;
            drain_big = ((dmg_big_ave + dmg_element1) / 8 + 1) - 0.5;
            ui.lab_mag_info2
                    .setText("魔法ダメージ "
                            + format_dmg.format(drain_small)
                            + "/"
                            + format_dmg.format(drain_big)
                            + "  "
                            + format_rate.format(rate));
            drain_small *= rate;
            drain_big *= rate;
        } else {
            magic *= rate;
        }

//        if (buki.magic_motion) {
//            dmg_small_ave *= (1.0 - rate);
//            dmg_big_ave *= (1.0 - rate);
//        }
        if (buff.effect.contains("ヴァンパイアリックタッチ")) {
            double vt_rate = 0.04;
            double vt_motion = 60.0 / (polymorph.getSpeed(level, ui.cb_morph_type.getSelectedIndex(), buki_id));
            double atk_motion = 60.0 / (speed);

            //VTモーションによる攻撃速度の低下
            speed *= (atk_motion) / (atk_motion + vt_motion * vt_rate);
        }

        //ダブルブレイク
        if (ui.cb_buff[D_DB].isSelected()) {
            if (buki_id == W_DB || buki_id == W_C) {
                double lv_bonus = ((level - 45) / 5) * 0.01;

                dmg_big_ave *= 2.0 * (db_rate + lv_bonus)
                        + (1.0 - (db_rate + lv_bonus));
                dmg_small_ave *= 2.0 * (db_rate + lv_bonus)
                        + (1.0 - (db_rate + lv_bonus));

                dmg_undead *= 2.0 * (db_rate + lv_bonus)
                        + (1.0 - (db_rate + lv_bonus));
                dmg_cursed *= 2.0 * (db_rate + lv_bonus)
                        + (1.0 - (db_rate + lv_bonus));
            }
        }

        //武器属性
        if (buki_id == W_DA) {
            dmg_big_ave += (dmg_element1 + dmg_element2) / 2;
            dmg_small_ave += (dmg_element1 + dmg_element2) / 2;

        } else {
            dmg_big_ave += dmg_element1;
            dmg_small_ave += dmg_element1;
        }
        //アバター
        if (ui.cb_buff[I_IA].isSelected()) {
            dmg_big_ave += 10;
            dmg_small_ave += 10;
            if (ui.cb_buff[I_IA].getForeground().equals(Color.BLUE)) {
                cons_mp += (50.0 * (1.0 - red_mp * 0.01) - red_mp2) / 2;
            }
        }

        //PVP
        if (ui.cb_mode_pc.getSelectedIndex() == 1) {
            dmg_small_ave += buff.PVP;
        }

        //バフ効果
        switch (buki.type) {
            case "ガントレット":
            case "ボウ":
                dmg_big_ave += dmg_long;
                dmg_small_ave += dmg_long;
                break;
            case "キーリンク":
                break;
            default:
                dmg_big_ave += dmg_short;
                dmg_small_ave += dmg_short;

        }

        //ダメリダ
        dmg_big_ave -= Integer.parseInt((String) ui.cb_target_dr.getSelectedItem());
        dmg_small_ave -= Integer.parseInt((String) ui.cb_target_dr.getSelectedItem());

        //クラッシュ
        double ex = 0.0;
        if (ui.cb_buff[F_CR].isSelected()) {
            ex = level / 2.0;
        }
        //フューリー
        if (ui.cb_buff[F_FU].isSelected()) {
            dmg_big_ave = 0.15 * 0.1 * 2.0 * (dmg_big_ave + ex)
                    + (0.15 - (0.15 * 0.1)) * (dmg_big_ave + ex)
                    + (1.0 - 0.15) * dmg_big_ave;

            dmg_small_ave = 0.15 * 0.1 * 2.0 * (dmg_small_ave + ex)
                    + (0.15 - (0.15 * 0.1)) * (dmg_small_ave + ex)
                    + (1.0 - 0.15) * dmg_small_ave;
            ex = 0.0;

            dmg_undead *= (1 - 0.15 * 0.1) + 0.15 * 0.1 * 2.0;
            dmg_cursed *= (1 - 0.15 * 0.1) + 0.15 * 0.1 * 2.0;
        }
        dmg_big_ave += ex * 0.15;
        dmg_small_ave += ex * 0.15;

        if (buff.effect.contains("特殊攻撃(クラスタシアン/ウェアウルフ)")) {
            if (!(buki.type.equals("ボウ") || buki.type.equals("ガントレット") || buki.type
                    .equals(("キーリンク")))) {
                dmg_big_ave += 0.03 * 15;
                dmg_small_ave += 0.03 * 15;
            }
        }

        //オルターストーン
        if (ui.cb_pattern_r2.getSelectedIndex() >= 6 && ui.cb_pattern_r2.getSelectedIndex() <= 8) {
            if (ui.cb_alterstone_op[0].getSelectedIndex() == 7
                    || ui.cb_alterstone_op[1].getSelectedIndex() == 7
                    || ui.cb_alterstone_op[2].getSelectedIndex() == 7) {
                dmg_big_ave += 0.01 * 50;
                dmg_small_ave += 0.01 * 50;
            }
        }

        if (ui.cb_buff[D_BS].isSelected()) {
            if (!(buki.type.equals("ボウ") || buki.type.equals("ガントレット"))) {
                dmg_big_ave *= 1.5 * bs_rate
                        + 1.0 * (1.0 - bs_rate);
                dmg_small_ave *= 1.5 * bs_rate
                        + 1.0 * (1.0 - bs_rate);
                dmg_big_ave -= 0.25 * bs_rate;
                dmg_small_ave -= 0.25 * bs_rate;

                dmg_undead *= 1.5 * bs_rate
                        + 1.0 * (1.0 - bs_rate);
                dmg_cursed *= 1.5 * bs_rate
                        + 1.0 * (1.0 - bs_rate);

                if (dmg_undead != 0) {
                    dmg_undead -= 0.25 * bs_rate;
                }
                if (dmg_cursed != 0) {
                    dmg_cursed -= 0.25 * bs_rate;
                }

                if (ui.cb_buff[D_BS].getForeground().equals(Color.BLUE)) {
                    cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 5;
                }
            }
        }

        if (ui.cb_buff[E_EF].isSelected()) {
            if (!(buki.type.equals("ボウ") || buki.type.equals("ガントレット"))) {
                dmg_big_ave *= 1.5 * ef_rate
                        + 1.0 * (1.0 - ef_rate);
                dmg_small_ave *= 1.5 * ef_rate
                        + 1.0 * (1.0 - ef_rate);

                dmg_big_ave -= 0.25 * ef_rate;
                dmg_small_ave -= 0.25 * ef_rate;

                dmg_undead *= 1.5 * ef_rate
                        + 1.0 * (1.0 - ef_rate);
                dmg_cursed *= 1.5 * ef_rate
                        + 1.0 * (1.0 - ef_rate);

                if (dmg_undead != 0) {
                    dmg_undead -= 0.25 * ef_rate;
                }
                if (dmg_cursed != 0) {
                    dmg_cursed -= 0.25 * ef_rate;
                }
                if (ui.cb_buff[E_EF].getForeground().equals(Color.BLUE)) {
                    cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 5;
                }
            }
        }

        if (ui.cb_buff[P_B].isSelected()) {
            if (!(buki.type.equals("ボウ") || buki.type.equals("ガントレット"))) {
                dmg_big_ave *= 1.5 * 0.3333
                        + 1.0 * (1.0 - 0.3333);
                dmg_small_ave *= 1.5 * 0.3333
                        + 1.0 * (1.0 - 0.3333);

                dmg_big_ave -= 0.25 * 0.3333;
                dmg_small_ave -= 0.25 * 0.3333;

                dmg_undead *= 1.5 * 0.3333
                        + 1.0 * (1.0 - 0.3333);
                dmg_cursed *= 1.5 * 0.3333
                        + 1.0 * (1.0 - 0.3333);

                if (dmg_undead != 0) {
                    dmg_undead -= 0.25 * 0.3333;
                }
                if (dmg_cursed != 0) {
                    dmg_cursed -= 0.25 * 0.3333;
                }

                if (ui.cb_buff[P_B].getForeground().equals(Color.BLUE)) {
                    cons_mp += 25.0 / 10;
                }
            } else {
                ui.cb_buff[P_B].setSelected(false);
            }
        }

        if (buff.effect.contains("特殊攻撃(パック/パオ)")) {
            dmg_big_ave += (75 - Integer.parseInt((String) ui.cb_target_dr.getSelectedItem())) * 0.05;
            dmg_small_ave += (75 - Integer.parseInt((String) ui.cb_target_dr.getSelectedItem())) * 0.05;
        }
        int dmg_rate = 0;
        int dmg = 0;
        for (String split : buff.effect.split(",")) {
            if (split.contains("追加ダメージ")) {
                String[] a = split.split(" ");
                if (a[1].contains("+")) {
                    dmg += Integer.parseInt(a[1]);
                }
                if (a.length >= 2) {
                    if (a[2].contains("%")) {
                        dmg_rate += Integer.parseInt(a[2].split("%")[0]);
                    }
                }
                System.out.println(dmg + " " + dmg_rate);
                System.out.println((dmg - Integer.parseInt((String) ui.cb_target_dr.getSelectedItem())) * (dmg_rate / 100.0));
                dmg_big_ave += (dmg - Integer.parseInt((String) ui.cb_target_dr.getSelectedItem())) * (dmg_rate / 100.0);
            }
        }
//        if (ui.i2h.isSelected()) {
//            dmg_big_ave *= 0.5;
//            dmg_small_ave *= 0.5;
//        }
//
//        switch (ui.kago.getSelectedIndex()) {
//            case 1:
//                dmg_big_ave -= 0.05 * 80;
//                dmg_small_ave -= 0.05 * 80;
//                break;
//            case 2:
//                dmg_big_ave -= 0.05 * 31;
//                dmg_small_ave -= 0.05 * 31;
//                break;
//        }
        if (ui.cb_speed_auto.isSelected()) {
            ui.tf_acc.setText(format_rate_2.format(acc));
        } else {
            acc = Double.parseDouble(ui.tf_acc.getText());
        }
        // 弱点露出
        double week = 0;
        double fsdmg = 0;
        if (cls == R
                && ui.cb_magic.getSelectedItem()
                != null) {
            if (ui.cb_magic.getSelectedItem().equals("フォースレイヤー")) {
                double week_rate = we;
                double t = 60.0 / (polymorph.getSpeed(level, ui.cb_morph_type.getSelectedIndex(), MAIN) * acc) + 2.0;
                t = key_delay * ((int) (t / key_delay) + 1.0);
                if (speed != 0.0) {
                    speed = FSCalclator.calc(t, speed * acc);
                }

                double n = speed * t / 60;

                if (buff.effect.contains("フォースレイヤーダメージ+10")) {
                    fsdmg = n * 10;
                }

                double w0 = Math.pow((1 - week_rate * hit), n);
                double w1 = (week_rate * hit) * Math.pow((1 - week_rate * hit), n - 1)
                        * n;
                double w2 = Math.pow((week_rate * hit), 2)
                        * Math.pow((1 - week_rate * hit), n - 2) * n * (n - 1) / 2;
                double w3 = 1 - w0 - w1 - w2;
                week = (20 * w1 + 40 * w2 + 60 * w3) * 3 * hit;
                week *= 60 / t;

            } else {
                if (ui.cb_speed_auto.isSelected()) {
                    ui.tf_acc.setText(format_rate_2.format(acc));
                } else {
                    acc = Double.parseDouble(ui.tf_acc.getText());
                }
                speed *= acc;
            }
        } else {
            speed *= acc;
        }

        dmg_small_ave += magic + drain_small;
        dmg_big_ave += magic + drain_big;

        ui.lab_dmg_normal.setText(Integer.toString((int) (dmg_small_ave * hit * speed + mag_dmg_min + week + fsdmg))
                + " / " + Integer.toString(
                        (int) (dmg_big_ave * hit * speed + mag_dmg_min + week + fsdmg)));
        ui.lab_dmg_cursed.setText(Integer.toString((int) ((dmg_small_ave + dmg_cursed) * hit * speed + mag_dmg_min + week + fsdmg))
                + " / " + Integer.toString(
                        (int) ((dmg_big_ave + dmg_cursed) * hit * speed + mag_dmg_min + week + fsdmg)));
        ui.lab_dmg_undead.setText(Integer.toString((int) ((dmg_small_ave + dmg_cursed + dmg_undead) * hit * speed + mag_dmg_min + week + fsdmg))
                + " / " + Integer.toString(
                        (int) ((dmg_big_ave + dmg_cursed + dmg_undead) * hit * speed + mag_dmg_min + week + fsdmg)));

        switch ((String) ui.cb_e_size.getSelectedItem()) {
            case "小":
                double ATK = 0;
                switch ((String) ui.cb_e_type.getSelectedItem()) {
                    case "通常":
                        ATK = dmg_small_ave * hit * speed + mag_dmg_min + week;
                        break;
                    case "悪魔":
                        ATK = (dmg_small_ave + dmg_cursed) * hit * speed + mag_dmg_min + week;
                        break;
                    case "不死":
                        ATK = (dmg_small_ave + dmg_cursed + dmg_undead) * hit * speed + mag_dmg_min + week;
                }

                double E_HP = Integer.parseInt(ui.tf_e_hp.getText());
                double E_HPR = Integer.parseInt(ui.tf_e_hpr.getText());

                ATK /= 60;
                ATK *= 5;

                double TIME = E_HP / (ATK - E_HPR);
                TIME *= 5;

                if (TIME < 0) {
                    ui.lab_time.setText("INF");
                } else {

                    int MIN = (int) (TIME / 60);
                    int S = (int) (TIME % 60);

                    ui.lab_time.setText(Integer.toString((MIN)) + "分 " + Integer.toString((S)) + "秒");
                }
                break;
            case "大":
                ATK = 0;
                switch ((String) ui.cb_e_type.getSelectedItem()) {
                    case "通常":
                        ATK = dmg_big_ave * hit * speed + mag_dmg_min + week;
                        break;
                    case "悪魔":
                        ATK = (dmg_big_ave + dmg_cursed) * hit * speed + mag_dmg_min + week;
                        break;
                    case "不死":
                        ATK = (dmg_big_ave + dmg_cursed + dmg_undead) * hit * speed + mag_dmg_min + week;
                }

                E_HP = Integer.parseInt(ui.tf_e_hp.getText());
                E_HPR = Integer.parseInt(ui.tf_e_hpr.getText());

                ATK /= 60;
                ATK *= 5;

                TIME = E_HP / (ATK - E_HPR);
                TIME *= 5;

                if (TIME < 0) {
                    ui.lab_time.setText("INF");
                } else {

                    int MIN = (int) (TIME / 60);
                    int S = (int) (TIME % 60);

                    ui.lab_time.setText(Integer.toString((MIN)) + "分 " + Integer.toString((S)) + "秒");
                }
                break;
        }

        switch (buki.magic_name) {
            case "":
                ui.lab_mag_info1.setText("魔法：なし");
                ui.lab_mag_info2.setText("");
                ui.tf_mag_rate.setEnabled(false);
                ui.tf_mag_delay.setEnabled(false);
                ui.tf_mag_power.setEnabled(false);

                ui.tf_mag_rate.setText("0.00");
                ui.tf_mag_delay.setText("0.0");
                ui.tf_mag_power.setText("0.0");
                break;
            case "HP吸収":
                ui.lab_mag_rate.setEnabled(true);
                ui.lab_mag_info1.setText("魔法：" + buki.magic_name);
                break;
            default:
                ui.lab_mag_info1.setText("魔法："
                        + buki.magic_name);
                if (rate != 0) {
                    ui.lab_mag_info2.setText(
                            "魔法ダメージ " + format_dmg.format(magic / rate) + "  " + format_rate.format(rate));
                } else {
                    ui.lab_mag_info2.setText("");
                }
                break;
        }
        ui.lab_hit_rate.setText("命中率：" + format_rate.format(hit_rate));

        for (int i = 0;
                i < ST_LIST.length;
                i++) {
            ui.lab_st_sum[i].setText(Integer.toString(_ST[BASE][i] + _ST[REM][i]
                    + _ST[LEVEL][i] + _ST[ENCHANT][i] + _ST[ELIXIR][i]));

            ui.lab_st_base[i].setText(Integer.toString(_ST[BASE][i] + _ST[REM][i]));
            ui.lab_st_lev[i].setText(Integer.toString(_ST[LEVEL][i] + _ST[ELIXIR][i]));
            ui.lab_st_add[i].setText(Integer.toString(_ST[ENCHANT][i]));

        }

        ui.lab_dmg_short.setText(
                "基本ダメージ(近) : " + base_dmg_short);
        ui.lab_dmg_long.setText(
                "基本ダメージ(遠) : " + base_dmg_long);
        ui.lab_dmg_mag.setText(
                "基本ダメージ(魔) : " + base_dmg_magic);

        //仮
        ui.lab_hit_short.setText("命中(近) : " + hit_short);
        ui.lab_hit_long.setText("命中(遠) : " + hit_long);

//        ui.lab_hit_short.setText("命中(近) : " + hit_short);
//        ui.lab_ac_short.setText("(最大命中AC : " + Integer.toString(19 - hit_short) + ")");
//        ui.lab_hit_long.setText("命中(遠) : " + hit_long);
//        ui.lab_ac_long.setText("(最大命中AC : " + Integer.toString(19 - hit_long) + ")");
        ui.lab_hit_mag.setText("命中(魔) : " + hit_magic);

//        ui.lab_sp.setText("SP " + sp);
//        ui.lab_ml.setText("ML " + ml);
//        ui.lab_mb.setText("MB " + mb);
//        ui.lab_mag_dmg.setText("魔法ダメージ " + base_dmg_magic);
        ui.pure_status_bonus[1][0].setText(Integer.toString(base_dmg_short));
        ui.pure_status_bonus[1][5].setText(Integer.toString(base_dmg_long));
        ui.pure_status_bonus[1][15].setText(Integer.toString(base_dmg_magic));
        ui.pure_status_bonus[1][1].setText(Integer.toString(base_hit_short));
        ui.pure_status_bonus[1][6].setText(Integer.toString(base_hit_long));
        ui.pure_status_bonus[1][16].setText(Integer.toString(base_hit_magic));
        ui.pure_status_bonus[1][2].setText(Integer.toString(cri_short));
        ui.pure_status_bonus[1][7].setText(Integer.toString(cri_long));
        ui.pure_status_bonus[1][17].setText(Integer.toString(cri_magic));
        ui.pure_status_bonus[1][18].setText(Integer.toString(mb));
        ui.pure_status_bonus[1][19].setText((Integer.toString(red_mp)));

        equip_ac = 0;

        for (Bougu bougu1 : bougu) {
            equip_ac += bougu1.op.AC + bougu1.op2.AC;
        }
        if (ui.tb_ts_sp.isSelected()) {
            equip_ac += -1;
        }

        int c = 6;
        switch (cls) {
            case P:
                c = 6;
                break;
            case K:
                c = 6;
                break;
            case E:
                c = 7;
                break;
            case W:
                c = 8;
                break;
            case D:
                c = 6;
                break;
            case R:
                c = 6;
                break;
            case I:
                c = 8;
                break;
            case F:
                c = 6;
                break;
        }
        base_ac = 10 - (int) (dex / 3) - (int) (level / c);

        base_er = (int) (dex / 2) + (int) (level / _C[ER][DEX][cls]);

        ui.pure_status_bonus[1][8].setText(Integer.toString(base_ac));
        ui.pure_status_bonus[1][9].setText(Integer.toString(base_er));

        ac = base_ac + buff.AC + equip_ac;
        int er = base_er + buff.ER;
        int dr = buff.DR;

        if (ui.cb_buff[F_AG].isSelected()) {
            dr += -ac / 10;
        }

        for (Bougu bougu1 : bougu) {
            dr += bougu1.op.DR;
            dr += bougu1.op2.DR;
        }
        dg = 0;
        if (ui.cb_buff[D_UD].isSelected()) {
            dg = 60;
            if (ui.cb_buff[D_UD].getForeground().equals(Color.BLUE)) {
                cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 3;
            }
        }
        if (ui.cb_buff[I_MI].isSelected()) {
            dg = 60;
            if (ui.cb_buff[I_MI].getForeground().equals(Color.BLUE)) {
                cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
            }
        }
        ui.lab_ac.setText(Integer.toString(ac));
        ui.lab_dg.setText(Integer.toString(dg));
        ui.lab_er.setText(Integer.toString(er));
        ui.lab_dr.setText(Integer.toString(dr));

        int con = _ST[BASE][CON] + _ST[REM][CON] + _ST[LEVEL][CON]
                + _ST[ELIXIR][CON] + _ST[ENCHANT][CON];
        double r_eq = 0;

        for (Bougu bougu1 : bougu) {
            r_eq += bougu1.op.r_weight;
            r_eq += bougu1.op2.r_weight;
        }
        r_eq += buff.r_weight;

        int weight = (int) ((str + con) / 2) * 100 + 1000;

        ui.pure_status_bonus[1][3].setText(Integer.toString(weight));
        ui.pure_status_bonus[1][13].setText(Integer.toString(weight));

        weight *= 1 + r_eq;

        int c_eq = 0;

        for (Bougu bougu1 : bougu) {
            c_eq += bougu1.op.c_weight;
            c_eq += bougu1.op2.c_weight;
        }

        weight += c_eq;

        if (ui.cb_buff[I_RW].isSelected()) {
            ui.cb_buff[W_DW].setSelected(false);
            weight += 480;
            if (ui.cb_buff[I_RW].getForeground().equals(Color.BLUE)) {
                cons_mp += (50.0 * (1.0 - red_mp * 0.01) - red_mp2) / 30;
            }
        }
        if (ui.cb_buff[W_DW].isSelected()) {
            weight += 150;
            if (ui.cb_buff[W_DW].getForeground().equals(Color.BLUE)) {
                cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 30;
            }
        }
        if (weight > 5400) {
            weight = 5400;
        }

        ui.tf_weight2.setText(Integer.toString(weight));
        //重量表示
        switch (ui.cb_weight.getSelectedIndex()) {
            case 0:
                ui.tf_weight.setText(Integer.toString(weight * 2 / 6));
                break;
            case 1:
                ui.tf_weight.setText(Integer.toString(weight * 3 / 6));
                break;
            case 2:
                ui.tf_weight.setText(Integer.toString(weight * 4 / 6));
                break;
            case 3:
                ui.tf_weight.setText(Integer.toString(weight * 5 / 6));
        }
        int wis = _ST[BASE][WIS] + _ST[REM][WIS] + _ST[LEVEL][WIS]
                + _ST[ELIXIR][WIS] + _ST[ENCHANT][WIS];

        mr = minasToZero(wis - 10) * 4 + (int) (level / 2) + _C[MR][WIS][cls];
        ui.pure_status_bonus[1][23].setText(Integer.toString(mr));
        mr += buff.MR;
        mr += buki.op.MR + buki2.op.MR;
        for (Bougu bougu1 : bougu) {
            mr += bougu1.op.MR;
            mr += bougu1.op2.MR;
        }
        ui.lab_mr.setText(Integer.toString(mr));

        calcHPMP();

        System.arraycopy(buff.element_resist, 0, res_ele, 0, ELEM_LIST.length);
        System.arraycopy(buff.ailment, 0, res_ail, 0, AILMENT_LIST.length);

        for (Bougu bougu1 : bougu) {

            for (int i = 0; i < ELEM_LIST.length; i++) {
                res_ele[i] += bougu1.op.element_resist[i] + bougu1.op2.element_resist[i];
            }
            for (int i = 0; i < AILMENT_LIST.length; i++) {
                res_ail[i] += bougu1.op.ailment[i] + bougu1.op2.ailment[i];
            }
        }

        for (int i = 0; i < ELEM_LIST.length; i++) {
            if (res_ele[i] > 100) {
                res_ele[i] = 100;
            }
            ui.lab_elem[i].setText(ELEM_LIST[i] + " " + res_ele[i]);
        }
        for (int i = 0; i < AILMENT_LIST.length; i++) {
            ui.lab_ailment[i].setText(AILMENT_LIST[i] + " " + res_ail[i]);
        }

        int hpr = 0;
        int mpr = 0;
        int pure_con = _ST[BASE][CON] + _ST[REM][CON] + _ST[LEVEL][CON]
                + _ST[ELIXIR][CON];
        int pure_wis = _ST[BASE][WIS] + _ST[REM][WIS] + _ST[LEVEL][WIS]
                + _ST[ELIXIR][WIS];

        int hp_pot;

        if (ui.cb_buff[ITEM_BLUE].isSelected()) {
            if (wis >= 10) {
                mpr += (wis - 10) / 2;
                ui.pure_status_bonus[1][22].setText(Integer.toString((wis - 10) / 2));
            } else {
                mpr++;
            }
        }

        int tmp = (int) (wis / 5) + (int) (level / 40);
        mpr += tmp;
        if (pure_wis >= 25) {
            if (ui.cb_buff[ITEM_BLUE].isSelected()) {
                ui.pure_status_bonus[1][22].setText(Integer.toString(1));
                mpr++;
            }
            mpr++;
            tmp++;
        }
        if (pure_wis >= 35) {
            if (ui.cb_buff[ITEM_BLUE].isSelected()) {
                ui.pure_status_bonus[1][22].setText(Integer.toString(2));
                mpr++;
            }
            mpr++;
            tmp++;
        }
        if (pure_wis >= 45) {
            if (ui.cb_buff[ITEM_BLUE].isSelected()) {
                ui.pure_status_bonus[1][22].setText(Integer.toString(5));
                mpr += 3;
            }
            mpr += 3;
            tmp += 3;
        }

        ui.pure_status_bonus[1][21].setText(Integer.toString(tmp));

        hpr += (con / 2 + level / 20);
        hp_pot = (int) (minasToZero(con - 10) / 10);

        if (pure_con >= 25) {
            hpr++;
        }
        if (pure_con >= 35) {
            hpr++;
            hp_pot++;
        }
        if (pure_con >= 45) {
            hpr += 3;
            hp_pot += 2;
        }
        ui.pure_status_bonus[1][11].setText(Integer.toString(hpr));
        ui.pure_status_bonus[1][12].setText(Integer.toString(hp_pot));

        hpr += buff.HPR;
        mpr += buff.MPR;

        hpr += buki.op.HPR + buki.op2.HPR + buki2.op.HPR + buki2.op2.HPR;
        mpr += buki.op.MPR + buki.op2.MPR + buki2.op.MPR + buki2.op2.MPR;
        for (Bougu bougu1 : bougu) {
            hpr += bougu1.op.HPR + bougu1.op2.HPR;
            mpr += bougu1.op.MPR + bougu1.op2.MPR;
        }

        if (hpr < 0) {
            hpr = 0;
        }

        int hpr2 = 0;
        int mpr2 = 0;

        for (String split : buff.effect.split(",")) {
            if (split.contains("HP回復")) {
                hpr2 += Integer.parseInt(split.split(" ")[1]);
            }
            if (split.contains("MP回復")) {
                mpr2 += Integer.parseInt(split.split(" ")[1]);
            }
        }

        if (hpr2 > 0) {
            ui.lab_hpr.setText(hpr + "  (64秒毎 " + hpr2 + ")");
        } else {
            ui.lab_hpr.setText(Integer.toString(hpr));
        }
        if (mpr2 > 0) {
            ui.lab_mpr.setText(mpr + "  (64秒毎 " + mpr2 + ")");
        } else {
            ui.lab_mpr.setText(Integer.toString(mpr));
        }

        int pot_rate = hp_pot;
        int pot = 0;
        for (String split : buff.effect.split(",")) {
            if (split.contains("ポーション回復量")) {
                String[] a = split.split(" ");
                if (a[1].contains("%")) {
                    pot_rate += Integer.parseInt(a[1].split("%")[0]);
                }
                if (a.length >= 2) {
                    if (a[2].contains("+")) {
                        pot += Integer.parseInt(a[2]);
                    }
                }

            }
        }
        ui.lab_pot1.setText("+" + pot_rate + "%");
        ui.lab_pot2.setText("+" + pot);

        createToolTip();
    }

    private void calcHPMP() {
        hp = 0;
        mp = 0;
        int con = _ST[BASE][CON] + _ST[REM][CON];
        int wis = _ST[BASE][WIS] + _ST[REM][WIS];

        switch (cls) {
            case P:
                hp = 14;
                mp = 3;
                break;
            case K:
                hp = 16;
                mp = 2;
                break;
            case F:
                hp = 16;
                mp = 2;
                break;
            case E:
                hp = 15;
                mp = 4;
                break;
            case W:
                hp = 12;
                mp = 6;
                break;
            case D:
                hp = 12;
                mp = 4;
                break;
            case R:
                hp = 16;
                mp = 2;
                break;
            case I:
                hp = 14;
                mp = 5;
                break;
        }

        double[] c1 = {1.0, 2.0 / 3.0, 1.5, 2.0, 1.5, 0.7, 1.7, 2.0 / 3.0};
        int[] c2 = {1, 0, 1, 2, 1, 1, 1, 0};

        for (int i = 2; i <= level; i++) {
            for (int j = 0; j < 5; j++) {
                if (i == ui.cb_elixir_level[j].getSelectedIndex() + 1) {
                    if (ui.cb_elixir[j].getSelectedIndex() - 1 == CON) {
                        con++;
                    }
                    if (ui.cb_elixir[j].getSelectedIndex() - 1 == WIS) {
                        wis++;
                    }
                }
            }
            if (i >= 51) {
                if (ui.lev.getField(i) == CON
                        && !ui.lev.isOverflow(i)) {
                    con++;
                }
                if (ui.lev.getField(i) == WIS
                        && !ui.lev.isOverflow(i)) {
                    wis++;
                }
            }

            if (con <= 25) {
                hp += 1.5 + minasToZero(con - 12) + _C[HP][CON][cls];
            } else {
                hp += 1.5 + (int) ((con + 1) / 2) + _C[HP][CON][cls];
            }

            mp += 0.5 * ((int) ((int) wis / 5) * c1[cls] + c2[cls])
                    + 0.5 * ((int) ((int) wis / 3 * c1[cls]) + c2[cls]);

        }

        if (con <= 25) {
            int min = 1 + minasToZero(con - 12) + _C[HP][CON][cls];
            int max = 2 + minasToZero(con - 12) + _C[HP][CON][cls];

            ui.pure_status_bonus[1][10].setText(min + " - " + max);
        } else {
            int min = 1 + (int) ((con + 1) / 2) + _C[HP][CON][cls];
            int max = 2 + (int) ((con + 1) / 2) + _C[HP][CON][cls];

            ui.pure_status_bonus[1][10].setText(min + " - " + max);
        }

        {
            int min = (int) ((int) (wis / 5) * c1[cls]) + c2[cls];
            int max = (int) ((int) (wis / 3) * c1[cls]) + c2[cls];

            ui.pure_status_bonus[1][20].setText(min + " - " + max);
        }

        if (con >= 25) {
            hp += 50;
        }
        if (con >= 35) {
            hp += 100;
        }
        if (con >= 45) {
            hp += 150;
        }

        if (wis >= 25) {
            mp += 50;
        }
        if (wis >= 35) {
            mp += 100;
        }
        if (wis >= 45) {
            mp += 150;
        }

        int eq_hp = buff.HP;
        int eq_mp = buff.MP;
        eq_hp += buki.op.HP + buki2.op.HP;
        eq_mp += buki.op.MP + buki2.op.HP;
        for (Bougu bougu1 : bougu) {
            eq_hp += bougu1.op.HP + bougu1.op2.HP;
            eq_mp += bougu1.op.MP + bougu1.op2.MP;
        }
        switch (cls) {
            case P:
                eq_hp += _ST[ENCHANT][CON] * 10;
                break;
            case K:
                eq_hp += _ST[ENCHANT][CON] * 16;
                break;
            case F:
                eq_hp += _ST[ENCHANT][CON] * 16;
                break;
            case E:
                eq_hp += _ST[ENCHANT][CON] * 9;
                break;
            case W:
                eq_hp += _ST[ENCHANT][CON] * 6;
                break;
            case D:
                eq_hp += _ST[ENCHANT][CON] * 9;
                break;
            case R:
                eq_hp += _ST[ENCHANT][CON] * 12;
                break;
            case I:
                eq_hp += _ST[ENCHANT][CON] * 8;
                break;
        }

        int hpp = 0;
        int mpp = 0;

//        if (ui.cb_buff[WAR].isSelected() && ui.cb_buff_group[WAR].getSelectedIndex() == 1) {
//            if (level >= 80) {
//            } else if (level >= 70) {
//                hpp += 0.1 * hp;
//                mpp += 0.1 * mp;
//            } else if (level >= 60) {
//                hpp += 0.3 * hp;
//                mpp += 0.3 * mp;
//            } else if (level >= 52) {
//                hpp += 0.5 * hp;
//                mpp += 0.5 * mp;
//            }
//        }
        if (ui.cb_buff[F_G].isSelected()) {
            hpp += 0.005 * level * hp;
            mpp += 0.005 * level * mp;
            if (ui.cb_buff[UI.W_ADS].isSelected()) {
                ui.cb_buff[UI.W_ADS].setSelected(false);
            }
        } else if (ui.cb_buff[W_ADS].isSelected()) {
            hpp += 0.2 * hp;
            mpp += 0.2 * mp;
            if (ui.cb_buff[W_ADS].getForeground().equals(Color.BLUE)) {
                cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 20;
            }
        }

        hp = (int) (hp + eq_hp + hpp);
        mp = (int) (mp + eq_mp + mpp);

        ui.lab_hp.setText(Integer.toString((int) hp));
        ui.lab_mp.setText(Integer.toString((int) mp));

        if (ui.cb_buff[D_MA].isSelected()) {
            if (ui.cb_buff[D_MA].getForeground().equals(Color.BLUE)) {
                cons_mp += (10.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
            }
        }
        if (ui.cb_buff[D_VR].isSelected()) {
            if (ui.cb_buff[D_MA].getForeground().equals(Color.BLUE)) {
                cons_mp += (20.0 * (1.0 - red_mp * 0.01) - red_mp2) / 5;
            }
        }
        if (ui.cb_buff[E_EV].isSelected()) {
            if (ui.cb_buff[E_EV].getForeground().equals(Color.BLUE)) {
                cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
            }
        }
        if (ui.cb_buff[E_AF].isSelected()) {
            if (ui.cb_buff[E_AF].getForeground().equals(Color.BLUE)) {
                cons_mp += (30.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
            }
        }
        if (ui.cb_buff[E_WW].isSelected()) {
            if (ui.cb_buff[E_WW].getForeground().equals(Color.BLUE)) {
                cons_mp += (15.0 * (1.0 - red_mp * 0.01) - red_mp2) / 16;
            }
        }

        ui.lab_cons_mp.setText(Double.toString((int) (cons_mp * 100) / 100.0));
//        ui.lab_cons_mp.setText(Double.toString((int) (cons_mp * (1.0 - red_mp * 0.01) * 100) / 100.0));
    }

    private int minasToZero(int x) {
        if (x >= 0) {
            return x;
        } else {
            return 0;
        }
    }

    void addRem(int st) {
        if (_rem > 0) {
            if (_ST[REM][st] < st_data[cls][REM][st]) {
                _ST[REM][st]++;
                _rem--;
            }
        }
        ui.lab_rem.setText(Integer.toString(_rem));
    }

    void removeRem(int st) {
        if (_ST[REM][st] > 0) {
            _ST[REM][st]--;
            _rem++;
        }
        ui.lab_rem.setText(Integer.toString(_rem));
    }

    void rem_reset() {
        _rem = rem_data[cls];
        if (ui.lab_rem != null) {
            ui.lab_rem.setText(Integer.toString(_rem));
        }
        for (int i = 0; i < ST_LIST.length; i++) {
            _ST[REM][i] = 0;
            _ST[BASE][i] = st_data[cls][BASE][i];
        }
    }

    double getMagicDamage(String magic_name, String magic_element, double dmg_magic) {
        double cri;
        if (magic_name.equals("マインドブレイク")) {
            return (sp + ml + mb) * 3.8;
        }
        if (magic_name.equals("HP吸収")) {
            // 別途計算
            return 0;
        }
        if (magic_name.equals("ムーンライトイラプション")) {
            return 7;
        }
        if (magic_name.equals("サンバースト") || magic_name.equals("コールライトニング")
                || magic_name.equals("イラプション")
                || magic_name.equals("コーンオブコールド")
                || magic_name.equals("チルタッチ")
                || magic_name.equals("ヴァンパイアリックタッチ")
                || magic_name.equals("ファイアーアロー") || magic_name.equals("アイスダガー")
                || magic_name.equals("ウインドカッター") || magic_name.equals("スラタック")
                || magic_name.equals("エネルギーボルト")) {
            cri = (double) cri_magic / 100;
        } else {
            cri = 0;
        }

        double r_element = 0;
        if (magic_element.equals("火")) {
            r_element = ui.s_target_res[FIRE].getValue();
        }
        if (magic_element.equals("水")) {
            r_element = ui.s_target_res[WATER].getValue();
        }
        if (magic_element.equals("風")) {
            r_element = ui.s_target_res[WIND].getValue();
        }
        if (magic_element.equals("地")) {
            r_element = ui.s_target_res[EARTH].getValue();
        }

        double a = 1 + 3.0 / 32.0 * (int_beta - 12) - r_element / 100.0;
        double b;
        if (magic_name.equals("エルブンアロー")) {
            b = 1.0;
        } else if (ui.s_target_mr.getValue() - hit_magic <= 100) {
            b = 1.0 - 0.01 * ((ui.s_target_mr.getValue() - hit_magic) / 2);
        } else {
            b = 0.6 - 0.01 * ((ui.s_target_mr.getValue() - hit_magic) / 10);
        }
        if (ui.cb_buff[I_IA].isSelected()) {
            return (dmg_magic * a + base_dmg_magic) * b * (1 - cri)
                    + (dmg_magic * a + base_dmg_magic) * b * cri * 1.5 + 10;
        } else {
            return (dmg_magic * a + base_dmg_magic) * b * (1 - cri)
                    + (dmg_magic * a + base_dmg_magic) * b * cri * 1.5;
        }
    }

    int getST_REM(int ST) {
        return _ST[REM][ST];
    }

    void createToolTip() {

        String buki_text = "";
        buki_text += "打撃値" + buki.small + "/" + buki.big;
        if (buki.two_hands) {
            buki_text += " 両手武器";
        }
        if (buki.op.HIT_SHORT > 0) {
            buki_text += " 攻撃成功+" + buki.op.HIT_SHORT;
        }
        if (buki.op.DMG_SHORT > 0) {
            buki_text += " 追加打撃+" + buki.op.DMG_SHORT;
        }
        if (buki.op.HIT_SHORT < 0) {
            buki_text += " 攻撃成功" + buki.op.HIT_SHORT;
        }
        if (buki.op.DMG_LONG < 0) {
            buki_text += " 追加打撃" + buki.op.DMG_LONG;
        }
        if (buki.op.HIT_LONG > 0) {
            buki_text += " 攻撃成功+" + buki.op.HIT_LONG;
        }
        if (buki.op.DMG_LONG > 0) {
            buki_text += " 追加打撃+" + buki.op.DMG_LONG;
        }
        if (buki.op.HIT_LONG < 0) {
            buki_text += " 攻撃成功" + buki.op.HIT_LONG;
        }
        if (buki.op.DMG_LONG < 0) {
            buki_text += " 追加打撃" + buki.op.DMG_LONG;
        }

        if (buki.op.CRI_SHORT + buki.op2.CRI_SHORT > 0) {
            buki_text += " 近距離クリティカル+" + (buki.op.CRI_SHORT + buki.op2.CRI_SHORT);
        }
        if (buki.op.CRI_LONG + buki.op2.CRI_LONG > 0) {
            buki_text += " 遠距離クリティカル+" + (buki.op.CRI_LONG + buki.op2.CRI_LONG);
        }
        if (buki.op.CRI_MAGIC + buki.op2.CRI_MAGIC > 0) {
            buki_text += " 魔法クリティカル+" + (buki.op.CRI_MAGIC + buki.op2.CRI_MAGIC);
        }

        if (buki.hit_stun > 0) {
            buki_text += " スタン成功" + buki.hit_stun;
        }

        if (buki.op.HP > 0) {
            buki_text += " HP+" + buki.op.HP;
        }
        if (buki.op.HPR > 0) {
            buki_text += " HP自然回復+" + buki.op.HPR;
        }
        if (buki.op.MP > 0) {
            buki_text += " MP+" + buki.op.MP;
        }
        if (buki.op.MPR > 0) {
            buki_text += " MP自然回復+" + buki.op.MPR;
        }
        if (buki.op.SP > 0) {
            buki_text += " 魔力+" + buki.op.SP;
        }
        if (buki.op.ST[STR] > 0) {
            buki_text += " STR+" + buki.op.ST[STR];
        }
        if (buki.op.ST[DEX] > 0) {
            buki_text += " DEX+" + buki.op.ST[DEX];
        }
        if (buki.op.ST[CON] > 0) {
            buki_text += " CON+" + buki.op.ST[CON];
        }
        if (buki.op.ST[INT] > 0) {
            buki_text += " INT+" + buki.op.ST[INT];
        }
        if (buki.op.ST[WIS] > 0) {
            buki_text += " WIS+" + buki.op.ST[WIS];
        }
        if (buki.op.ST[CHA] > 0) {
            buki_text += " CHA+" + buki.op.ST[CHA];
        }
        if (!buki.op.effect.equals("")) {
            buki_text += " " + buki.op.effect;
        }
        ui.cb_eq[0].setToolTipText(buki_text);

        for (int i = 0; i < bougu.length; i++) {
            ui.cb_eq[i + 2].setToolTipText(bougu[i].getText());
        }

    }

}
*/