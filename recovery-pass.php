<?php include './elements/header.php'; ?>
<section id="recovery-pass">
	<div class="container">
		<div class="content">
			<h1 class="recovery-pass-head">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h1>
			<p class="recovery-pass-info">Введите в поле адрес электронной почты. Мы отправим вам сообщение по электронной почте с инструкциями по созданию нового пароля.</p>
			<div class="recovery-pass-wrap">
				<form class="form-field" action="#" method="post">
					<label class="form-field-label">
						<span class="form-field-wrap first">
							<span class="form-field-name">E-mail</span>
						</span>
						<span class="form-field-wrap last">
							<input class="form-field-input email" type="text" name="email">
							<span class="form-field-error"></span>
						</span>
					</label>					

					<div class="form-field-buttons">
						<button class="button-link black">
							<span class="button-link-span">
								<span class="button-link-span-text">ВОССТАНОВИТЬ ПАРОЛЬ</span>
							</span>
						</button>						
					</div>					
				</form>
			</div>
		</div>
	</div>
</section>
<?php include './elements/footer.php'; ?>