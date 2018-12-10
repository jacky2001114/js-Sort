function bbsort(array, objectProp, method) {

    if (!method && objectProp === -1) {

        method = objectProp;
        objectProp = undefined;
    }

    //check param is array
    var isArray = Array.isArray(array)
    if (!isArray) {
        console.error('BBSort Error : You are not sorting a array')
        return array

    } else {
        if (objectProp === undefined) {
            if (method === undefined) {

                for (var i = 0; i < array.length - 1; i++) {

                    for (var j = 0; j < array.length - 1 - i; j++) {

                        if (array[j] > array[j + 1]) {

                            var temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;

                        }

                    }

                }
            } else if (method === -1) {

                for (var i = 0; i < array.length - 1; i++) {

                    for (var j = 0; j < array.length - 1 - i; j++) {

                        if (array[j + 1] > array[j]) {

                            var temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;

                        }

                    }

                }

            }
            //3 params
        } else {

            if (method === undefined) {
                for (var i = 0; i < array.length - 1; i++) {

                    for (var j = 0; j < array.length - 1 - i; j++) {

                        if (array[j][objectProp] > array[j + 1][objectProp]) {

                            var temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;

                        }

                    }

                }
            } else if (method === -1) {
                for (var i = 0; i < array.length - 1; i++) {

                    for (var j = 0; j < array.length - 1 - i; j++) {

                        if (array[j + 1][objectProp] > array[j][objectProp]) {

                            var temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;

                        }

                    }

                }
            }

        }
        return array;
    }
}
