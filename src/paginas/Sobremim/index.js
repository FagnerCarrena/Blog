import fotoCapa from 'assets/sobre_mim_capa.png';
import PostModelo from "componentes/PostModelo";
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/fotos_astm.png';

export default function SobreMim(){
return(
    <PostModelo fotoCapa={fotoCapa}  titulo="INSTITUCIONAL">
       <h3 className={styles.subtitulo}>Olá, Seja bem vindo ao espaço destinado a ASTM</h3>
       <img src={fotoSobreMim} alt='fotosorrindo' className={styles.fotoSobreMim}/>
    <p className={styles.paragrafo}>
    Caros leitores,

É com grande entusiasmo que lhes apresentamos ASTM, uma organização dedicada a transformar e aprimorar a mobilidade urbana em nossas cidades. Em um mundo cada vez mais conectado e em constante movimento, reconhecemos a importância de criar soluções inteligentes e sustentáveis para os desafios que a mobilidade nas áreas urbanas enfrenta.            </p>
            <p className={styles.paragrafo}>
            ASTM nasceu da visão de um grupo de entusiastas comprometidos em fazer a diferença em nossas comunidades. Nós acreditamos que uma mobilidade eficiente é a base para uma cidade mais inclusiva, próspera e ambientalmente responsável. Nossa missão é fomentar o desenvolvimento de projetos e iniciativas que promovam uma mobilidade urbana mais inteligente, segura e acessível a todos.
            </p>
            <p className={styles.paragrafo}>
            Nossos valores fundamentais estão ancorados em:

Inovação e Tecnologia: Buscamos constantemente soluções inovadoras e o uso inteligente da tecnologia para enfrentar os desafios da mobilidade urbana. Desde aplicativos de compartilhamento de transporte até a integração de veículos elétricos e outras alternativas sustentáveis, buscamos estar na vanguarda da transformação digital nesse setor.

Sustentabilidade: Comprometemo-nos em promover práticas sustentáveis em todos os nossos projetos e ações. Acreditamos que a mobilidade urbana deve ser ambientalmente amigável, reduzindo as emissões de carbono e contribuindo para a construção de cidades mais verdes e habitáveis.

Acessibilidade: Trabalhamos arduamente para tornar a mobilidade acessível a todas as camadas da população. Nossa instituição defende o direito de cada indivíduo de se deslocar com dignidade e autonomia, independentemente de suas limitações ou condições financeiras.

Parcerias e Engajamento Comunitário: Sabemos que para alcançar mudanças significativas, é essencial trabalhar em conjunto com diversos setores da sociedade. Assim, colaboramos com empresas, governos locais, ONGs e a comunidade em geral para construir soluções abrangentes e eficazes.

Nossos principais programas incluem:

Educação para a Mobilidade: Promovemos campanhas educativas para conscientizar sobre a importância de práticas seguras e sustentáveis de mobilidade, incentivando o uso de bicicletas, transporte público e caronas solidárias.

Planejamento Urbano Sustentável: Desenvolvemos estudos e projetos que auxiliem no planejamento urbano para uma mobilidade mais eficiente, priorizando espaços para pedestres, ciclovias e integração entre diferentes meios de transporte.

Incentivo a Veículos Sustentáveis: Apoiamos a adoção de veículos elétricos e outras formas de transporte sustentáveis, bem como a criação de infraestrutura adequada para sua utilização.

Advocacia e Políticas Públicas: Atuamos junto aos órgãos governamentais para influenciar políticas públicas que incentivem uma mobilidade mais eficiente e amiga do meio ambiente.

Junte-se a nós em nossa jornada para criar cidades mais humanas, conectadas e sustentáveis. A mobilidade urbana é um desafio de todos, e sua participação é essencial para o sucesso dessa empreitada.

Saiba mais sobre ASTM e como você pode contribuir  entre em contato conosco pelo email.

Vamos construir juntos um futuro de mobilidade urbana mais inteligente e inspirador!

Atenciosamente,

Daniel Moura
            </p>
            
            


    </PostModelo>
)}