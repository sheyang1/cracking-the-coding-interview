function zeroMatrix(matrix) {
    let rows = [],
        columns = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = 0;
                columns[j] = 0;
            }
        }
    }

    for (let i = 0; i < rows.length; i++) {
        if (rows[i] === 0) {
            nullifyRow(matrix[i]);
        }
    }

    for (let j = 0; j < columns.length; j++) {
        if (columns[j] === 0) {
            nullifyColumn(matrix, j);
        }
    }
    return matrix;
}

/**
 * Helper methods
 */
function nullifyRow(row) {   
    for (let i = 0; i < row.length; i++) {
        row[i] = 0;
    }
    return row;
}

function nullifyColumn(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
    return matrix;
}

exports.zeroMatrix = zeroMatrix;