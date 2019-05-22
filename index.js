module.exports = class realMath {

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
            return realMath.random(1, 100)
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

    static sub (...argument) {
        return argument.reduce((firstValue, secondValue) => firstValue - secondValue).toString()
    }

    static average (...argument) {
        const medium =  argument.reduce((firstValue, secondValue) => firstValue + secondValue).toString()

        const number = argument.length

        return medium / number
    }

    static percentage(percentage = 35, value = 500) {
        return (percentage * value) / 100
    }

    static imc(height = 1.70, weight = 70, reduce = false) {
        /*Por exemplo, uma pessoa com 1,70 m e 70 kg fará o seguinte cálculo:

        Altura multiplicada por ela mesma: 1,70 x 1,70 = 2,89
        Peso dividido pelo quadrado da altura: 70 / 2,89 = 24,22
        */  

        const newHeight = height * height

        const value = weight / newHeight

        if(reduce === false) {
            return value
        } else if(reduce === true) {
            return value.toFixed(2)
        }
    }

}