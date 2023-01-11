//adding two 2D matrixes
const A = [ [1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3],
[4, 4, 4, 4]];

const B = [ [1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3],
[4, 4, 4, 4]];

let N = 4;
function add(A, B,C){
    for(var a = 0;a < N;a++){
        for(var b = 0;b < N;b++){
            C[a][b] = A[a][b] + B[a][b];
            
        }
    }
    console.log(C)
}

const C = new Array(N);
for(var k = 0;k<N;k++){
    C[k] = new Array(N);
}
//console.log(C)

// add(A,B,C)

//add diagonal elements of a matrix
function addDiagonal(A){
    var num = 0;
    for(var i = 0;i<N;i++){
        for(var j = 0;j<N;j++){
            if(i === j){
                //console.log(A[i][j])
                num += A[i][j]
                //console.log(num)
                break;
            }
        }
    }
    console.log(num)
}

addDiagonal(A)
