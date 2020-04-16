<?php include './elements/header.php'; ?>
<section id="auth">
	<div class="container">
		<div class="content">
			<h1 class="auth-head">ВХОД</h1>
			<div class="auth-wrap">
				<form class="form-field" action="#" method="post">
					<label class="form-field-label">
						<span class="form-field-wrap first">
							<span class="form-field-name">Логин</span>
						</span>
						<span class="form-field-wrap last">
							<input class="form-field-input login" type="text" name="login">
							<span class="form-field-error"></span>
						</span>
					</label>

					<label class="form-field-label">
						<span class="form-field-wrap first">
							<span class="form-field-name">Пароль</span>
							<a class="form-field-link" href="#">Забыли пароль?</a>
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

					<label class="form-field-label">
						<span class="form-field-wrap">
							<input class="form-field-checkbox" type="checkbox" name="name">
							<i class="form-field-icon-check"></i>						
							<span class="form-field-text">Запомнить меня</span>
						</span>
					</label>

					<div class="form-field-buttons">
						<button class="button-link black">
							<span class="button-link-span">
								<span class="button-link-span-text">ВОЙТИ</span>
							</span>
						</button>
						<a class="button-link white grey-border" href="#">
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