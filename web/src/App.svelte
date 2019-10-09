<script>
    import Button from './components/Button2.svelte'
    import Row from './components/Row.svelte'
    import Col from './components/Col.svelte'
    import Container from './components/Container.svelte'
    export let name
    const btnclass = `waves-effect waves-light btn`
    let test = 'tes2t'
    const mth = {
      sqrt: x => '\\sqrt{' + x + '}',
      exp: x => '^{' + x + '}',
      frac: x => '\\frac{' + x + '}',
      polyroot: (x,y) => '\\sqrt[' + x + ']{' + y + '}',
      sin: x => '\\sin ' + x,
      cos: x => '\\cos ' + x,
      tan: x => '\\tan ' + x,
      times: () => '\\times',
      div: () => '\\div',
      normal: x => '\\mathsf {' + x + '}',
    }
</script>

<style>
  td, .btn {
    padding: none !important;
    margin: none !important;
  }
  table {
    max-width: 200px;
  }

  table, tr, td, .row {
    border: 0;
    margin: 0;
    padding: 0;
  }

  .at-bottom-rel {
    position: relative;
  }

  .at-bottom-abs {
    position: absolute;
    bottom: 0;
  }

  .btn-small {
    width: 44px;
    padding: 0;
  }

  .calc-body, .card {
    margin: auto;
    width: 100%;
  }

  .display {
    width: 360px;
    min-height: 150px;
    max-height: 300px;
  }

</style>

<Container>
  <div class='row'>
    <div class='col s12'>
      <div class='card display'>
        <div class='card-content'>display</div>
      </div>
    </div>
  </div>

  <!-- Button table -->
  <div class='container center-align'>
    <table class='calc-body'>
      <tbody>

        <!-- Row 1 -->
        <tr>
          <Button label={mth.normal('2nd')} classes=' blue' w='4'/>
          <Button label={mth.normal('mode')} sec={mth.normal('quit')} classes=' black'/>
          <Button label={mth.normal('delete')} sec={mth.normal('insert')} classes=' black'/>
          <!-- Arrow Buttons -->
          <td colspan='2' rowspan='2' class='at-bottom-rel'>
            <div class='row at-bottom-abs'>
              <table>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <button class='waves-effect waves-light btn-small blue-grey'>
                        <i class='material-icons'>arrow_upward</i>
                      </button>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <button class='waves-effect waves-light btn-small blue-grey'>
                        <i class='material-icons'>arrow_back</i>
                      </button>
                    </td>
                    <td></td>
                    <td>
                      <button class='waves-effect waves-light btn-small blue-grey'>
                        <i class='material-icons'>arrow_forward</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button class='waves-effect waves-light btn-small blue-grey'>
                        <i class='material-icons'>arrow_downward</i>
                      </button>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>

        <!-- Row 2 -->
        <tr>
          <Button label='log'  sec='10^x' classes=' black'/>
          <Button label={mth.normal('prb')} sec={mth.normal('angle')} classes=' black'/>
          <Button label={mth.normal('data')} sec={mth.normal('stat')} classes=' black'/>
        </tr>

        <!-- Row 3 -->
        <tr>
          <Button label='ln' sec='e^x' classes=' black'/>
          <Button label='\frac nd' classes=' black'/>
          <Button label='\times 10^n' classes=' black'/>
          <Button label={mth.normal('table')} classes=' black'/>
          <Button label={mth.normal('clear')} classes=' black'/>
        </tr>

        <!-- Row 4 -->
        <tr>
          <Button label='\pi' sec={mth.normal('hyp')} classes=' black'/>
          <Button label={mth.sin('')} sec={mth.sin('') + mth.exp('-1')} classes=' black'/>
          <Button label={mth.cos('')} sec={mth.cos('') + mth.exp('-1')} classes=' black'/>
          <Button label={mth.tan('')} sec={mth.tan('') + mth.exp('-1')} classes=' black'/>
          <Button label='\div' classes=' blue-grey'/>
        </tr>

        <!-- Row 5 -->
        <tr>
          <Button icon='keyboard_arrow_up' sec={mth.polyroot('x','')} classes=' black'/>
          <Button label={'x' + mth.exp('-1')} classes=' black'/>
          <Button label='(' sec='\%' classes=' black'/>
          <Button label=')' sec='\rightarrow\%' classes=' black'/>
          <Button label='\times' classes=' blue-grey'/>
        </tr>

        <!-- Row 6 -->
        <tr>
          <Button label='x^2' sec={mth.sqrt('')} classes=' black'/>
          <Button label='7' classes=' grey'/>
          <Button label='8' classes=' grey'/>
          <Button label='9' classes=' grey'/>
          <Button label='-' classes=' blue-grey'/>
        </tr>

        <!-- Row 7 -->
        <tr>
          <Button label='x' sec={mth.normal('clear var')} classes=' black'/>
          <Button label='4' classes=' grey'/>
          <Button label='5' classes=' grey'/>
          <Button label='6' classes=' grey'/>
          <Button label='+' classes=' blue-grey'/>
        </tr>

        <!-- Row 8 -->
        <tr>
          <Button label={mth.normal('sto\\Rightarrow')} sec={mth.normal('recall')} classes=' black'/>
          <Button label='1' classes=' grey'/>
          <Button label='2' classes=' grey'/>
          <Button label='3' classes=' grey'/>
          <Button label={mth.normal('f\\Leftrightarrow d')} classes=' blue-grey'/>
        </tr>

        <!-- Row 9 -->
        <tr>
          <Button label={mth.normal('on')} sec={mth.normal('off')} classes=' black'/>
          <Button label='0' classes=' grey' sec={mth.normal('reset')}/>
          <Button label='.' classes=' grey' sec=','/>
          <Button label='(-)' classes=' grey' sec='ans'/>
          <Button label={mth.normal('enter')} classes=' blue-grey'/>
        </tr>

      </tbody>
    </table>
  </div>

</Container>