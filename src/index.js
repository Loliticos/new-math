module.exports = class BetterMath {
    static sum (...props)  {
        return props.reduce((sum, item) => sum + item).toString()
    }

    static min (...argument) {
        return argument.sort((firstValue, secondValue) => secondValue - firstValue).slice(-1).toString()
    }

    static max (...argument) {
        return argument.sort((firstValue, secondValue) => firstValue + secondValue).shift().toString()
    }

    static random (min, max) {

        if(!min || !max) {
            return BetterMath.random(1, 100)
        }

        return min + Math.random() * (max - min);
    }

    static ceil (number) {
        const toCeil = number + 1

        return toCeil.toFixed(0)
    }

    static floor (number) {
        const toFloor = number - 1

        return toFloor.toFixed(0)
    }
}
