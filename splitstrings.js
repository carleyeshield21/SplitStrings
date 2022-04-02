function solution(str) {
    // We set the variable for the length of the given string
    strlength = str.length

    // We set the array arr so we can push the elements based on our condition
    arr = []

    // We use the for loop to iterate through the length of the string, and we set the first index to be 1 because we are after the even values, then we increment by 2 again because we are after the even numbers
    for (i = 1; i <= strlength - 1; i = i + 2) {

        // We set the condition here using the modulus division to find out if the length of the string is odd, and if it is, we set a new string called str1 and concat the underscore for the last pair
        if (strlength % 2 != 0) {
            str1 = str.concat('_')

            // We set another for loop in the if statement beacuse we are looping in the odd numbered string with the addition of the underscore character, then push the concatenated element to the array arr. We use the break so that it will stop the execution of code when it is already odd numered
            for (j = 1; j <= str1.length - 1; j = j + 2) {
                odd = str1[j - 1] + str1[j]
                arr.push(odd)
            }
            break

        }

        // These codes are for the even numbered string length, we use the indeces (i-1) because we must output the string by order when pairing
        even = str[i - 1] + str[i]
        arr.push(even)

    }
    console.log(arr)
}
solution('abc')
solution('abcdef')
solution('abcdefg')