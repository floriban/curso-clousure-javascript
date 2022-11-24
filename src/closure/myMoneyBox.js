// function moneyBox(coins){
//     let saveCoins = 0
//     saveCoins += coins

//     console.log(`MoneyBox: $${saveCoins}`)
// }

// moneyBox(16)
// moneyBox(10)

function moneyBox(){
    let saveCoins = 0

    function countCoins(coins){
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }

    return countCoins
}

const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(10)
myMoneyBox(40)

const moneyBoxAna = moneyBox()
moneyBoxAna(7)
moneyBoxAna(8)