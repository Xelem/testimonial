const customerName = document.querySelector('#customer-name');
const customerText = document.querySelector('#customer-text');
const customerImage = document.querySelector('#customer-img');
const buttons = document.querySelectorAll('.btn');
let index = 0;

customerDetails = [
    {
        name: 'John',
        image: `./img/customer-${index}.jpg`,
        text: ' Hello, I am John. I am glad that I stuck with Lanepact. They are the best when it comes to delivering software products.'
    },
    {
        name: 'Gift',
        image: `./img/customer-${index}.jpg`,
        text: 'Hello, I am Gift. I am glad that I stuck with Lanepact. They are the best when it comes to delivering software products.'
    },
    {
        name: 'Mike',
        image: `./img/customer-${index}.jpg`,
        text: ' Hello, I am Mike. I am glad that I stuck with Lanepact. They are the best when it comes to delivering software products.'
    },
    {
        name: 'Favour',
        image: `./img/customer-${index}.jpg`,
        text: 'Hello, I am Favour. I am glad that I stuck with Lanepact. They are the best when it comes to delivering software products.'
    },
    {
        name: 'Precious',
        image: `./img/customer-${index}.jpg`,
        text: 'Hello, I am Precious. I am glad that I stuck with Lanepact. They are the best when it comes to delivering software products.'
    }
];

buttons.forEach(function(button) {
    button.addEventListener('click', (changeImg) => {
        if (button.classList.contains('prevBtn')){
            index --;
            if (index < 0){
                index = customerDetails.length -1
            }
            customerName.innerHTML = customerDetails[index].name;
            customerText.innerHTML = customerDetails[index].text;
            customerImage.src = `./img/customer-${index}.jpg`;
            console.log(customerDetails.length)
        }
        if (button.classList.contains('nextBtn')){
            index ++;
            if (index > customerDetails.length -1){
                index = 0
            }
            customerName.innerHTML = customerDetails[index].name;
            customerText.innerHTML = customerDetails[index].text;
            customerImage.src = `./img/customer-${index}.jpg`;
            console.log(customerDetails.length)
        }
    })
})