/* Classe Footer Padrão  */
/* Base do código 
 * https://www.youtube.com/watch?v=j5Sl6vx_l1s
 * https://css-tricks.com/an-introduction-to-web-components/
 */
class FooterCustom extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!-- footer -->
      <footer>
          <div class="container-footer">
              <div class="row-footer">
                  <!-- footer-col -->
                  <div class="footer-col">
                      <h4>Sobre Nós</h4>
                      <ul>
                          <li><a href="">Quem somos</a></li>
                          <li><a href="">Github</a></li>
                      </ul>
                  </div>
                  <!-- end footer-col -->
                  <!-- footer-col -->
                  <div class="footer-col">
                      <h4>Obter Ajuda</h4>
                      <ul>
                          <li><a href="">Bot</a></li>
                          <li><a href="">Telegram</a></li>
                      </ul>
                  </div>
                  <!-- end footer-col -->
                  <!-- footer-col -->
                  <div class="footer-col">
                      <h4>Sugestões</h4>
                      <!-- Form sub -->
                      <div class="form-sub">
                          <form

                              action="https://formsubmit.co/emailaqui"
                              method="POST"
                              class="form"
                              >
                              <label for="name">Nome</label>
                              <input type="text" name="name" id="name" placeholder="Digite seu nome" required />
                              <label for="email">E-mail</label>
                              <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required />
                              <label for="message">Mensagem</label>
                              <textarea name="message" id="message" required></textarea>
                              
                              <input
                                  type="hidden"
                                  name="_next"
                                  value="./Inicio/Index.html"
                              />
                              <button type="submit" id="button">Enviar</button>
                          </form>
                      </div>
                      <!-- end Form sub -->
              </div>
              <!-- end footer-col -->
              </div>
          </div>
      </footer>
      <!--x footer x-->`;
    }
  }

customElements.define('footer-custom', FooterCustom);