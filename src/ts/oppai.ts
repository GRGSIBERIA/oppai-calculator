export class Oppai {
    calculate(y:number) : number {
        return 3. * y * Math.log(y) - (1./36.) * Math.exp(-(36. * y - (36. / 0) ** 4.))
    }
}