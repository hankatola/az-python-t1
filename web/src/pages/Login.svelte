<script>


  //#region     Imports & component vars
  //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  import api from '../utils/api'
  let user, pass
  //_________________________________________________________
  //#endregion  Imports & component vars



  const handleSubmit = () => {
    if (!user || !pass) {
      return
    }

  }

</script>

<style>
</style>

<!-- page -->
<div class='container'>
  <div class='row'>

    <!-- username -->
    <div class="input-field row s6">
      <input type="text" on:keyup='{e => user = e.target.value}'>
      <label for="userName">Username</label>
    </div>

    <!-- password -->
    <div class="input-field row s6">
      <input type="password" on:keyup='{e => pass = e.target.value}'>
      <label for="userName">Password</label>
    </div>

    <!-- submit button -->
    <button class="btn waves-effect waves-light blue" on:click={handleSubmit}>
      Submit
      <i class="material-icons right">send</i>
    </button>

  </div>
</div>