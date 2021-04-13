
import hungerReducer from "../src/redux/hungerbarPoint"
import funReducer from "../src/redux/funbarPoint"

describe ("Testing hunger bar point reducer", () => {

    it('should return the initial state', () => {
        expect(hungerReducer(undefined, {})).toEqual(5)
    })

    it('should handle HUNGERBARINCREASE', () => {
        expect(hungerReducer(undefined, {type:"HUNGERBARINCREASE", data:2})).toEqual(7)
    })

    it('should handle HUNGERBARDECREASE', () => {
        expect(hungerReducer(undefined, {type:"HUNGERBARDECREASE", data:2})).toEqual(3)
    })
    it('should not go below 0', () => {
        expect(hungerReducer(3, {type:"HUNGERBARDECREASE", data:5})).toEqual(0)
    })
});

describe ("Testing fun bar point reducer", () => {

    it('should return the initial state', () => {
        expect(funReducer(undefined, {})).toEqual(5)
    })

    it('should handle FUNBARINCREASE', () => {
        expect(funReducer(undefined, {type:"FUNBARINCREASE", data:2})).toEqual(7)
    })

    it('should handle FUNBARDECREASE', () => {
        expect(funReducer(undefined, {type:"FUNBARDECREASE", data:2})).toEqual(3)
    })

    it('should not go below 0', () => {
        expect(funReducer(3, {type:"FUNBARDECREASE", data:5})).toEqual(0)
    })
});
