// ============================================================================
// 
// common.js
// 
// 汎用的なクラスの定義を記述したファイルです。
// このファイルには、以下のクラスが含まれます。
// 
// ・Pointクラス
// 
// ============================================================================

// - point --------------------------------------------------------------------
function Point() {
    this.x = 0;
    this.y = 0;
}

Point.prototype.distance = function (p) {
    var q = new Point();
    q.x = p.x - this.x;
    q.y = p.y - this.y;
    return q;
};

Point.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Point.prototype.normalize = function () {
    var i = this.length();
    if (i > 0) {
        var j = 1 / i;
        this.x *= j;
        this.y *= j;
    }
};



