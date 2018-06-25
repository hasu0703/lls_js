


var Bougu = function(){
    this.initialize = function(){
        this.op = new BUFF();
        this.op2 = new BUFF();

        this.name = "";
        this.type = "";
        this.material = "";
        this.equip = "";
        this.grade = "";
        this.enchant = 0;
        this.max_enchant = 0;
        this.safety = 0;
        this.mr_enchant = 0;
        this.element_enchant = false;
        this.tokusei = "";
    }

    
    this.reset = function(){
        this.op = new BUFF();
        this.op2 = new BUFF();
        

        this.name = "";
        this.type = "";
        this.material = "";
        this.equip = "";
        this.grade = "";
        this.enchant = 0;

        this.safety = 0;
        this.mr_enchant = 0;
        this.element_enchant = false;
        this.tokusei = "";
    }

    this.initialize();

    this.load = function(reader){
        this.reset();
        
        if (reader == null) {
            return;
        }
        if(reader.equip != null){this.equip  = reader.equip;}
        if(reader.name != null){this.name   = reader.name;}
        if(reader.安全 != null){this.safety = reader.安全;}
        if(reader.強化限界 != null){this.max_enchant = reader.強化限界;}
        if(reader.type != null){this.type = reader.type;}
        if(reader.材質 != null){this.material = reader.材質;}
        if(reader.グレード != null){this.grade = reader.グレード;}
        if(reader.MR強化 != null){this.mr_enchant = reader.MR強化;}
        if(reader.印章強化 != null){this.element_enchant = reader.印章強化;}
        if(reader.特性 != null){this.tokusei = reader.特性;}     
     
        if(reader["changeitem"] != null && reader["en"] != null){
            
            reader["en"].put_value(this.safety);
        }
        this.op2.checkEnchant(reader);
        reader["changeitem"] = null;
        reader["en"]  = null;
        
        this.op.loadoption(reader);
        
    }

    this.getText = function(){
        var text = "";
        text += "AC" + (this.op.AC + this.op2.AC);
        
    }
}

