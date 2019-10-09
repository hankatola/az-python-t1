<script>
  export let w = ''
  if (!!w) {
    w = 's' + w
  }
</script>

<style>
</style>

<div class={`col ${w} m6`}>
    <slot/>
</div>