// //* task1

// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
//     ];
// function Voted(array) {
//         return array.reduce((acc, cur) => {
//             if (cur.voted) {
//                 return acc + 1;
//             } else {
//                 return acc;
//             }
//         }, 0);
        
//     }
//     console.log(`Ses verenlerin sayı: ${Voted(voters)}`);
// //*task2
// let wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//     ];
// function price(wishlist) {
//         return wishlist.reduce((totalPrice, item) => {
//         return totalPrice + item.price;
//     }, 0);

// }
// console.log(`Wishlistdeki butun itemlerin qiymeti: $${price(wishlist)}`);

// //* task 3
// const flw = function(str) {
//         let arrStr = str.split(' ');
//         let wordLength = 0;
//         let longestWord;
//         for (let i = 0; i < arrStr.length; i += 1) {
//             wordLength= arrStr[1].length;
//             if (arrStr[i].length > wordLength) {
//             longestWord= arrStr[i];
//             return longestWord;
//             }  
//         }
//     };
//     console.log(flw("My motto is if you want to win the lottery you have to make the money to buy a ticket."));


//*task4

// function cfl(str) {
//     const words= str.split(' '); 
//     let c=""
    
//     for (let i = 0; i < words.length; i++) {
        
//         c += " "+words[i][0].toUpperCase()+words[i].slice(1)
//     }
//     return c
// }
// const x= "what's your favorite scary movie?";
// console.log(cfl(x));






// // *task5

// function cut(str,n) {
//     const words= str.split(' '); 
//     let c=""
//     if (words.length <= n) {
//         n = words.length
//     }  
//     for (let i = 0; i < n; i++) {
//         c+=" "+words[i]
        
//     }
//     return c
// }
// const sentence= "what's your favorite scary movie?";
// console.log(cut(sentence,4));
