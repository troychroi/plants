<template>
	<div class="container">
		<div class="card">
			<div class="card-header">
				<h3>Add Plant</h3>
			</div>
			<div class="card-body">
				<form v-on:submit.prevent="addItem">
					<fieldset>
						<div class="field-group">
							<label for="plantname">Plant Name:</label>
							<input type="text" name="plantname" class="form-control">
						</div>
						<div class="field-group">
							<input type="submit" value="Add Plant" class="btn btn-primary">
						</div>
					</fieldset>				
				</form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {
		name: 'AddItem'
	}
}
</script>