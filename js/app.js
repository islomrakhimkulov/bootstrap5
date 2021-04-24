const companySlider = new Swiper('.company-slider',{
  simulateTouch:false,
  slidesPerView:5,
  autoplay:true,
  breakpoints:{
    575:{
      slidesPerView:2
    },
    767:{
       slidesPerView:3
    },
    991:{
       slidesPerView:4
    },
  }
});

const feedbackSlider = new Swiper('.feedback-slider',{
  navigation: {
   prevEl: '.feedback-nav .feedback-prev',
   nextEl: '.feedback-nav .feedback-next',
}
});
