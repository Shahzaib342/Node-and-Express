module.exports = {
    add: function(data, M) {
     return  M += data.num;
    },
    sub: function(data, M) {
        return M -= data.num;
    },
    multiply: function(data, M) {
        return M *= data.num;
    },
    divide: function(data, M) {
        return M/data.num;
    }
};