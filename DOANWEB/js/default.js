$('.child-menu').on('click', '#btnHamberger_On', function () {
    document.getElementById("mySidenav").style.width = "50%";
    // hiển thị hover màu xám
    console.log(document.getElementsByClassName('navigation'))
    document.getElementsByClassName('navigation')[0].classList = 'navigation navigation-active'
    this.setAttribute('id','btnHamberger_Off')
  });
  
  $('.child-menu').on('click', '#btnHamberger_Off', function () {
    document.getElementById("mySidenav").style.width = "0";
    // trở lại trạng thái ban đầu
    document.getElementsByClassName('navigation')[0].classList = 'navigation '
    this.setAttribute('id','btnHamberger_On')
  });

$('.child-menu').on('click', '#btnHamberger_On', function () {
    document.getElementById("mySidenav").style.width = "50%";
    // hiển thị hover màu xám
    console.log(document.getElementsByClassName('navigation'))
    document.getElementsByClassName('navigation')[0].classList = 'navigation navigation-active'
    this.setAttribute('id','btnHamberger_Off')
  });
  
  $('.child-menu').on('click', '#btnHamberger_Off', function () {
    document.getElementById("mySidenav").style.width = "0";
    // trở lại trạng thái ban đầu
    document.getElementsByClassName('navigation')[0].classList = 'navigation '
    this.setAttribute('id','btnHamberger_On')
  });
  
  /*index*/ 
  $(document).ready(function(){
      $('[data-toggle="popover"]').popover();   
  });
  
  $('.btnsend').on('click',function(){
    alert('Phản hồi của bạn đã được gửi đi')
    document.getElementsByClassName('before_click')[0].style.display = 'none';
    document.getElementsByClassName('after_click')[0].style.display = 'block';
  
  });
  
  let page_show = 1
  let page_show_max = 2
  function 	showhide(index)
  {
    var array = [1,4,6];
    switch (index) {
      case 1:
     document.getElementsByClassName('highlights')[0].innerHTML =
     `
     <div class="row">
                          <div class="col-sm-12 col-md-4 col-4"> <img src="images/products/xe${array[index-1] + 0}.jpg" alt="khong co anh" class="img-fluid">
                          <a href="javascript:;">  <h3 style="text-align:center">New Focus</h3> </a>
                            <hr/>
                            <p style="text-align:center">Giá từ: 626,000,000VNĐ</p>
                          </div>
                          <div class="col-sm-12 col-md-4 col-4"> <img src="images/products/xe${array[index-1] + 1}.jpg" alt="khong co anh" class="img-fluid">
                          <a href="javascript:;">  <h3 style="text-align:center">Fiesta</h3></a>
                            <hr/>
                            <p style="text-align:center">Giá từ: 560,000,000VNĐ</p>
                          </div>
                          <div class="col-sm-12 col-md-4 col-4"><img src="images/products/xe${array[index-1] + 2}.jpg" alt="khong co anh" class="img-fluid"> 
                          <a href="javascript:;">  <h3 style="text-align:center">New Ranger</h3> </a>
                            <hr/>
                            <p  style="text-align:center">Giá từ: 619,000,000VNĐ</p>
                          </div>
                        </div>
     `
      console.log('1')
        break;
        case 2:
      console.log('2')
      document.getElementsByClassName('highlights')[0].innerHTML =
     `
     <div class="row">
                          <div class="col-sm-12 col-md-4 col-4"> <img src="images/products/xe${array[index-1] + 0}.jpg" alt="khong co anh" class="img-fluid">
                          <a href="javascript:;">  <h3 style="text-align:center">Ecosport</h3> </a>
                            <hr/>
                            <p style="text-align:center">Giá từ: 926,000,000VNĐ</p>
                          </div>
                          <div class="col-sm-12 col-md-4 col-4"> <img src="images/products/xe${array[index-1] + 1}.jpg" alt="khong co anh" class="img-fluid">
                          <a href="javascript:;">  <h3 style="text-align:center">Transit</h3></a>
                            <hr/>
                            <p style="text-align:center">Giá từ: 860,000,000VNĐ</p>
                          </div>
                          <div class="col-sm-12 col-md-4 col-4"><img src="images/products/xe${array[index-1] + 2}.jpg" alt="khong co anh" class="img-fluid"> 
                          <a href="javascript:;">  <h3 style="text-align:center">New Explorer</h3> </a>
                            <hr/>
                            <p  style="text-align:center">Giá từ: 419,000,000VNĐ</p>
                          </div>
                        </div>
     `
        break;
      default:
        break;
    }
   
  }
  
  function shownext(rotation)
  {
    if( rotation >0) // nếu dương
      {
          if(page_show < page_show_max) page_show++;
          else
      page_show = 1;	
      }
      else
      {
          if(page_show > 1 ) page_show--;
          else
      page_show = page_show_max;	
      }
      showhide(page_show);
  }

  /*News.html*/
  var x = document.getElementById('news_hide');
  if(x!=null)
  {x.style.display = 'none';

  }
    

    function btnNEWS_More()
    {
       var x = document.getElementById('news_hide');
       console.log(x.style.display)
       if (x.style.display === 'none') {
         x.style.display = 'block';
       } else {
        x.style.display = 'none';
       }
    }
/*Product_Details*/
function btnNhanBaoGia()
{

  alert("Đang xử lý yêu cầu . Xin đợi trong giây lát. Cảm ơn");
}

$('#img ').on('click', function () {
    var image = this.getElementsByTagName('img');
    var src = image[0].getAttribute('src');
    console.log(src);
    var img_show = document.getElementById('img-show').src =src ;
});


$('.nav-tabs li ').on('click', function () {
  var nav_tabs = document.getElementsByClassName('nav-tabs');
  console.log(nav_tabs);
  for (let index = 0; index < nav_tabs[0].childElementCount; index++) {
    var element = nav_tabs[0].children[index];
     element.classList =''
  }
  this.classList = 'active'
});

/*Products*/
$('.phantrang a ').on('click', function () {

    var phantrang = document.getElementsByClassName('phantrang');
    for (let index = 0; index < phantrang[0].childElementCount; index++) {
        phantrang[0].children[index].classList ="";
      
    }
    
        if (this.innerText === '1' || this.innerText === '2') {
          this.classList ="active";
        }
        
        
    });