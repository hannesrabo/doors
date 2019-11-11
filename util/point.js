import randgen from 'randgen'

const normalDistribution = (mu, sigma) => {
    var u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * sigma + mu;
}

const pointsNormal = (mu, sigma) => {
    var points = normalDistribution(mu, sigma)
    if (points < 0)
        return pointsNormal(mu, sigma)
    else
        return points
}

const pointsChi = (degreesOfFreedom) => {
    var points = randgen.rchisq(degreesOfFreedom)
    if (points < 0)
        return pointsChi(degreesOfFreedom)
    else
        return points
}
const UUID = () => {
    return Math.random().toString(36) + Math.random().toString(36);
}

export default { pointsNormal, pointsChi, UUID }
