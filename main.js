const questions = document.querySelectorAll(".accordion__question");
const faqCard = document.querySelector(".faq__card");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const height = question.nextElementSibling.scrollHeight;
    if (question.parentElement.classList.contains("faq__active")) {
      question.parentElement.classList.remove("faq__active");
      question.nextElementSibling.style.maxHeight = "0px";
      return;
    }
    questions.forEach((q) => {
      q.parentElement.classList.remove("faq__active");
      q.nextElementSibling.style.maxHeight = "0px";
    });
    question.parentElement.classList.add("faq__active");
    question.nextElementSibling.style.maxHeight = height + "px";
  });
});
