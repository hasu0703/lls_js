function BUFF() {
    this.reset();
    //int[] ailment = new int[AILMENT_LIST.length];

}
BUFF.prototype.reset = function() {
    this.AC = 0; //アーマークラス 
    this.ST = [0, 0, 0, 0, 0, 0];
    this.element_resist = [0, 0, 0, 0];
    this.ELEM_DMG_SHORT = [0, 0, 0, 0];
    this.ELEM_DMG_LONG = [0, 0, 0, 0];

    this.HP = 0;
    this.MP = 0;
    this.HPR = 0;
    this.MPR = 0;
    this.DMG_SHORT = 0;
    this.DMG_LONG = 0;
    this.DMG_MAGIC = 0;
    this.HIT_SHORT = 0;
    this.HIT_LONG = 0;
    this.HIT_MAGIC = 0;
    this.CRI_SHORT = 0;
    this.CRI_LONG = 0;
    this.CRI_MAGIC = 0;
    this.SP = 0;
    this.DR = 0;
    this.MR = 0;
    this.ER = 0;
    this.r_weight = 0;
    this.c_weight = 0;
    this.effect = "";

    this.PVP = 0;
    this.PVPDR = 0;
    this.ailment = [0, 0, 0, 0, 0];
}

BUFF.prototype.checkEnchant = function(reader) {
    switch (reader["type"]) {
        case "リング":
        case "アミュレット":
        case "イアリング":
        case "ベルト":
            if (reader["enchant"] != null && reader["enchanted"] != null) {
                this.EnchantOption(reader);
            }
            break;
        default:

            this.AC -= reader["en"].get_value();
            this.MR = reader["MR強化"] * reader["en"].get_value();
            if (reader["enchant"] != null && reader["enchanted"] != null) {
                this.EnchantOption(reader);
            }
            break;

    }
}

BUFF.prototype.EnchantOption = function(reader) {
    //console.log(reader["enchanted"]);
    if (reader["enchanted"]["type"] == "overwirte") {

        this.loadoption(reader["enchanted"]["enchant"][reader["enchant"]]);
    }
}

BUFF.prototype.loadoption = function(reader) {
    if (reader == null) return;
    if (reader["AC"] != null) {
        this.AC = parseInt(reader["AC"]);
    }
    if (reader["STR"] != null) {
        this.ST[STR] = parseInt(reader["STR"]);
    }
    if (reader["DEX"] != null) {
        this.ST[DEX] = parseInt(reader["DEX"]);
    }
    if (reader["CON"] != null) {
        this.ST[CON] = parseInt(reader["CON"]);
    }
    if (reader["INT"] != null) {
        this.ST[INT] = parseInt(reader["INT"]);
    }
    if (reader["WIS"] != null) {
        this.ST[WIS] = parseInt(reader["WIS"]);
    }
    if (reader["CHA"] != null) {
        this.ST[CHA] = parseInt(reader["CHA"]);
    }
    if (reader["FIRE"] != null) {
        this.element_resist[FIRE] = parseInt(reader["FIRE"]);
    }
    if (reader["EARTH"] != null) {
        this.element_resist[EARTH] = parseInt(reader["EARTH"]);
    }
    if (reader["WIND"] != null) {
        this.element_resist[WIND] = parseInt(reader["WIND"]);
    }
    if (reader["WATER"] != null) {
        this.element_resist[WATER] = parseInt(reader["WATER"]);
    }
    if (reader["HP"] != null) {
        this.HP = parseInt(reader["HP"]);
    }
    if (reader["MP"] != null) {
        this.MP = parseInt(reader["MP"]);
    }
    if (reader["HPR"] != null) {
        this.HPR = parseInt(reader["HPR"]);
    }
    if (reader["MPR"] != null) {
        this.MPR = parseInt(reader["MPR"]);
    }
    if (reader["追加打撃"] != null) {
        this.DMG_SHORT = parseInt(reader["追加打撃"]);
    }
    if (reader["弓打撃値"] != null) {
        this.DMG_LONG = parseInt(reader["弓打撃値"]);
    }
    if (reader["攻撃成功"] != null) {
        this.HIT_SHORT = parseInt(reader["攻撃成功"]);
    }
    if (reader["弓命中率"] != null) {
        this.HIT_LONG = parseInt(reader["弓命中率"]);
    }
    if (reader["魔法命中"] != null) {
        this.HIT_MAGIC = parseInt(reader["魔法命中"]);
    }
    if (reader["SP"] != null) {
        this.SP = parseInt(reader["SP"]);
    }
    if (reader["DR"] != null) {
        this.DR = parseInt(reader["DR"]);
    }
    if (reader["MR"] != null) {
        this.MR = parseInt(reader["MR"]);
    }
    if (reader["重量軽減"] != null) {
        this.r_weight = parseInt(reader["重量軽減"]);
    }
    if (reader["所持重量"] != null) {
        this.c_weight = parseInt(reader["所持重量"]);
    }
    if (reader["特殊"] != null) {
        this.effect = parseInt(reader["特殊"]);
    }
    if (reader["スタン"] != null) {
        this.ailment[STUN] = parseInt(reader["スタン"]);
    }
    if (reader["暗闇"] != null) {
        this.ailment[DARKNESS] = parseInt(reader["暗闇"]);
    }
    if (reader["ホールド"] != null) {
        this.ailment[HOLD] = parseInt(reader["ホールド"]);
    }
    if (reader["凍結"] != null) {
        this.ailment[FREEZE] = parseInt(reader["凍結"]);
    }
    if (reader["石化"] != null) {
        this.ailment[STONE] = parseInt(reader["石化"]);
    }
    if (reader["睡眠"] != null) {
        this.ailment[SLEEP] = parseInt(reader["睡眠"]);
    }
    if (reader["恐怖"] != null) {
        this.ailment[TERROR] = parseInt(reader["恐怖"]);
    }
    if (reader["近距離クリティカル"] != null) {
        this.CRI_SHORT = parseInt(reader["近距離クリティカル"]);
    }
    if (reader["遠距離クリティカル"] != null) {
        this.CRI_LONG = parseInt(reader["遠距離クリティカル"]);
    }
    if (reader["魔法クリティカル"] != null) {
        this.CRI_MAGIC = parseInt(reader["魔法クリティカル"]);
    }
    if (reader["PVP"] != null) {
        this.PVP = parseInt(reader["PVP"]);
    }
    if (reader["PVPDR"] != null) {
        this.PVPDR = parseInt(reader["PVPDR"]);
    }
}