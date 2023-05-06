import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpeg'

export default function Banner(){
return (
<div className={styles.banner}>
    <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
Ola, Mundo!
 </h1>
    <p className={styles.paragrafo}>
    Boas vindas ao meu espaço pessoal! Eu sou Fagner Carrena, Monitor de Back End na Cubos Academy. Aqui compartilho vários pensamentos, nao existe certo nem errado apenas ponto de vista, quero conhecer o seu também :)
    </p>
    </div>
    <div className={styles.imagens}>
<img 
className={styles.circuloColorido} 
src={circuloColorido} 
aria-hidden={true}
/>

<img className={styles.minhaFoto} src={minhaFoto} alt="fotodofaguindo"/>

    </div>
</div>

)

}