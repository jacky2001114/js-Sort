# Javscript different sort way
1.  bubbleSort
2.  shffleSort

#   BubbleSort
## Usage

```javascript

    bbsort([array],method)

    bbsort([1,546,789,2,4])
    //return [1, 2, 4, 546, 789]

    bbsort([1,546,789,2,4],-1)
    //return [789, 546, 4, 2, 1]
```
bubble sorted by Object Property


```javascript

    bbsort([array object],object Property,method)

    bbsort([{name: "banana", price: 100},
            {name: "apple", price: 50},
            {name: "iphoneX", price: 10000}]
            , 'price')

     /* return 
     [{name: "apple", price: 50},    
     {name: "banana", price: 100},
     {name: "iphoneX", price: 10000}]
     */

    bbsort([{name: "banana", price: 100},
            {name: "apple", price: 50},
            {name: "iphoneX", price: 10000}]
            ,'price',-1)

    /* return
    [{name: "iphoneX", price: 10000},
    {name: "banana", price: 100},
    {name: "apple", price: 50}]
    /*
```
# ShuffleSort
##  Usage
```javascript
    shufflesort([10000, 50, 100])
    /* return
    [50, 10000, 100]
    */
   // won't return the param array 
```



