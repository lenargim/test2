$(document).ready(function(){

	//  Цвет ввода текста
	$('.form__input').on('keyup', function(){
		let num = document.getElementById("form__phone").value;
		let name = document.getElementById("form__name").value;
		let title = document.getElementById("form__title").value; 
		if ( $(this) !== '' ) {
			$(this).css({
				'color':'#000000',
			});
		}
	// Цвет кнопки формы
	if ( name != '' && num != '' && title != '' ) {
		$('#form__submit').css({ 
			"color": "#fff",
	   		"opacity": 1 });
		} else {
			$('#form__submit').css({ 
			"color": "#fff",
	   		"opacity": 0.3 });
		}
	});
	// Проверка номера телефона
	$('#form__submit').on('click', function(e){
		e.preventDefault();
		let num = document.getElementById("form__phone").value;
		let arr = [];
		arr = num.split('');
		if ( arr[0] === '+' && arr[1] === '7' ) {
			arr.splice(0,2,'8')
		}
		if ( arr.length !== 15 || 
			arr[0] !== '8' || 
			arr[1] !== ' ' || 
			isNaN(arr[2]) === true || 
			isNaN(arr[3]) === true || 
			isNaN(arr[4]) === true  || 
			arr[5] !== ' ' || 
			isNaN(arr[6]) ===  true || 
			isNaN(arr[7]) === true ||
			isNaN(arr[8]) === true || 
			arr[9] !== ' ' || 
			isNaN(arr[10]) === true ||
			isNaN(arr[11]) === true|| 
			arr[12] !== ' ' || 
			isNaN(arr[13]) === true || 
			isNaN(arr[14]) === true
			) {
		$('.hide').css({'display': 'block'});
		$('#form__phone').addClass('grey');

		} else {
			$('.hide').css({'display': 'none'});
			$('#form__phone').removeClass('grey');
		}
	})

});

