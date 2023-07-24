import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/astm.png'

export default function Banner(){
return (
<div className={styles.banner}>
    <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
Sejam bem vindo a ASTM!
 </h1>
    <p className={styles.paragrafo}>
    Associação de Apoio ao Sistema de Transporte e Mobilidade
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