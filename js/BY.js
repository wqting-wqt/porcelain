$(document).ready(function() {  
  $('.bimg').hover(function() {  
    $(this).css('transform', 'scale(1.25)'); // 放大图片  
  }, function() {  
    $(this).css('transform', 'scale(1)'); // 恢复原始大小  
  });  
});

$(document).ready(function() {
            var currentIndex = 0;
            var images = $('.slider img');
            var totalImages = images.length;

            function showImage(index) {
                images.removeClass('active');
                images.eq(index).addClass('active');
            }

            function nextImage() {
                currentIndex++;
                if (currentIndex >= totalImages) {
                    currentIndex = 0;
                }
                showImage(currentIndex);
            }

            function prevImage() {
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = totalImages - 1;
                }
                showImage(currentIndex);
            }

            $('.next').click(function() {
                nextImage();
            });

            $('.prev').click(function() {
                prevImage();
            });

            setInterval(function() {
                nextImage();
            }, 3000);
        });
$(document).ready(function() {  
        $(".tophead1").click(function() {  
            if ($(".all").is(":visible")) {  
                $(".all").hide();  
            } else {  
                $(".all").show();  
            }  
        });  
    });  
 
    $(document).ready(function() {  
        $(".midhead").click(function() { // 注意这里添加了缺失的闭合花括号 }  
            if ($(".all2").is(":visible")) {  
                $(".all2").hide();  
            } else {  
                $(".all2").show();  
            }  
        }); // 这里闭合了 function  
    });  


