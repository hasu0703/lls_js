var Buki = function(){
    this.initialize = function(){
        this.reset();
        this.equip = "";
        this.max_enchant = 0;

        // キーリンク用
        this.x;
        this.y;
        this.z;

    }

    this.reset = function(){
        this.small = 0;
        this.big = 0;
        this.name = "";
        this.type = "";
        this.critical_rate = 0;// クロウ クリティカル
        this.double_hit_rate = 0;// デュアルブレード ダブルヒット
        this.week_point_exposure = 0;// チェーンソード 弱点露出
        this.two_hands = false;
        
        this.material = "";
        this.op = new BUFF();
        this.op2 = new BUFF();
        this.enchant = 0;
        this.magic_enchant = 0;
        
        this.arrow_name = "";
        this.arrow_material = "";
        this.arrow_type = "";
        this.arrow_small = 0;
        this.arrow_big = 0;
        this.safety = 0;
        this.element_enchant = false;

        // 魔法武器用
        this.magic_name = "";
        this.magic_motion = false;
        this.magic_rate = 0;
        this.magic_rate_plus = 0;
        this.magic_element = "";
        this.magic_power = 0;
        this.magic_delay = 0;
    
        this.hit_stun = 0;
    }

    this.load = function(reader){
        this.reset();
        reader = sample_klk;
        if (reader == null) {
            return;
        }

        if (reader.small != null) {
            this.small = reader.small;
        }
        if (reader.big != null) {
            this.big = reader.big;
        }

        if (reader.type != null) {
            this.type = reader.type;
        }

        if (reader.ダメージダイス != null) {
            dice = reader.ダメージダイス;
            xyz = dice.split(/d|\+/);
            if(xyz[0]==null){this.x=0;}else{this.x = xyz[0];};
            if(xyz[1]==null){this.y=0;}else{this.y = xyz[1];};
            if(xyz[2]==null){this.z=0;}else{this.z = xyz[2];};
        }

        if(reader.equip != null){
         this.equip = reader.equip;   
        }
        if(reader.name != null){
            this.name = reader.name;   
        }     

        if(reader.クリティカル != null){
            this.critical_rate = reader.クリティカル;   
        }
        if(reader.ダブルヒット != null){
            this.double_hit_rate = reader.ダブルヒット;   
        }  
        if(reader.安全 != null){
            this.safety = reader.安全;   
        }     
    
        if(reader.強化限界 != null){
            this.max_enchant = reader.強化限界;   
        }   
    
        if(reader.材質 != null){
            this.material = reader.材質;   
        }  

        if(reader.両手武器 != null){
            this.two_hands = reader.両手武器;   
        }    

        if(reader.属性強化 != null){
            this.element_enchant = reader.属性強化;   
        }     

        if(reader.魔法ダメージ != null){
            this.magic_power = reader.魔法ダメージ;   
        }     

        if(reader.魔法発動率 != null){
            this.magic_rate = reader.魔法発動率;   
        }   

        if(reader.魔法モーション != null){
            this.magic_motion = reader.魔法モーション;   
        }   

        if(reader.魔法属性 != null){
            this.magic_element = reader.魔法属性;   
        }   
 
        if(reader.魔法発動率強化 != null){
            this.magic_rate_plus = reader.魔法発動率強化;   
        } 

        if(reader.魔法 != null){
            this.magic_name = reader.魔法;   
        } 

        if(reader.魔法ディレイ != null){
            this.magic_delay = reader.魔法ディレイ;   
        } 

        if(reader.弱点露出 != null){
            this.week_point_exposure = reader.弱点露出;   
        }       

        if(reader.スタン成功 != null){
            this.hit_stun = reader.スタン成功;   
        }   
    }

    this.loadArrow = function(reader){
        if(reader.small != null){
            this.arrow_small = reader.small;   
        }   
        if(reader.big != null){
            this.arrow_big = reader.big;   
        } 
        if(reader.name != null){
            this.arrow_name = reader.name;   
        } 
        if(reader.材質 != null){
            this.arrow_material = reader.材質;   
        } 
    }

    this.initialize();
}