const RADIAN = 0.017453;
const RIGHT_ANGLE = 90;

const HYPOTENUSE = "hypotenuse";
const ANGLE = "angle";
const LEG = "leg";
const OPPOSITE_ANGLE = "opposite angle";
const ADJACENT_ANGLE = "adjacent angle";

Math.arctan = function (x) {
    return Math.atan(x) * 180 / Math.PI;
}

class TaskTriangle {
    constructor() {
        if (this.constructor === TaskTriangle) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    calculate(value1, value2) {
    }

    /*
    * Method validates types of tasks;
    * returns 0, 1, -1 if types are correct
    * and in normal order, types are correct
    * need to be changed, types are not correct
    * respectively.Be caution while changing
    * method contract because of order of
    * calculate method.
    * */
    validateTask(type1, type2) {
    }
}

class TwoLegs extends TaskTriangle {
    calculate(value1, value2) {
        let result = {};
        result.a = value1;
        result.b = value2;
        result.c = Math.sqrt(Math.pow(result.a, 2) + Math.pow(result.b, 2));
        result.alpha = Math.arctan(result.a / result.b);
        result.beta = Math.arctan(result.b / result.a);
        return result;
    }

    validateTask(type1, type2) {
        return type1 === LEG && type1 === type2 ? 0 : -1;
    }
}

class LegHypotenuse extends TaskTriangle {
    calculate(value1, value2) {
        if (value1 >= value2) {
            throw new Error("Hypotenuse must be greater than leg!");
        }
        let result = {};
        result.b = value1;
        result.c = value2;
        result.a = Math.sqrt(Math.pow(result.c, 2) - Math.pow(result.b, 2));
        console.log(result.a + " " + result.b);
        result.alpha = Math.arctan(result.a / result.b);
        result.beta = Math.arctan(result.b / result.a);
        return result;
    }

    validateTask(type1, type2) {
        return type1 === LEG && type2 === HYPOTENUSE ? 0 : type2 === LEG && type1 === HYPOTENUSE ? 1 : -1;
    }
}

class LegAdjacentAngle extends TaskTriangle {
    calculate(value1, value2) {
        if (value2 >= RIGHT_ANGLE) {
            throw new Error("Angle must be acute!");
        }
        let result = {};
        result.b = value1;
        result.alpha = value2;
        result.c = result.b / Math.cos(result.alpha * RADIAN);
        result.beta = RIGHT_ANGLE - result.alpha;
        result.a = result.b * Math.tan(result.alpha * RADIAN);
        return result;
    }

    validateTask(type1, type2) {
        return type1 === LEG && type2 === ADJACENT_ANGLE ? 0 : type2 === LEG && type1 === ADJACENT_ANGLE ? 1 : -1;
    }
}

class LegOppositeAngle extends TaskTriangle {
    calculate(value1, value2) {
        if (value2 >= RIGHT_ANGLE) {
            throw new Error("Angle must be acute!");
        }
        let result = {};
        result.b = value1;
        result.beta = value2;
        result.c = result.b / Math.sin(result.beta * RADIAN);
        result.alpha = RIGHT_ANGLE - result.beta;
        result.a = result.b * Math.tan(result.alpha * RADIAN);
        return result;
    }

    validateTask(type1, type2) {
        return type1 === LEG && type2 === OPPOSITE_ANGLE ? 0 : type2 === LEG && type1 === OPPOSITE_ANGLE ? 1 : -1;
    }
}

class AngleHypotenuse extends TaskTriangle {
    calculate(value1, value2) {
        if (value1 => RIGHT_ANGLE) {
            throw new Error("Angle must be acute!");
        }
        let result = {};
        result.c = value2;
        result.beta = value1;
        result.alpha = RIGHT_ANGLE - result.beta;
        result.a = value2 * Math.sin(result.alpha * RADIAN);
        result.b = value2 * Math.sin(result.beta * RADIAN);
        return result;
    }

    validateTask(type1, type2) {
        return type1 === ANGLE && type2 === HYPOTENUSE ? 0 : type2 === ANGLE && type1 === HYPOTENUSE ? 1 : -1;
    }
}

const solvers = [new TwoLegs(), new LegHypotenuse(), new LegAdjacentAngle(), new LegOppositeAngle(), new AngleHypotenuse()];

const illegalArguments = "Please, pass correct arguments";

function triangle(value1, type1, value2, type2) {
    if (triangle.arguments.length !== 4 || value1 <= 0 || value2 <= 0) {
        console.log(illegalArguments);
        return "failed";
    }

    for (let i = 0; i < solvers.length; i++) {
        let validationResult = solvers[i].validateTask(type1, type2);
        if (validationResult === -1) {
            continue;
        }
        try {
            let result = validationResult === 0
                ? solvers[i].calculate(value1, value2)
                : solvers[i].calculate(value2, value1);
            console.log(result);
            return "success";
        } catch (e) {
            console.log(e.message);
            return "failed";
        }
    }
}

console.log()