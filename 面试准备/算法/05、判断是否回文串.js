function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    console.log(str)
     str1 =str.split('').reverse().join('')
     console.log(str1)
    return (str == str1);
}