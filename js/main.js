new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
	// 네비게이터를 보임/숨김
    navigation:true,
	// 네비게이터 위치
	navigationPosition: 'right',
	// 하이퍼링크
	anchors:['num0', 'num1', 'num2','num3','num4'],

	afterLoad: function(origin, destination, direction){
		//  destination 변수는 해당 section에 들어왔을때
		//  origin 매개변수는 해당 section 을 벗어났을때
        var origin = this;
		console.log(origin)
		// console.log(`원래섹션:${old_sec} 다음섹션:${new_sec} 방향:${direction} `)
        //using index
		// 해당 섹션에 들어보면
        if(destination.index == 1){
           sec_in()
        }
		// 해당 섹션이 벗어날때
		if(origin.index == 1 ){
			sec_out()
		}

    }

});

function sec_in(){
	// alert("나의 소개페이지 오신것을 환영합니다")
	var tl = anime.timeline({
		easing: 'linear',
		duration: 500,
	  });
	  tl.add({
	  targets: '.g1',
	  height: '90%',
	  delay:1000,
	})
	.add({
		targets: '.g2',
		height: '85%',
	  })

}
function sec_out(){
	// alert("나의 소개를 잘 보셔나요")
	anime({
		targets:'.gagein',
		height:0
	})
}

// 1. 문서객체 선택
let btn = document.querySelector('.btn_menu')
console.log(btn)
let nav = document.querySelector('nav')
console.log(nav)

//  이벤트 발생
btn.addEventListener("click",function(){
    btn.classList.toggle('on')
	nav.classList.toggle('on')
})
// btn.addEventListener("click",function(){
//     nav.classList.toggle('on')
// })


// animation

// 클릭이벤트
$(function(){
	// $('.tab_content2').hide()
	$('.tab_btn li').on('click',function(){
		$('.tab_btn li').removeClass('on'); 
		$(this).addClass('on');
		$('.tab_content ul').eq($(this).index()).fadeIn().siblings('.tab_content ul').hide();
	});	
});