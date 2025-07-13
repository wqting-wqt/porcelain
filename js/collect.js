	$(document).ready(function() {  
  $('.zimage').hover(function() {  
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
  
   $(document).ready(function(){  
  // 监听"基本信息"的点击事件  
  $(".tophead1").click(function(){  
    // 判断是否已经显示，如果已经显示则隐藏，否则显示  
    if($(".all").is(":visible")){  
      $(".all").hide();  
    }else{  
      $(".all").show();  
    }  
  });  
});

   $(document).ready(function(){  
  // 监听"基本信息"的点击事件  
  $(".midhead").click(function(){  
    // 判断是否已经显示，如果已经显示则隐藏，否则显示  
    if($(".all2").is(":visible")){  
      $(".all2").hide();  
    }else{  
      $(".all2").show();  
    }  
  });  
});