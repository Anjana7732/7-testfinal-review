/* eslint-disable no-unused-vars */
class Vehicle {
    constructor([wheelTotal, energySource, manufacturer]){
        this.wheelTotal =wheelTotal
        this.energySource = energySource
        this.manufacturer = manufacturer
        this.isOn = false
    }
    getSpec(key){
        return this.hasOwnProperty(key) ? this[key] : undefined;
    }

}

class Tesla extends Vehicle {
    constructor([MPC, model, chargePercentage, minutesToCharge, vehicleArgs]) {
        super(...vehicleArgs)
        this.milesPerCharge = MPC
        this.model = model
        this.chargePercentage = chargePercentage;
        this.minutesToCharge = minutesToCharge
    }
    minutesToFullCharge(currentCharge){
        const remaining = 100 -currentCharge;
        const minutesLeft = remaining/100 * this.minutesToCharge;
        return `${minutesLeft} minutes until the charge is full!`
    }
}