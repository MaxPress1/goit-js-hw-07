const categoriesItem = document.querySelectorAll('.item');

const allList = document.querySelectorAll('#categories');

allList.style.listStyleType = 'none';

// categoriesItem.style.backgroundColor = '#f6f6fe';


console.log(`Number of categories ${categoriesItem.length}`);


categoriesItem.forEach(categories => {
    const title = categories.querySelector('h2').textContent;
    const categoriesCount = categories.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${categoriesCount}`);
});