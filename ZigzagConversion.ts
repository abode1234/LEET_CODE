//zigzag conversion


// s = "PAYPALISHIRING",  numRows = 3

// P   A   H   N
// A P L S I I G
// Y   I   R


//function convert(s: string, numRows: number): string {
//    if (numRows === 1 || numRows >= s.length) {
//        return s;
//    }
//
//    const rows: string[] = new Array(Math.min(numRows, s.length)).fill("");
//
//    let curRow = 0;
//    let goingDown = false;
//
//    for (let i = 0; i < s.length; i++) {
//        rows[curRow] += s[i];
//        if (curRow === 0 || curRow === numRows - 1) {
//            goingDown = !goingDown;
//        }
//        curRow += goingDown ? 1 : -1;
//    }
//
//    return rows.join("");
//}
//
//const result = convert("PAYPALISHIRING", 3);
//console.log(result);

//try tow

// function convert(s: string, numRows: number): string {
//
//     if (numRows ===1 || numRows >= s.length){
//         return s;
//     }
//        const rows: string[] = new Array(Math.min(numRows, s.length)).fill("")
//        let curRow = 0
//        let goingDown = false
//
//        for(let i= 0 ; i < s.length; i++) {
//
//            rows[curRow] += s[i];
//            goingDown = !goingDown;
//        }
//        curRow += goingDown ? 1 : -1;
//        return rows.join("");
// }
//
// const result = convert("PAYPALISHIRING", 3);
// console.log(result);


function convert(s: string, numRows:number): string {
    if(numRows === 1 || numRows >= s.length){

        return s;
    }

    const rows: string [] = new Array(Math.min(numRows, s.length)).fill("");

        //position of the current row
    let curRow = 0;

    //true if going down , false if going up
    let goingDown = false;

    // loop to traverse the string
    for(let i=0; i < s.length; i++){

        rows[curRow] += s[i];
        if(curRow === 0 || curRow === numRows - 1){
            goingDown = !goingDown;
        } if (goingDown){
            curRow++;
        } else{
            curRow--;
        }

    }

    for (let i = 1; i < rows.length; i++){
        rows[0] += rows[i];
    }

    return rows[0];
}




