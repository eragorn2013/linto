<?php include './header.php'; ?>
<section id="auth">
	<div class="container">
		<div class="content">
			<h1 class="auth-head">Вход</h1>
			<div class="auth-wrap">
				<form class="form-field" action="#" method="post">
					<label class="form-field-label">
						<div class="form-field-wrap first">
							<span class="form-field-name">Логин</span>
						</div>
						<div class="form-field-wrap last">
							<input class="form-field-input login" type="text" name="name">
							<span class="form-field-error">Это поле является обязательным</span>
						</div>
					</label>

					<label class="form-field-label">
						<div class="form-field-wrap first">
							<span class="form-field-name">Пароль</span>
							<a class="form-field-link" href="#">Забыли пароль?</a>
						</div>
						<div class="form-field-wrap last">
							<input class="form-field-input pass" type="password" name="name">
							<span class="form-field-error">Это поле является обязательным</span>
							<div class="form-field-visible-pass">
								<i class="form-field-visible-pass-icon hide"></i>
								<span class="form-field-visible-pass-hint">Показать пароль</span>
							</div>
						</div>
					</label>

					<label class="form-field-label">
						<div class="form-field-wrap">
							<input class="form-field-checkbox" type="checkbox" name="name">
							<i class="form-field-icon-check"></i>						
							<span class="form-field-text">Запомнить меня</span>
						</div>
					</label>

					<div class="form-field-buttons">
						<button class="button-link black">
							<span class="button-link-span">
								<span class="button-link-span-text">Войти</span>
							</span>
						</button>
						<a class="button-link white grey-border" href="#">
							<span class="button-link-span">
								<span class="button-link-span-text">Зарегистрироваться</span>
							</span>
						</a>
					</div>					
				</form>
			</div>
		</div>
	</div>
</section>
<?php include './footer.php'; ?>