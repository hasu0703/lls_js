/**
 * 定数指定
 * IE10でConstがサポートされていないのでvarで宣言しています。
 * そのため値の変更が可能なためご入力に注意してください。
 * IE11以降の場合Constがサポートされています。
 */
var MAXLV = 100;
var ST_LIST = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
var STR = 0;
var DEX = 1;
var CON = 2;
var INT = 3;
var WIS = 4;
var CHA = 5;


var CLASS_LIST = ["P", "K", "E", "W", "D", "R", "I", "F"];
var CLASS_LIST2 = ["君主", "ナイト", "エルフ", "ウィザード", "ダークエルフ", "ドラゴンナイト", "イリュージョニスト", "ウォリアー"];

var P = 0;
var K = 1;
var E = 2;
var W = 3;
var D = 4;
var R = 5;
var I = 6;
var F = 7;

var ELEM_LIST = ["火", "水", "風", "地"];
var FIRE = 0;
var WATER = 1;
var WIND = 2;
var EARTH = 3;

var BUKI_TYPE_LIST = ["ダガー", "片手剣", "両手剣", "スタッフ", "鈍器",
    "デュアルブレード", "クロウ", "槍", "ボウ", "ガントレット", "キーリンク", "チェーンソード", "双斧"];
var W_D = 0;
var W_LS = 1;
var W_TS = 2;
var W_S = 3;
var W_A = 4;
var W_DB = 5;
var W_C = 6;
var W_L = 7;
var W_B = 8;
var W_G = 9;
var W_K = 10;
var W_CS = 11;
var W_DA = 12;

var MAIN = 13;
var SUB = 14;

var PHI = 0;
var MAG = 1;


var L1 = 0;
var L15 = 1;
var L30 = 2;
var L45 = 3;
var L50 = 4;
var L52 = 5;
var L55 = 6;
var L60 = 7;
var L65 = 8;
var L70 = 9;
var L75 = 10;
var L80 = 11;
var L82 = 12;
var L85 = 13;

var EQ_LIST = ["武器", "武器", "シールド", "ヘルム", "グローブ", "シャツ",
    "アーマー", "クローク", "ブーツ", "ゲートル", "ベルト", "イアリング", "イアリング", "アミュレット", "リング", "リング",
    "リング", "リング", "ルーン", "ルーン","スポールダー","インシグニア"];

var RING1 = 14;
var RING2 = 15;
var RING3 = 16;
var RING4 = 17;

var EARRING1 = 11;
var EARRING2 = 12;

// エンチャントのID
var ACC1 = 0;
var ACC2 = 1;
var ACC3 = 2;
var B_STR = 3;
var B_DEX = 4;
var B_AC = 5;
var BUKI = 6;
var P_G = 7;
var P_B = 8;
var P_S = 9;
var E_WS = 10;
var E_EF = 11;
var E_CM = 12;
var E_SE = 13;
var E_SS = 14;
var E_SF = 15;
var E_NT = 16;
var E_BW = 17;
var E_FW = 18;
var E_RE = 19;
var E_RM = 20;
var E_AP = 21;
var E_EV = 22;
var E_AF = 23;
var W_ADS = 24;
var W_BSK = 25;
var W_DW = 26;
var W_BA = 27;
var W_I2H = 28;
var D_DB = 29;
var D_BS = 30;
var D_DE = 31;
var D_UD = 32;
var D_SA = 33;
var K_RA = 34;
var K_SC = 35;
var K_CB = 36;
var R_DS = 37;
var R_MB = 38;
var R_ANTHARAS = 39;
var R_FAFURION = 40;
var R_VALAKAS = 41;
var I_IO = 42;
var I_IR = 43;
var I_ID = 44;
var I_IA = 45;
var I_INS = 46;
var I_PAT = 47;
var I_CON = 48;
var I_MI = 49;
var ITEM_BLUE = 50;
var ITEM_WIZP = 51;
var ITEM_BREEZE = 52;
var ITEM_SEA = 53;
var ITEM_COOKING = 54;
var ITEM_DESSERT = 55;
var ITEM_MD = 56;
var DRAGON = 57;
var KOMA = 58;
var P_BA = 59;
var E_DB = 60;
var E_EG = 61;
var I_RW = 62;
var WAR = 63;
var ITEM_MD_OP = 64;
var K_BA = 65;
var F_AG = 66;
var F_CR = 67;
var F_FU = 68;
var F_TL = 69;
var F_TM = 70;
var F_TB = 71;
var VIP = 72;
var COIN = 73;
var BS = 74;
var SEC = 75;
var F_G = 76;
var CLAY = 77;
var ITEM_MD2 = 78;

var D_MA = 79;
var D_VR = 80;

var E_WW = 81;

var BS_COIN = 82;
var L_HST = 83;

var AILMENT_LIST = ["石化", "睡眠", "凍結", "暗闇", "気絶", "拘束", "恐怖"];
var STONE = 0;
var SLEEP = 1;
var FREEZE = 2;
var DARKNESS = 3;
var STUN = 4;
var HOLD = 5;
var TERROR = 6;

var ENEMY_TYPE_LIST = ["通常", "悪魔", "不死"];
var NORMAL = 0;
var CURSED = 1;
var UNDEAD = 2;

var EQ_EN_LIST = ["0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "10", "11", "12", "13", "14", "15"];

var EQ_ELEM_LIST = ["無属性", "火霊:1段", "火霊:2段", "火霊:3段", "火霊:4段",
    "火霊:5段", "水霊:1段", "水霊:2段", "水霊:3段", "水霊:4段", "水霊:5段", "風霊:1段",
    "風霊:2段", "風霊:3段", "風霊:4段", "風霊:5段", "地霊:1段", "地霊:2段", "地霊:3段",
    "地霊:4段", "地霊:5段"];

var EQ_TS_LIST = ["0段階", "1段階", "2段階", "3段階", "4段階", "5段階"];

var EQ_JSON = {};


var enchanted = {
"ring":{
    "name": "リング汎用",
    "type": "overwirte",
    "enchant": {
        "1": {
            "HP": "5"
        },
        "2": {
            "HP": "10"
        },
        "3": {
            "HP": "20"
        },
        "4": {
            "HP": "30"
        },
        "5": {
            "HP": "40","追加打撃": "1","弓打撃値": "1"
        },
        "6": {
            "HP": "40","追加打撃": "2","弓打撃値": "2","MR": "1"
        },
        "7": {
            "HP": "50","追加打撃": "3","弓打撃値": "3","MR": "3","SP": "1","PVP": "1"
        },
        "8": {
            "HP": "50","追加打撃": "4","弓打撃値": "4","MR": "5","SP": "2","PVP": "2"
        },
        "9": {
            "HP": "60","追加打撃": "5","弓打撃値": "5","MR": "7","SP": "3","PVP": "3"
        }
    }
}
}

// ファイルシステム読み込み(APPのみ)
if(is_test == false) {
    var fs = require('fs');

}else{
    var fs = {};

}
