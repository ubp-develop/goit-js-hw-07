const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
  const hCount = item.querySelector("h2").textContent;
  const ulCound = item.querySelectorAll("ul li").length;

  console.log(`\nCategory: ${hCount}`);
  console.log(`Elements: ${ulCound}`);
});
