
const testData = [
  { name: "Джонни Сильверхенд", phone: "+79985674534", email: "johny@gmail.com", product: "course-js" },
  { name: "Геральт Ривийский", phone: "+79965889564", email: "witcher21@gmail.com", product: "course-js" },
  { name: "Лионель Месси", phone: "+79231126732", email: "goatofworld@gmail.com", product: "course-vue" },
  { name: "Дмитрий Порубов", phone: "+79998670349", email: "fatherofmetall@gmail.com", product: "course-wordpress" },
  { name: "Александр Растич", phone: "+79185682260", email: "yourfriend@gmail.com", product: "course-php" },
  { name: "Альберт Эйнштейн", phone: "+79901273654", email: "sienceofsoul@gmail.com", product: "course-vue" },
  { name: "Иосиф Бродский", phone: "+79005354825", email: "beautifullines@gmail.com", product: "course-html" },
  { name: "Григорий Перельман", phone: "+79544323141", email: "boundlessgenius@gmail.com", product: "course-php" },
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

export default function getRandomData() {
  const index = getRandomIndex(testData.length);
  return testData[index];
}
