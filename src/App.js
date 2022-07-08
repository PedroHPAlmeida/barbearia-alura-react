import About from './components/About';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Image from './components/Image';
import Localization from './components/Localization';
import Video from './components/Video';

function App() {

  const list = ['Atendimento aos clientes', 'Espaço diferenciado', 'Localização', 'Profissionais qualificados', 'Pontualidade', 'Limpeza'];

  return (
    <div className="App">
      <Banner image='/img/logo.png' alt='Logo Barbearia Alura'/>
      <Image image='/img/banner.jpg' alt='Imagem interna da Barbearia'></Image>
      <About
        image='/img/utensilios.jpg'
        alt='Utensílios de uma Barbearia'
        title='Sobre a Barbearia Alura'
        text1={'Localizada no coração da cidade a Barbearia Alura traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.'}
        text2='Nossa missão é: "Proporcionar auto-estima e qualidade de vida aos clientes".'
        text3='Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.'
      />
      <Localization title='Nosso Estabelecimento' text='Nosso estabelecimento está localizado no coração da cidade.'/>
      <Benefits title='Benefícios' list={list} image='/img/beneficios.jpg' alt='Benefícios da Barbearia Alura'/>
      <Video />
      <Footer
        image='/img/logo-branco.png'
        alt='Logo da Barbearia Alura branco'
        text='© Copyright Barbearia Alura - 2022'
      />
    </div>
  );
}

export default App;
