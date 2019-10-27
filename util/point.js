const normalDistribution = (mu, sigma) => {
    var x = Math.random()
    var res = (1 / (Math.sqrt(2 * Math.PI * Math.pow(sigma, 2)))) *
        Math.pow(Math.E, (- Math.pow(x - mu, 2) / (2 * Math.pow(sigma, 2))))

    return res
}

export default normalDistribution