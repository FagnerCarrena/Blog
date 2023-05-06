import fotoCapa from 'assets/sobre_mim_capa.png';
import PostModelo from "componentes/PostModelo";
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/sobre_mim_foto.jpeg';

export default function SobreMim(){
return(
    <PostModelo fotoCapa={fotoCapa}  titulo="Sobre mim">
       <h3 className={styles.subtitulo}>Olá, eu sou Fagner</h3>
       <img src={fotoSobreMim} alt='fotosorrindo' className={styles.fotoSobreMim}/>
    <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Monitor de Back-end na Cubos Academy e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com a programação comecou quando a empresa que trabalhava fechou as portas devido a crise provocada pela covid 19, tive que sair minha zona de conforto e ir procurar ares novos, por incrivel que parece nesse contexto nao foi dificil achar a área de tecnologia.
            </p>
            <p className={styles.paragrafo}>
            No começou foi muito desafiador estudar programação, porém nunca pensei em desistir ate porque acabei mim identificando bastante, na verdade sou muito realizado por nao ter desisitido, mim esforcei bastante a ponto de ser convidado para ser Monitor, diga-se de passagem conseguir com essa oportunidade juntar duas coisas que adoro fazer, aprender e ensinar, isso pra mim é mágico.
            </p>
            <p className={styles.paragrafo}>
               Meu foco agora é encontrar uma oportunidade como desenvolvedor front end, back end ou até mesmo full stack, enquando isso continuo mim desenvolvedo, cada dia procurando fazer projetos novos, objetivando estar cada dia mais preparado para novos desafios.
            </p>
            


    </PostModelo>
)}