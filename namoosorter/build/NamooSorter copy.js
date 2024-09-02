"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter = /** @class */ (function () {
    //유니온타입으로 타입 정의
    function NamooSorter(collection) {
        this.collection = collection;
    }
    NamooSorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // 문자열 정렬을 위해서
                // collection이 string 타입인지 타입가드 작성
                if (typeof this.collection === 'string') {
                    //여기는 유니온타입을 문자열 타입으로 한정해서 사용할 수 있음
                    if (this.collection[j].toLowerCase() >
                        this.collection[j + 1].toLowerCase()) {
                        var characters = this.collection.split('');
                        var temp = characters[j];
                        characters[j] = characters[j + 1];
                        characters[j + 1] = temp;
                        this.collection = characters.join('');
                    }
                }
                // if (typeof this.collection === 'number') {}은 작동X,
                // number타입이 아니라 배열이기 때문에 -> instanceof Array 로 배열인지 확인
                if (this.collection instanceof Array) {
                    // 숫자 오름차순 정렬
                    if (this.collection[j] > this.collection[j + 1]) {
                        // swap
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
        return this.collection;
    };
    return NamooSorter;
}());
exports.default = NamooSorter;
