function solution(spell, dic) {
    return dic.some(item => spell.length === item.length && spell.every(str => item.includes(str))) ? 1 : 2;
}