/*
public class Bougu implements Common {




    public String getText() {
        String text = "";
        text += "AC" + (op.AC + op2.AC);
        if (op.HP + op2.HP > 0) {
            text += " HP+" + (op.HP + op2.HP);
        }
        if (op.MP + op2.MP > 0) {
            text += " MP+" + (op.MP + op2.MP);
        }
        if (op.HPR + op2.HPR > 0) {
            text += " HP自然回復+" + (op.HPR + op2.HPR);
        }
        if (op.HPR + op2.HPR < 0) {
            text += " HP自然回復" + (op.HPR + op2.HPR);
        }
        if (op.MPR + op2.MPR > 0) {
            text += " MP自然回復+" + (op.MPR + op2.MPR);
        }
        if (op.MPR + op2.MPR < 0) {
            text += " MP自然回復" + (op.MPR + op2.MPR);
        }
        if (op.ST[STR] + op2.ST[STR] > 0) {
            text += " STR+" + (op.ST[STR] + op2.ST[STR]);
        }
        if (op.ST[DEX] + op2.ST[DEX] > 0) {
            text += " DEX+" + (op.ST[DEX] + op2.ST[DEX]);
        }
        if (op.ST[CON] + op2.ST[CON] > 0) {
            text += " CON+" + (op.ST[CON] + op2.ST[CON]);
        }
        if (op.ST[INT] + op2.ST[INT] > 0) {
            text += " INT+" + (op.ST[INT] + op2.ST[INT]);
        }
        if (op.ST[WIS] + op2.ST[WIS] > 0) {
            text += " WIS+" + (op.ST[WIS] + op2.ST[WIS]);
        }
        if (op.ST[CHA] + op2.ST[CHA] > 0) {
            text += " CHA+" + (op.ST[CHA] + op2.ST[CHA]);
        }
        if (op.ST[STR] < 0) {
            text += " STR" + op.ST[STR];
        }
        if (op.ST[DEX] < 0) {
            text += " DEX" + op.ST[DEX];
        }
        if (op.ST[CON] < 0) {
            text += " CON" + op.ST[CON];
        }
        if (op.ST[INT] < 0) {
            text += " INT" + op.ST[INT];
        }
        if (op.ST[WIS] < 0) {
            text += " WIS" + op.ST[WIS];
        }
        if (op.ST[CHA] < 0) {
            text += " CHA" + op.ST[CHA];
        }
        if (op.DMG_SHORT + op2.DMG_SHORT > 0) {
            text += " 追加打撃+" + (op.DMG_SHORT + op2.DMG_SHORT);
        }
        if (op.HIT_SHORT + op2.HIT_SHORT > 0) {
            text += " 攻撃成功+" + (op.HIT_SHORT + op2.HIT_SHORT);
        }
        if (op.HIT_LONG + op2.HIT_LONG > 0) {
            text += " 弓命中率+" + (op.HIT_LONG + op2.HIT_LONG);
        }
        if (op.DMG_LONG + op2.DMG_LONG > 0) {
            text += " 遠距離ダメージ+" + (op.DMG_LONG + op2.DMG_LONG);
        }
        if (op.SP + op2.SP > 0) {
            text += " 魔力+" + (op.SP + op2.SP);
        }
        if (op.SP < 0) {
            text += " 魔力" + op.SP;
        }
        if (op.HIT_MAGIC + op2.HIT_MAGIC > 0) {
            text += " 魔法命中+" + (op.HIT_MAGIC + op2.HIT_MAGIC);
        }
        if (op.DR + op2.DR > 0) {
            text += " ダメージ低下" + (op.DR + op2.DR);
        }
        if (op.CRI_SHORT + op2.CRI_SHORT > 0) {
            text += " 近距離クリティカル+" + (op.CRI_SHORT + op2.CRI_SHORT);
        }
        if (op.CRI_LONG + op2.CRI_LONG > 0) {
            text += " 遠距離クリティカル+" + (op.CRI_LONG + op2.CRI_LONG);
        }
        if (op.CRI_MAGIC + op2.CRI_MAGIC > 0) {
            text += " 魔法クリティカル+" + (op.CRI_MAGIC + op2.CRI_MAGIC);
        }
        if (op.element_resist[FIRE] > 0) {
            text += " 火の属性" + op.element_resist[FIRE];
        }
        if (op.element_resist[WATER] > 0) {
            text += " 水の属性" + op.element_resist[WATER];
        }
        if (op.element_resist[WIND] > 0) {
            text += " 風の属性" + op.element_resist[WIND];
        }
        if (op.element_resist[EARTH] > 0) {
            text += " 地の属性" + op.element_resist[EARTH];
        }
        if (op.MR + op2.MR > 0) {
            text += " 魔法防御+" + (op.MR + op2.MR);
        }
        if (mr_enchant > 0) {
            text += " (強化毎にMR+" + mr_enchant + ")";
        }
        if (op.ailment[STUN] + op2.ailment[STUN] > 0) {
            text += " スタン耐性+" + (op.ailment[STUN] + op2.ailment[STUN]);
        }
        if (op.ailment[HOLD] + op2.ailment[HOLD] > 0) {
            text += " ホールド耐性+" + (op.ailment[HOLD] + op2.ailment[HOLD]);
        }
        if (op.ailment[SLEEP] + op2.ailment[SLEEP] > 0) {
            text += " 睡眠耐性+" + (op.ailment[SLEEP] + op2.ailment[SLEEP]);
        }
        if (op.ailment[FREEZE] + op2.ailment[FREEZE] > 0) {
            text += " 凍結耐性+" + (op.ailment[FREEZE] + op2.ailment[FREEZE]);
        }
        if (op.ailment[STONE] + op2.ailment[STONE] > 0) {
            text += " 石化耐性+" + (op.ailment[STONE] + op2.ailment[STONE]);
        }
        if (op.ailment[DARKNESS] + op2.ailment[DARKNESS] > 0) {
            text += " 暗闇耐性+" + (op.ailment[DARKNESS] + op2.ailment[DARKNESS]);
        }
        if (op.PVP + op2.PVP > 0) {
            text += " PVPダメージ+" + (op.PVP + op2.PVP);
        }

        if (!op.effect.equals("")) {
            text += " " + op.effect;
        }
        if (!op2.effect.equals("")) {
            text += " " + op2.effect;
        }
        return text;
    }

    public void checkEnchant() {

        op2 = new Buff();

        if (name.contains("テイパーガーダー")) {
            if (name.contains("腕力")) {
                switch (enchant) {
                    case 5:
                        op2.HIT_SHORT = 1;
                        break;
                    case 6:
                        op2.HIT_SHORT = 2;
                        op2.DMG_SHORT = 1;
                        break;
                    case 7:
                        op2.HIT_SHORT = 2;
                        op2.DMG_SHORT = 1;
                        op2.ST[STR] = 1;
                        break;
                    case 8:
                        op2.HIT_SHORT = 2;
                        op2.DMG_SHORT = 2;
                        op2.ST[STR] = 1;
                        op2.PVP = 1;
                        break;
                    case 9:
                        op2.HIT_SHORT = 3;
                        op2.DMG_SHORT = 3;
                        op2.ST[STR] = 1;
                        op2.PVP = 2;
                        break;
                }
            }
            if (name.contains("機敏")) {
                switch (enchant) {
                    case 5:
                        op2.HIT_LONG = 1;
                        break;
                    case 6:
                        op2.HIT_LONG = 2;
                        op2.DMG_LONG = 1;
                        break;
                    case 7:
                        op2.HIT_LONG = 2;
                        op2.DMG_LONG = 1;
                        op2.ST[DEX] = 1;
                        break;
                    case 8:
                        op2.HIT_LONG = 2;
                        op2.DMG_LONG = 2;
                        op2.ST[DEX] = 1;
                        op2.PVP = 1;
                        break;
                    case 9:
                        op2.HIT_LONG = 3;
                        op2.DMG_LONG = 3;
                        op2.ST[DEX] = 1;
                        op2.PVP = 2;
                        break;
                }
            }
            if (name.contains("知力")) {
                switch (enchant) {
                    case 5:
                        op2.MPR = 2;
                        break;
                    case 6:
                        op2.MPR = 2;
                        op2.SP = 1;
                        break;
                    case 7:
                        op2.MPR = 4;
                        op2.SP = 1;
                        op2.ST[INT] = 1;
                        break;
                    case 8:
                        op2.MPR = 4;
                        op2.SP = 2;
                        op2.ST[INT] = 1;
                        op2.PVP = 1;
                        break;
                    case 9:
                        op2.MPR = 6;
                        op2.SP = 3;
                        op2.ST[INT] = 1;
                        op2.PVP = 2;
                        break;
                }
            }
        }

        if (name.equals("地竜のTシャツ")) {
            switch (enchant) {
                case 5:
                    op2.MR = 4;
                    break;
                case 6:
                    op2.MR = 5;
                    break;
                case 7:
                    op2.MR = 6;
                    break;
                case 8:
                    op2.MR = 8;
                    break;
                case 9:
                    op2.MR = 11;
                    op2.DR = 2;
                    break;
                case 10:
                    op2.MR = 14;
                    op2.DR = 3;
            }
        }
        if (name.equals("火竜のTシャツ")) {
            switch (enchant) {
                case 5:
                    op2.HP = 20;
                    break;
                case 6:
                    op2.HP = 30;
                    break;
                case 7:
                    op2.HP = 50;
                    break;
                case 8:
                    op2.HP = 70;
                    break;
                case 9:
                    op2.HP = 90;
                    op2.DMG_SHORT = 1;
                    break;
                case 10:
                    op2.HP = 100;
                    op2.DMG_SHORT = 2;
            }
        }
        if (name.equals("風竜のTシャツ")) {
            switch (enchant) {
                case 5:
                    op2.HP = 20;
                    break;
                case 6:
                    op2.HP = 30;
                    break;
                case 7:
                    op2.HP = 50;
                    break;
                case 8:
                    op2.HP = 70;
                    break;
                case 9:
                    op2.HP = 90;
                    op2.DMG_LONG = 1;
                    break;
                case 10:
                    op2.HP = 100;
                    op2.DMG_LONG = 2;
            }
        }
        if (name.equals("水竜のTシャツ")) {
            switch (enchant) {
                case 5:
                    op2.HP = 20;
                    break;
                case 6:
                    op2.HP = 30;
                    break;
                case 7:
                    op2.HP = 50;
                    break;
                case 8:
                    op2.HP = 70;
                    break;
                case 9:
                    op2.HP = 90;
                    op2.SP = 1;
                    break;
                case 10:
                    op2.HP = 100;
                    op2.SP = 2;
            }
        }

        if (name.equals("古代弓射手のガーダー")) {
            if (enchant >= 9) {
                op2.DMG_LONG = 3;
            } else if (enchant >= 7) {
                op2.DMG_LONG = 2;
            } else if (enchant >= 5) {
                op2.DMG_LONG = 1;
            }
        }
        if (name.equals("古代闘士のガーダー")) {
            if (enchant >= 9) {
                op2.DMG_SHORT = 3;
            } else if (enchant >= 7) {
                op2.DMG_SHORT = 2;
            } else if (enchant >= 5) {
                op2.DMG_SHORT = 1;
            }
        }
        if (name.equals("体力のガーダー")) {
            if (enchant >= 9) {
                op2.HP = 75;
            } else if (enchant >= 7) {
                op2.HP = 50;
            } else if (enchant >= 5) {
                op2.HP = 25;
            }
        }
        if (name.equals("守護のガーダー")) {
            if (enchant >= 9) {
                op2.DR = 3;
            } else if (enchant >= 7) {
                op2.DR = 2;
            } else if (enchant >= 5) {
                op2.DR = 1;
            }
        }
        if (name.equals("ウィザードのガーダー")) {
            if (enchant >= 9) {
                op2.SP = 3;
            } else if (enchant >= 7) {
                op2.SP = 2;
            } else if (enchant >= 5) {
                op2.SP = 1;
            }
        }

        if (name.contains("アンタラスグランド")) {
            if (enchant > 6) {
                op2.DR += enchant - 6;
            }
        }

        if (name.equals("輝く魔力のグローブ")) {
            if (enchant > 4) {
                op2.c_weight += 60 * (enchant - 4);
            }
        }

        if (name.contains("スナッパー")) {
            if (name.contains("祝福された")) {
                if (name.contains("勇士")) {
                    switch (enchant) {
                        case 8:
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                            op2.HIT_SHORT++;
                            op2.HIT_LONG++;
                            op2.ailment[STUN] += 2;
                        case 7:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                            op2.HIT_SHORT++;
                            op2.HIT_LONG++;
                            op2.AC--;
                            op2.ailment[STUN] += 2;
                        case 6:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.HIT_SHORT++;
                            op2.HIT_LONG++;
                            op2.ailment[STUN] += 5;
                        case 5:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.HIT_SHORT++;
                            op2.HIT_LONG++;
                        case 4:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.HIT_SHORT++;
                            op2.HIT_LONG++;
                            op2.AC--;
                        case 3:
                            op2.HP += 10;
                            op2.AC -= 4;
                    }
                } else if (name.contains("知恵")) {
                    switch (enchant) {
                        case 8:
                            op2.PVP++;
                            op2.SP++;
                            op2.HP += 10;
                            op2.MP += 5;
                            op2.ailment[STUN] += 2;
                        case 7:
                            op2.PVP++;
                            op2.SP++;
                            op2.HP += 5;
                            op2.MP += 5;
                            op2.AC--;
                            op2.ailment[STUN] += 2;
                        case 6:
                            op2.HP += 5;
                            op2.MP += 10;
                            op2.ailment[STUN] += 5;
                        case 5:
                            op2.HP += 5;
                            op2.SP++;
                        case 4:
                            op2.HP += 5;
                            op2.SP++;
                            op2.AC--;
                        case 3:
                            op2.AC -= 3;
                            op2.HP += 20;

                    }
                } else if (name.contains("体力")) {
                    switch (enchant) {
                        case 8:
                            op2.HP += 10;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                            op2.ailment[STUN] += 2;
                        case 7:
                            op2.HP += 10;
                            op2.AC--;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                            op2.ailment[STUN] += 2;
                        case 6:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.ailment[STUN] += 5;
                        case 5:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                        case 4:
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.HP += 5;
                            op2.AC--;
                        case 3:
                            op2.HP += 30;
                            op2.AC -= 3;
                    }
                } else if (name.contains("魔法抵抗")) {
                    switch (enchant) {
                        case 8:
                            op2.MR++;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                            op2.ailment[STUN] += 2;
                        case 7:
                            op2.HP += 5;
                            op2.MR++;
                            op2.AC--;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                            op2.ailment[STUN] += 2;
                        case 6:
                            op2.HP += 5;
                            op2.MR++;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.ailment[STUN] += 5;
                        case 5:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                        case 4:
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.HP += 5;
                            op2.AC--;
                        case 3:
                            op2.HP += 30;
                            op2.AC -= 3;
                    }
                } else if (name.contains("集中") || name.contains("マナ") || name.contains("回復")) {
                    switch (enchant) {
                        case 8:
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                            op2.ailment[STUN] += 2;
                        case 7:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                            op2.ailment[STUN] += 2;
                        case 6:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.ailment[STUN] += 5;
                        case 5:
                            op2.HP += 5;
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.PVP++;
                        case 4:
                            op2.DMG_LONG++;
                            op2.DMG_SHORT++;
                            op2.HP += 5;
                            op2.AC--;
                        case 3:
                            op2.HP += 30;
                            op2.AC -= 3;
                    }
                }
            } else if (name.contains("勇士")) {
                switch (enchant) {
                    case 8:
                        op2.HP += 5;
                        op2.DMG_LONG++;
                        op2.DMG_SHORT++;
                        op2.PVP++;
                        op2.HIT_SHORT++;
                        op2.HIT_LONG++;
                        op2.ailment[STUN] += 2;
                    case 7:
                        op2.HP += 5;
                        op2.DMG_LONG++;
                        op2.DMG_SHORT++;
                        op2.PVP++;
                        op2.HIT_SHORT++;
                        op2.HIT_LONG++;
                        op2.ailment[STUN] += 2;
                    case 6:
                        op2.HP += 5;
                        op2.DMG_LONG++;
                        op2.DMG_SHORT++;
                        op2.HIT_SHORT++;
                        op2.HIT_LONG++;
                        op2.ailment[STUN] += 5;
                    case 5:
                        op2.HP += 5;
                        op2.DMG_LONG++;
                        op2.DMG_SHORT++;
                        op2.PVP++;
                        op2.HIT_SHORT++;
                        op2.HIT_LONG++;
                    case 4:
                        op2.HP += 5;
                        op2.AC--;
                    case 3:
                        op2.HP += 5;
                        op2.AC--;
                    case 2:
                        op2.AC--;
                    case 1:
                        op2.AC--;
                }
            } else if (name.contains("知恵")) {
                switch (enchant) {
                    case 8:
                        op2.HP += 5;
                        op2.PVP++;
                        op2.SP++;
                        op2.ailment[STUN] += 2;
                    case 7:
                        op2.HP += 5;
                        op2.PVP++;
                        op2.ailment[STUN] += 2;
                    case 6:
                        op2.HP += 5;
                        op2.SP++;
                        op2.ailment[STUN] += 5;
                    case 5:
                        op2.HP += 5;
                        op2.SP++;
                    case 4:
                        op2.HP += 5;
                        op2.AC--;
                    case 3:
                        op2.HP += 5;
                        op2.AC--;
                    case 2:
                        op2.HP += 5;
                        op2.AC--;
                    case 1:
                        op2.HP += 5;
                }
            } else {
                switch (enchant) {
                    case 8:
                        op2.HP += 5;
                        op2.DMG_LONG++;
                        op2.DMG_SHORT++;
                        op2.PVP++;
                        op2.HIT_SHORT++;
                        op2.HIT_LONG++;
                        op2.ailment[STUN] += 2;
                    case 7:
                        op2.HP += 5;
                        op2.DMG_LONG++;
                        op2.DMG_SHORT++;
                        op2.PVP++;
                        op2.HIT_SHORT++;
                        op2.HIT_LONG++;
                        op2.ailment[STUN] += 2;
                    case 6:
                        op2.HP += 5;
                        op2.DMG_LONG++;
                        op2.DMG_SHORT++;
                        op2.HIT_SHORT++;
                        op2.HIT_LONG++;
                        op2.ailment[STUN] += 5;
                    case 5:
                        op2.HP += 5;
                        op2.DMG_LONG++;
                        op2.DMG_SHORT++;
                        op2.PVP++;
                        op2.HIT_SHORT++;
                        op2.HIT_LONG++;
                    case 4:
                        op2.HP += 5;
                        op2.AC--;
                    case 3:
                        op2.HP += 5;
                        op2.AC--;
                    case 2:
                        op2.HP += 5;
                        op2.AC--;
                    case 1:
                        op2.HP += 15;
                }
            }
        }

        if (name.equals("血戦のマント")) {
            if (enchant >= 5) {
                op2.AC = -2;
            }
            if (enchant >= 6) {
                op2.MR = 20;
            }
            if (enchant >= 7) {
                op2.HP = 40;
                op2.MP = 40;
            }
            if (enchant >= 8) {
                op2.DR = 1;
            }
            if (enchant >= 9) {
                op2.ST[STR] = 1;
            }
        }
        if (name.equals("血戦のケープ")) {
            if (enchant >= 5) {
                op2.AC = -2;
            }
            if (enchant >= 6) {
                op2.MR = 20;
            }
            if (enchant >= 7) {
                op2.DMG_LONG = 1;
            }
            if (enchant >= 8) {
                op2.DR = 1;
            }
            if (enchant >= 9) {
                op2.ST[DEX] = 1;
            }
        }
        if (name.equals("血戦のクローク")) {
            if (enchant >= 5) {
                op2.AC = -2;
            }
            if (enchant >= 6) {
                op2.MR = 20;
            }
            if (enchant >= 7) {
                op2.MPR = 4;
            }
            if (enchant >= 8) {
                op2.DR = 1;
            }
            if (enchant >= 9) {
                op2.ST[INT] = 1;
            }
        }

        if (name.contains("リッチローブ")) {
            if (enchant >= 3) {
                op2.SP = enchant - 2;
            }
        }

        if (name.equals("憤怒のグローブ(KR)")) {
            if (enchant >= 5) {
                op2.HIT_SHORT = enchant - 4;
            }
        }

        if (name.equals("激昂のグローブ")) {
            if (enchant >= 5) {
                op2.HIT_SHORT = enchant - 4;
            }
        }

        if (name.equals("幸運のサークレット")) {
            if (enchant > 0) {
                op2.SP = 1;
            }
        }

        if (name.equals("大魔法使いの帽子")) {
            op2.MP = 10 * enchant;
        }

        if (name.equals("シンセシスゲートル")) {
            op2.HP = 5 * enchant;
        }

        if (name.equals("血戦のグローブ")) {
            if (enchant >= 5) {
                op2.HP = 30;
            }
            if (enchant >= 6) {
                op2.MR = 2;
            }
            if (enchant >= 7) {
                op2.ST[STR] = 1;
            }
            if (enchant >= 8) {
                op2.MP = 20;
            }
            if (enchant >= 9) {
                op2.DMG_SHORT = 1;
            }
        }
        if (name.equals("血戦のブレイサー")) {
            if (enchant >= 5) {
                op2.HP = 30;
            }
            if (enchant >= 6) {
                op2.MPR = 1;
            }
            if (enchant >= 7) {
                op2.ST[DEX] = 1;
            }
            if (enchant >= 8) {
                op2.MP = 20;
            }
            if (enchant >= 9) {
                op2.DMG_LONG = 1;
            }
        }
        if (name.equals("血戦のミトン")) {
            if (enchant >= 5) {
                op2.HP = 30;
            }
            if (enchant >= 6) {
                op2.MPR = 1;
            }
            if (enchant >= 7) {
                op2.ST[WIS] = 1;
            }
            if (enchant >= 8) {
                op2.MP = 20;
            }
            if (enchant >= 9) {
                op2.SP = 1;
            }
        }

        if (name.equals("血戦のグリーブ")) {
            if (enchant >= 5) {
                op2.HP = 25;
            }
            if (enchant >= 6) {
                op2.MP = 20;
            }
            if (enchant >= 7) {
                op2.AC = -2;
            }
            if (enchant >= 8) {
                op2.ST[WIS] = 1;
            }
            if (enchant >= 9) {
                op2.ST[STR] = 1;
            }
        }
        if (name.equals("血戦のブーツ")) {
            if (enchant >= 5) {
                op2.HP = 25;
            }
            if (enchant >= 6) {
                op2.MP = 20;
            }
            if (enchant >= 7) {
                op2.AC = -2;
            }
            if (enchant >= 8) {
                op2.ST[WIS] = 1;
            }
            if (enchant >= 9) {
                op2.ST[DEX] = 1;
            }
        }
        if (name.equals("血戦のバスキン")) {
            if (enchant >= 5) {
                op2.HP = 25;
            }
            if (enchant >= 6) {
                op2.MP = 20;
            }
            if (enchant >= 7) {
                op2.AC = -2;
            }
            if (enchant >= 8) {
                op2.ST[WIS] = 1;
            }
            if (enchant >= 9) {
                op2.ST[INT] = 1;
            }
        }

	    if (name.equals("ユニコーンの腕力のゲートル")) {
	        if (enchant >= 9) {
                op2.DMG_SHORT = 1;
	        }
	    }
	    if (name.equals("ユニコーンの機敏のゲートル")) {
	        if (enchant >= 9) {
	        	op2.DMG_LONG = 1;
	        }
	    }
	    if (name.equals("ユニコーンの知力のゲートル")) {
	        if (enchant >= 9) {
	        	op2.SP = 1;
	        }
	    }


        if (type.equals("リング") || type.equals("アミュレット")
                || type.equals("イアリング") || type.equals("ベルト") || type.equals("ルーン")) {

            if (name.equals("回復の紋章")) {
                op2.effect = "ポーション回復量 +" + (enchant * 2 + 2) + "% +" + (enchant * 2 + 2) + ",";
                op2.effect += "回復悪化防御 +" + (enchant * 2 + 2) + "%,";
            }

            switch (name) {
                case "腕力の紋章":
                    switch (enchant) {
                        case 1:
                            op2.effect = "ポーション回復量 +2% +2,";
                            op2.effect += "回復悪化防御 +2%,";
                            break;
                        case 2:
                            op2.effect = "ポーション回復量 +4% +4,";
                            op2.effect += "回復悪化防御 +4%,";
                            break;
                        case 3:
                            op2.effect = "ポーション回復量 +6% +6,";
                            op2.effect += "回復悪化防御 +6%,";
                            break;
                        case 4:
                            op2.effect = "ポーション回復量 +8% +8,";
                            op2.effect += "回復悪化防御 +8%,";
                            break;
                        case 5:
                            op2.effect = "ポーション回復量 +9% +9,";
                            op2.effect += "回復悪化防御 +9%,";
                            op2.HIT_SHORT = 1;
                            break;
                        case 6:
                            op2.effect = "ポーション回復量 +10% +10,";
                            op2.effect += "回復悪化防御 +10%,";
                            op2.HIT_SHORT = 1;
                            op2.DMG_SHORT = 1;
                            break;
                        case 7:
                            op2.effect = "ポーション回復量 +11% +11,";
                            op2.effect += "回復悪化防御 +11%,";
                            op2.HIT_SHORT = 2;
                            op2.DMG_SHORT = 2;
                            break;
                        case 8:
                            op2.effect = "ポーション回復量 +12% +12,";
                            op2.effect += "回復悪化防御 +12%,";
                            op2.HIT_SHORT = 3;
                            op2.DMG_SHORT = 3;
                            break;
                        case 9:
                            op2.effect = "ポーション回復量 +13% +13,";
                            op2.effect += "回復悪化防御 +13%,";
                            op2.HIT_SHORT = 4;
                            op2.DMG_SHORT = 4;
                            break;
                        case 10:
                            op2.effect = "ポーション回復量 +14% +14,";
                            op2.effect += "回復悪化防御 +14%,";
                            op2.HIT_SHORT = 5;
                            op2.DMG_SHORT = 5;
                            break;
                    }
                    break;
                case "機敏の紋章":
                    switch (enchant) {
                        case 1:
                            op2.effect = "ポーション回復量 +2% +2,";
                            op2.effect += "回復悪化防御 +2%,";
                            break;
                        case 2:
                            op2.effect = "ポーション回復量 +4% +4,";
                            op2.effect += "回復悪化防御 +4%,";
                            break;
                        case 3:
                            op2.effect = "ポーション回復量 +6% +6,";
                            op2.effect += "回復悪化防御 +6%,";
                            break;
                        case 4:
                            op2.effect = "ポーション回復量 +8% +8,";
                            op2.effect += "回復悪化防御 +8%,";
                            break;
                        case 5:
                            op2.effect = "ポーション回復量 +9% +9,";
                            op2.effect += "回復悪化防御 +9%,";
                            op2.HIT_LONG = 1;
                            break;
                        case 6:
                            op2.effect = "ポーション回復量 +10% +10,";
                            op2.effect += "回復悪化防御 +10%,";
                            op2.HIT_LONG = 1;
                            op2.DMG_LONG = 1;
                            break;
                        case 7:
                            op2.effect = "ポーション回復量 +11% +11,";
                            op2.effect += "回復悪化防御 +11%,";
                            op2.HIT_LONG = 2;
                            op2.DMG_LONG = 2;
                            break;
                        case 8:
                            op2.effect = "ポーション回復量 +12% +12,";
                            op2.effect += "回復悪化防御 +12%,";
                            op2.HIT_LONG = 3;
                            op2.DMG_LONG = 3;
                            break;
                        case 9:
                            op2.effect = "ポーション回復量 +13% +13,";
                            op2.effect += "回復悪化防御 +13%,";
                            op2.HIT_LONG = 4;
                            op2.DMG_LONG = 4;
                            break;
                        case 10:
                            op2.effect = "ポーション回復量 +14% +14,";
                            op2.effect += "回復悪化防御 +14%,";
                            op2.HIT_LONG = 5;
                            op2.DMG_LONG = 5;
                            break;
                    }
                    break;
                case "知力の紋章":
                    switch (enchant) {
                        case 1:
                            op2.effect = "ポーション回復量 +2% +2,";
                            op2.effect += "回復悪化防御 +2%,";
                            break;
                        case 2:
                            op2.effect = "ポーション回復量 +4% +4,";
                            op2.effect += "回復悪化防御 +4%,";
                            break;
                        case 3:
                            op2.effect = "ポーション回復量 +6% +6,";
                            op2.effect += "回復悪化防御 +6%,";
                            break;
                        case 4:
                            op2.effect = "ポーション回復量 +8% +8,";
                            op2.effect += "回復悪化防御 +8%,";
                            break;
                        case 5:
                            op2.effect = "ポーション回復量 +9% +9,";
                            op2.effect += "回復悪化防御 +9%,";
                            op2.HIT_MAGIC = 1;
                            break;
                        case 6:
                            op2.effect = "ポーション回復量 +10% +10,";
                            op2.effect += "回復悪化防御 +10%,";
                            op2.HIT_MAGIC = 1;
                            op2.SP = 1;
                            break;
                        case 7:
                            op2.effect = "ポーション回復量 +11% +11,";
                            op2.effect += "回復悪化防御 +11%,";
                            op2.HIT_MAGIC = 2;
                            op2.SP = 2;
                            break;
                        case 8:
                            op2.effect = "ポーション回復量 +12% +12,";
                            op2.effect += "回復悪化防御 +12%,";
                            op2.HIT_MAGIC = 3;
                            op2.SP = 3;
                            break;
                        case 9:
                            op2.effect = "ポーション回復量 +13% +13,";
                            op2.effect += "回復悪化防御 +13%,";
                            op2.HIT_MAGIC = 4;
                            op2.SP = 4;
                            break;
                        case 10:
                            op2.effect = "ポーション回復量 +14% +14,";
                            op2.effect += "回復悪化防御 +14%,";
                            op2.HIT_MAGIC = 5;
                            op2.SP = 5;
                            break;
                    }
                    break;
            }

            //シークレットオプション
            if (name.contains("月光の") || name.contains("星の")) {
                if (enchant == 7) {
                    op2.PVP = 1;
                }
                if (enchant == 8) {
                    op2.PVP = 2;
                }
            }

            if (tokusei.equals("情熱")) {
                switch (enchant) {
                    case 1:
                        op2.HP = 5;
                        break;
                    case 2:
                        op2.HP = 10;
                        break;
                    case 3:
                        op2.HP = 20;
                        break;
                    case 4:
                        op2.HP = 30;
                        break;
                    case 5:
                        op2.HP = 40;
                        op2.DMG_LONG = 1;
                        op2.DMG_SHORT = 1;
                        break;
                    case 6:
                        op2.HP = 40;
                        op2.DMG_LONG = 2;
                        op2.DMG_SHORT = 2;
                        op2.MR = 1;
                        break;
                    case 7:
                        op2.HP = 50;
                        op2.DMG_LONG = 3;
                        op2.DMG_SHORT = 3;
                        op2.SP = 1;
                        op2.MR = 3;
                        break;
                    case 8:
                        op2.HP = 50;
                        op2.DMG_LONG = 4;
                        op2.DMG_SHORT = 4;
                        op2.SP = 2;
                        op2.MR = 5;
                        break;
                }
            }

            if (tokusei.equals("根性")) {
                switch (enchant) {
                    case 1:
                        op2.HP = 5;
                        break;
                    case 2:
                        op2.HP = 10;
                        break;
                    case 3:
                        op2.HP = 20;
                        break;
                    case 4:
                        op2.HP = 30;
                        break;
                    case 5:
                        op2.HP = 40;
                        op2.effect = "ポーション回復量 +2% +0,";
                        op2.effect += "回復悪化防御 +2% (恐怖),";
                        break;
                    case 6:
                        op2.AC--;
                        op2.HP = 40;
                        op2.effect = "ポーション回復量 +4% +2,";
                        op2.effect += "回復悪化防御 +4% (恐怖),";
                        break;
                    case 7:
                        op2.AC -= 2;
                        op2.HP = 50;
                        op2.effect = "ポーション回復量 +6% +4,";
                        op2.effect += "回復悪化防御 +6% (恐怖),";
                        op2.ailment[STUN] += 2;
                        break;
                    case 8:
                        op2.AC -= 3;
                        op2.HP = 50;
                        op2.effect = "ポーション回復量 +8% +6,";
                        op2.effect += "回復悪化防御 +8% (恐怖),";
                        op2.ailment[STUN] += 3;
                        break;
                }

            }

            if (tokusei.equals("意地")) {
                switch (enchant) {
                    case 1:
                        op2.MP = 5;
                        break;
                    case 2:
                        op2.MP = 10;
                        break;
                    case 3:
                        op2.MP = 20;
                        break;
                    case 4:
                        op2.MP = 30;
                        break;
                    case 5:
                        op2.MP = 40;
                        op2.DR = 1;
                        break;
                    case 6:
                        op2.HP = 20;
                        op2.MP = 40;
                        op2.DR = 2;
                        break;
                    case 7:
                        op2.HP = 30;
                        op2.MP = 50;
                        op2.DR = 3;
                        break;
                    case 8:
                        op2.HP = 40;
                        op2.MP = 50;
                        op2.DR = 4;
                        break;
                }
            }

            if (grade.equals("特級")) {
                switch (enchant) {
                    case 1:
                        op2.HP = 15;
                        break;
                    case 2:
                        op2.HP = 20;
                        op2.AC = -1;
                        break;
                    case 3:
                        op2.HP = 25;
                        op2.AC = -2;
                        break;
                    case 4:
                        op2.HP = 30;
                        op2.AC = -3;
                        break;
                    case 5:
                        op2.HP = 35;
                        op2.AC = -3;
                        op2.DMG_SHORT = 1;
                        op2.DMG_LONG = 1;
                        break;
                    case 6:
                        op2.HP = 40;
                        op2.AC = -3;
                        op2.DMG_SHORT = 2;
                        op2.DMG_LONG = 2;
                        break;
                    case 7:
                        op2.HP = 45;
                        op2.AC = -3;
                        op2.DMG_SHORT = 3;
                        op2.DMG_LONG = 3;
                        break;
                    case 8:
                        op2.HP = 50;
                        op2.AC = -3;
                        op2.DMG_SHORT = 4;
                        op2.DMG_LONG = 4;
                        break;
                }
            }
            if (name.contains("ルームティス レッド イアリング")) {
                int e = enchant;
                if (name.contains("祝福された")) {
                    e++;
                }
                switch (e) {
                    case 0:
                        op2.HP = 10;
                        break;
                    case 1:
                        op2.HP = 30;
                        break;
                    case 2:
                        op2.HP = 40;
                        break;
                    case 3:
                        op2.HP = 50;
                        op2.DR = 1;
                        break;
                    case 4:
                        op2.HP = 60;
                        op2.DR = 1;
                        break;
                    case 5:
                        op2.HP = 70;
                        op2.DR = 2;
                        op2.effect = "ダメージ軽減+20 2%,";
                        break;
                    case 6:
                        op2.HP = 80;
                        op2.DR = 3;
                        op2.effect = "ダメージ軽減+20 3%,";
                        break;
                    case 7:
                        op2.HP = 90;
                        op2.DR = 4;
                        op2.effect = "ダメージ軽減+20 4%,";
                        break;
                    case 8:
                        op2.HP = 100;
                        op2.DR = 5;
                        op2.effect = "ダメージ軽減+20 5%,";
                        break;
                    case 9:
                        op2.HP = 150;
                        op2.DR = 6;
                        op2.effect = "ダメージ軽減+20 6%,";
                        break;
                }
            }
            if (name.contains("ルームティス パープル イアリング")) {
                int e = enchant;
                if (name.contains("祝福された")) {
                    e++;
                }
                switch (e) {
                    case 0:
                        op2.MP = 5;
                        op2.MR = 2;
                        break;
                    case 1:
                        op2.MP = 15;
                        op2.MR = 5;
                        break;
                    case 2:
                        op2.MP = 20;
                        op2.MR = 6;
                        break;
                    case 3:
                        op2.MP = 35;
                        op2.MR = 7;
                        op2.SP = 1;
                        break;
                    case 4:
                        op2.MP = 40;
                        op2.MR = 8;
                        op2.SP = 1;
                        break;
                    case 5:
                        op2.MP = 55;
                        op2.MR = 9;
                        op2.SP = 2;
                        break;
                    case 6:
                        op2.MP = 60;
                        op2.MR = 10;
                        op2.SP = 2;
                        break;
                    case 7:
                        op2.MP = 75;
                        op2.MR = 12;
                        op2.SP = 3;
                        break;
                    case 8:
                        op2.MP = 100;
                        op2.MR = 15;
                        op2.SP = 3;
                        break;
                    case 9:
                        op2.MP = 130;
                        op2.MR = 20;
                        op2.SP = 4;
                        break;
                }
            }
            if (name.contains("ルームティス ブルー イアリング")) {
                int e = enchant;
                if (name.contains("祝福された")) {
                    e++;
                }
                switch (e) {
                    case 0:
                        op2.effect = "ポーション回復量 +2% +2,";
                        break;
                    case 1:
                        op2.effect = "ポーション回復量 +6% +6,";
                        break;
                    case 2:
                        op2.effect = "ポーション回復量 +8% +8,";
                        break;
                    case 3:
                        op2.effect = "ポーション回復量 +10% +10,";
                        break;
                    case 4:
                        op2.effect = "ポーション回復量 +12% +12,";
                        break;
                    case 5:
                        op2.AC = -1;
                        op2.effect = "ポーション回復量 +14% +14,";
                        break;
                    case 6:
                        op2.AC = -2;
                        op2.effect = "ポーション回復量 +16% +16,";
                        break;
                    case 7:
                        op2.AC = -2;
                        op2.effect = "ポーション回復量 +18% +18,";
                        break;
                    case 8:
                        op2.AC = -3;
                        op2.effect = "ポーション回復量 +20% +20,";
                        break;
                    case 9:
                        op2.AC = -4;
                        op2.effect = "ポーション回復量 +22% +22,";
                        break;
                }
            }
            if (name.contains("ルームティス ブラック イアリング")) {
                int e = enchant;
                if (name.contains("祝福された")) {
                    e++;
                }
                switch (e) {
                    case 0:
                        op2.AC = -1;
                        break;
                    case 1:
                        op2.AC = -2;
                        break;
                    case 2:
                        op2.AC = -3;
                        break;
                    case 3:
                        op2.AC = -4;
                        op2.DMG_SHORT = 1;
                        op2.DMG_LONG = 1;
                        break;
                    case 4:
                        op2.AC = -5;
                        op2.DMG_SHORT = 1;
                        op2.DMG_LONG = 1;
                        break;
                    case 5:
                        op2.AC = -6;
                        op2.DMG_SHORT = 2;
                        op2.DMG_LONG = 2;
                        op2.effect = "追加ダメージ +20 2%,";
                        break;
                    case 6:
                        op2.AC = -7;
                        op2.DMG_SHORT = 3;
                        op2.DMG_LONG = 3;
                        op2.effect = "追加ダメージ +20 3%,";
                        break;
                    case 7:
                        op2.AC = -8;
                        op2.DMG_SHORT = 4;
                        op2.DMG_LONG = 4;
                        op2.effect = "追加ダメージ +20 4%,";
                        break;
                    case 8:
                        op2.AC = -9;
                        op2.DMG_SHORT = 5;
                        op2.DMG_LONG = 5;
                        op2.effect = "追加ダメージ +20 5%,";
                        break;
                    case 9:
                        op2.AC = -10;
                        op2.DMG_SHORT = 6;
                        op2.DMG_LONG = 6;
                        op2.effect = "追加ダメージ +20 6%,";
                        break;
                }
            }
        } else {
            op2.AC += -enchant;
            op2.MR += enchant * mr_enchant;
        }
    }
}
*/
