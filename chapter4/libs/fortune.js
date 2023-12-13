const fortunes = [
    'first fortune',
    'second fortune',
    'third fortune',
    'fourth fortune',
]

exports.getFortune = () => {
    return fortunes[Math.floor(Math.random() * fortunes.length)]
}

