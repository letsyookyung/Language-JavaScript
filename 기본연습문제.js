'use strict';

/** 구구단 생성 */

// var number = 1
// // var i = 0
//
// while (number <= 9) {
//     console.log(`----${number}단----`);
//     for (var i = 0; i<10  ; i++){
//         console.log(`${number} x ${i} = ${number*i}`);
//     }
//     number++;
//
// }


/** 크리스마스 트리 만들기 */
let totalSpace = 50;
let newStartTreeSize = 1;
let newEndTreeSize = 5;
let treeLength = 1;
let startTreeSize;
let endTreeSize;

while (treeLength <= 4) {

    startTreeSize = newStartTreeSize;
    endTreeSize = newEndTreeSize;
    // console.log("start :",startTreeSize);
    // console.log("end :", endTreeSize)

    while (startTreeSize <= endTreeSize)  {
        var space = " "
        var tree = "*"
        if (startTreeSize % 2 == 1) {
            // console.log(startTreeSize)
            if (totalSpace <= startTreeSize) {
                break;
            }
            let spaceSize = (totalSpace - startTreeSize) / 2;
            let treeSize = startTreeSize;
            if (startTreeSize==1) {
                tree = "🌟"
            }
            space = space.repeat(spaceSize);
            tree = tree.repeat(treeSize);
            console.log(space, tree);
        }
        startTreeSize += 1;
    }
    newStartTreeSize += 2 ;
    newEndTreeSize += 4;
    treeLength++;
    // console.log("-------------")
}

// console.log(newEndTreeSize/2)
space = " ".repeat(newEndTreeSize+2$);
tree = "|".repeat(3);
console.log(space, tree);
console.log(space, tree);
console.log(space, tree);


/** 복리 계산 */