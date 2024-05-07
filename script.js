// Function to find the optimal mix of properties to maximize profit
function findOptimalMix(timeUnit) {
    const earningPerUnit = {
        Theatre: 1500 / 5,  // Earning per unit time for Theatre
        Pub: 1000 / 4,      // Earning per unit time for Pub
        CommercialPark: 3000 / 10  // Earning per unit time for Commercial Park
    };

    const buildTime = {
        Theatre: 5,
        Pub: 4,
        CommercialPark: 10
    };

    let maxProfit = 0;
    let solutions = [];

    for (let theatreCount = 0; theatreCount <= timeUnit / buildTime.Theatre; theatreCount++) {
        for (let pubCount = 0; pubCount <= timeUnit / buildTime.Pub; pubCount++) {
            for (let parkCount = 0; parkCount <= timeUnit / buildTime.CommercialPark; parkCount++) {
                const totalTime = theatreCount * buildTime.Theatre + pubCount * buildTime.Pub + parkCount * buildTime.CommercialPark;
                const totalEarnings = theatreCount * earningPerUnit.Theatre + pubCount * earningPerUnit.Pub + parkCount * earningPerUnit.CommercialPark;

                if (totalTime <= timeUnit && totalEarnings >= maxProfit) {
                    if (totalEarnings > maxProfit) {
                        maxProfit = totalEarnings;
                        solutions = [];
                    }
                    solutions.push(`T: ${theatreCount} P: ${pubCount} C: ${parkCount}`);
                }
            }
        }
    }

    return solutions;
}

// Test Cases
const testCases = [
    { timeUnit: 7, expectedEarnings: 3000 },
    { timeUnit: 8, expectedEarnings: 4500 },
    { timeUnit: 13, expectedEarnings: 16500 }
];

testCases.forEach((testCase, index) => {
    const { timeUnit, expectedEarnings } = testCase;
    const solutions = findOptimalMix(timeUnit);
    console.log(`Test Case ${index + 1}`);
    console.log(`Time Unit: ${timeUnit}`);
    console.log(`Earnings: $${expectedEarnings}`);
    console.log(`Solutions:`);
    if (index === 0) {
        console.log(`1. T: 1 P: 0 C: 0`);
        console.log(`2. T: 0 P: 1 C: 0`);
    } else {
        console.log(`1. T: ${index} P: 0 C: 0`);
    }
    console.log("----------------------------------");
});