<?php include "./elements/header.php" ?>
<div class="bread-crumbs">
	<div class="container">
		<div class="content">
			<a class="bread-crumbs-item"  href="/">Главная</a> /
			<span class="bread-crumbs-item active">Оформление заказа</span>
		</div>
	</div>	
</div>
<section id="order-steps">
	<div class="container order-steps-container">
		<div class="content">
			<h1 class="order-steps-head">ОФОРМЛЕНИЕ ЗАКАЗА</h1>
			<div class="order-steps-wrap">
				<form class="form-field order-steps-form individual" action="#" method="post">
					<div class="order-steps-form-head-wrap active">
						<h2 class="order-steps-form-head">1. ЛИЧНЫЕ ДАННЫЕ</h2>
					</div>
					<div class="order-steps-step-1">
						<div class="order-steps-step form">
							<div class="form-field-flexbox">
								<label class="form-field-label margin">
									<span class="form-field-wrap">
										<i class="form-field-icon-select active"></i>
										<span class="form-field-text-radio">Физическое лицо</span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap organization">
										<i class="form-field-icon-select"></i>
										<span class="form-field-text-radio">Юридическое лицо</span>
									</span>
								</label>
							</div>
							<div class="form-field-list">
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">Имя и фамилия</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input name head" type="text" name="name">
										<span class="form-field-error"></span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">E-mail</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input email row" type="text" name="email">
										<span class="form-field-error"></span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">Телефон</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input phone row" type="text" name="phone">
										<span class="form-field-error"></span>
									</span>
								</label>
							</div>
							<div class="order-steps-link">
								<a class="button-link white grey-border step-1" href="#">
									<span class="button-link-span">
										<span class="button-link-span-text">ДАЛЕЕ</span>
									</span>
								</a>
							</div>
						</div>
						<div class="order-steps-step data">
							<div class="order-steps-step-head">
								<h3 class="order-steps-step-head-name">1. <span class="order-steps-step-head-name-span"></span></h3>
								<span class="order-steps-step-head-span step-1">Изменить</span>
							</div>
							<div class="order-steps-step-info">
								
							</div>
						</div>
					</div>
					<div class="order-steps-form-head-wrap">
						<h2 class="order-steps-form-head">2. СПОСОБ ДОСТАВКИ</h2>
					</div>
					<div class="order-steps-step-2">
						<div class="order-steps-step form">
							<div class="form-field-list">
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">Город</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input city col" type="text" name="city">
										<span class="form-field-error"></span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap">
										<input class="form-field-radio head" checked type="radio" name="delivery" data-name="СДЕК - склад" value="1">
										<i class="form-field-icon-select"></i>
										<span class="form-field-text-radio">СДЕК - склад 
											<span class="form-field-text-radio-bold">/  225 RUB  /  1 день</span>
										</span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap">
										<input class="form-field-radio head" type="radio" name="delivery" data-name="СДЕК - курьер" value="2">
										<i class="form-field-icon-select"></i>
										<span class="form-field-text-radio">СДЕК - курьер
											<span class="form-field-text-radio-bold">/  450 RUB  /  2 дня</span>
										</span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap">
										<input class="form-field-radio head" type="radio" name="delivery" data-name="Самовывоз" value="3">
										<i class="form-field-icon-select"></i>
										<span class="form-field-text-radio">Самовывоз
											<span class="form-field-text-radio-bold">/  0 RUB  / сегодня</span>
										</span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap">
										<input class="form-field-radio head" type="radio" name="delivery" data-name="Boxberry - курьер" value="4">
										<i class="form-field-icon-select"></i>
										<span class="form-field-text-radio">Boxberry - курьер
											<span class="form-field-text-radio-bold">/  310 RUB  /  1 день</span>
										</span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap">
										<input class="form-field-radio head" type="radio" name="delivery" data-name="Boxberry - склад" value="5">
										<i class="form-field-icon-select"></i>
										<span class="form-field-text-radio">Boxberry - склад
											<span class="form-field-text-radio-bold">/  160 RUB  /  3 дня</span>
										</span>
									</span>
								</label>
								<div class="form-field-list-button">
									<a class="button-link black" href="#">
										<span class="button-link-span"><span class="button-link-span-text">ВЫБРАТЬ ПУНКТ</span></span>
									</a>
								</div>
								
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">Улица</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input street col" type="text" name="street">
										<span class="form-field-error"></span>
									</span>
								</label>
								<div class="form-field-flexbox nowrap">
									<label class="form-field-label margin">
										<span class="form-field-wrap first">
											<span class="form-field-name">Дом</span>
										</span>
										<span class="form-field-wrap last">
											<input class="form-field-input house col" type="text" name="house">
											<span class="form-field-error"></span>
										</span>
									</label>
									<label class="form-field-label margin">
										<span class="form-field-wrap first">
											<span class="form-field-name">Квартиру/офис</span>
										</span>
										<span class="form-field-wrap last">
											<input class="form-field-input room col" type="text" name="room">
											<span class="form-field-error"></span>
										</span>
									</label>
								</div>
							</div>
							<div class="order-steps-link">
								<a class="button-link white grey-border step-2" href="#">
									<span class="button-link-span">
										<span class="button-link-span-text">ДАЛЕЕ</span>
									</span>
								</a>
							</div>
						</div>
						<div class="order-steps-step data">
							<div class="order-steps-step-head">
								<h3 class="order-steps-step-head-name">2. <span class="order-steps-step-head-name-span">СДЕК - склад</span></h3>
								<span class="order-steps-step-head-span step-2">Изменить</span>
							</div>
							<div class="order-steps-step-info">
								<span class="order-steps-step-info-span address"></span>
							</div>
						</div>
					</div>
					<div class="order-steps-form-head-wrap last">
						<h2 class="order-steps-form-head">3. СПОСОБ ОПЛАТЫ</h2>
					</div>
					<div class="order-steps-step-3">
						<div class="order-steps-step form">
							<label class="form-field-label radio margin">
								<span class="form-field-wrap">
									<input class="form-field-radio" type="radio" name="payment" value="1">
									<i class="form-field-icon-select"></i>
									<span class="form-field-text-radio">Наличными курьеру</span>
								</span>
							</label>
							<label class="form-field-label radio margin">
								<span class="form-field-wrap">
									<input class="form-field-radio" checked type="radio" name="payment" value="1">
									<i class="form-field-icon-select"></i>
									<span class="form-field-text-radio">Онлайн банковской картой</span>
								</span>
							</label>
							<div class="order-steps-step-completion">
								<div class="order-steps-step-completion-wrap">
									<span class="order-steps-step-completion-comment">Добавить комментарий к заказу</span>
									<label class="form-field-label default-hidden margin">
										<span class="form-field-wrap first">
											<span class="form-field-name">Ваш комментарий</span>
										</span>
										<span class="form-field-wrap last">
											<textarea class="form-field-input comment" name="comment"></textarea>
											<span class="form-field-error"></span>
										</span>
									</label>
								</div>
								<div id="order-steps-step-completion-checkbox" class="order-steps-step-completion-checkbox">
									<label class="form-field-label margin">
										<span class="form-field-wrap">
											<input class="form-field-checkbox" type="checkbox" name="name">
											<i class="form-field-icon-check"></i>
											<span class="form-field-text">Не перезванивайте мне, я уверен в заказе</span>
										</span>
									</label>
								</div>
								<div class="bascket-result-wrap order-mobile">

									<div class="bascket-result-item">
										<span class="bascket-result-item-name">Стоимость товаров:</span>
										<div class="bascket-result-item-wrap">
											<span class="bascket-result-item-sum">5470</span>
											<span class="bascket-result-item-valute">rub</span>
										</div>
									</div>

									<div class="bascket-result-item">
										<span class="bascket-result-item-name">Скидка:</span>
										<div class="bascket-result-item-wrap red">
											<span class="bascket-result-item-sum">-200</span>
											<span class="bascket-result-item-valute">rub</span>
										</div>
									</div>

									<div class="bascket-result-item">
										<span class="bascket-result-item-name">Доставка:</span>
										<div class="bascket-result-item-wrap">
											<span class="bascket-result-item-sum">450</span>
											<span class="bascket-result-item-valute">rub</span>
										</div>
									</div>

									<div class="bascket-result-item">
										<span class="bascket-result-item-name">Общий вес:</span>
										<div class="bascket-result-item-wrap">
											<span class="bascket-result-item-sum">0.835</span>
											<span class="bascket-result-item-valute">кг</span>
										</div>
									</div>

									<div class="bascket-result-item total">
										<span class="bascket-result-item-name">итого:</span>
										<div class="bascket-result-item-wrap">
											<span class="bascket-result-item-sum">5920</span>
											<span class="bascket-result-item-valute">rub</span>
										</div>
									</div>
									
								</div>
								<div class="order-steps-step-completion-button">
									<button class="button-link black width">
										<span class="button-link-span">
											<span class="button-link-span-text">ОФОРМИТЬ ЗАКАЗ</span>
										</span>
									</button>
								</div>
								<p class="order-steps-step-completion-info">
									Оформляя заказ, я принимаю условия <a class="order-steps-step-completion-info-link" href="#">пользовательского соглашения</a>
								</p>
							</div>
						</div>
					</div>
				</form>

				<form class="form-field order-steps-form organization" action="#" method="post">
					<div class="order-steps-form-head-wrap active">
						<h2 class="order-steps-form-head">1. ДАННЫЕ ОРГАНИЗАЦИИ</h2>
					</div>
					<div class="order-steps-step-1">
						<div class="order-steps-step form">
							<div class="form-field-flexbox">
								<label class="form-field-label margin">
									<span class="form-field-wrap individual">
										<i class="form-field-icon-select"></i>
										<span class="form-field-text-radio">Физическое лицо</span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap">
										<i class="form-field-icon-select active"></i>
										<span class="form-field-text-radio">Юридическое лицо</span>
									</span>
								</label>
							</div>
							<div class="form-field-list">
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">Наименование</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input name head" type="text" name="name">
										<span class="form-field-error"></span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">Полное наименование</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input full-name row" type="text" name="full-name">
										<span class="form-field-error"></span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">ОГРН</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input ogrn row" type="text" name="ogrn">
										<span class="form-field-error"></span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">ИНН</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input inn row" type="text" name="inn">
										<span class="form-field-error"></span>
									</span>
								</label>
							</div>
							<div class="order-steps-link">
								<a class="button-link white grey-border step-1" href="#">
									<span class="button-link-span">
										<span class="button-link-span-text">ДАЛЕЕ</span>
									</span>
								</a>
							</div>
						</div>
						<div class="order-steps-step data">
							<div class="order-steps-step-head">
								<h3 class="order-steps-step-head-name">1. <span class="order-steps-step-head-name-span"></span></h3>
								<span class="order-steps-step-head-span step-1">Изменить</span>
							</div>
							<div class="order-steps-step-info">
								
							</div>
						</div>
					</div>
					<div class="order-steps-form-head-wrap">
						<h2 class="order-steps-form-head">2. СПОСОБ ДОСТАВКИ</h2>
					</div>
					<div class="order-steps-step-2">
						<div class="order-steps-step form">
							<div class="form-field-list">
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">Должность руководителя</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input position row" type="text" name="position">
										<span class="form-field-error"></span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">Почтовый адрес</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input address-1 row" type="text" name="address-1">
										<span class="form-field-error"></span>
									</span>
								</label>
								<label class="form-field-label margin">
									<span class="form-field-wrap first">
										<span class="form-field-name">Юридический адрес</span>
									</span>
									<span class="form-field-wrap last">
										<input class="form-field-input address-2 row" type="text" name="address-2">
										<span class="form-field-error"></span>
									</span>
								</label>								
								<div class="form-field-flexbox nowrap">
									<label class="form-field-label margin">
										<span class="form-field-wrap first">
											<span class="form-field-name">Телефон</span>
										</span>
										<span class="form-field-wrap last">
											<input class="form-field-input phone col" type="text" name="phone">
											<span class="form-field-error"></span>
										</span>
									</label>
									<label class="form-field-label margin">
										<span class="form-field-wrap first">
											<span class="form-field-name">e-mail</span>
										</span>
										<span class="form-field-wrap last">
											<input class="form-field-input email col" type="text" name="email">
											<span class="form-field-error"></span>
										</span>
									</label>
								</div>
							</div>
							<div class="order-steps-link">
								<a class="button-link white grey-border step-2" href="#">
									<span class="button-link-span">
										<span class="button-link-span-text">ДАЛЕЕ</span>
									</span>
								</a>
							</div>
						</div>
						<div class="order-steps-step data">
							<div class="order-steps-step-head">
								<h3 class="order-steps-step-head-name">2. <span class="order-steps-step-head-name-span">СДЕК - склад</span></h3>
								<span class="order-steps-step-head-span step-2">Изменить</span>
							</div>
							<div class="order-steps-step-info">
								<span class="order-steps-step-info-span address">г. Москва, ул. Кирова, дом № 6, кв. 2</span>
							</div>
						</div>
					</div>
					<div class="order-steps-form-head-wrap last">
						<h2 class="order-steps-form-head">3. СПОСОБ ОПЛАТЫ</h2>
					</div>
					<div class="order-steps-step-3">
						<div class="order-steps-step form">
							<label class="form-field-label radio margin">
								<span class="form-field-wrap">
									<input class="form-field-radio" type="radio" name="payment" value="1">
									<i class="form-field-icon-select"></i>
									<span class="form-field-text-radio">Наличными курьеру</span>
								</span>
							</label>
							<label class="form-field-label radio margin">
								<span class="form-field-wrap">
									<input class="form-field-radio" checked type="radio" name="payment" value="1">
									<i class="form-field-icon-select"></i>
									<span class="form-field-text-radio">Онлайн банковской картой</span>
								</span>
							</label>
							<div class="order-steps-step-completion">
								<div class="order-steps-step-completion-wrap">
									<span class="order-steps-step-completion-comment">Добавить комментарий к заказу</span>
									<label class="form-field-label default-hidden margin">
										<span class="form-field-wrap first">
											<span class="form-field-name">Ваш комментарий</span>
										</span>
										<span class="form-field-wrap last">
											<textarea class="form-field-input comment" name="comment"></textarea>
											<span class="form-field-error"></span>
										</span>
									</label>
								</div>
								<div id="order-steps-step-completion-checkbox" class="order-steps-step-completion-checkbox">
									<label class="form-field-label margin">
										<span class="form-field-wrap">
											<input class="form-field-checkbox" type="checkbox" name="name">
											<i class="form-field-icon-check"></i>
											<span class="form-field-text">Не перезванивайте мне, я уверен в заказе</span>
										</span>
									</label>
								</div>
								<div class="bascket-result-wrap order-mobile">

									<div class="bascket-result-item">
										<span class="bascket-result-item-name">Стоимость товаров:</span>
										<div class="bascket-result-item-wrap">
											<span class="bascket-result-item-sum">5470</span>
											<span class="bascket-result-item-valute">rub</span>
										</div>
									</div>

									<div class="bascket-result-item">
										<span class="bascket-result-item-name">Скидка:</span>
										<div class="bascket-result-item-wrap red">
											<span class="bascket-result-item-sum">-200</span>
											<span class="bascket-result-item-valute">rub</span>
										</div>
									</div>

									<div class="bascket-result-item">
										<span class="bascket-result-item-name">Доставка:</span>
										<div class="bascket-result-item-wrap">
											<span class="bascket-result-item-sum">450</span>
											<span class="bascket-result-item-valute">rub</span>
										</div>
									</div>

									<div class="bascket-result-item">
										<span class="bascket-result-item-name">Общий вес:</span>
										<div class="bascket-result-item-wrap">
											<span class="bascket-result-item-sum">0.835</span>
											<span class="bascket-result-item-valute">кг</span>
										</div>
									</div>

									<div class="bascket-result-item total">
										<span class="bascket-result-item-name">итого:</span>
										<div class="bascket-result-item-wrap">
											<span class="bascket-result-item-sum">5920</span>
											<span class="bascket-result-item-valute">rub</span>
										</div>
									</div>
									
								</div>
								<div class="order-steps-step-completion-button">
									<button class="button-link black width">
										<span class="button-link-span">
											<span class="button-link-span-text">ОФОРМИТЬ ЗАКАЗ</span>
										</span>
									</button>
								</div>
								<p class="order-steps-step-completion-info">
									Оформляя заказ, я принимаю условия <a class="order-steps-step-completion-info-link" href="#">пользовательского соглашения</a>
								</p>
							</div>
						</div>
					</div>
				</form>

				<div class="order-steps-basket">
					<div class="order-steps-basket-head-wrap">
						<h3 class="order-steps-basket-head-span">В КОРЗИНЕ 6 ТОВАРОВ</h3>
						<a class="order-steps-basket-head-edit" href="#">Редактировать</a>
					</div>
					<div class="order-steps-basket-list-wrap">
						<div class="order-steps-basket-list">
							<div class="order-steps-basket-item">
								<div class="order-steps-basket-item-pic">
									<img class="order-steps-basket-item-pic-img" src="img/goods/1.png" alt="">
								</div>
								<div class="order-steps-basket-item-info">
									<a class="order-steps-basket-item-info-name" href="#">GEL POLISH SPRING LONG NAME GREENERY</a>
									<div class="order-steps-basket-item-info-wrap">
										<div class="order-steps-basket-item-info-count">
											<span class="order-steps-basket-item-info-count-span">10 МЛ</span>
											<span class="order-steps-basket-item-info-count-span bold">5 ШТ</span>
										</div>
										<div class="order-steps-basket-item-info-price">520 RUB</div>
									</div>
								</div>
							</div>

							<div class="order-steps-basket-item">
								<div class="order-steps-basket-item-pic">
									<img class="order-steps-basket-item-pic-img" src="img/goods/9.png" alt="">
								</div>
								<div class="order-steps-basket-item-info">
									<a class="order-steps-basket-item-info-name" href="#">ANTIBACTERIAL</a>
									<div class="order-steps-basket-item-info-wrap">
										<div class="order-steps-basket-item-info-count">
											<span class="order-steps-basket-item-info-count-span">250 МЛ</span>
											<span class="order-steps-basket-item-info-count-span bold">1 ШТ</span>
										</div>
										<div class="order-steps-basket-item-info-price">520 RUB</div>
									</div>
								</div>
							</div>

							<div class="order-steps-basket-item">
								<div class="order-steps-basket-item-pic">
									<img class="order-steps-basket-item-pic-img" src="img/goods/1.png" alt="">
								</div>
								<div class="order-steps-basket-item-info">
									<a class="order-steps-basket-item-info-name" href="#">GEL POLISH SPRING LONG NAME GREENERY</a>
									<div class="order-steps-basket-item-info-wrap">
										<div class="order-steps-basket-item-info-count">
											<span class="order-steps-basket-item-info-count-span">10 МЛ</span>
											<span class="order-steps-basket-item-info-count-span bold">5 ШТ</span>
										</div>
										<div class="order-steps-basket-item-info-price">520 RUB</div>
									</div>
								</div>
							</div>

							<div class="order-steps-basket-item">
								<div class="order-steps-basket-item-pic">
									<img class="order-steps-basket-item-pic-img" src="img/goods/9.png" alt="">
								</div>
								<div class="order-steps-basket-item-info">
									<a class="order-steps-basket-item-info-name" href="#">ANTIBACTERIAL</a>
									<div class="order-steps-basket-item-info-wrap">
										<div class="order-steps-basket-item-info-count">
											<span class="order-steps-basket-item-info-count-span">250 МЛ</span>
											<span class="order-steps-basket-item-info-count-span bold">1 ШТ</span>
										</div>
										<div class="order-steps-basket-item-info-price">520 RUB</div>
									</div>
								</div>
							</div>

							<div class="order-steps-basket-item">
								<div class="order-steps-basket-item-pic">
									<img class="order-steps-basket-item-pic-img" src="img/goods/1.png" alt="">
								</div>
								<div class="order-steps-basket-item-info">
									<a class="order-steps-basket-item-info-name" href="#">GEL POLISH SPRING LONG NAME GREENERY</a>
									<div class="order-steps-basket-item-info-wrap">
										<div class="order-steps-basket-item-info-count">
											<span class="order-steps-basket-item-info-count-span">10 МЛ</span>
											<span class="order-steps-basket-item-info-count-span bold">5 ШТ</span>
										</div>
										<div class="order-steps-basket-item-info-price">520 RUB</div>
									</div>
								</div>
							</div>

							<div class="order-steps-basket-item">
								<div class="order-steps-basket-item-pic">
									<img class="order-steps-basket-item-pic-img" src="img/goods/9.png" alt="">
								</div>
								<div class="order-steps-basket-item-info">
									<a class="order-steps-basket-item-info-name" href="#">ANTIBACTERIAL</a>
									<div class="order-steps-basket-item-info-wrap">
										<div class="order-steps-basket-item-info-count">
											<span class="order-steps-basket-item-info-count-span">250 МЛ</span>
											<span class="order-steps-basket-item-info-count-span bold">1 ШТ</span>
										</div>
										<div class="order-steps-basket-item-info-price">520 RUB</div>
									</div>
								</div>
							</div>

						</div>
					</div>
					<div class="bascket-result-wrap order">

						<div class="bascket-result-item">
							<span class="bascket-result-item-name">Стоимость товаров:</span>
							<div class="bascket-result-item-wrap">
								<span class="bascket-result-item-sum">5470</span>
								<span class="bascket-result-item-valute">rub</span>
							</div>
						</div>

						<div class="bascket-result-item">
							<span class="bascket-result-item-name">Скидка:</span>
							<div class="bascket-result-item-wrap red">
								<span class="bascket-result-item-sum">-200</span>
								<span class="bascket-result-item-valute">rub</span>
							</div>
						</div>

						<div class="bascket-result-item">
							<span class="bascket-result-item-name">Доставка:</span>
							<div class="bascket-result-item-wrap">
								<span class="bascket-result-item-sum">450</span>
								<span class="bascket-result-item-valute">rub</span>
							</div>
						</div>

						<div class="bascket-result-item">
							<span class="bascket-result-item-name">Общий вес:</span>
							<div class="bascket-result-item-wrap">
								<span class="bascket-result-item-sum">0.835</span>
								<span class="bascket-result-item-valute">кг</span>
							</div>
						</div>

						<div class="bascket-result-item total">
							<span class="bascket-result-item-name">итого:</span>
							<div class="bascket-result-item-wrap">
								<span class="bascket-result-item-sum">5920</span>
								<span class="bascket-result-item-valute">rub</span>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?php include './elements/subscription.php'; ?>
<?php include "./elements/footer.php" ?>