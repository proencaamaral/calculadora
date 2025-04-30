function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
              }
          })  
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta invalida !')
                    return;
                }
                this.display.value = String(conta)
            } catch(e) {
                alert('Conta invalida !');
                return;
            }
        },





        cliqueBotoes() {
            document.addEventListener('click',e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParadisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.display.value = '';
                }
                if (el.classList.contains('btn-del')) {
                    this.display.value = this.display.value.slice(0, -1);
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
         })
        },

         btnParadisplay(valor){
             this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();