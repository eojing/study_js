	/*
		알고리즘
		
		1. 썸네일(a) 에 대한 클릭이벤트 구문 작성
		2. a 태그의 기본기능 작동금지
		3. 이번에 클릭한 요소의 href 속성값을 가져온다.
		4. p의 배경이미지를 변경한다.
	*/

	const $screen = document.querySelector('.screen');
	const $thmbsTop = document.querySelectorAll('.thmbs>.top>li>a');
	const $thmbsMid = document.querySelectorAll('.thmbs>.mid>li>a');
	const $thmbsBottom = document.querySelectorAll('.thmbs>.bottom>li>a');

	$thmbsTop[0].addEventListener('click',function(evt){
	evt.preventDefault();

	const imgSrc = this.getAttribute('href');
	$screen.setAttribute('src',imgSrc);

	});
	

	$thmbsTop[1].addEventListener('click',function(evt){
		evt.preventDefault();
	
		const imgSrc = this.getAttribute('href');
		$screen.setAttribute('src',imgSrc);
	
		});
		
		$thmbsTop[2].addEventListener('click',function(evt){
			evt.preventDefault();
		
			const imgSrc = this.getAttribute('href');
			$screen.setAttribute('src',imgSrc);
		
			});

$thmbsMid[0].addEventListener('click',function(evt){
	evt.preventDefault();

	const imgSrc = this.getAttribute('href');
	$screen.setAttribute('src',imgSrc);
});
			

$thmbsMid[1].addEventListener('click',function(evt){
evt.preventDefault();

const imgSrc = this.getAttribute('href');
$screen.setAttribute('src',imgSrc);
});

$thmbsMid[2].addEventListener('click',function(evt){
	evt.preventDefault();
	
	const imgSrc = this.getAttribute('href');
	$screen.setAttribute('src',imgSrc);
	});

	$thmbsBottom[0].addEventListener('click',function(evt){
		evt.preventDefault();
		
		const imgSrc = this.getAttribute('href');
		$screen.setAttribute('src',imgSrc);
		});

		$thmbsBottom[1].addEventListener('click',function(evt){
			evt.preventDefault();
			
			const imgSrc = this.getAttribute('href');
			$screen.setAttribute('src',imgSrc);
			});

			$thmbsBottom[2].addEventListener('click',function(evt){
				evt.preventDefault();
				
				const imgSrc = this.getAttribute('href');
				$screen.setAttribute('src',imgSrc);
				});