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
			<h1 class="order-steps-head">Оформление заказа</h1>
			<div class="order-steps-wrap">
				<form class="form-field order-steps-form" action="#" method="post">
					<div class="order-steps-form-head-wrap active">
						<h2 class="order-steps-form-head">1. Личные данные</h2>
					</div>
					<div class="order-steps-step-1">
						<div class="order-steps-step form">
							<div class="form-field-flexbox">
								<label class="form-field-label">
									<span class="form-field-wrap">
										<input class="form-field-radio" checked type="radio" name="face">
										<i class="form-field-icon-select"></i>						
										<span class="form-field-text-radio">Физическое лицо</span>
									</span>
								</label>
								<label class="form-field-label">
									<span class="form-field-wrap">
										<input class="form-field-radio" type="radio" name="face">
										<i class="form-field-icon-select"></i>						
										<span class="form-field-text-radio">Юридическое лицо</span>
									</span>
								</label>
							</div>
							<label class="form-field-label">
								<span class="form-field-wrap first">
									<span class="form-field-name">Имя и фамилия</span>
								</span>
								<span class="form-field-wrap last">
									<input class="form-field-input name" type="text" name="name">
									<span class="form-field-error"></span>
								</span>
							</label>
							<label class="form-field-label">
								<span class="form-field-wrap first">
									<span class="form-field-name">E-mail</span>
								</span>
								<span class="form-field-wrap last">
									<input class="form-field-input email" type="text" name="email">
									<span class="form-field-error"></span>
								</span>
							</label>
							<div class="form-field-phone">
								<div class="form-field-phone-wrap first">
									<span class="form-field-phone-name">Телефон</span>
									<input class="form-field-phone-input-region" type="hidden" name="region" value="+7">								
									<div class="form-field-phone-select">
										<span class="form-field-phone-select-span">+7</span>
										<i class="form-field-phone-select-arrow"></i>
										<div class="form-field-phone-select-modal">
											<span class="form-field-phone-select-modal-item" data-region="+63">+63</span>
											<span class="form-field-phone-select-modal-item" data-region="+105">+105</span>
											<span class="form-field-phone-select-modal-item" data-region="+11">+11</span>
											<span class="form-field-phone-select-modal-item" data-region="+1">+1</span>
											<span class="form-field-phone-select-modal-item" data-region="+7">+7</span>
										</div>
									</div>
								</div>
								<div class="form-field-phone-wrap last">
									<label class="form-field-label">									
										<span class="form-field-wrap last">
											<input class="form-field-input phone" type="text" name="phone">
											<span class="form-field-error"></span>
										</span>
									</label>
								</div>
							</div>
							<div class="order-steps-link">
								<a class="button-link white grey-border step-1" href="#">
									<span class="button-link-span">
										<span class="button-link-span-text">Далее</span>
									</span>
								</a>
							</div>
						</div>
						<div class="order-steps-step data"></div>
					</div>
					<div class="order-steps-form-head-wrap">
						<h2 class="order-steps-form-head">2. Способ доставки</h2>
					</div>
					<div class="order-steps-form-head-wrap">
						<h2 class="order-steps-form-head">3. Способ оплаты</h2>
					</div>
				</form>
				<div class="order-steps-basket">
					<div class="order-steps-basket-head-wrap">
						<h3 class="order-steps-basket-head-span">В корзине 6 товаров</h3>
						<a class="order-steps-basket-head-edit" href="#">Редактировать</a>
					</div>
					<div class="order-steps-basket-list">
						<div class="order-steps-basket-item">
							<div class="order-steps-basket-item-pic">
								<img class="order-steps-basket-item-pic-img" src="img/goods/1.png" alt="">
							</div>
							<div class="order-steps-basket-item-info">
								<a class="order-steps-basket-item-info-name" href="#">Gel Polish spring long name greenery</a>
								<div class="order-steps-basket-item-info-wrap">
									<div class="order-steps-basket-item-info-count">
										<span class="order-steps-basket-item-info-count-span">10 мл</span>
										<span class="order-steps-basket-item-info-count-span bold">5 шт</span>
									</div>
									<div class="order-steps-basket-item-info-price">520 rub</div>
								</div>
							</div>
						</div>

						<div class="order-steps-basket-item">
							<div class="order-steps-basket-item-pic">
								<img class="order-steps-basket-item-pic-img" src="img/goods/9.png" alt="">
							</div>
							<div class="order-steps-basket-item-info">
								<a class="order-steps-basket-item-info-name" href="#">Antibacterial</a>
								<div class="order-steps-basket-item-info-wrap">
									<div class="order-steps-basket-item-info-count">
										<span class="order-steps-basket-item-info-count-span">250 мл</span>
										<span class="order-steps-basket-item-info-count-span bold">1 шт</span>
									</div>
									<div class="order-steps-basket-item-info-price">520 rub</div>
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