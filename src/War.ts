import { Saxon } from "./Saxon"
import { Viking } from "./Viking"

export class War { 
    vikingArmy: Viking[] = []
    saxonArmy: Saxon[] = []

    constructor(){ 
    }        
    
    addViking(viking: Viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon: Saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let viking = this.vikingArmy[0]
        let saxon = this.saxonArmy[0]

        saxon.receiveDamage(viking.attack())

        this.saxonArmy.pop()
        
        return `A Saxon has died in combat`
    }

    saxonAttack(){
        let viking = this.vikingArmy[0]
        let saxon = this.saxonArmy[0]

        viking.receiveDamage(saxon.attack())

        if(viking.health <= 0){
            this.vikingArmy.pop()
        }
        
        return `${viking.name} has received ${saxon.strength} points of damage`
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }
    }
}