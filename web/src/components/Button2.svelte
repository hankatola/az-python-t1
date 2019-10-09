<script>
  export let label = false
  export let sec = ''
  export let classes = ''
  export let icon = false
  export let w = 's2'
  const btnclass = `valign-wrapper center-align waves-effect waves-light btn`
  if (w !== 's2') {
    w = 's' + w
  }
  if (sec !== '') {
    sec = `\\(${sec}\\)`
  }
  if (label !== false) {
    label = `\\(${label}\\)`
  }
</script>

<style>
  td, .col, .row, .label {
    padding: 0;
    margin: 0;
    margin: auto !important;
  }

  button {
    width: 90%;
    text-transform: lowercase !important;
  }

  .invisible {
    opacity: 0 !important;
  }

  .btn {
    max-width: 75px;
  }

</style>

<!-- Component -->
<td>

  <!-- superscript row -->
  <div class='row center-align'>
      {#if sec === ''}
        <div class='invisible'>{label}</div>
      {:else}
        <div class='blue-text'>{sec}</div>
      {/if}
  </div>

  <!-- button row -->
  <div class='row'>
    <button class={btnclass + classes}>
      {#if !icon}
      <div class='test'>
        {label}
      </div>
      {:else}
        <i class='material-icons'>{icon}</i>
      {/if}
    </button>
  </div>
</td>
