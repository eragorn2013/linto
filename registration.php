<?php include './elements/header.php'; ?>
<section id="registration">
	<div class="container">
		<div class="content">
			<h1 class="registration-head">РЕГИСТРАЦИЯ</h1>
			<div class="registration-wrap">
				<form class="form-field" action="#" method="post">
					<label class="form-field-label margin">
						<span class="form-field-wrap first">
							<span class="form-field-name">Имя</span>
						</span>
						<span class="form-field-wrap last">
							<input class="form-field-input name" type="text" name="name">
							<span class="form-field-error"></span>
						</span>
					</label>

					<label class="form-field-label margin">
						<span class="form-field-wrap first">
							<span class="form-field-name">Фамилия</span>
						</span>
						<span class="form-field-wrap last">
							<input class="form-field-input surname" type="text" name="surname">
							<span class="form-field-error"></span>
						</span>
					</label>

					<label class="form-field-label margin">
						<span class="form-field-wrap first">
							<span class="form-field-name">Логин</span>
						</span>
						<span class="form-field-wrap last">
							<input class="form-field-input login" type="text" name="login">
							<span class="form-field-error"></span>
						</span>
					</label>

					<label class="form-field-label margin">
						<span class="form-field-wrap first">
							<span class="form-field-name">E-mail</span>
						</span>
						<span class="form-field-wrap last">
							<input class="form-field-input email" type="text" name="email">
							<span class="form-field-error"></span>
						</span>
					</label>

					<label class="form-field-label margin">
						<span class="form-field-wrap first">
							<span class="form-field-name">Пароль</span>
						</span>
						<span class="form-field-wrap last">
							<input class="form-field-input pass" type="password" name="pass">
							<span class="form-field-error"></span>
							<span class="form-field-visible-pass">
								<i class="form-field-visible-pass-icon hide"></i>
								<span class="form-field-visible-pass-hint">Показать пароль</span>
							</span>
						</span>
					</label>

					<label class="form-field-label margin">
						<span class="form-field-wrap">
							<input class="form-field-checkbox" type="checkbox" name="name">
							<i class="form-field-icon-check"></i>
							<span class="form-field-text">Я принимаю условия <a class="form-field-text-link" href="#">пользовательского соглашения</a></span>
						</span>
					</label>

					<div class="form-field-buttons">
						<button class="button-link black margin width">
							<span class="button-link-span">
								<span class="button-link-span-text">ВОЙТИ</span>
							</span>
						</button>
						<a class="button-link white grey-border width" href="#">
							<span class="button-link-span">
								<span class="button-link-span-text">ЗАРЕГИСТРИРОВАТЬСЯ</span>
							</span>
						</a>
					</div>					
				</form>
			</div>
		</div>
	</div>
</section>
<?php include './elements/footer.php'; ?>